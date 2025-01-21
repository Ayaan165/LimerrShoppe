import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import typography from '../../style/typography';
import {title} from 'process';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomBarView, {BottomBarHeight} from '../../component/BottomBarView';
import {TouchableButton} from '../../component/Button';
import {FromYourWishlist} from './Wishlist';
import AddressCard from '../../component/AddressCard';
import {windowHeight, windowWidth} from '../../style/commonStyle';
import EmptyCart from '../../logo/EmptyCart.svg';
import MostPopular from '../../component/MostPopular.';
import REMOVEWISHLIST from '../../logo/REMOVEWISHLIST.svg';
import Less from '../../logo/Less.svg';
import More from '../../logo/More.svg';
import {COLORS} from '../../consts/COLOR';
import {NavigationProp} from '@react-navigation/native';
interface CartScreenProps {
    navigation: NavigationProp<any>;
}

const CartScreen: React.FC<CartScreenProps> = ({navigation}) => {
  const increaseRef = useRef(null);
  const decreaseRef = useRef(null);
  const [Quantity, setQuantity] = useState(1);
  const [cardItem, setCardItem] = React.useState(0);
  const [cartItem, setCartItem] = React.useState([
    {
      id: 1,
      name: 'Product 1',
      price: 17,
      image: require('../../assets/image/FS5.png'),
      details: 'Lorem ipsum dolor sit amet consectetur.',
      size: 'S',
      quantity: 1,
      color: 'Pink',
    },
    {
      id: 2,
      name: 'Product 1',
      price: 30,
      discountedPrice: 15,
      quantity: 1,
      image: require('../../assets/image/FS3.png'),
      details: 'Lorem ipsum dolor sit amet consectetur.',
      size: 'M',
      color: 'Whiet',
    },
  ]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  React.useEffect(() => {
    const total = cartItem.reduce((sum, item) => {
      const price = item?.discountedPrice || item.price;
      return sum + price * item?.quantity;
    }, 0);
    setTotalPrice(total);
  }, [cartItem]);

  const updateQuantity = (id: number, increment: number) => {
    setCartItem(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(0, Math.min(item.quantity + increment, 3)),
            }
          : item,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View>
            <View style={styles.header}>
              <Text style={styles.title}>Cart</Text>
              <View style={styles.countView}>
                <Text style={styles.counterText}>{cartItem.length}</Text>
              </View>
            </View>
            <AddressCard onPress={()=>{}}/>
          </View>
          {cartItem.length === 0 && (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 70,
              }}>
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
                <EmptyCart />
              </View>
            </View>
          )}
          {cartItem.length > 0 && (
            <View style={{marginBottom: 20}}>
              {cartItem.map((item, index) => (
                <View key={item.id}>
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
                          paddingBottom: 10,
                        }}>
                        <View>
                          <Text
                            style={[
                              typography.font13,
                              typography.Nunito400,
                              {lineHeight: 16},
                            ]}>
                            {item.details}
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              width: '100%',
                              paddingVertical: 5,
                              paddingRight: 1,
                            }}>
                            <View>
                              <Text style={{}}>
                                {item.color} , Size {item.size}
                              </Text>
                            </View>
                          </View>
                          <TouchableOpacity>{/* <Add /> */}</TouchableOpacity>
                        </View>
                        <View style={styles.quantityContainer}>
                          <View>
                            {item.discountedPrice ? (
                              <View style={{}}>
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
                                  style={[
                                    typography.font18,
                                    typography.RaleWay700,
                                  ]}>
                                  ${item.discountedPrice.toFixed(2)}
                                </Text>
                              </View>
                            ) : (
                              <Text
                                style={[
                                  typography.font18,
                                  typography.RaleWay700,
                                ]}>
                                ${item.price.toFixed(2)}
                              </Text>
                            )}
                          </View>
                          <View style={styles.quantityControls}>
                            <Pressable
                              onPress={() => updateQuantity(item.id, -1)}
                              ref={decreaseRef}
                              style={({pressed}) => [
                                styles.quantityButton,
                                {
                                  backgroundColor: pressed
                                    ? 'rgb(210, 230, 255)'
                                    : 'white',
                                },
                              ]}>
                              <Less height={30} width={30} />
                            </Pressable>
                            <View style={styles.quantityDisplay}>
                              <Text style={styles.quantityText}>
                                {item.quantity}
                              </Text>
                            </View>
                            <Pressable
                              onPress={() => updateQuantity(item.id, +1)}
                              ref={increaseRef}
                              style={({pressed}) => [
                                styles.quantityButton,
                                {
                                  backgroundColor: pressed
                                    ? 'rgb(210, 230, 255)'
                                    : 'white',
                                },
                              ]}>
                              <More height={30} width={30} />
                            </Pressable>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )}
          <View>
            <FromYourWishlist />
            <BottomBarView />
            <BottomBarView />
          </View>
        </View>
      </ScrollView>
      <View style={styles.cheackOutBox}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Text style={{...typography.RaleWay800, ...typography.font20}}>
              Total
              <Text style={[typography.font18, typography.RaleWay700]}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
            }}>
            <TouchableButton
              disable={cartItem.length === 0 ? true : false}
              title="Checkout"
              style={{
                width: 'auto',
                height: 40,
                borderRadius: 11,
                paddingHorizontal: 20,
                backgroundColor:
                  cartItem.length === 0 ? 'white' : COLORS.primaryButton,
              }}
              TextStyle={{
                ...typography.Nunito300,
                ...typography.font16,
                color: cartItem.length === 0 ? 'black' : 'white',
              }}
              onPress={() => {navigation.navigate('PaymentScreen', {cartItem, totalPrice})}}
            />
          </View>
        </View>
        <BottomBarView />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    ...typography.RaleWay700,
    ...typography.font28,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityControls: {
    gap: 10,
    flexDirection: 'row',
  },
  quantityButton: {
    borderRadius: 25,
  },
  quantityDisplay: {
    backgroundColor: '#E5EBFC',
    height: 30,
    width: 35,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    ...typography.RaleWay500,
  },
  header: {
    gap: 5,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  countView: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#E5EBFC',
    alignItems: 'center',
  },
  counterText: {
    ...typography.RaleWay700,
    ...typography.font18,
  },
  cheackOutBox: {
    padding: 10,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#F9F9F9',
    bottom: 0,
  },
});

export default CartScreen;
