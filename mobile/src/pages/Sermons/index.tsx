import React, { useEffect, useState, ReactText, useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-community/picker';
import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  MainTitle,
  SermonsList,
  TitleContainer,
  PreacherPicture,
  SermonContainer,
  TextContent,
  Description,
  SermonPhoto,
  InfoContainer,
  Title,
  TagsContainer,
  Tag,
  TagText,
} from './styles';

export interface Sermon {
  id: string;
  photoUrl: string;
  preacher: {
    avatar_url: string;
    name: string;
  };
  title: string;
  description: string;
  video_url: string;
}

interface Filter {
  filter: ReactText;
}

interface Tag {
  name: string;
}

const Sermons: React.FC = () => {
  const [sermons, setSermons] = useState<Sermon[]>();
  const { navigate } = useNavigation();
  const [tags, setTags] = useState<Tag[]>([{ name: '' }]);
  const [tagFilter, setTagFilter] = useState<Filter>({ filter: '' });

  useEffect(() => {
    api.get('sermons').then((response) => {
      setSermons(response.data);
    });

    api.get('tags').then((response) => {
      setTags(response.data);
    });
  }, []);

  const handleFilterChange = useCallback((itemValue) => {
    api
      .get('sermons', {
        params: {
          tag: itemValue,
        },
      })
      .then((response) => {
        setSermons(response.data);
      });
  }, []);

  return (
    <Container>
      <SermonsList
        ListHeaderComponent={
          <>
            <Header />

            <TitleContainer>
              <MainTitle>Pregações</MainTitle>

              <Picker
                selectedValue={tagFilter.filter}
                style={{
                  marginTop: 16,
                  width: 200,
                  marginRight: 16,
                  textAlign: 'right',
                }}
                onValueChange={(itemValue, itemIndex) => {
                  setTagFilter({ filter: itemValue });
                  handleFilterChange(itemValue);
                }}
              >
                {tags.map((tag) => (
                  <Picker.Item
                    key={tag.name}
                    label={tag.name}
                    value={tag.name}
                  />
                ))}
              </Picker>
            </TitleContainer>
          </>
        }
        data={sermons}
        keyExtractor={(sermon) => sermon.id}
        renderItem={({ item: sermon }) => (
          <>
            <SermonContainer
              onPress={() => {
                navigate('SingleSermon', sermon);
              }}
            >
              <InfoContainer>
                <PreacherPicture source={{ uri: sermon.preacher.avatar_url }} />
                <TextContent>
                  <Title>{sermon.title}</Title>
                  <Description>{sermon.description}</Description>
                </TextContent>
              </InfoContainer>
              <SermonPhoto source={{ uri: sermon.photoUrl }} />
            </SermonContainer>
            <TagsContainer>
              {sermon.tags.map((tag) => (
                <Tag key={tag.name}>
                  <TagText> {tag.name}</TagText>
                </Tag>
              ))}
            </TagsContainer>
          </>
        )}
      />
    </Container>
  );
};

export default Sermons;
