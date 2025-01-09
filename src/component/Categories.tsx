// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   Image,
// } from 'react-native';
// import ArrowButton from './ArrowButton';
// import typography from '../style/typography';
// import commonStyle, {windowHeight, windowWidth} from '../style/commonStyle';
// import {COLORS} from '../consts/COLOR';

// const Categories = () => {
//   const categories = [
//     {
//       id: 1,
//       name: 'Clothing',
//       item_count: 109,
//       Image: require('../assets/image/S1.png'),
//       Image2: require('../assets/image/S2.png'),
//       Image3: require('../assets/image/S3.png'),
//       Image4: require('../assets/image/S4.png'),
//     },
//     {
//       id: 2,
//       name: 'Shoes',
//       item_count: 530,
//       Image: require('../assets/image/MP1.png'),
//       Image2: require('../assets/image/MP2.png'),
//       Image3: require('../assets/image/MP3.png'),
//       Image4: require('../assets/image/MP4.png'),
//     },
//     {
//       id: 3,
//       name: 'Bags',
//       item_count: 87,
//       Image: require('../assets/image/MP1.png'),
//       Image2: require('../assets/image/MP2.png'),
//       Image3: require('../assets/image/MP3.png'),
//       Image4: require('../assets/image/MP4.png'),
//     },
//     {
//       id: 4,
//       name: 'Lingerie',
//       item_count: 218,
//       Image: require('../assets/image/S1.png'),
//       Image2: require('../assets/image/S2.png'),
//       Image3: require('../assets/image/S3.png'),
//       Image4: require('../assets/image/S4.png'),
//     },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <View
//         style={[
//           commonStyle.flexDirectionRow,
//           commonStyle.justifyContentSpaceB,
//           commonStyle.alignItemsCenter,
//           commonStyle.mv5,
//           commonStyle.ph20,
//         ]}>
//         <View>
//           <Text style={[typography.textBold21, typography.Raleway]}>
//             Categories
//           </Text>
//         </View>
//         <View
//           style={[commonStyle.flexDirectionRow, commonStyle.alignItemsCenter]}>
//           <Text style={[typography.textBold21, typography.Raleway]}>
//             See All
//           </Text>
//           <ArrowButton onPress={() => {}} />
//         </View>
//       </View>
//       <View>
//         <View style={{paddingVertical: 10, flexDirection: 'row', flexWrap: 'wrap', gap:10, marginHorizontal:20, justifyContent:'center'}}>
//         {categories.map((item, index) => (
//           <View key={index} style={styles.row}>
//             <View style={styles.item}>
//               <Image
//                 source={item.Image}
//                 style={{height: 85, width: 85, borderRadius: 7}}
//                 resizeMode="cover"
//               />
//               <Image
//                 source={item.Image2}
//                 style={{height: 85, width: 85, borderRadius: 7}}
//                 resizeMode="cover"
//               />
//               <Image
//                 source={item.Image3}
//                 style={{height: 85, width: 85, borderRadius: 7}}
//                 resizeMode="cover"
//               />
//               <Image
//                 source={item.Image4}
//                 style={{height: 85, width: 85, borderRadius: 7}}
//                 resizeMode="cover"
//               />
//             </View>
//             <View
//               style={[
//                 commonStyle.flexDirectionRow,
//                 commonStyle.justifyContentSpaceB,
//                 commonStyle.alignItemsCenter,
//                 commonStyle.mt5
//               ]}>
//               <Text style={styles.itemText}>{item.name}</Text>
//               <View
//                 style={{
//                   backgroundColor: COLORS.inputBackground,
//                   paddingHorizontal: 10,
//                   paddingVertical: 4,
//                   borderRadius: 5,
//                 }}>
//                 <Text style={styles.itemText1}>{item.item_count}</Text>
//               </View>
//             </View>
//           </View>
//         ))}
//       </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   //   container: {
//   //     flex: 1,
//   //     height: windowHeight,
//   //     width: windowWidth,
//   //   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   container: {
//     padding: 20,
//   },
//   row: {
//     // justifyContent: 'space-between', // Space out items in a row
//     // alignItems:'center',

//     // marginBottom: 10,
//     width: windowWidth / 2 - 25,
//     backgroundColor: COLORS.white,
//     borderRadius: 10,
//     shadowColor: COLORS.black,
//     shadowOffset: {width: 0, height: 3},
//     shadowOpacity: 0.15,
//     shadowRadius: 3,
//     elevation: 5,
//     padding: 5,
//   },
//   item: {
//     flex: 1, // Ensure items take up equal space
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     // justifyContent: 'space-evenly',
//     gap: 5,
//   },
//   itemText: {
//     fontSize: 17,
//     fontWeight: 700,
//     fontFamily: 'Raleway',
//   },
//   itemText1: {
//     fontSize: 12,
//     fontWeight: '700',
//     fontFamily: 'Raleway',
//   },
// });

// export default Categories;

import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import ArrowButton from './ArrowButton';
import typography from '../style/typography';
import commonStyle from '../style/commonStyle';
import {COLORS} from '../consts/COLOR';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Clothing',
      item_count: 109,
      Image: require('../assets/image/S1.png'),
      Image2: require('../assets/image/S2.png'),
      Image3: require('../assets/image/S3.png'),
      Image4: require('../assets/image/S4.png'),
    },
    {
      id: 2,
      name: 'Shoes',
      item_count: 530,
      Image: require('../assets/image/MP1.png'),
      Image2: require('../assets/image/MP2.png'),
      Image3: require('../assets/image/MP3.png'),
      Image4: require('../assets/image/MP4.png'),
    },
    {
      id: 3,
      name: 'Bags',
      item_count: 87,
      Image: require('../assets/image/MP1.png'),
      Image2: require('../assets/image/MP2.png'),
      Image3: require('../assets/image/MP3.png'),
      Image4: require('../assets/image/MP4.png'),
    },
    {
      id: 4,
      name: 'Lingerie',
      item_count: 218,
      Image: require('../assets/image/S1.png'),
      Image2: require('../assets/image/S2.png'),
      Image3: require('../assets/image/S3.png'),
      Image4: require('../assets/image/S4.png'),
    },
  ];

  return (
    <SafeAreaView>
      <View
        style={[commonStyle.flexDirectionRow, commonStyle.alignItemsCenter, commonStyle.justifyContentSpaceB, commonStyle.ph20, commonStyle.mv5]}>
        <Text style={[typography.textBold21, typography.Raleway]}>See All</Text>
        <ArrowButton onPress={() => {}} />
      </View>
      <View style={styles.container}>
        {categories.map((item, index) => (
          <View key={index} style={styles.item}>
            <View style={styles.photoGrid}>
              <Image
                source={item.Image}
                style={styles.photo}
                resizeMode="cover"
              />
              <Image
                source={item.Image2}
                style={styles.photo}
                resizeMode="cover"
              />
              <Image
                source={item.Image3}
                style={styles.photo}
                resizeMode="cover"
              />
              <Image
                source={item.Image4}
                style={styles.photo}
                resizeMode="cover"
              />
            </View>
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{backgroundColor: COLORS.inputBackground, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 5}}>
                <Text style={styles.itemText1}>{item.item_count}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  item: {
    width: '48%', // Two columns with 2% gap between them
    marginBottom: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 5,
    padding: 5,

  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photo: {
    width: '48%', // Two columns within the item
    height: 85,
    borderRadius: 7,
    marginBottom: 5,
  },
  itemTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'Raleway',
  },
  itemText1: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Raleway',
  },
});

export default Categories;
