// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   SafeAreaView,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import {NavigationProp} from '@react-navigation/native';
// import typography from '../../style/typography';
// import Close2 from '../../logo/Close2.svg';
// import {COLORS} from '../../consts/COLOR';
// import Selector from '../../component/Selector';
// import OPENARROW from '../../logo/OPENARROW.svg';
// import DOWNARROW from '../../logo/DOWNARROW.svg';
// interface CategoriesProps {
//   navigation: NavigationProp<any>;
// }

// const Categories: React.FC<CategoriesProps> = ({navigation}) => {
//   const [focused, setFocused] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);
//   const option = ['All', 'Female', 'Male'];
//   const Productes = [
//     {name: 'Clothing', image: require('../../assets/image/FS5.png')},
//     {name: 'Shoes', image: require('../../assets/image/FS5.png')},
//     {name: 'Bags', image: require('../../assets/image/FS5.png')},
//     {name: 'Lingerie', image: require('../../assets/image/FS5.png')},
//     {name: 'Accessories', image: require('../../assets/image/FS5.png')},
//   ];
//   const items = [
//     'Dresses',
//     'Pants',
//     'Skirts',
//     'Shorts',
//     'Jackets',
//     'Hoodies',
//     'Shirts',
//     'Polo',
//     'T-Shirts',
//     'Tunics',
//   ];
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>All Categories</Text>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Close2 />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.selectorView}>
//         {option.map((item, index) => (
//           <TouchableOpacity
//             style={[
//               styles.Selector,
//               focused === index && styles.FocusedSelector,
//             ]}
//             onPress={() => setFocused(index)}>
//             <Text
//               style={[
//                 styles.Slectortext,
//                 focused === index && styles.FocusedSlectortext,
//               ]}>
//               {item}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={{marginHorizontal: 20}}>
//         <View>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               padding: 5,
//               backgroundColor: 'white',
//               shadowColor: '#000',
//               shadowOffset: {
//                 width: 0,
//                 height: 2,
//               },
//               shadowOpacity: 0.25,
//               shadowRadius: 3.84,
//               elevation: 5,
//               borderRadius: 10,
//             }}>
//             <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
//               <Image
//                 source={require('../../assets/image/FS5.png')}
//                 resizeMode="cover"
//                 style={{height: 45, width: 45, borderRadius: 5}}
//               />
//               <Text
//                 style={{
//                   fontSize: 17,
//                   fontWeight: 700,
//                   fontFamily: 'Raleway',
//                   marginTop: 5,
//                 }}>
//                 Clothing
//               </Text>
//             </View>
//             <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
//               {isOpen ? (
//                 <DOWNARROW style={{margin: 10}} />
//               ) : (
//                 <OPENARROW style={{margin: 10}} />
//               )}
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               padding: 5,
//               marginVertical: 10,
//               flexWrap: 'wrap',
//               display: isOpen ? 'flex' : 'none',
//             }}>
//             {items.map((item, index) => (
//               <View
//                 style={{
//                   width: '49%',
//                   height: 40,
//                   //   backgroundColor: 'red',
//                   marginVertical: 3,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderColor: '#FFEBEB',
//                   borderRadius: 5,
//                   borderWidth: 2,
//                 }}>
//                 <Text
//                   style={{
//                     fontWeight: 700,
//                     fontSize: 15,
//                     fontFamily: 'Raleway',
//                   }}>
//                   {item}
//                 </Text>
//               </View>
//             ))}
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   title: {
//     ...typography.textBold28,
//     ...typography.Raleway,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   selectorView: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     padding: 20,
//     justifyContent: 'space-evenly',
//   },
//   FocusedSelector: {
//     backgroundColor: '#E5EBFC',
//     borderColor: COLORS.primaryButton,
//     borderWidth: 1,
//   },
//   FocusedSlectortext: {
//     color: COLORS.primaryButton,
//   },
//   Selector: {
//     height: 38,
//     width: '31%',
//     backgroundColor: '#F9F9F9',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   Slectortext: {
//     fontSize: 17,
//     fontWeight: 500,
//     fontFamily: 'Raleway',
//   },
// });

// export default Categories;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import typography from '../../style/typography';
import Close2 from '../../logo/Close2.svg';
import {COLORS} from '../../consts/COLOR';
import OPENARROW from '../../logo/OPENARROW.svg';
import DOWNARROW from '../../logo/DOWNARROW.svg';
import ArrowButton from '../../component/ArrowButton';

interface CategoriesProps {
  navigation: NavigationProp<any>;
}

const Categories: React.FC<CategoriesProps> = ({navigation}) => {
  const [focused, setFocused] = useState(0);
  const [isOpen, setIsOpen] = useState<number | null>(null); // Track which product is expanded
  const option = ['All', 'Female', 'Male'];
  const Productes = [
    {name: 'Clothing', image: require('../../assets/image/FS5.png')},
    {name: 'Shoes', image: require('../../assets/image/P2.png')},
    {name: 'Bags', image: require('../../assets/image/P3.png')},
    {name: 'Lingerie', image: require('../../assets/image/P4.png')},
    {name: 'Accessories', image: require('../../assets/image/P5.png')},
    {
      name: 'Just For You',
      image: require('../../assets/image/P6.png'),
      type: 'arrow',
    },
  ];
  const items = [
    'Dresses',
    'Pants',
    'Skirts',
    'Shorts',
    'Jackets',
    'Hoodies',
    'Shirts',
    'Polo',
    'T-Shirts',
    'Tunics',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>All Categories</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Close2 />
        </TouchableOpacity>
      </View>

      {/* Selector Options */}
      <View style={styles.selectorView}>
        {option.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.Selector,
              focused === index && styles.FocusedSelector,
            ]}
            onPress={() => setFocused(index)}>
            <Text
              style={[
                styles.Slectortext,
                focused === index && styles.FocusedSlectortext,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView>
        {/* Product List */}
        <View style={{marginHorizontal: 20}}>
          {Productes.map((product, index) => (
            <View key={index}>
              {/* Product Header */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 5,
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  borderRadius: 10,
                  marginVertical: 5,
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                  <Image
                    source={product.image}
                    resizeMode="cover"
                    style={{height: 45, width: 45, borderRadius: 5}}
                  />
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '700',
                      fontFamily: 'Raleway',
                      marginTop: 5,
                    }}>
                    {product.name}
                  </Text>
                </View>
                {product.type === 'arrow' ? (
                  <ArrowButton onPress={()=>{navigation.navigate('ChatScreen')}} />
                ) : (
                  <TouchableOpacity
                    onPress={() => setIsOpen(isOpen === index ? null : index)}>
                    {isOpen === index ? (
                      <DOWNARROW style={{margin: 10}} />
                    ) : (
                      <OPENARROW style={{margin: 10}} />
                    )}
                  </TouchableOpacity>
                )}
              </View>

              {/* Subcategories */}
              {isOpen === index && (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 5,
                    marginVertical: 10,
                    flexWrap: 'wrap',
                  }}>
                  {items.map((item, idx) => (
                    <View
                      key={idx}
                      style={{
                        width: '49%',
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#FFEBEB',
                        borderRadius: 5,
                        borderWidth: 2,
                        marginVertical: 3,
                      }}>
                      <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 15,
                          fontFamily: 'Raleway',
                        }}>
                        {item}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    ...typography.textBold28,
    ...typography.Raleway,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  selectorView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'space-evenly',
  },
  FocusedSelector: {
    backgroundColor: '#E5EBFC',
    borderColor: COLORS.primaryButton,
    borderWidth: 1,
  },
  FocusedSlectortext: {
    color: COLORS.primaryButton,
  },
  Selector: {
    height: 38,
    width: '31%',
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  Slectortext: {
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'Raleway',
  },
});

export default Categories;
