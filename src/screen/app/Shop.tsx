// import React from 'react';
// import {View, Text, StyleSheet, SafeAreaView, ScrollView, Touchable, TouchableOpacity, StatusBar} from 'react-native';
// import commonStyle, {windowHeight, windowWidth} from '../../style/commonStyle';
// import typography from '../../style/typography';
// import Categories from '../../component/Categories';
// import TopProducts from '../../component/TopProducts';
// import NewItem from '../../component/NewItem';
// import FlashSale from '../../component/FlashSale';
// import MostPopular from '../../component/MostPopular.';
// import JustForYou from '../../component/JustForYou';

// import { NavigationProp } from '@react-navigation/native';

// interface ShopScreenProps{
//   navigation: NavigationProp<any>;
// }

// const Shop:React.FC<ShopScreenProps> = ({navigation}) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
//         <ScrollView>
//       <View style={[commonStyle.mh20]}>
//         <View>
//           <Text style={[typography.textBold28, typography.Raleway]}>Shop</Text>
//         </View>
//         <View></View>
//       </View>
//       <TouchableOpacity style={{backgroundColor: 'grey', height: 170, margin: 20, justifyContent:'center', alignItems:'center'}} onPress={()=>{
//         navigation.navigate('SearchScreen')
//       }}>
//         <Text>
//             Banner View
//         </Text>
//       </TouchableOpacity>
//       <View>
//         <Categories/>
//         <TopProducts/>
//         <NewItem/>
//         <FlashSale/>
//         <MostPopular/>
//         <JustForYou/>
//       </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: windowWidth,
//     height: windowHeight,
//     backgroundColor: '#fff',
//   },
// });

// export default Shop;


import React, { useCallback } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import commonStyle, { windowHeight, windowWidth } from '../../style/commonStyle';
import typography from '../../style/typography';
import Categories from '../../component/Categories';
import TopProducts from '../../component/TopProducts';
import NewItem from '../../component/NewItem';
import FlashSale from '../../component/FlashSale';
import MostPopular from '../../component/MostPopular.';
import JustForYou from '../../component/JustForYou';
import { NavigationProp } from '@react-navigation/native';
import CategoriesSelector from '../../component/CategoriesSelector';

interface ShopScreenProps {
  navigation: NavigationProp<any>;
}

const Shop: React.FC<ShopScreenProps> = ({ navigation }) => {
  const navigateToSearch = useCallback(() => {
    navigation.navigate('SearchScreen');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <ScrollView>
        <View style={commonStyle.mh20}>
          <View>
            <Text style={[typography.textBold28, typography.Raleway]}>Shop</Text>
          </View>
            <CategoriesSelector/>
        </View>
        <TouchableOpacity
          style={styles.banner}
          onPress={navigateToSearch}
        >
          <Text>Banner View</Text>
        </TouchableOpacity>
        <Categories />
        <TopProducts />
        <NewItem />
        <FlashSale />
        <MostPopular />
        <JustForYou />
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
});

export default Shop;