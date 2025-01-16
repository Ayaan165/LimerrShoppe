import React from 'react';
import {View, Text, StyleSheet,Image, ScrollView} from 'react-native';
import typography from '../style/typography';
import {ClickablePhotoFrame} from './PhotoFrame';


const TopProducts = () => {
    const topProducts = [
        {id:1, name: 'Product 1', image: require('../assets/image/TP1.png')},
        {id:2, name: 'Product 2', image: require('../assets/image/TP2.png')},
        {id:3, name: 'Product 3', image: require('../assets/image/TP3.png')},
        {id:4, name: 'Product 4', image: require('../assets/image/TP4.png')},
        {id:5, name: 'Product 5', image: require('../assets/image/TP1.png')},
        {id:6, name: 'Product 6', image: require('../assets/image/TP2.png')},
    ]
  return (
    <View style={{}}>
      <View style={{marginHorizontal: 20}}>
        <Text style={[typography.textBold21, typography.Raleway]}>
          Top Products
        </Text>
      </View>
      <ScrollView  horizontal style={{paddingHorizontal: 20 , paddingVertical: 10}} showsHorizontalScrollIndicator={false}>
        {topProducts.map((item, index) => (
              <ClickablePhotoFrame
              size={60}
              url={item.image}
              style={{marginLeft: 10}}
              key={index}
            />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TopProducts;
