import React from 'react';

import { User, Picture, Name, Separator } from './styles';

interface ParticipantProps {
  user: {
    avatar_url: string;
    name: string;
  };
}

const Participant: React.FC<ParticipantProps> = ({ user }) => {
  return (
    <>
      <User>
        <Picture source={{ uri: user.avatar_url }} />
        <Name>{user.name}</Name>
      </User>
      <Separator />
    </>
  );
};

export default Participant;
