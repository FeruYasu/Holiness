import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import socketio from 'socket.io-client';

import { TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  OwnerPicture,
  CommentsContainer,
  CommentButtonContainer,
  CommentInputContainer,
  CommentInput,
  CommentButton,
  CommentButtonText,
  Comment,
  CommentsList,
  ContentContainer,
  TopContent,
  CommentName,
  CommentContent,
  CommentActions,
  LikesCounter,
  AnswerActions,
  AnswerActionsText,
  CommentAnswer,
  CommentPicture,
  SendCommentButton,
  OpacityLayer,
} from './styles';

interface CommentsProps {
  sermonId?: string;
  testimonialId?: string;
}

const Comments: React.FC<CommentsProps> = ({ sermonId, testimonialId }) => {
  const { theme, user } = useAuth();
  const commentInputRef = useRef<TextInput>(null);

  const [comments, setComments] = useState();
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [reply, setReply] = useState('none');
  const [newComment, setNewComment] = useState();

  useEffect(() => {
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
  }, [sermonId, testimonialId]);

  const handleShowCommentInput = useCallback(() => {
    setReply('none');
    setShowCommentInput(!showCommentInput);
  }, [showCommentInput]);

  const handleShowAnswerInput = useCallback(
    (id) => {
      setReply(id);
      setShowCommentInput(!showCommentInput);
    },
    [showCommentInput]
  );

  useEffect(() => {
    commentInputRef.current?.focus();
  }, [showCommentInput]);

  const sendComment = useCallback(
    async (replyId) => {
      let newCommentary;

      if (replyId === 'none') {
        newCommentary = await api.post('comments', {
          content: newComment,
        });
      } else {
        newCommentary = await api.post('comments', {
          content: newComment,
          reply_of: replyId,
        });
      }

      if (sermonId) {
        await api.put('sermons/comments', {
          sermonId,
          commentId: newCommentary.data.id,
        });

        api.get(`sermons/comments/${sermonId}`).then((response) => {
          setComments(response.data);
        });
      }

      if (testimonialId) {
        await api.put('testimonials/comments', {
          testimonialId,
          commentId: newCommentary.data.id,
        });

        api.get(`testimonials/comments/${testimonialId}`).then((response) => {
          setComments(response.data);
        });
      }

      setShowCommentInput(!showCommentInput);
    },
    [newComment, sermonId, showCommentInput, testimonialId]
  );

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
      <Container>
        <CommentButtonContainer testimonial={!!testimonialId}>
          <OwnerPicture source={{ uri: user.avatar_url }} />
          <CommentButton onPress={handleShowCommentInput}>
            <CommentButtonText>Comentar como {user.name}</CommentButtonText>
          </CommentButton>
        </CommentButtonContainer>
        <CommentsList>
          {comments &&
            comments.map((comment) => {
              return (
                <CommentsContainer key={comment.id}>
                  <Comment>
                    <OwnerPicture source={{ uri: comment.user.avatar_url }} />
                    <ContentContainer>
                      <TopContent>
                        <CommentContent>
                          <CommentName>{comment.user.name} </CommentName>
                          {comment.content}
                        </CommentContent>
                      </TopContent>
                      <CommentActions>
                        <LikesCounter>1 curtida</LikesCounter>
                        <AnswerActions
                          onPress={() => {
                            handleShowAnswerInput(comment.id);
                          }}
                        >
                          <AnswerActionsText>responder</AnswerActionsText>
                        </AnswerActions>
                      </CommentActions>
                    </ContentContainer>
                    <Icon
                      name="thumbs-up"
                      size={20}
                      color={theme.colors.text}
                    />
                  </Comment>
                  {comment.replies.map((reply) => {
                    return (
                      <CommentAnswer key={reply.id}>
                        <CommentPicture
                          source={{ uri: reply.user.avatar_url }}
                        />
                        <ContentContainer>
                          <TopContent>
                            <CommentContent>
                              <CommentName>{reply.user.name} </CommentName>
                              {reply.content}
                            </CommentContent>
                          </TopContent>
                          <CommentActions>
                            <LikesCounter>1 curtida</LikesCounter>
                            <AnswerActions
                              onPress={() => {
                                handleShowAnswerInput(comment.id);
                              }}
                            >
                              <AnswerActionsText>responder</AnswerActionsText>
                            </AnswerActions>
                          </CommentActions>
                        </ContentContainer>
                        <Icon
                          name="thumbs-up"
                          size={20}
                          color={theme.colors.text}
                        />
                      </CommentAnswer>
                    );
                  })}
                </CommentsContainer>
              );
            })}
        </CommentsList>
      </Container>
      {showCommentInput && (
        <>
          <OpacityLayer onPress={handleShowCommentInput} />
          <CommentInputContainer>
            <OwnerPicture source={{ uri: user.avatar_url }} />
            <CommentInput
              placeholder={`Comentar como  ${user.name}...`}
              ref={commentInputRef}
              onChangeText={(text) => {
                setNewComment(text);
              }}
            />
            <SendCommentButton
              onPress={() => {
                sendComment(reply);
              }}
            >
              <Icon name="send" size={20} color={theme.colors.text} />
            </SendCommentButton>
          </CommentInputContainer>
        </>
      )}
    </>
  );
};

export default Comments;
