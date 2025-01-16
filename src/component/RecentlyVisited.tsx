import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import PhotoFrame, {ClickablePhotoFrame} from './PhotoFrame';
import commonStyle from '../style/commonStyle';
import typography from '../style/typography';

const RecentlyVisited = () => {
  const DATA = [
    {id: 1, image: require('../assets/image/RV1.png')},
    {id: 2, image: require('../assets/image/RV2.png')},
    {id: 3, image: require('../assets/image/RV3.png')},
    {id: 4, image: require('../assets/image/RV4.png')},
    {id: 5, image: require('../assets/image/RV5.png')},
    {id: 6, image: require('../assets/image/RV2.png')},
  ];
  return (
    <View>
      <View style={[commonStyle.ml20]}>
        <Text
          style={[
            typography.textBold21,
            typography.Raleway,
            // commonStyle.mt15,
            commonStyle.mb5,
          ]}>
          Recently viewed
        </Text>
      </View>
      <View style={[commonStyle.flexDirectionRow, commonStyle.flex1,]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingVertical:10, paddingLeft:10}}>
          {DATA.map((item, index) => (
            <ClickablePhotoFrame url={item.image} size={60}  style={{marginLeft:10}}/>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default RecentlyVisited;
