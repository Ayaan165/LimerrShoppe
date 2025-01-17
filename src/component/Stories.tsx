import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, Touchable, TouchableOpacity} from 'react-native';
import commonStyle from '../style/commonStyle';
import typography from '../style/typography';
import Play from '../logo/Play.svg';
import { NavigationProp } from '@react-navigation/native';

interface StoriesProps {
navigation: NavigationProp<any>;
}

const Stories:React.FC<StoriesProps> = ({navigation}) => {
  const ImagePaths = [
    {id: 'S1', src: require('../assets/image/S1.png')},
    {id: 'S2', src: require('../assets/image/S2.png')},
    {id: 'S3', src: require('../assets/image/S3.png')},
    {id: 'S4', src: require('../assets/image/S4.png')},
    {id: 'S5', src: require('../assets/image/S1.png')},
    {id: 'S6', src: require('../assets/image/S2.png')},
    {id: 'S7', src: require('../assets/image/S3.png')},
    {id: 'S8', src: require('../assets/image/S4.png')},
    {id: 'S9', src: require('../assets/image/S1.png')},
    {id: 'S10', src: require('../assets/image/S2.png')},
    {id: 'S11', src: require('../assets/image/S3.png')},
  ];
  return (
    <View>
      <View style={[commonStyle.ph20, commonStyle.pv10]}>
        <Text style={[typography.textBold21, typography.Raleway]}>Stories</Text>
      </View>
      <View>
        <FlatList
          horizontal
          data={ImagePaths}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('StoryScreen')}
              style={{
                marginLeft: 6,
                height: 175,
                width: 104,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="cover"
                source={item.src}
                style={{height: 175, width: 104, borderRadius: 11}}
              />
              <Play style={{position: 'absolute'}} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Stories;
