import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';
import typography from '../style/typography';
import commonStyle from '../style/commonStyle';
import ArrowButton from './ArrowButton';
import { COLORS } from '../consts/COLOR';

const Discover = () => {
  const NewItems = [
    {
      id: 'NI1',
      src: require('../assets/image/NI1.png'),
      details: 'Lorem ipsum dolor sit amet consectetur.',
      price: '$17,00',
    },
    {
      id: 'NI2',
      src: require('../assets/image/NI2.png'),
      details: 'Lorem ipsum dolor sit amet consectetur.',
      price: '$32,00',
    },
    {
      id: 'NI3',
      src: require('../assets/image/NI3.png'),
      details: 'Lorem ipsum dolor sit amet consectetur.',
      price: '$21,00',
    },
  ];
  return (
    <View style={[commonStyle.pv10]}>
      <View
        style={[
          commonStyle.flexDirectionRow,
          commonStyle.justifyContentSpaceB,
          commonStyle.mv10,
        //   commonStyle.ph20,
        ]}>
        <View>
          <Text style={[typography.textBold21, typography.Raleway]}>
            Discover
          </Text>
        </View>
      </View>
      <View>
        <FlatList
            showsHorizontalScrollIndicator={false}
          horizontal
          data={NewItems}
          renderItem={({item}) => (
            <View
              style={{
                width: 140,
                marginLeft: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 140,
                  width: 140,
                  borderRadius: 15,
                  elevation: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.white,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 2,
                }}>
                <Image
                  resizeMode="cover"
                  source={item.src}
                  style={{height: 130, width: 130, borderRadius: 13}}
                />
              </View>
              <View style={{marginTop: 7, gap: 5}}>
                <Text style={[typography.w400s12, typography.Nunito]}>
                  {item.details}
                </Text>
                <Text
                  style={[{fontWeight: 700, fontSize: 17}, typography.Raleway]}>
                  {item.price}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Discover;
