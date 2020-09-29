import React, { useCallback, useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import roundLike from '../../assets/roundLike.png';
import roundHeart from '../../assets/roundHeart.png';
import roundWow from '../../assets/roundWow.png';
import roundHappy from '../../assets/roundHappy.png';
import roundSad from '../../assets/roundSad.png';
import roundAngry from '../../assets/roundAngry.png';

import {
  TestimonialContainer,
  HeaderContainer,
  TestimonialTitle,
  Content,
  TestimonialImage,
  TestimonialOwnerContainer,
  OwnerPicture,
  ColumnContainer,
  RowContainer,
  Name,
  RightArrow,
  TestimonialMinistry,
  Date,
  CommentsButton,
  EmojisContainer,
  EmojiButton,
  EmojiImage,
  CommentsText,
  Counter,
  Separator,
  ButtonsContainer,
  LikeButton,
  LikeButtonContainer,
  LikeButtonText,
  CommentButton,
  CommentButtonText,
  LikeContainer,
  Emoji,
} from './styles';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

export interface Testimonial {
  id: string;
  title: string;
  content: string;
  photo_url: string;
  likeCounter: number;
  user: { avatar_url: string };
  emoji1: string[];
  emoji2: string[];
  emoji3: string[];
  emoji4: string[];
  emoji5: string[];
  emoji6: string[];
}

interface TestimonialProps {
  data: Testimonial;
}

interface IEmojiKeys {
  emoji1: string[];
  emoji2: string[];
  emoji3: string[];
  emoji4: string[];
  emoji5: string[];
  emoji6: string[];
}

const Testimonial: React.FC<TestimonialProps> = ({ data }) => {
  const [testimonial, setTestimonial] = useState<Testimonial>({
    user: {
      avatar_url: 'none',
    },
  } as Testimonial);
  const { user, theme } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const [showEmojis, setShowEmojis] = useState('');

  useEffect(() => {
    setTestimonial(data);

    for (let key = 1; key <= 6; key += 1) {
      const emojiKey: keyof IEmojiKeys = `emoji${key}`;
      const foundEmoji = data[emojiKey].findIndex((element) => {
        return element === user.id;
      });

      if (foundEmoji !== -1) {
        setIsLiked(true);
        key = 7;
      } else {
        setIsLiked(false);
      }
    }
  }, [data, user.id]);

  const toogleEmoji = useCallback(
    async (testimonialId, emojiNumber) => {
      setShowEmojis('');
      await api.put(`/testimonials/emoji/${testimonialId}`, {
        emoji: emojiNumber,
      });

      const newTestionial = testimonial;

      const emojiKey = `emoji${emojiNumber}`;
      newTestionial.likeCounter += 1;
      newTestionial[emojiKey] = [...newTestionial[emojiKey], user.id];

      setTestimonial(newTestionial);
      setIsLiked(true);
    },
    [testimonial, user.id]
  );

  const handleLike = useCallback(
    (id: string) => {
      let open = id;
      if (showEmojis === id) {
        open = '';
      }
      setShowEmojis(open);
    },
    [showEmojis]
  );

  const removeLike = useCallback(
    async (id: string) => {
      await api.delete(`/testimonials/emoji/${id}`);

      const newTestionial = testimonial;

      for (let key = 1; key <= 6; key += 1) {
        const emojiKey = `emoji${key}`;
        const removeIndex = newTestionial[emojiKey].findIndex((element) => {
          return element === user.id;
        });

        if (removeIndex !== -1) {
          newTestionial[emojiKey].splice(removeIndex, 1);
          break;
        }
      }

      newTestionial.likeCounter -= 1;
      setTestimonial(newTestionial);
      setIsLiked(false);
    },
    [testimonial, user.id]
  );

  return (
    <TestimonialContainer>
      <HeaderContainer>
        <TestimonialOwnerContainer>
          <OwnerPicture source={{ uri: testimonial.user.avatar_url }} />
          <ColumnContainer>
            <RowContainer>
              <Name>Fernando Yasumoto</Name>
              <RightArrow>▶</RightArrow>
              <TestimonialMinistry>Minarai</TestimonialMinistry>
            </RowContainer>

            <Date>05 de set de 2020 às 12:35</Date>
          </ColumnContainer>
        </TestimonialOwnerContainer>
        <TestimonialTitle>{testimonial.title}</TestimonialTitle>
        <Content>{testimonial.content}</Content>
      </HeaderContainer>

      {testimonial.photo_url && (
        <TestimonialImage source={{ uri: testimonial.photo_url }} />
      )}
      <CommentsButton>
        <EmojisContainer>
          {testimonial.likeCounter > 0 && (
            <>
              {testimonial.emoji1?.length > 0 && (
                <EmojiImage source={roundLike} />
              )}
              {testimonial.emoji2?.length > 0 && (
                <EmojiImage source={roundHeart} />
              )}
              {testimonial.emoji3?.length > 0 && (
                <EmojiImage source={roundHappy} />
              )}
              {testimonial.emoji4?.length > 0 && (
                <EmojiImage source={roundWow} />
              )}
              {testimonial.emoji5?.length > 0 && (
                <EmojiImage source={roundSad} />
              )}
              {testimonial.emoji6?.length > 0 && (
                <EmojiImage source={roundAngry} />
              )}
              <Counter>{testimonial.likeCounter}</Counter>
            </>
          )}
        </EmojisContainer>

        <CommentsText>7 comentários</CommentsText>
      </CommentsButton>
      <Separator />

      {showEmojis === testimonial.id && (
        <LikeContainer>
          <EmojiButton
            onPress={() => {
              toogleEmoji(testimonial.id, 1);
            }}
          >
            <Emoji source={roundLike} />
          </EmojiButton>
          <EmojiButton
            onPress={() => {
              toogleEmoji(testimonial.id, 2);
            }}
          >
            <Emoji source={roundHeart} />
          </EmojiButton>
          <EmojiButton
            onPress={() => {
              toogleEmoji(testimonial.id, 3);
            }}
          >
            <Emoji source={roundHappy} />
          </EmojiButton>
          <EmojiButton
            onPress={() => {
              toogleEmoji(testimonial.id, 4);
            }}
          >
            <Emoji source={roundWow} />
          </EmojiButton>
          <EmojiButton
            onPress={() => {
              toogleEmoji(testimonial.id, 5);
            }}
          >
            <Emoji source={roundSad} />
          </EmojiButton>
          <EmojiButton
            onPress={() => {
              toogleEmoji(testimonial.id, 6);
            }}
          >
            <Emoji source={roundAngry} />
          </EmojiButton>
        </LikeContainer>
      )}

      <ButtonsContainer>
        {isLiked ? (
          <LikeButton
            onPress={() => {
              removeLike(testimonial.id);
            }}
          >
            <LikeButtonContainer>
              <Icon name="thumbs-up" size={18} color="#497ae9" />
              <LikeButtonText isLiked>Curtir</LikeButtonText>
            </LikeButtonContainer>
          </LikeButton>
        ) : (
          <LikeButton
            onPress={() => {
              handleLike(testimonial.id);
            }}
          >
            <LikeButtonContainer>
              <Icon
                name="thumbs-up"
                size={18}
                color={theme.colors.headerBackground}
              />
              <LikeButtonText isLiked={false}>Curtir</LikeButtonText>
            </LikeButtonContainer>
          </LikeButton>
        )}

        <CommentButton>
          <Icon
            name="message-square"
            size={18}
            color={theme.colors.headerBackground}
          />
          <CommentButtonText>Comentar</CommentButtonText>
        </CommentButton>
      </ButtonsContainer>
    </TestimonialContainer>
  );
};

export default Testimonial;
