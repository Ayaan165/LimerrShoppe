import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import typography from '../../style/typography';
import commonStyle from '../../style/commonStyle';
import {COLORS} from '../../consts/COLOR';
import Bubble8 from '../../logo/Bubble8.svg';
import {TouchableButton} from '../../component/Button';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const {width} = Dimensions.get('window'); // Screen width for layout
const SLIDES = [
  {
    id: 1,
    type: 'image',
    image: require('../../assets/image/card1.png'), // Replace with your image URLs
    title: 'Hello',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.',
  },
  {
    id: 2,
    type: 'image',
    image: require('../../assets/image/card1.png'), // Replace with your image URLs
    title: 'Hello',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.',
  },
  {
    id: 3,
    type: 'image',
    image: require('../../assets/image/card1.png'), // Replace with your image URLs
    title: 'Hello',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.',
  },
  {
    id: 4,
    type: 'button', // This slide includes a button
    // type: 'image', // This slide includes a button
    image: require('../../assets/image/card2.png'),
    title: 'Ready?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonText: `Let's Start`,
  },
];

const HelloCard2 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = (event: {nativeEvent: {contentOffset: {x: number}}}) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveSlide(slideIndex);
  };

  const handleButtonPress = (slide: {title: any}) => {
    alert(`Button pressed on slide: ${slide.title}`);
  };

  const renderSlide = (
    slide:
      | {
          id: number;
          type: string;
          image: any; // Replace with your image URLs
          title: string;
          description: string;
          buttonText?: undefined;
        }
      | {
          id: number;
          type: string; // This slide includes a button
          title: string;
          description: string;
          buttonText: string;
          image?: undefined;
        },
  ) => {
    return (
      <View key={slide.id} style={styles.card}>
        {slide.type === 'image' && (
          <View
            style={{
              // marginTop: windowHeight * 0.2,
              height: windowHeight * 0.75,
              width:
                windowWidth > windowHeight
                  ? windowWidth - windowWidth * 0.5
                  : windowWidth - windowWidth * 0.15,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              marginTop: windowHeight * 0.27,
              shadowColor: COLORS.black,
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.25,
              elevation: 4,
            }}>
            <View
              style={{
                height: windowHeight * 0.425,
                width:
                  windowWidth > windowHeight
                    ? windowWidth - windowWidth * 0.5
                    : windowWidth - windowWidth * 0.15,
                borderRadius: 30,
              }}>
              <Image
                source={slide.image}
                resizeMode="cover"
                style={{
                  // height: windowHeight * 0.425,
                  height: '100%',

                  width: '100%',
                  // windowWidth > windowHeight
                  //   ? windowWidth - windowWidth * 0.4
                  //   : windowWidth - windowWidth * 0.15,
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                }}
              />
            </View>
            <View
              style={[
                {
                  height: windowHeight * 0.325,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 20,
                  // backgroundColor:'red'
                  paddingBottom: 20,
                },
              ]}>
              <Text
                style={[
                  typography.textBold28,
                  commonStyle.textAlignCenter,
                  typography.Raleway,
                ]}>
                {slide.title}
              </Text>
              <Text
                style={[
                  typography.regulartext19,
                  typography.Nunito,
                  commonStyle.textAlignCenter,
                  {width: 300},
                ]}>
                {slide.description}
              </Text>
            </View>
          </View>
        )}
        {slide.buttonText && (
          <View
            style={{
              // marginTop: windowHeight * 0.2,
              height: windowHeight * 0.75,
              width:
                windowWidth > windowHeight
                  ? windowWidth - windowWidth * 0.5
                  : windowWidth - windowWidth * 0.15,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              marginTop: windowHeight * 0.27,
              shadowColor: COLORS.black,
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.25,
              elevation: 4,
            }}>
            <View
              style={{
                height: windowHeight * 0.425,
                width:
                  windowWidth > windowHeight
                    ? windowWidth - windowWidth * 0.5
                    : windowWidth - windowWidth * 0.15,
                borderRadius: 30,
              }}>
              <Image
                source={slide.image}
                resizeMode="cover"
                style={{
                  height: windowHeight * 0.425,
                  width:
                    windowWidth > windowHeight
                      ? windowWidth - windowWidth * 0.5
                      : windowWidth - windowWidth * 0.15,
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                }}
              />
            </View>
            <View
              style={[
                {
                  height: windowHeight * 0.325,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 20,
                  // backgroundColor:'red'
                  paddingBottom: 20,
                },
              ]}>
              <Text
                style={[
                  typography.textBold28,
                  commonStyle.textAlignCenter,
                  typography.Raleway,
                ]}>
                {slide.title}
              </Text>
              <Text
                style={[
                  typography.regulartext19,
                  typography.Nunito,
                  commonStyle.textAlignCenter,
                  {width: 300},
                ]}>
                {slide.description}
              </Text>
              <TouchableButton
                title={slide.buttonText}
                style={{width: 200, height: 50}}
                onPress={() => console.log('Done')}
              />
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Bubble8 style={{position: 'absolute', top: 0, left: 0}} />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        // contentContainerStyle={styles.scrollContainer}
      >
        {SLIDES.map(slide => renderSlide(slide))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {SLIDES.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              activeSlide === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  card: {
    width,
    alignItems: 'center',
    justifyContent: 'center',

    height: windowHeight * 0.7,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: windowHeight * 0.08,
  },
  indicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.secondaryBlue,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: COLORS.primaryButton,
  },
});

export default HelloCard2;

function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
