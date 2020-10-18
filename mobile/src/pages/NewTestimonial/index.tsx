import React, {
  useCallback,
  useState,
  ReactText,
  useMemo,
  useEffect,
} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import socketio from 'socket.io-client';

import 'react-native-get-random-values';

import { Alert } from 'react-native';
import { v1 as uuidv1 } from 'uuid';

import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import { Picker } from '@react-native-community/picker';

import api from '../../services/api';

import {
  Container,
  Header,
  LeftContainer,
  BackButton,
  Title,
  PublishButton,
  PublishButtonText,
  ContentContainer,
  TestimonialOwnerContainer,
  OwnerPicture,
  ColumnContainer,
  RowContainer,
  Name,
  TestimonialInput,
  TestimonialImage,
  ButtonsContainer,
  PhotoButton,
  PhotoButtonText,
} from './styles';
import { useAuth } from '../../hooks/auth';

interface Filter {
  name: ReactText;
}

const NewTestimonial: React.FC = () => {
  const navigation = useNavigation();
  const [testimonial, setNewTestimonial] = useState('Testemunho');
  const [testimonialImage, setTestimonialImage] = useState();
  const [title, setTitle] = useState([
    { name: 'Testemunho' },
    { name: 'Pedido de oração' },
  ]);

  const [imageData, setImageData] = useState();

  const [testimonialTitle, setTestimonialTitle] = useState<Filter>({
    name: '',
  });

  const { theme, user } = useAuth();

  const handlePreparePhoto = useCallback(() => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione uma foto',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar câmera',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
      },
      (response) => {
        if (response.didCancel) {
          return;
        }
        if (response.error) {
          Alert.alert('Erro ao escolher a foto');
          return;
        }

        const data = new FormData();

        data.append('photo', {
          type: 'image/jpeg',
          name: `${uuidv1()}${user.id}.jpg`,
          uri: response.uri,
        });

        setImageData(data);
        setTestimonialImage(response.uri);
      }
    );
  }, [user.id]);

  const handlePublish = useCallback(() => {
    api
      .post('/testimonials', {
        title: testimonialTitle.name,
        content: testimonial,
        ministry_id: 'b515040d-70a4-4efb-ade8-48c277273e1f',
      })
      .then((response) => {
        api.patch(`/testimonials/photo/${response.data.id}`, imageData);
      });
  }, [testimonial, testimonialTitle.name, imageData]);

  const socket = useMemo(() => {
    return socketio('http://192.168.86.24:3333', {
      query: {
        user_id: user.id,
      },
    });
  }, [user.id]);

  useEffect(() => {
    socket.on('newTestimonialComment', () => {
      if (sermonId) {
        api.get(`sermons/comments/${sermonId}`).then((response) => {
          setComments(response.data);
        });
      }
      if (testimonialId) {
        api.get(`testimonials/comments/${testimonialId}`).then((response) => {
          setComments(response.data);
        });
      }
    });
  }, [socket, sermonId, testimonialId]);

  return (
    <>
      <Header>
        <LeftContainer>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon
              name="chevron-left"
              size={30}
              color={theme.colors.darkerGreyText}
            />
          </BackButton>
          <Title>Testemunho</Title>
        </LeftContainer>

        <PublishButton
          disabled={!testimonial}
          isDisabled={!!testimonial}
          onPress={handlePublish}
        >
          <PublishButtonText>PUBLICAR</PublishButtonText>
        </PublishButton>
      </Header>

      <Container>
        <ContentContainer>
          <TestimonialOwnerContainer>
            <OwnerPicture source={{ uri: user.avatar_url }} />
            <ColumnContainer>
              <RowContainer>
                <Name>{user.name}</Name>
                <Picker
                  selectedValue={testimonialTitle.name}
                  style={{
                    height: 20,
                    width: 200,
                  }}
                  onValueChange={(itemValue) => {
                    setTestimonialTitle({ name: itemValue });
                  }}
                >
                  {title.map((t) => (
                    <Picker.Item key={t.name} label={t.name} value={t.name} />
                  ))}
                </Picker>
              </RowContainer>
            </ColumnContainer>
          </TestimonialOwnerContainer>
          <TestimonialInput
            placeholder="O que você gostaria de compartilhar?"
            multiline
            onChangeText={(text) => {
              setNewTestimonial(text);
            }}
          />
        </ContentContainer>
        <TestimonialImage source={{ uri: testimonialImage }} />
        <ButtonsContainer>
          <PhotoButton onPress={handlePreparePhoto}>
            <Icon name="image" size={30} color={theme.colors.darkerGreyText} />
            <PhotoButtonText>Adicionar Foto</PhotoButtonText>
          </PhotoButton>
          <PhotoButton>
            <Icon name="image" size={30} color={theme.colors.darkerGreyText} />
            <PhotoButtonText>Marcar amigos</PhotoButtonText>
          </PhotoButton>
          <PhotoButton>
            <Icon name="image" size={30} color={theme.colors.darkerGreyText} />
            <PhotoButtonText>Sentimento</PhotoButtonText>
          </PhotoButton>
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default NewTestimonial;
