import React from 'react';

import { User, Picture, Name, Separator } from './styles';

const Participant: React.FC = ({ user }) => {
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
