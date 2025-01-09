// import React from 'react';
// import {View, Text, StyleSheet, Image} from 'react-native';
// import commonStyle from '../style/commonStyle';
// import typography from '../style/typography';
// import {COLORS} from '../consts/COLOR';

// const JustForYou: React.FC = () => {
//   const products = [
//     {
//       id: 1,
//       name: 'Product 1',
//       image: require('../assets/image/NI1.png'),
//       details: 'Lorem ipsum dolor sit amet consectetur',
//       price: '$17,00',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       image: require('../assets/image/FS3.png'),
//       details: 'Lorem ipsum dolor sit amet consectetur',
//       price: '$17,00',
//     },
//     {
//       id: 3,
//       name: 'Product 3',
//       image: require('../assets/image/FS5.png'),
//       details: 'Lorem ipsum dolor sit amet consectetur',
//       price: '$17,00',
//     },
//     {
//       id: 4,
//       name: 'Product 4',
//       image: require('../assets/image/FS2.png'),
//       details: 'Lorem ipsum dolor sit amet consectetur',
//       price: '$17,00',
//     },
//     {
//       id: 5,
//       name: 'Product 5',
//       image: require('../assets/image/FS1.png'),
//       details: 'Lorem ipsum dolor sit amet consectetur',
//       price: '$17,00',
//     },
//     {
//       id: 6,
//       name: 'Product 6',
//       image: require('../assets/image/FS6.png'),
//       details: 'Lorem ipsum dolor sit amet consectetur',
//       price: '$17,00',
//     },
//   ];
//   return (
//     <View style={[commonStyle.mh20, commonStyle.mv10]}>
//       <View style={[commonStyle.mb20]}>
//         <Text style={[typography.textBold21, typography.Raleway]}>
//           Just For You
//         </Text>
//       </View>
//       <View
//         style={[
//           commonStyle.flexDirectionRow,
//           {flexWrap: 'wrap', justifyContent: 'space-between'},
//         ]}>
//         {products.map((item, index) => (
//           <View
//             key={item.id}
//             style={[,
//               commonStyle.mb10,
//             ]}>
//             <View
//               style={{
//                 width: 189,
//                 height: 200,
//                 backgroundColor: COLORS.white,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 shadowColor: '#000',
//                 shadowOffset: {width: 0, height: 2},
//                 shadowOpacity: 0.25,
//                 shadowRadius: 3.84,
//                 elevation: 5,
//                 borderRadius: 10,
//               }}>
//               <Image source={item.image} style={{width: 179, height: 190, borderRadius:8}} resizeMode='cover'/>
//             </View>
//             <View style={{width: 189, marginTop: 10, gap:5}}>
//                 <Text style={[typography.w400s12, typography.Nunito,]}>{item.details}</Text>
//                 <Text style={[typography.boldText17, typography.Raleway]}>{item.price}</Text>
//             </View>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

// export default JustForYou;



import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import commonStyle from '../style/commonStyle';
import typography from '../style/typography';
import { COLORS } from '../consts/COLOR';

interface JustForYouProps {
  title?: string;
}

const JustForYou: React.FC<JustForYouProps> = ({title = " Just For You"}) => {
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
          <Text style={[typography.textBold21, typography.Raleway]}>
            {title}
          </Text>
        </View>
      )}
      <View style={styles.productContainer}>
        {products.map((item) => (
          <View key={item.id} style={styles.productItem}>
            <View style={styles.productImageContainer}>
              <Image source={item.image} style={styles.productImage} resizeMode="cover" />
            </View>
            <View style={styles.productDetails}>
              <Text style={[typography.w400s12, typography.Nunito]}>{item.details}</Text>
              <Text style={[typography.boldText17, typography.Raleway]}>{item.price}</Text>
            </View>
          </View>
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
    shadowOffset: { width: 0, height: 2 },
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
