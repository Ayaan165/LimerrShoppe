import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Play from '../logo/Play.svg';

interface StoryCardProps {
  title: string;
  description: string;
  imageUrl: any; // Use 'any' type to accommodate the require statement
  uri?: string; // Optional URI for remote images
}

const StoryCard: React.FC<StoryCardProps> = ({ title, description, imageUrl, uri }) => {
  return (
    <View style={{ marginLeft: 6, height: 175, width: 104, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        resizeMode="cover"
        source={uri ? { uri } : imageUrl}
        style={{ height: 175, width: 104, borderRadius: 11 }}
      />
      <Play style={{ position: 'absolute' }} />
    </View>
  );
};

export default StoryCard;