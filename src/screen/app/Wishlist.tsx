import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import typography from '../../style/typography';
import Add from '../../logo/Add.svg';
import RecentlyVisited from '../../component/RecentlyVisited';
import {windowWidth} from '../../style/commonStyle';
import MostPopular from '../../component/MostPopular.';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import Empty from '../../logo/Empty.svg';
import REMOVEWISHLIST from '../../logo/REMOVEWISHLIST.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BottomBarView from '../../component/BottomBarView';


const WishlistProductes: any[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 17,
    image: require('../../assets/image/FS5.png'),
    details: 'Lorem ipsum dolor sit amet consectetur.',
    size: 'S',
    color: 'Pink',
  },
  {
    id: 2,
    name: 'Product 1',
    price: 30,
    discountedPrice: 15,
    image: require('../../assets/image/FS3.png'),
    details: 'Lorem ipsum dolor sit amet consectetur.',
    size: 'M',
    color: 'Whiet',
  },
  {
    id: 3,
    name: 'Product 1',
    price: 25,
    image: require('../../assets/image/FS2.png'),
    details: 'Lorem ipsum dolor sit amet consectetur.',
    size: 'M',
    color: 'Pink',
  },
  {
    id: 4,
    name: 'Product 1',
    price: 23,
    image: require('../../assets/image/FS1.png'),
    details: 'Lorem ipsum dolor sit amet consectetur.',
    size: 'M',
    color: 'Blackk',
  },
  {
    id: 5,
    name: 'Product 1',
    price: 17,
    image: require('../../assets/image/FS5.png'),
    details: 'Lorem ipsum dolor sit amet consectetur.',
    size: 'M',
    color: 'Blackk',
  },
  {
    id: 6,
    name: 'Product 1',
    price: 34,
    image: require('../../assets/image/FS3.png'),
    details: 'Lorem ipsum dolor sit amet consectetur.',
    size: 'M',
    color: 'Blackk',
  },
  {
    id: 7,
    name: 'Product 1',
    price: 56,
    image: require('../../assets/image/FS2.png'),
    details: 'Lorem ipsum dolor sit amet consectetur.',
    size: 'M',
    color: 'Blackk',
  },
];

const Wishlist: React.FC = () => {
  const bottomViewHeight = useBottomTabBarHeight();

  return (
    <View style={styles.container}>
      <SafeAreaView />
      {/* <Text>{WishlistProductes.length}</Text> */}
      {WishlistProductes.length === 0 && (
        <View style={{flex: 1}}>
          <View>
            <Text style={styles.title}>Wishlist</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <RecentlyVisited size={50} />
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  height: 135,
                  width: 135,
                  borderRadius: 100,
                  backgroundColor: 'rgb(255, 255, 255)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                  shadowOffset: {width: 0, height: 4},
                  shadowOpacity: 0.4,
                  shadowRadius: 4,
                  elevation: 5,
                }}>
                <Empty />
              </View>
            </View>
            <View>
              <MostPopular />
            </View>
            <View style={{height: bottomViewHeight}}></View>
          </View>
        </View>
      )}
      {WishlistProductes.length >= 1 && (
        <ScrollView nestedScrollEnabled={true}>
          <View>
            <Text style={styles.title}>Wishlist</Text>
          </View>
          <RecentlyVisited size={50} />
          <View style={{gap: 5}}>
            {WishlistProductes.map((item, index) => (
              <View
                key={item.id}
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 20,
                  marginVertical: 5,
                }}>
                <View
                  style={{
                    borderColor: 'white',
                    borderWidth: 4,
                    borderRadius: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffset: {width: 1, height: 4},
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    elevation: 5,
                    width: '40%',
                  }}>
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: 120,
                      borderRadius: 10,
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      bottom: 5,
                      left: 5,
                      zIndex: 1,
                    }}>
                    <REMOVEWISHLIST />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: '60%',
                    paddingHorizontal: 5,
                    justifyContent: 'space-between',
                    paddingTop: 5,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      flex: 1,
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={[
                        typography.font13,
                        typography.Nunito400,
                        {lineHeight: 16},
                      ]}>
                      {item.details}
                    </Text>
                    {item.discountedPrice ? (
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={[
                            typography.font17,
                            typography.RaleWay500,
                            {
                              textDecorationLine: 'line-through',
                              color: '#F1AEAE',
                              width: 'auto',
                            },
                          ]}>
                          ${item.price.toFixed(2)}
                        </Text>
                        <Text
                          style={[typography.font18, typography.RaleWay700]}>
                          ${item.discountedPrice.toFixed(2)}
                        </Text>
                      </View>
                    ) : (
                      <Text style={[typography.font18, typography.RaleWay700]}>
                        ${item.price.toFixed(2)}
                      </Text>
                    )}
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      paddingVertical: 5,
                      paddingRight: 1,
                    }}>
                    <View style={{flexDirection: 'row', gap: 5}}>
                      <Text style={styles.sizetext}>{item.color}</Text>
                      <Text style={styles.sizetext}>{item.size}</Text>
                    </View>
                    <TouchableOpacity>
                      <Add />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <BottomBarView />
        </ScrollView>
      )}
    </View>
  );
};

interface FromYourWishlistProps {
  title?: string;
}

const FromYourWishlist: React.FC<FromYourWishlistProps> = ({
  title = 'From Your Wishlist',
}) => {
  return (
    <View>
      {WishlistProductes.length >= 1 && (
        <View>
          <Text style={styles.subTitle}>{title}</Text>
          <View style={{gap: 5}}>
            {WishlistProductes.slice(0, 3).map((item, index) => (
              <View
                key={item.id}
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 20,
                  marginVertical: 5,
                }}>
                <View
                  style={{
                    borderColor: 'white',
                    borderWidth: 4,
                    borderRadius: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffset: {width: 1, height: 4},
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    elevation: 5,
                    width: '40%',
                  }}>
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: 120,
                      borderRadius: 10,
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      bottom: 5,
                      left: 5,
                      zIndex: 1,
                    }}>
                    <REMOVEWISHLIST />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: '60%',
                    paddingHorizontal: 5,
                    justifyContent: 'space-between',
                    paddingTop: 5,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      flex: 1,
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={[
                        typography.font13,
                        typography.Nunito400,
                        {lineHeight: 16},
                      ]}>
                      {item.details}
                    </Text>
                    {item.discountedPrice ? (
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={[
                            typography.font17,
                            typography.RaleWay500,
                            {
                              textDecorationLine: 'line-through',
                              color: '#F1AEAE',
                              width: 'auto',
                            },
                          ]}>
                          ${item.price.toFixed(2)}
                        </Text>
                        <Text
                          style={[typography.font18, typography.RaleWay700]}>
                          ${item.discountedPrice.toFixed(2)}
                        </Text>
                      </View>
                    ) : (
                      <Text style={[typography.font18, typography.RaleWay700]}>
                        ${item.price.toFixed(2)}
                      </Text>
                    )}
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      paddingVertical: 5,
                      paddingRight: 1,
                    }}>
                    <View style={{flexDirection: 'row', gap: 5}}>
                      <Text style={styles.sizetext}>{item.color}</Text>
                      <Text style={styles.sizetext}>{item.size}</Text>
                    </View>
                    <TouchableOpacity>
                      <Add />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
      {WishlistProductes.length === 0 && <MostPopular />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    marginHorizontal: 20,
    marginBottom: 10,
    ...typography.RaleWay700,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.28,
  },
  sizetext: {
    ...typography.font14,
    ...typography.RaleWay500,
    backgroundColor: '#E5EBFC',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  subTitle: {
    ...typography.font22,
    ...typography.RaleWay700,
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

export default Wishlist;
export {FromYourWishlist};
