import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ArrowButton from './ArrowButton';
import typography from '../style/typography';
import commonStyle from '../style/commonStyle';
import {Image} from 'react-native';
import {COLORS} from '../consts/COLOR';

const MostPopular: React.FC = () => {
  const item = [
    {
      id: 1,
      Image: require('../assets/image/MP1.png'),
      like: 1780,
      badge: 'New',
    },
    {
      id: 2,
      Image: require('../assets/image/MP2.png'),
      like: 1780,
      badge: 'Sale',
    },
    {
      id: 3,
      Image: require('../assets/image/MP3.png'),
      like: 1780,
      badge: 'Hot',
    },
    {
      id: 4,
      Image: require('../assets/image/MP4.png'),
      like: 1780,
      badge: 'Hot',
    },
  ];
  return (
    <View>
      <View
        style={[
          commonStyle.flexDirectionRow,
          commonStyle.justifyContentSpaceB,
          commonStyle.mv5,
          commonStyle.ph20,
        ]}>
        <View>
          <Text style={[typography.textBold21, typography.Raleway]}>
            Most Popular
          </Text>
        </View>
        <View
          style={[commonStyle.flexDirectionRow, commonStyle.alignItemsCenter]}>
          <Text style={[typography.textBold21, typography.Raleway]}>
            See All
          </Text>
          <ArrowButton onPress={() => {}} />
        </View>
      </View>
      <View>
        <FlatList
          data={item}
          contentContainerStyle={{paddingLeft: 20, paddingVertical:10}}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginRight: 10,
                  shadowColor: COLORS.black,
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 1,
                  elevation: 5,
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  width: 113,
                }}>
                <View
                  style={{
                    height: 103,
                    width: 113,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={item.Image}
                    style={{height: 93, width: 103, borderRadius: 9}}
                  />
                </View>
                <View style={[commonStyle.flexDirectionRow, commonStyle.p5 , commonStyle.justifyContentSpaceB , commonStyle.alignItemsCenter]}>
                <Text style={[typography.Boldtext16, typography.Raleway]}>{item.like}💙</Text>
                <Text style={[typography.w500s12, typography.Raleway]}>{item.badge}</Text>
                  </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MostPopular;
