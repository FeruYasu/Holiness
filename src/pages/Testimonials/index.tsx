import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import socketio from 'socket.io-client';
import Header from '../../components/Header';
import api from '../../services/api';

import {
  Container,
  MainTitle,
  TestimonialsList,
  NewTestimonialContainer,
  ProfileImage,
  NewTestimonialButton,
  NewTestimonialText,
} from './styles';

import Testionial from '../../components/Testimonial';
import { useAuth } from '../../hooks/auth';

export interface ITestimonial {
  id: string;
  title: string;
  emoji1: string[];
  emoji2: string[];
  emoji3: string[];
  emoji4: string[];
  emoji5: string[];
  emoji6: string[];
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const navigation = useNavigation();

  const { user } = useAuth();

  const likeQuantity = useCallback(
    (emoji1, emoji2, emoji3, emoji4, emoji5, emoji6) => {
      let total = 0;
      if (emoji1) {
        total += emoji1.length;
      }
      if (emoji2) {
        total += emoji2.length;
      }
      if (emoji3) {
        total += emoji3.length;
      }
      if (emoji4) {
        total += emoji4.length;
      }
      if (emoji5) {
        total += emoji5.length;
      }
      if (emoji6) {
        total += emoji6.length;
      }
      return total;
    },
    []
  );

  useEffect(() => {
    api.get('testimonials').then((response) => {
      const data = response.data.map((info) => ({
        ...info,
        likeCounter: likeQuantity(
          info.emoji1,
          info.emoji2,
          info.emoji3,
          info.emoji4,
          info.emoji5,
          info.emoji6
        ),
      }));

      setTestimonials(data);
    });
  }, [likeQuantity]);

  const toogleScrollEnabled = useCallback(() => {
    setScrollEnabled(!scrollEnabled);
  }, [scrollEnabled]);

  const handleNewTestimonial = useCallback(() => {
    navigation.navigate('NewTestimonial');
  }, [navigation]);

  const socket = useMemo(() => {
    return socketio('http://157.245.249.184', {
      query: {
        user_id: user.id,
      },
    });
  }, [user.id]);

  useEffect(() => {
    socket.on('newTestimonial', () => {
      api.get('testimonials').then((response) => {
        const data = response.data.map((info) => ({
          ...info,
          likeCounter: likeQuantity(
            info.emoji1,
            info.emoji2,
            info.emoji3,
            info.emoji4,
            info.emoji5,
            info.emoji6
          ),
        }));

        setTestimonials(data);
      });
    });
  }, [socket, likeQuantity]);

  useEffect(() => {
    socket.on('emojiChange', ({ emoji, id, userId }) => {
      const foundTestimonialIndex = testimonials?.findIndex(
        (testimonial) => testimonial.id === id
      );
      if (foundTestimonialIndex !== -1) {
        const updatedTestimonial = [...testimonials];

        if (emoji === 1) {
          updatedTestimonial[foundTestimonialIndex].emoji1.push(userId);
        }
        if (emoji === 2) {
          updatedTestimonial[foundTestimonialIndex].emoji2.push(userId);
        }
        if (emoji === 3) {
          updatedTestimonial[foundTestimonialIndex].emoji3.push(userId);
        }
        if (emoji === 4) {
          updatedTestimonial[foundTestimonialIndex].emoji4.push(userId);
        }
        if (emoji === 5) {
          updatedTestimonial[foundTestimonialIndex].emoji5.push(userId);
        }
        if (emoji === 6) {
          updatedTestimonial[foundTestimonialIndex].emoji6.push(userId);
        }

        setTestimonials(updatedTestimonial);
      }
    });
  }, [socket, testimonials]);

  return (
    <Container>
      <TestimonialsList
        ListHeaderComponent={
          <>
            <Header />
            <MainTitle>Compartilhar</MainTitle>

            <NewTestimonialContainer>
              <ProfileImage source={{ uri: user.avatar_url }} />
              <NewTestimonialButton onPress={handleNewTestimonial}>
                <NewTestimonialText>
                  Gostaria de compartilhar algo hoje?
                </NewTestimonialText>
              </NewTestimonialButton>
            </NewTestimonialContainer>
          </>
        }
        data={testimonials}
        scrollEnabled={scrollEnabled}
        keyExtractor={(testimonial) => testimonial.id}
        renderItem={({ item: testimonial }) => (
          <Testionial
            data={testimonial}
            toogleScrollEnabled={() => {
              toogleScrollEnabled();
            }}
          />
        )}
      />
    </Container>
  );
};

export default Testimonials;
