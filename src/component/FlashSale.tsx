import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../consts/COLOR';
import {windowHeight, windowWidth} from '../style/commonStyle';

const flashSaleItems = [
  {
    id: '1',
    name: 'Item 1',

    image: require('../assets/image/FS1.png'),
    sale: '20%,',
  },
  {
    id: '2',
    name: 'Item 2',

    image: require('../assets/image/FS2.png'),
    sale: '20%,',
  },
  {
    id: '3',
    name: 'Item 3',

    image: require('../assets/image/FS3.png'),
    sale: '20%,',
  },
  {
    id: '4',
    name: 'Item 4',

    image: require('../assets/image/FS4.png'),
    sale: '20%,',
  },
  {
    id: '5',
    name: 'Item 5',

    image: require('../assets/image/FS5.png'),
    sale: '20%,',
  },
  {
    id: '6',
    name: 'Item 6',
    image: require('../assets/image/FS6.png'),
    sale: '20%,',
  },
];

const FlashSale = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flash Sale</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          flexWrap: 'wrap',
          gap: windowWidth * 0.01,
          marginHorizontal: 20,
          width: windowWidth - 40,
        }}>
        {flashSaleItems.map(item => (
          <TouchableOpacity key={item.id} style={styles.itemContainer}>
            <Image
              source={item.image}
              style={styles.itemImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    height: windowWidth / 4 + 5,
    width: '32%',
    padding: 5,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    // marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 6,
  },
  itemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default FlashSale;
