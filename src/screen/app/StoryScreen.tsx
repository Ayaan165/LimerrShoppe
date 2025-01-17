// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const StoryScreen: React.FC = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.upperView}>

//       </View>
//       <View style={styles.lowerView}>

//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   upperView:{
//     flex:9,
//     backgroundColor:'red'
//   },
//   lowerView:{
//     flex:1,
//     backgroundColor:'green'
//   }
// });

// export default StoryScreen;

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Alert,
  SafeAreaView,
  Image,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {windowWidth, windowHeight} from '../../style/commonStyle';
import {COLORS} from '../../consts/COLOR';
import typography from '../../style/typography';
import {TouchableButton} from '../../component/Button';
import GestureRecognizer from 'react-native-swipe-gestures';
import { NavigationProp } from '@react-navigation/native';

interface StoryScreenProps{
  navigation: NavigationProp<any>;
}

// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const StoryScreen: React.FC<StoryScreenProps> = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bottomTabHeight = useBottomTabBarHeight();
  const usableHeight = windowHeight - bottomTabHeight;
  // Sample slides
  const slides = [
    {
      id: 1,
      content: (
        <View
          style={{
            width: screenWidth - 40,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 3, height: 3},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            padding: 10,
          }}>
          <Image
            resizeMode="cover"
            source={require('../../assets/image/STORY1.png')}
            style={{height: '100%', width: '100%', borderRadius: 20}}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: 23,
              height: 23,
              backgroundColor: COLORS.primaryButton,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: COLORS.white,
              borderWidth: 2,
              top: 265,
              left: 180,
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              // bottom: 20,
              width: 23,
              height: 23,
              backgroundColor: COLORS.white,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: COLORS.primaryButton,
              borderWidth: 2,
              top: 380,
              left: 330,
              zIndex: 1,
            }}></TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              top: 390,
              left: 200,
              backgroundColor: 'white',
              borderRadius: 13,
              padding: 7,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/image/ITEM_MINI.png')}
              resizeMode="cover"
              style={{
                height: 130,
                width: 130,
                borderRadius: 10,
                // top: 370,
                // left: 195,
              }}
            />
            <TouchableOpacity
              style={{
                width: '100%',
                backgroundColor: COLORS.primaryButton,
                height: 30,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 7,
              }}>
              <Text
                style={[
                  typography.regulartext15,
                  typography.Nunito,
                  {color: COLORS.white},
                ]}>
                Shop
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ),
    },
    {
      id: 2,
      content: (
        <View
          style={{
            width: screenWidth - 40,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 3, height: 3},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            padding: 10,
          }}>
          <Image
            resizeMode="cover"
            source={require('../../assets/image/STORY2.png')}
            style={{height: '85%', width: '100%', borderRadius: 20}}
          />
          <View
            style={{
              height: '15%',
              width: '100%',
              flexDirection: 'row',
              paddingVertical: 20,
              padding: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: 0,
            }}>
            <View style={{width: '60%'}}>
              <Text
                style={[
                  typography.w500s12,
                  typography.Nunito,
                  {width: 'auto'},
                ]}>
                Lorem ipsum dolor sit amet{`\n`}, consectetur adipiscing elit.
              </Text>
            </View>
            <View style={{width: '40%'}}>
              <TouchableButton
                title="Shop"
                style={{width: '100%'}}
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
      ),
    },
    {
      id: 3,
      content: (
        <View
          style={{
            width: screenWidth - 40,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 3, height: 3},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            padding: 10,
            gap: 3,
          }}>
          <Image
            resizeMode="cover"
            source={require('../../assets/image/STORY1.png')}
            style={{height: '65%', width: '100%', borderRadius: 10}}
          />
          <View
            style={{
              height: '25%',
              width: '100%',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Image
              source={require('../../assets/image/BANNER2.png')}
              resizeMode="cover"
              style={{height: '90%', width: '100%', borderRadius: 10}}
            />
          </View>
          <View
            style={{
              height: '10%',
              width: '100%',
              flexDirection: 'row',
              paddingVertical: 6,
              // padding: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: 0,
            }}>
            <View style={{width: '60%'}}>
              <Text
                style={[
                  typography.w500s12,
                  typography.Nunito,
                  {width: 'auto'},
                ]}>
                Lorem ipsum dolor sit amet{`\n`}, consectetur adipiscing elit.
              </Text>
            </View>
            <View style={{width: '40%'}}>
              <TouchableButton
                title="Shop"
                style={{width: '100%'}}
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
      ),
    },
    {
      id: 4,
      content: (
        <View
          style={{
            width: screenWidth - 40,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 3, height: 3},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            padding: 10,
          }}>
          <Image
            resizeMode="cover"
            source={require('../../assets/image/LIVE.png')}
            style={{height: '100%', width: '100%', borderRadius: 20}}
          />
          <View
            style={{
              height: '20%',
              width: screenWidth - 80,
              // justifyContent: 'center',
              borderRadius: 19,
              position: 'absolute',
              bottom: 20,
              backgroundColor: 'white',
              padding: 10,
              flexDirection: 'row',
              // justifyContent: 'space-between',
              gap: 10,
            }}>
            <View style={{width: '40%'}}>
              <Image
                source={require('../../assets/image/STORY1.png')}
                resizeMode="cover"
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 9,
                  // margin: 10,
                }}
              />
            </View>
            <View
              style={{
                width: '58%',
                // marginHorizontal: 10,
                // paddingHorizontal: 10,
                justifyContent: 'space-between',
                // alignItems: 'center',
              }}>
              <Text
                style={[
                  typography.w500s12,
                  typography.Nunito,
                  {width: '100%'},
                ]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <TouchableOpacity
                style={{
                  width: '100%',
                  backgroundColor: COLORS.primaryButton,
                  height: '30%',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 300,
                    fontSize: 15,
                    fontFamily: 'Raleway',
                    color: COLORS.white,
                  }}>
                  Shop Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ),
    },
  ];

  // Handle scroll event for slider
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <GestureRecognizer onSwipeDown={() => navigation.goBack()}>
    <SafeAreaView style={[styles.container, {height: usableHeight}]}>
        {/* Upper View - Slider */}
        <View style={styles.upperView}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}>
            {slides.map(slide => (
              <View key={slide.id} style={styles.slide}>
                {slide.content}
              </View>
            ))}
          </ScrollView>

          {/* Dots Indicator */}
        </View>

        {/* Lower View - Navigator */}
        <View style={styles.lowerView}>
          <View style={styles.dotsContainer}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, index === currentIndex && styles.activeDot]}
              />
            ))}
          </View>
        </View>
    </SafeAreaView>
      </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  upperView: {
    flex: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: Dimensions.get('window').width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: COLORS.tintedButton,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 33,
    backgroundColor: COLORS.primaryButton,
  },
});

export default StoryScreen;
