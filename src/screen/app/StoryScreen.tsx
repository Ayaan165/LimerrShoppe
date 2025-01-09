import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  Text,
} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

import {ImageSourcePropType} from 'react-native';

type Story = {
  id: string;
  image: ImageSourcePropType;
};

const stories: Story[] = [
  {id: '1', image: require('../../assets/image/LIVE.png')},
  {id: '2', image: require('../../assets/image/LIVE.png')},
  {id: '3', image: require('../../assets/image/LIVE.png')},
  {id: '4', image: require('../../assets/image/LIVE.png')},
];

const StoryScreen: React.FC = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        
        scrollEventThrottle={16}>
        {stories.map(story => (
          <View key={story.id} style={styles.storyContainer}>
            <Image source={story.image} style={styles.image} />
            {/* Add blue dots (absolute position over the image) */}
            <View style={[styles.interactiveDot, {top: '30%', left: '25%'}]} />
            <View style={[styles.interactiveDot, {top: '70%', left: '50%'}]} />
          </View>
        ))}
      </ScrollView>
      {/* Pagination */}
      <View style={styles.paginationContainer}>
        {stories.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  storyContainer: {
    width: screenWidth,
    height: screenHeight * 0.82,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.8,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  interactiveDot: {
    position: 'absolute',
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: '#007AFF',
  },
  paginationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 15,
    backgroundColor: 'white',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d3d3d3',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#007AFF',
    width: 12,
    height: 12,
  },
});

export default StoryScreen;
