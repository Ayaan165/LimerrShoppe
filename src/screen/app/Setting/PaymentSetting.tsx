// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Dimensions,
//   Modal,
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import Setting from '../../../logo/Setting.svg';
// import Mastercard from '../../../logo/Mastercard.svg';
// import {windowWidth} from '../../../style/commonStyle';
// import {COLORS} from '../../../consts/COLOR';
// import typography from '../../../style/typography';
// import AddCard from '../../../logo/AddCard.svg';
// import FromApp from '../../../logo/FromApp.svg';
// import RedAppIcon from '../../../logo/RedAppIcon.svg';
// import {BlurView} from '@react-native-community/blur';
// import BottomBarView, {BottomBarHeight} from '../../../component/BottomBarView';
// import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
// import {G} from 'react-native-svg';
// import GestureRecognizer from 'react-native-swipe-gestures';

// const screenWidth = Dimensions.get('window').width;

// interface PaymentMethodsProps {
//   navigation: NavigationProp<any>;
// }

// const PaymentMethods: React.FC<PaymentMethodsProps> = ({navigation}) => {
//   const [AddCardModalVisible, setAddCardModalVisible] = useState(false);
//   const historyData = [
//     {
//       id: '1',
//       date: 'April, 19 2020 12:31',
//       orderId: '#92287157',
//       amount: '-$14.00',
//       icon: <FromApp />, // Replace with the actual icon if needed
//       color: 'blue', // Blue color
//     },
//     {
//       id: '2',
//       date: 'April, 19 2020 12:31',
//       orderId: '#92287157',
//       amount: '-$37.00',
//       icon: <RedAppIcon />, // Replace with the actual icon if needed
//       color: 'red', // Red color
//     },
//     {
//       id: '3',
//       date: 'April, 19 2020 12:31',
//       orderId: '#92287157',
//       amount: '-$21.00',
//       icon: <FromApp />, // Replace with the actual icon if needed
//       color: 'blue', // Blue color
//     },
//     {
//       id: '4',
//       date: 'April, 19 2020 12:31',
//       orderId: '#92287157',
//       amount: '-$75.00',
//       icon: <FromApp />, // Replace with the actual icon if needed
//       color: 'blue', // Blue color
//     },
//     {
//       id: '5',
//       date: 'April, 19 2020 12:31',
//       orderId: '#92287157',
//       amount: '-$214.00',
//       icon: <FromApp />, // Replace with the actual icon if needed
//       color: 'blue', // Blue color
//     },
//     {
//       id: '6',
//       date: 'April, 19 2020 12:31',
//       orderId: '#92287157',
//       amount: '-$53.00',
//       icon: <FromApp />, // Replace with the actual icon if needed
//       color: 'blue', // Blue color
//     },
//   ];
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <Modal transparent={true}>
//         <AddCardModal />
//       </Modal> */}
//       <CardSlider navigation={navigation} />
//       <View style={styles.header}>
//         <Text style={styles.title}>Settings</Text>
//         <Text style={styles.subtitle}>Payment Methods</Text>
//       </View>
//       <View>
//         <CardSlider navigation={navigation} />
//       </View>
//       {historyData.map((item, index) => (
//         <View
//           key={index}
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             paddingHorizontal: 18,
//             alignItems: 'center',
//             paddingVertical: 10,
//             backgroundColor: '#F1F4FE',
//             marginVertical: 5,
//             marginHorizontal: 20,
//             borderRadius: 15,
//           }}>
//           <View style={{flexDirection: 'row', alignItems: 'center'}}>
//             <View
//               style={{
//                 marginRight: 8,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               {item.icon}
//             </View>
//             <View style={{marginLeft: 10}}>
//               <Text
//                 style={{fontSize: 10, ...typography.Nunito600, lineHeight: 14}}>
//                 {item.date}
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   ...typography.RaleWay700,
//                   color: '#202020',
//                   lineHeight: 18,
//                 }}>
//                 Order {item.orderId}
//               </Text>
//             </View>
//           </View>
//           <Text
//             style={{
//               fontSize: 17,
//               ...typography.RaleWay700,
//               color: item.color === 'red' ? '#D97474' : '#000',
//             }}>
//             {item.amount}
//           </Text>
//         </View>
//       ))}
//     </SafeAreaView>
//   );
// };

// function CardSlider({navigation}: {navigation: NavigationProp<any>}) {
//   const [CardInfo, setCardInfo] = useState([
//     {
//       id: '1',
//       cardType: 'Mastercard',
//       cardNumber: ['****', '****', '****', '1579'],
//       cardHolder: 'AMANDA MORGAN',
//       expiry: '12/22',
//     },
//     // {
//     //   id: '2',
//     //   cardType: 'Visa',
//     //   cardNumber: ['****', '****', '****', '4321'],
//     //   cardHolder: 'JOHN DOE',
//     //   expiry: '11/24',
//     // },
//     // {
//     //   id: '3',
//     //   cardType: 'Visa',
//     //   cardNumber: ['****', '****', '****', '9876'],
//     //   cardHolder: 'JANE SMITH',
//     //   expiry: '01/25',
//     // },
//   ]);
//   const handleAddCard = () => {
//     setCardInfo([
//       ...CardInfo,
//       {
//         id: `${CardInfo.length + 1}`,
//         cardType: 'NewCard',
//         cardNumber: ['****', '****', '****', '1234'],
//         cardHolder: 'NEW CARD',
//         expiry: 'MM/YY',
//       },
//     ]);
//   };

//   const renderItem = ({item}: {item: (typeof CardInfo)[0]}) => (
//     <View style={styles.cardContainer}>
//       <View style={styles.card}>
//         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//           <Mastercard />
//           <TouchableOpacity
//             style={styles.settingsIconContainer}
//             onPress={() => navigation.navigate('EditCardDetailsModal')}>
//             <Setting />
//           </TouchableOpacity>
//         </View>
//         <View>
//           <View style={styles.cardNumberRow}>
//             {item.cardNumber.map((chunk, index) => (
//               <Text key={index} style={styles.cardNumberChunk}>
//                 {chunk}
//               </Text>
//             ))}
//           </View>
//           <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//             <Text style={styles.cardHolder}>{item.cardHolder}</Text>
//             <Text style={styles.expiry}>{item.expiry}</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <FlatList
//       data={CardInfo}
//       keyExtractor={item => item.id}
//       renderItem={renderItem}
//       horizontal
//       pagingEnabled
//       showsHorizontalScrollIndicator={false}
//       snapToAlignment="center"
//       snapToInterval={screenWidth * 0.75 + 40}
//       decelerationRate="fast"
//       contentContainerStyle={styles.listContainer}
//       ListFooterComponent={
//         <TouchableOpacity
//           style={styles.addCardContainer}
//           onPress={handleAddCard}>
//           <AddCard />
//         </TouchableOpacity>
//       }
//     />
//   );
// }

// import {NavigationProp} from '@react-navigation/native';
// import {SettingInput} from '../../../component/Input';
// import {TouchableButton} from '../../../component/Button';

// interface AddCardModalProps {
//   navigation: NavigationProp<any>;
// }

// const AddCardModal: React.FC<AddCardModalProps> = ({navigation}) => {
//   const bottomHeight = useBottomTabBarHeight();
//   return (
//     <SafeAreaView style={[styles.ModalContainer]}>
//       <BlurView
//         blurAmount={3}
//         blurType="light"
//         style={{
//           flex: 1,
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//         }}
//       />
//       <GestureRecognizer
//         style={{flex: 1}}
//         onSwipeDown={() => {
//           navigation.goBack();
//         }}
//       />
//       <View style={{backgroundColor: 'white', paddingBottom: bottomHeight}}>
//         <View
//           style={{
//             height: 80,
//             justifyContent: 'center',
//             backgroundColor: '#F8FAFF',
//             borderTopRightRadius: 20,
//             borderTopLeftRadius: 20,
//           }}>
//           <Text
//             style={{
//               fontSize: 22,
//               ...typography.RaleWay700,
//               paddingHorizontal: 20,
//             }}>
//             Payment Methods
//           </Text>
//         </View>
//         <View style={{paddingTop: 10, backgroundColor: 'white'}}>
//           <CardSlider navigation={navigation} />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const AddCardDetailsModal = () => {
//   const bottomHeight = useBottomTabBarHeight();
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'flex-end',
//         paddingBottom: bottomHeight,
//       }}>
//       <BlurView
//         blurType="light"
//         blurAmount={10}
//         reducedTransparencyFallbackColor="white"
//         style={{
//           flex: 1,
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//         }}
//       />
//       <View>
//         <View
//           style={{
//             backgroundColor: '#F8FAFF',
//             justifyContent: 'center',
//             height: 80,
//             borderTopRightRadius: 20,
//             borderTopLeftRadius: 20,
//             paddingHorizontal: 20,
//           }}>
//           <Text style={{fontSize: 22, ...typography.RaleWay700}}>
//             Edit Card
//           </Text>
//         </View>
//         <View style={{padding: 20, backgroundColor: 'white'}}>
//           <SettingInput
//             placeholder="Required"
//             type={'default'}
//             label="Card Holder"
//           />
//           <SettingInput
//             placeholder="Required"
//             type={'default'}
//             label="Card Number"
//           />
//           <View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 gap: 10,
//               }}>
//               <View style={{flex: 1}}>
//                 <SettingInput
//                   placeholder="Required"
//                   type={'default'}
//                   label="valid"
//                 />
//               </View>
//               <View style={{flex: 1}}>
//                 <SettingInput
//                   placeholder="Required"
//                   type={'default'}
//                   label="CVV"
//                 />
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const EditCardDetailsModal: React.FC<{navigation: NavigationProp<any>}> = ({
//   navigation,
// }) => {
//   const bottomHeight = useBottomTabBarHeight();
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'flex-end',
//         paddingBottom: bottomHeight,
//       }}>
//       <BlurView
//         blurType="light"
//         blurAmount={10}
//         reducedTransparencyFallbackColor="white"
//         style={{
//           flex: 1,
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//         }}
//       />
//       <View>
//         <View
//           style={{
//             backgroundColor: '#F8FAFF',
//             justifyContent: 'center',
//             height: 80,
//             borderTopRightRadius: 20,
//             borderTopLeftRadius: 20,
//             paddingHorizontal: 20,
//           }}>
//           <Text style={{fontSize: 22, ...typography.RaleWay700}}>
//             Edit Card
//           </Text>
//         </View>
//         <View style={{padding: 20, backgroundColor: 'white'}}>
//           <SettingInput
//             placeholder="Required"
//             type={'default'}
//             label="Card Holder"
//           />
//           <SettingInput
//             placeholder="Required"
//             type={'default'}
//             label="Card Number"
//           />
//           <View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 gap: 10,
//               }}>
//               <View style={{flex: 1}}>
//                 <SettingInput
//                   placeholder="Required"
//                   type={'default'}
//                   label="valid"
//                 />
//               </View>
//               <View style={{flex: 1}}>
//                 <SettingInput
//                   placeholder="Required"
//                   type={'default'}
//                   label="CVV"
//                 />
//               </View>
//             </View>
//           </View>
//           <View>
//             <TouchableButton
//               title="Save Changes"
//               onPress={() => {
//                 navigation.goBack();
//               }}
//               style={{
//                 width: '100%',
//                 marginTop: 10,
//                 height: 40,
//                 borderRadius: 10,
//               }}
//               TextStyle={{
//                 fontSize: 16,
//                 ...typography.Nunito300,
//                 color: 'white',
//               }}
//             />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   ModalContainer: {
//     flex: 1,
//     // zIndex: 1,
//     justifyContent: 'flex-end',
//   },
//   header: {
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#555',
//   },
//   listContainer: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginBottom: 10,
//   },
//   cardContainer: {
//     width: screenWidth * 0.75, // Card width is 80% of screen
//     marginRight: 15, // Margin between cards
//   },
//   card: {
//     justifyContent: 'space-between',
//     backgroundColor: '#F1F4FE',
//     borderRadius: 10,
//     padding: 20,
//     height: 170,
//   },
//   settingsIconContainer: {
//     height: 35,
//     width: 35,
//     borderRadius: 35 / 2,
//     backgroundColor: '#E5EBFC',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cardNumberRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   cardNumberChunk: {
//     fontSize: 16,
//     ...typography.Nunito600,
//     color: '#202020',
//   },
//   cardHolder: {
//     fontSize: 12,
//     ...typography.Nunito600,
//     color: '#202020',
//   },
//   expiry: {
//     fontSize: 12,
//     ...typography.Nunito600,
//     color: '#202020',
//   },
//   addCardContainer: {
//     width: screenWidth * 0.25 - 45, // Add card width matches other cards
//     backgroundColor: COLORS.primaryButton,
//     // marginVertical: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//     height: 170,
//   },
//   addButton: {
//     position: 'absolute',
//     right: 20,
//     bottom: 20,
//     backgroundColor: '#007BFF',
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   addButtonText: {
//     fontSize: 30,
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default PaymentMethods;
// export {CardSlider, AddCardModal, AddCardDetailsModal, EditCardDetailsModal};

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import GestureRecognizer from 'react-native-swipe-gestures';
import Mastercard from '../../../logo/Mastercard.svg';
import Setting from '../../../logo/Setting.svg';
import AddCard from '../../../logo/AddCard.svg';
import FromApp from '../../../logo/FromApp.svg';
import RedAppIcon from '../../../logo/RedAppIcon.svg';
import {COLORS} from '../../../consts/COLOR';
import typography from '../../../style/typography';
import {TouchableButton} from '../../../component/Button';
import {SettingInput} from '../../../component/Input';

const screenWidth = Dimensions.get('window').width;

import {NavigationProp} from '@react-navigation/native';

const PaymentMethods = ({navigation}: {navigation: NavigationProp<any>}) => {
  const historyData = [
    {
      id: '1',
      date: 'April, 19 2020 12:31',
      orderId: '#92287157',
      amount: '-$14.00',
      icon: <FromApp />,
      color: 'blue',
    },
    {
      id: '2',
      date: 'April, 19 2020 12:31',
      orderId: '#92287157',
      amount: '-$37.00',
      icon: <RedAppIcon />,
      color: 'red',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Payment Methods</Text>
      </View>
      <View>
        <CardSlider navigation={navigation} />
      </View>
      <ScrollView>
        {historyData.map((item, index) => (
          <TransactionItem key={index} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const CardSlider = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [cardInfo, setCardInfo] = useState([
    {
      id: '1',
      cardType: 'Mastercard',
      cardNumber: ['****', '****', '****', '1579'],
      cardHolder: 'AMANDA MORGAN',
      expiry: '12/22',
    },
  ]);

  const renderItem = ({item}: {item: (typeof cardInfo)[0]}) => (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Mastercard />
          <TouchableOpacity
            style={styles.settingsIconContainer}
            onPress={() => navigation.navigate('EditCardModal')}>
            <Setting />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.cardNumberRow}>
            {item.cardNumber.map((chunk, index) => (
              <Text key={index} style={styles.cardNumberChunk}>
                {chunk}
              </Text>
            ))}
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.cardHolder}>{item.cardHolder}</Text>
            <Text style={styles.expiry}>{item.expiry}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={cardInfo}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      snapToInterval={screenWidth * 0.75 + 40}
      decelerationRate="fast"
      contentContainerStyle={styles.listContainer}
      ListFooterComponent={
        <TouchableOpacity
          style={styles.addCardContainer}
          onPress={() => {
            navigation.navigate('AddCardModal', {setCardInfo, cardInfo});
          }}>
          <AddCard />
        </TouchableOpacity>
      }
    />
  );
};

interface TransactionItemProps {
  item: {
    id: string;
    date: string;
    orderId: string;
    amount: string;
    icon: JSX.Element;
    color: string;
  };
}

const TransactionItem: React.FC<TransactionItemProps> = ({item}) => (
  <View style={styles.transactionContainer}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.iconContainer}>{item.icon}</View>
      <View style={{marginLeft: 10}}>
        <Text style={styles.transactionDate}>{item.date}</Text>
        <Text style={styles.transactionOrder}>Order {item.orderId}</Text>
      </View>
    </View>
    <Text
      style={{
        ...styles.transactionAmount,
        color: item.color === 'red' ? '#D97474' : '#000',
      }}>
      {item.amount}
    </Text>
  </View>
);

const AddCardModal = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: any;
}) => {
  const {setCardInfo, cardInfo} = route.params;
  const bottomHeight = useBottomTabBarHeight();
  const handleAddCard = () => {
    setCardInfo([
      ...cardInfo,
      {
        id: `${cardInfo.length + 1}`,
        cardType: 'NewCard',
        cardNumber: ['****', '****', '****', '1234'],
        cardHolder: 'NEW CARD',
        expiry: 'MM/YY',
      },
    ]);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.modalContainer}>
      <BlurView blurAmount={10} blurType="light" style={styles.blurView} />
      <GestureRecognizer style={{flex: 1}} onSwipeDown={() => {}}>
      </GestureRecognizer>
        <View style={[styles.modalContent, {paddingBottom: bottomHeight}]}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Add Card</Text>
          </View>
          <View style={styles.modalBody}>
            <SettingInput
              placeholder="Card Holder"
              type="default"
              label="Card Holder"
            />
            <SettingInput
              placeholder="Card Number"
              type="default"
              label="Card Number"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 10,
              }}>
              <View style={{flex: 1}}>
                <SettingInput
                  placeholder="Valid Until"
                  type="default"
                  label="Valid"
                />
              </View>
              <View style={{flex: 1}}>
                <SettingInput placeholder="CVV" type="default" label="CVV" />
              </View>
            </View>
            <TouchableButton
              title="Save"
              onPress={handleAddCard}
              style={{
                width: '100%',
                marginTop: 10,
                height: 40,
                borderRadius: 10,
              }}
              TextStyle={{
                fontSize: 16,
                ...typography.Nunito300,
                color: 'white',
              }}
            />
          </View>
        </View>
    </SafeAreaView>
  );
};

const EditCardModal = ({navigation}: {navigation: NavigationProp<any>}) => {
  const bottomHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView style={styles.modalContainer}>
      <BlurView blurAmount={10} blurType="light" style={styles.blurView} />
      <GestureRecognizer
        style={{flex: 1}}
        onSwipeDown={() => {
          navigation.goBack();
        }}></GestureRecognizer>
      <View style={[styles.modalContent, {paddingBottom: bottomHeight}]}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Edit Card</Text>
        </View>
        <View style={styles.modalBody}>
          <SettingInput
            placeholder="Card Holder"
            type="default"
            label="Card Holder"
          />
          <SettingInput
            placeholder="Card Number"
            type="default"
            label="Card Number"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 10,
            }}>
            <View style={{flex: 1}}>
              <SettingInput
                placeholder="Valid Until"
                type="default"
                label="Valid"
              />
            </View>
            <View style={{flex: 1}}>
              <SettingInput placeholder="CVV" type="default" label="CVV" />
            </View>
          </View>
          <TouchableButton
            title="Save Changes"
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              width: '100%',
              marginTop: 10,
              height: 40,
              borderRadius: 10,
            }}
            TextStyle={{
              fontSize: 16,
              ...typography.Nunito300,
              color: 'white',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const CardSelectModal: React.FC<{navigation: NavigationProp<any>}> = ({
  navigation,
}) => {
  const bottomHeight = useBottomTabBarHeight();
  return (
    <SafeAreaView style={styles.modalContainer}>
      <BlurView blurAmount={10} blurType="light" style={styles.blurView} />
      <GestureRecognizer
        style={{flex: 1}}
        onSwipeDown={() => {
          navigation.goBack();
        }}></GestureRecognizer>
      <View style={[styles.modalContent, {paddingBottom: bottomHeight}]}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Select Card</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <CardSlider navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  cardContainer: {
    width: screenWidth * 0.75,
    marginRight: 15,
  },
  card: {
    justifyContent: 'space-between',
    backgroundColor: '#F1F4FE',
    borderRadius: 10,
    padding: 20,
    height: 170,
  },
  settingsIconContainer: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    backgroundColor: '#E5EBFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardNumberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardNumberChunk: {
    fontSize: 16,
    ...typography.Nunito600,
    color: '#202020',
  },
  cardHolder: {
    fontSize: 12,
    ...typography.Nunito600,
    color: '#202020',
  },
  expiry: {
    fontSize: 12,
    ...typography.Nunito600,
    color: '#202020',
  },
  addCardContainer: {
    width: screenWidth * 0.25 - 45,
    backgroundColor: COLORS.primaryButton,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 170,
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#F1F4FE',
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  iconContainer: {
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionDate: {
    fontSize: 10,
    ...typography.Nunito600,
    lineHeight: 14,
  },
  transactionOrder: {
    fontSize: 14,
    ...typography.RaleWay700,
    color: '#202020',
    lineHeight: 18,
  },
  transactionAmount: {
    fontSize: 17,
    ...typography.RaleWay700,
  },
  modalContainer: {
    zIndex:1,
    flex: 1,
    justifyContent: 'flex-end',
  },
  blurView: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalHeader: {
    zIndex:1,
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#F8FAFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 22,
    ...typography.RaleWay700,
  },
  modalBody: {
    padding: 20,
  },
});

export default PaymentMethods;
export {CardSlider, AddCardModal, EditCardModal , CardSelectModal};
