import React from 'react';
import { Image, View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';

interface PhotoFrameProps {
  size: number;
  url: any;
  style?: ViewStyle;
}

const PhotoFrame: React.FC<PhotoFrameProps> = ({ size, url, style }) => {
  return (
    <View
      style={[
        {
          height: size + 8,
          width: size + 8,
          borderRadius: 1000,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 2,
          marginVertical:3,
        },
        style,
      ]}
    >
      <Image
        source={url}
        style={{ height: size, width: size, borderRadius: 1000 }}
        resizeMode="cover"
      />
    </View>
  );
};

const ClickablePhotoFrame: React.FC<PhotoFrameProps> = ({ size, url, style }) => {
  return (
    <TouchableOpacity
      style={[
        {
          height: size + 8,
          width: size + 8,
          borderRadius: 1000,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 2,
          marginVertical:3,
        },
        style,
      ]}
    >
      <Image
        source={url}
        style={{ height: size, width: size, borderRadius: 1000 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default PhotoFrame;
export { ClickablePhotoFrame };