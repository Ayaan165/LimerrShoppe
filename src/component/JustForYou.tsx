import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import commonStyle from '../style/commonStyle';
import typography from '../style/typography';
import {COLORS} from '../consts/COLOR';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
interface JustForYouProps {
  navigation: NavigationProp<any>;
  title?: string;
}

const JustForYou: React.FC<JustForYouProps> = ({
  title = ' Just For You',
  navigation,
}) => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: require('../assets/image/NI1.png'),
      details: 'Lorem ipsum dolor sit amet consectetur',
      price: '$17,00',
    },
    {
      id: 2,
      name: 'Product 2',
      image: require('../assets/image/FS3.png'),
      details: 'Lorem ipsum dolor sit amet consectetur',
      price: '$17,00',
    },
    {
      id: 3,
      name: 'Product 3',
      image: require('../assets/image/FS5.png'),
      details: 'Lorem ipsum dolor sit amet consectetur',
      price: '$17,00',
    },
    {
      id: 4,
      name: 'Product 4',
      image: require('../assets/image/FS2.png'),
      details: 'Lorem ipsum dolor sit amet consectetur',
      price: '$17,00',
    },
    {
      id: 5,
      name: 'Product 5',
      image: require('../assets/image/FS1.png'),
      details: 'Lorem ipsum dolor sit amet consectetur',
      price: '$17,00',
    },
    {
      id: 6,
      name: 'Product 6',
      image: require('../assets/image/FS6.png'),
      details: 'Lorem ipsum dolor sit amet consectetur',
      price: '$17,00',
    },
  ];

  return (
    <View style={[commonStyle.mh20, commonStyle.mv10]}>
      {title !== '' && (
        <View style={[commonStyle.mb20]}>
          <Text style={[typography.RaleWay700, typography.font21]}>
            {title}
          </Text>
        </View>
      )}
      <View style={styles.productContainer}>
        {products.map(item => (
          <TouchableOpacity
            activeOpacity={1}
            key={item.id}
            style={styles.productItem}
            onPress={() => {
              navigation.navigate('ProductPage');
            }}>
            <View style={styles.productImageContainer}>
              <Image
                source={item.image}
                style={styles.productImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.productDetails}>
              <Text style={[typography.Nunito400, typography.font12]}>
                {item.details}
              </Text>
              <Text style={[typography.RaleWay700, typography.font17]}>
                {item.price}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productItem: {
    width: '48%', // Two columns with 2% gap between them
    marginBottom: 20,
  },
  productImageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
  productImage: {
    width: '95%',
    height: '95%',
    borderRadius: 8,
  },
  productDetails: {
    width: '100%',
    marginTop: 10,
  },
});

export default JustForYou;
