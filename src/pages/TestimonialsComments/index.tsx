import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import Comments from '../../components/Comments';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  LeftContainer,
  BackButton,
  Title,
  TestimonialContentContainer,
  Content,
  OwnerPicture,
  ContentContainer,
  CommentName,
  Separator,
} from './styles';

interface Testimonial {
  testimonial: {
    id: string;
  };
}

const TestimonialsComments: React.FC = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { testimonial } = route.params as Testimonial;

  const { theme } = useAuth();

  return (
    <Container>
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
          <Title>Comentários</Title>
        </LeftContainer>
      </Header>
      <TestimonialContentContainer>
        <OwnerPicture source={{ uri: testimonial.user.avatar_url }} />
        <ContentContainer>
          <CommentName>{testimonial.user.name} </CommentName>
          <Content>{testimonial.content}</Content>
        </ContentContainer>
      </TestimonialContentContainer>
      <Separator />
      <Comments testimonialId={testimonial.id} />
    </Container>
  );
};

export default TestimonialsComments;
