import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';

import { Container, MainTitle, TestimonialsList } from './styles';

import Testionial from '../../components/Testimonial';

export interface ITestimonial {
  id: string;
  title: string;
  emoji1: string[];
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>();
  const [scrollEnabled, setScrollEnabled] = useState(true);

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

  return (
    <Container>
      <TestimonialsList
        ListHeaderComponent={
          <>
            <Header />
            <MainTitle>Compartilhar</MainTitle>
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
