import React from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

interface AvatarProps {
  size?: number;
  imageSource?: ImageSourcePropType;
  backgroundColor?: string;
  style?: ViewStyle;
}

const Avatar: React.FC<AvatarProps> = ({
  size = 125,
  imageSource = require('../assets/image/avatar.jpeg'),
  backgroundColor = 'white',
  style,
}) => {
  const innerSize = size - 15;

  return (
    <TouchableOpacity
      style={[
        styles.outerCircle,
        {
          height: size,
          width: size,
          borderRadius: size / 2,
          backgroundColor,
        },
        style,
      ]}>
      <Image
        source={imageSource}
        style={{
          height: innerSize,
          width: innerSize,
          borderRadius: innerSize / 2,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default Avatar;
