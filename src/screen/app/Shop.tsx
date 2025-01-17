import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import commonStyle, {windowHeight, windowWidth} from '../../style/commonStyle';
import typography from '../../style/typography';
import Categories from '../../component/Categories';
import TopProducts from '../../component/TopProducts';
import NewItem from '../../component/NewItem';
import FlashSale from '../../component/FlashSale';
import MostPopular from '../../component/MostPopular.';
import JustForYou from '../../component/JustForYou';
import {NavigationProp} from '@react-navigation/native';
// import CategoriesSelector from '../../component/CategoriesSelector';
import CategoriesOption from '../../component/CategoriesOption';
import Close from '../../logo/Close.svg';
import CAM from '../../logo/CAM.svg';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

interface ShopScreenProps {
  navigation: NavigationProp<any>;
}
const {width} = Dimensions.get('window');
const Shop: React.FC<ShopScreenProps> = ({navigation}) => {
  const bottomViewHeight = useBottomTabBarHeight();
  const banners = [
    {
      image: require('../../assets/image/BANNER1.png'), // Replace with your image path
    },
    {
      image: require('../../assets/image/BANNER2.png'), // Replace with your image path
    },
    {
      image: require('../../assets/image/BANNER1.png'), // Replace with your image path
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');
  const flatListRef = useRef<FlatList>(null);
  const navigateToSearch = useCallback(() => {
    navigation.navigate('SearchScreen');
  }, [navigation]);
  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        activeIndex === banners.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);

      // Scroll FlatList programmatically
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
      }
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [activeIndex, banners.length]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <ScrollView>
        <View style={commonStyle.mh20}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text style={[typography.textBold28, typography.Raleway]}>
              Shop
            </Text>
            <TouchableOpacity
              onPress={navigateToSearch}
              style={{
                marginLeft: 10,
                flex: 1,
                borderColor: '#F1F0F0',
                height: 38,
                borderWidth: 1,
                borderRadius: 20,
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  value={searchText}
                  onChangeText={text => setSearchText(text)}
                  placeholder="Search"
                  style={{fontSize: 16, color: isFocused ? 'black' : '#0042E0'}}
                  returnKeyType="done"
                  onFocus={() => setIsFocused(true)} // Set focus state to true
                  onBlur={() => setIsFocused(false)}
                />
                {!isFocused && searchText !== '' && (
                  <TouchableOpacity
                    onPress={() => setSearchText('')}
                    style={{marginHorizontal: 5}}>
                    <Close />
                  </TouchableOpacity>
                )}
              </View>
              <CAM />
            </TouchableOpacity>
          </View>
          <CategoriesOption />
        </View>
        <View style={styles.bannerContainer}>
          <FlatList
            ref={flatListRef}
            data={banners}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            renderItem={({item}) => (
              <View style={styles.bannerItem}>
                <Image
                  source={item.image}
                  style={styles.bannerImage}
                  resizeMode="cover"
                />
              </View>
            )}
          />
          {/* Pagination */}
          <View style={styles.pagination}>
            {banners.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, activeIndex === index && styles.activeDot]}
              />
            ))}
          </View>
        </View>
        <Categories />
        <TopProducts />
        <NewItem />
        <FlashSale />
        <MostPopular />
        <JustForYou navigation={navigation} />
        <View
          style={{
            height: bottomViewHeight,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    backgroundColor: 'grey',
    height: 170,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  bannerItem: {
    width: width * 0.9, // Make it slightly smaller than the screen width
    height: 160,
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: width * 0.05, // Center the banners
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#ccc',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#0066FF',
    width: 16,
    height: 8,
    borderRadius: 4,
  },
});

export default Shop;
