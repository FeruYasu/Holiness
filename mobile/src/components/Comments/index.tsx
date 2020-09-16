import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
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
  sermonId: string;
}

const Comments: React.FC<CommentsProps> = ({ sermonId }) => {
  const { theme, user } = useAuth();
  const commentInputRef = useRef<TextInput>(null);

  const [comments, setComments] = useState();
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [newComment, setNewComment] = useState();

  useEffect(() => {
    api.get(`sermons/comments/${sermonId}`).then((response) => {
      setComments(response.data);
    });
  }, [sermonId]);

  const handleShowCommentInput = useCallback(() => {
    setShowCommentInput(!showCommentInput);
  }, [showCommentInput]);

  useEffect(() => {
    commentInputRef.current?.focus();
  }, [showCommentInput]);

  const sendComment = useCallback(async () => {
    const newCommentary = await api.post('comments', {
      content: newComment,
    });

    await api.put('sermons/comments', {
      sermonId,
      commentId: newCommentary.data.id,
    });

    api.get(`sermons/comments/${sermonId}`).then((response) => {
      setComments(response.data);
    });
    setShowCommentInput(!showCommentInput);
  }, [newComment, sermonId, showCommentInput]);

  return (
    <>
      <Container>
        <CommentButtonContainer>
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
                        <AnswerActions>
                          <AnswerActionsText>responder</AnswerActionsText>
                        </AnswerActions>
                      </CommentActions>
                    </ContentContainer>
                    <Icon
                      name="thumbs-up-outline"
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
                              <CommentName>Fernando Yasumoto </CommentName>
                              {reply.content}
                            </CommentContent>
                          </TopContent>
                          <CommentActions>
                            <LikesCounter>1 curtida</LikesCounter>
                            <AnswerActions>
                              <AnswerActionsText>responder</AnswerActionsText>
                            </AnswerActions>
                          </CommentActions>
                        </ContentContainer>
                        <Icon
                          name="thumbs-up-outline"
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
              placeholder={`Comentar como ${user.name}...`}
              ref={commentInputRef}
              onChangeText={(text) => {
                setNewComment(text);
              }}
            />
            <SendCommentButton onPress={sendComment}>
              <Icon name="send" size={20} color={theme.colors.text} />
            </SendCommentButton>
          </CommentInputContainer>
        </>
      )}
    </>
  );
};

export default Comments;
