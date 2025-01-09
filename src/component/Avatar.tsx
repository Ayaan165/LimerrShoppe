import React from 'react';
import {Image, View} from 'react-native';

interface AvatarProps {}

const Avatar: React.FC<AvatarProps> = () => {
  return (
    <View
      style={{
        height: 125,
        width: 125,
        borderRadius: 65,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
      }}>
      <Image
        source={require('../assets/image/avatar.jpeg')}
        style={{
          height: 110,
          width: 110,
          borderRadius: 55,
          //   marginBottom: 10,
        }}
      />
    </View>
  );
};

export default Avatar;
