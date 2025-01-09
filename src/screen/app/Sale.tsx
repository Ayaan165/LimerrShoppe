import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Bubbles from '../../logo/Bubbles.svg';
import Timer from '../../component/Timer';
import commonStyle, {windowHeight, windowWidth} from '../../style/commonStyle';
import typography from '../../style/typography';
import Selector from '../../component/Selector';
import {Image} from 'react-native';
import Discount from '../../component/Discount';
import Onlyproduct from '../../component/Onlyproduct';
import MostPopular from '../../component/MostPopular.';

const Sale = () => {
  return (
    <SafeAreaView style={styles.container}>
    {/* <StatusBar hidden/> */}
      <ScrollView style={{height:windowHeight, width:windowWidth , flex:1}}>
        <Bubbles style={{position: 'absolute', top: 0, right: 0}} />
        <View
          style={[
            commonStyle.alignItemsCenter,
            commonStyle.flexDirectionRow,
            commonStyle.justifyContentSpaceB,
            commonStyle.mh20,
          ]}>
          <View style={{width: '50%'}}>
            <Text style={[typography.textBold28, typography.Raleway]}>
              Flash Sale
            </Text>
            <Text style={[typography.w500s15, typography.Raleway]}>
              Choose Your Discount
            </Text>
          </View>
          <View>
            <Timer />
          </View>
        </View>
        <View>
          <Selector />
          <Image
            source={require('../../assets/image/BANNER1.png')}
            resizeMode="cover"
            style={{
              width: windowWidth - 40,
              height: 180,
              alignSelf: 'center',
              borderColor: '#E9E5E5',
              borderWidth: 1,
              borderRadius: 13,
            }}
          />
          <Discount />
          <Image
            source={require('../../assets/image/BANNER3.png')}
            resizeMode="stretch"
            style={{
              width: windowWidth - 40,
              // height:'auto',
              alignSelf: 'center',
              borderColor: '#E9E5E5',
              borderWidth: 1,
              borderRadius: 13,
            }}
          />
          <Onlyproduct limit={2}/>
          <MostPopular/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    // backgroundColor: '#fff',
  },
});

export default Sale;
