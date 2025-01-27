// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   Image,
//   FlatList,
// } from 'react-native';
// import CustomContainer from '../../component/CustomeContainer';
// import commonStyle from '../../style/commonStyle';
// import PhotoFrame from '../../component/PhotoFrame';
// import {COLORS} from '../../consts/COLOR';
// import typography from '../../style/typography';
// import Scanner from '../../logo/Scanner.svg';
// import Menu from '../../logo/Menu.svg';
// import Setting from '../../logo/Setting.svg';

// import {NavigationProp} from '@react-navigation/native';

// interface Props {
//   navigation: NavigationProp<any>;
// }

// const ToReceiveScreen: React.FC<Props> = ({navigation}) => {
//   const orders = [
//     {
//       id: '1',
//       orderId: '#92287157',
//       deliveryType: 'Standard Delivery',
//       status: 'Packed',
//       items: 3,
//       action: 'Track', // Button action
//       images: [
//         require('../../assets/image/NI2.png'),
//         require('../../assets/image/FS3.png'),
//         require('../../assets/image/FS5.png'),
//       ],
//     },
//     {
//       id: '2',
//       orderId: '#92287157',
//       deliveryType: 'Standard Delivery',
//       status: 'Shipped',
//       items: 4,
//       action: 'Track', // Button action
//       images: [
//         require('../../assets/image/TR1.png'),
//         require('../../assets/image/S1.png'),
//         require('../../assets/image/FS6.png'),
//         require('../../assets/image/FS1.png'),
//       ],
//     },
//     {
//       id: '3',
//       orderId: '#92287157',
//       deliveryType: 'Standard Delivery',
//       status: 'Delivered',
//       items: 2,
//       action: 'Review', // Button action
//       images: [
//         require('../../assets/image/FS4.png'),
//         require('../../assets/image/FS5.png'),
//       ],
//     },
//     {
//       id: '4',
//       orderId: '#92287157',
//       deliveryType: 'Standard Delivery',
//       status: 'Delivered',
//       items: 5,
//       action: 'Review', // Button action
//       images: [
//         require('../../assets/image/TR1.png'),
//         require('../../assets/image/S1.png'),
//         require('../../assets/image/FS6.png'),
//         require('../../assets/image/FS1.png'),
//         require('../../assets/image/FS5.png'),
//       ],
//     },
//     {
//       id: '5',
//       orderId: '#92287157',
//       deliveryType: 'Standard Delivery',
//       status: 'Delivered',
//       items: 1,
//       action: 'Review', // Button action
//       images: [require('../../assets/image/FS6.png')],
//     },
//   ];
//   const renderItem = ({item}: {item: (typeof orders)[0]}) => (
//     <View style={styles.card}>
//       {/* Images */}
//       <View style={styles.imagesContainer}>
//         {item.images.map((image, index) => (
//           <Image key={index} source={image} style={styles.image} />
//         ))}
//       </View>

//       {/* Order Details */}
//       <View style={styles.detailsContainer}>
//         <Text style={styles.orderId}>
//           Order <Text style={styles.boldText}>{item.orderId}</Text>
//         </Text>
//         <Text style={styles.deliveryType}>{item.deliveryType}</Text>
//         <Text style={styles.status}>{item.status}</Text>
//       </View>

//       {/* Items Count and Action Button */}
//       <View style={styles.actionContainer}>
//         <Text style={styles.itemsCount}>{item.items} items</Text>
//         <TouchableOpacity style={styles.actionButton}>
//           <Text style={styles.actionButtonText}>{item.action}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView>
//       <View
//         style={[
//           commonStyle.flexDirectionRow,
//           commonStyle.justifyContentSpaceB,
//           commonStyle.alignItemsCenter,
//           commonStyle.ph20,
//         ]}>
//         <View
//           style={[
//             commonStyle.flexDirectionRow,
//             commonStyle.alignItemsCenter,
//             {gap: 13},
//           ]}>
//           <PhotoFrame size={43} url={require('../../assets/image/RV1.png')} />

//           <View>
//             <Text style={{fontSize: 21, ...typography.RaleWay700}}>
//               To Recieve
//             </Text>
//             <Text style={{fontSize: 14, ...typography.RaleWay500}}>
//               My Orders
//             </Text>
//           </View>
//         </View>
//         <View style={[commonStyle.flexDirectionRow, {gap: 10}]}>
//           <CustomContainer
//             SvgComponent={Scanner}
//             onPress={() => {
//               navigation.navigate('VoucherScreen');
//             }}
//           />
//           <CustomContainer SvgComponent={Menu} badgeCount={1} />
//           <CustomContainer
//             SvgComponent={Setting}
//             onPress={() => {
//               navigation.navigate('SettingsStack');
//             }}
//           />
//         </View>
//       </View>
//       <View>
//         <FlatList
//           data={orders}
//           keyExtractor={item => item.id}
//           renderItem={renderItem}
//           contentContainerStyle={styles.listContainer}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 20,
//     color: '#000',
//   },
//   listContainer: {
//     padding: 10,
//   },
//   card: {
//     flexDirection: 'row',
//     backgroundColor: '#F1F4FE',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 15,
//     alignItems: 'center',
//   },
//   imagesContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     width: 70,
//     height: 70,
//     borderRadius: 10,
//     overflow: 'hidden',
//     marginRight: 10,
//   },
//   image: {
//     width: 35,
//     height: 35,
//     margin: 2,
//     borderRadius: 5,
//   },
//   detailsContainer: {
//     flex: 1,
//   },
//   orderId: {
//     fontSize: 14,
//     color: '#000',
//     marginBottom: 3,
//   },
//   deliveryType: {
//     fontSize: 12,
//     color: '#777',
//     marginBottom: 3,
//   },
//   status: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   actionContainer: {
//     alignItems: 'flex-end',
//   },
//   itemsCount: {
//     fontSize: 12,
//     backgroundColor: '#F9F9F9',
//     paddingVertical: 2,
//     paddingHorizontal: 8,
//     borderRadius: 5,
//     color: '#000',
//     marginBottom: 8,
//   },
//   actionButton: {
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//   },
//   actionButtonText: {
//     fontSize: 14,
//     color: '#FFF',
//   },
//   boldText: {
//     fontWeight: 'bold',
//   },
// });

// export default ToReceiveScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import CustomContainer from '../../component/CustomeContainer';
import commonStyle from '../../style/commonStyle';
import PhotoFrame from '../../component/PhotoFrame';
import {COLORS} from '../../consts/COLOR';
import typography from '../../style/typography';
import Scanner from '../../logo/Scanner.svg';
import Menu from '../../logo/Menu.svg';
import Setting from '../../logo/Setting.svg';

import {NavigationProp} from '@react-navigation/native';
import BottomBarView from '../../component/BottomBarView';

interface Props {
  navigation: NavigationProp<any>;
}

const ToReceiveScreen: React.FC<Props> = ({navigation}) => {
  const [isReviewSelectionModalVisible, setIsReviewSelectionModalVisible] =
    useState(false);
  const [isReviewwriteModalVisible, setIsReviewwriteModalVisible] =
    useState(false);
  const [isReviewSuccessModalVisible, setIsReviewSuccessModalVisible] =
    useState(false);
  const orders = [
    {
      id: '1',
      orderId: '#92287157',
      deliveryType: 'Standard Delivery',
      status: 'Packed',
      items: 3,
      action: 'Track',
      images: [
        require('../../assets/image/NI2.png'),
        require('../../assets/image/FS3.png'),
        require('../../assets/image/FS5.png'),
      ],
    },
    {
      id: '2',
      orderId: '#92287157',
      deliveryType: 'Standard Delivery',
      status: 'Shipped',
      items: 4,
      action: 'Track',
      images: [
        require('../../assets/image/TR1.png'),
        require('../../assets/image/S1.png'),
        require('../../assets/image/FS6.png'),
        require('../../assets/image/FS1.png'),
      ],
    },
    {
      id: '3',
      orderId: '#92287157',
      deliveryType: 'Standard Delivery',
      status: 'Delivered',
      items: 2,
      action: 'Review',
      images: [
        require('../../assets/image/FS4.png'),
        require('../../assets/image/FS5.png'),
      ],
    },
    {
      id: '4',
      orderId: '#92287157',
      deliveryType: 'Standard Delivery',
      status: 'Delivered',
      items: 5,
      action: 'Review',
      images: [
        require('../../assets/image/TR1.png'),
        require('../../assets/image/S1.png'),
        require('../../assets/image/FS6.png'),
        require('../../assets/image/FS1.png'),
        require('../../assets/image/FS5.png'),
      ],
    },
    {
      id: '5',
      orderId: '#92287157',
      deliveryType: 'Standard Delivery',
      status: 'Delivered',
      items: 1,
      action: 'Review',
      images: [require('../../assets/image/FS6.png')],
    },
  ];

  const renderItem = ({item}: {item: (typeof orders)[0]}) => {
    const handlePress = () => {
      if (item.status === 'Delivered') {
        navigation.navigate('ReviewScreen');
      } else {
        navigation.navigate('TrackScreen');
      }
    };

    const imageCount = item.images.length;
    const containerHeight = imageCount > 2 ? 100 : 100; // Adjust container height dynamically
    const justifyContent = imageCount === 1 ? 'center' : 'space-between'; // Center single image

    return (
      <View style={styles.card}>
        {/* Images */}
        <View
          style={[
            styles.imagesContainer,
            {
              height: containerHeight,
              justifyContent: justifyContent,
            },
          ]}>
          {item.images.slice(0, 4).map((image, index) => (
            <Image
              key={index}
              source={image}
              style={[
                styles.image,
                {
                  width:
                    imageCount === 1
                      ? '100%'
                      : imageCount === 2
                      ? '48%'
                      : imageCount === 3
                      ? index === 2
                        ? '100%'
                        : '48%'
                      : '48%',
                  height:
                    imageCount === 1
                      ? '100%'
                      : imageCount === 2
                      ? '100%'
                      : '49%',
                },
              ]}
            />
          ))}
        </View>

        {/* Order Details */}
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.orderId}>Order {item.orderId}</Text>
            <Text style={styles.deliveryType}>{item.deliveryType}</Text>
          </View>
          <Text style={styles.status}>{item.status}</Text>
        </View>

        {/* Items Count and Action Button */}
        <View style={styles.actionContainer}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F9F9F9',
              height: 22,
              width: 60,
              borderRadius: 5,
            }}>
            <Text style={styles.itemsCount}>{item.items} items</Text>
          </View>

          <TouchableOpacity
            onPress={handlePress}
            style={
              item.status === 'Delivered'
                ? styles.ReviewButton
                : styles.actionButton
            }>
            <Text
              style={
                item.status === 'Delivered'
                  ? styles.ReviewButtonText
                  : styles.actionButtonText
              }>
              {item.action}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
      <SafeAreaView />
      <View
        style={[
          commonStyle.flexDirectionRow,
          commonStyle.justifyContentSpaceB,
          commonStyle.alignItemsCenter,
          commonStyle.ph20,
        ]}>
        <View
          style={[
            commonStyle.flexDirectionRow,
            commonStyle.alignItemsCenter,
            {gap: 13},
          ]}>
          <PhotoFrame size={43} url={require('../../assets/image/RV1.png')} />

          <View>
            <Text style={{fontSize: 21, ...typography.RaleWay700}}>
              To Receive
            </Text>
            <Text style={{fontSize: 14, ...typography.RaleWay500}}>
              My Orders
            </Text>
          </View>
        </View>
        <View style={[commonStyle.flexDirectionRow, {gap: 10}]}>
          <CustomContainer
            SvgComponent={Scanner}
            onPress={() => {
              navigation.navigate('VoucherScreen');
            }}
          />
          <CustomContainer SvgComponent={Menu} badgeCount={1} />
          <CustomContainer
            SvgComponent={Setting}
            onPress={() => {
              navigation.navigate('SettingsStack');
            }}
          />
        </View>
      </View>
      <View>
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          ListFooterComponent={
            <>
              <BottomBarView />
              <BottomBarView />
            </>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    // backgroundColor:'red'
  },
  card: {
    flexDirection: 'row',
    // backgroundColor: '#F1F4FE',
    borderRadius: 10,
    padding: 10,
    // marginBottom: 15,
    alignItems: 'center',
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 100,
    height: 'auto',
    borderRadius: 10,
    // overflow: 'hidden',
    backgroundColor: 'white',
    marginRight: 10,
    alignItems: 'center',
    padding: 5,
    gap: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 2.84,
    elevation: 5,
  },
  image: {
    width: '47%',
    height: '47%',
    // margin: ,
    borderRadius: 5,
  },
  detailsContainer: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    height: 100,
    paddingVertical: 5,
  },
  orderId: {
    fontSize: 14,
    ...typography.RaleWay700,
    marginBottom: 3,
    lineHeight: 18,
  },
  deliveryType: {
    fontSize: 14,
    ...typography.RaleWay500,
    marginBottom: 3,
    lineHeight: 18,
  },
  status: {
    fontSize: 18,
    ...typography.RaleWay800,
    color: '#000',
  },
  actionContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingVertical: 5,
    // backgroundColor:'red',
    height: 100,
  },
  itemsCount: {
    fontSize: 13,
    ...typography.RaleWay500,
  },
  actionButton: {
    backgroundColor: '#004CFF',
    borderRadius: 10,
    width: 85,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    ...typography.RaleWay500,
    color: '#FFF',
  },
  ReviewButton: {
    backgroundColor: '#white',
    borderRadius: 10,
    borderColor: COLORS.primaryButton,
    borderWidth: 2,
    width: 85,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ReviewButtonText: {
    fontSize: 16,
    ...typography.RaleWay500,
    color: COLORS.primaryButton,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default ToReceiveScreen;
