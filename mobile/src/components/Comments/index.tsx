import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  OwnerPicture,
  CommentsContainer,
  Comment,
  CommentsList,
  ContentContainer,
  TopContent,
  CommentName,
  CommentContent,
  CommentActions,
  LikesCounter,
  AnswerActions,
  CommentAnswer,
  CommentPicture,
} from './styles';

interface CommentsProps {
  sermonId: string;
}

const Comments: React.FC<CommentsProps> = ({ sermonId }) => {
  const { theme } = useAuth();

  const [comments, setComments] = useState();

  useEffect(() => {
    api.get(`sermons/comments/${sermonId}`).then((response) => {
      console.log(response.data);
      setComments(response.data);
    });
  }, [sermonId]);

  return (
    <Container>
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
                      <AnswerActions>responder</AnswerActions>
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
                      <CommentPicture source={{ uri: reply.user.avatar_url }} />
                      <ContentContainer>
                        <TopContent>
                          <CommentContent>
                            <CommentName>Fernando Yasumoto </CommentName>
                            {reply.content}
                          </CommentContent>
                        </TopContent>
                        <CommentActions>
                          <LikesCounter>1 curtida</LikesCounter>
                          <AnswerActions>responder</AnswerActions>
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
  );
};

export default Comments;
