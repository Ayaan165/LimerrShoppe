import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ViewPropsIOS,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Button, TouchableButton} from './Button';
import {windowHeight, windowWidth} from '../style/commonStyle';
import StarRating from 'react-native-star-rating-widget';
import typography from '../style/typography';
import {COLORS} from '../consts/COLOR';
import PhotoFrame from './PhotoFrame';
import Check from '../logo/Check.svg';
import {BlurView} from '@react-native-community/blur';
import {StarRatingDisplay} from 'react-native-star-rating-widget';

const ReviewItemSelectionModal = () => {
  return (
    <View>
      <Text>ReviewModal</Text>
    </View>
  );
};

const ReviewWriteModal = ({
  item,
  onPress,
}: {
  item: any;
  onPress: () => void;
}) => {
  const [rating, setRating] = useState(0);
  return (
    <View
      style={{
        paddingBottom: 30,
        height: windowHeight,
        width: windowWidth,
        justifyContent: 'flex-end',
      }}>
      <BlurView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <View
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View
          style={{
            padding: 20,
            height: 80,
            width: windowWidth,
            backgroundColor: '#F8FAFF',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 22, ...typography.RaleWay700}}>Review</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <View style={{marginHorizontal: 10, marginVertical: 10}}>
            <Image
              source={item.image}
              style={{
                height: 40,
                width: 40,
                alignSelf: 'center',
                borderRadius: 20,
              }}
            />
          </View>
          <View style={{backgroundColor: 'white'}}>
            <Text style={{fontSize: 12, ...typography.Nunito400}}>
              {item.description}
            </Text>
            <Text style={{fontSize: 14, ...typography.RaleWay700}}>
              Order {item.orderId}
            </Text>
          </View>
        </View>
        <View
          style={{paddingHorizontal: 20, marginVertical: 10, marginBottom: 20}}>
          <StarRating
            rating={rating}
            onChange={setRating}
            color="#ECA61B"
            enableSwiping={false}
            enableHalfStar={false}
            starSize={35}
            animationConfig={{duration: 100, scale: 1}}
          />
        </View>
        <View style={{backgroundColor: 'white'}}>
          <TextInput
            value="Your comment"
            multiline={true}
            style={{
              height: 100,
              backgroundColor: '#F1F4FE', // Light blue background
              borderRadius: 10,
              padding: 10,
              fontSize: 16,
              color: '#000', // Black text color
              marginHorizontal: 20,
              textAlignVertical: 'top',
            }}
          />
        </View>
        <TouchableButton
          title="Say it!"
          onPress={onPress}
          style={{
            height: 40,
            width: windowWidth - 40,
            backgroundColor: COLORS.primaryButton,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            alignSelf: 'center',
          }}
          TextStyle={{
            fontSize: 16,
            color: 'white',
            ...typography.Nunito300,
          }}
        />
      </View>
    </View>
  );
};

const ReviewSucessModal = ({rating}: {rating: number}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <BlurView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 20,
          marginHorizontal: 20,
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: 190,
          width: windowWidth - 40,
        }}>
        <View
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: -40,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: '#E5EBFC',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
            }}>
            <Check />
          </View>
        </View>
        <Text
          style={{
            fontSize: 19,
            ...typography.RaleWay700,
            lineHeight: 27,
            marginVertical: 7,
          }}>
          Done!
        </Text>
        <Text
          style={{
            ...typography.Nunito600,
            fontSize: 13,
            lineHeight: 20,
            marginBottom: 12,
          }}>
          Thank you for your review
        </Text>
        <StarRatingDisplay
          rating={5}
          color="#ECA61B"
          starSize={35}
          style={{marginBottom: 15}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    ...typography.Nunito400,
    lineHeight: 16,
  },
  date: {
    fontSize: 13,
    ...typography.RaleWay500,
    textAlign: 'center',
  },
  orderId: {
    fontSize: 14,
    ...typography.RaleWay700,
    color: '#202020',
    marginBottom: 5,
  },
  actionText: {
    fontSize: 16,
    color: COLORS.primaryButton,
    ...typography.RaleWay500,
  },
  item: {
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    height: 110,
    // backgroundColor: '#F9F9F9',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export {ReviewItemSelectionModal, ReviewWriteModal, ReviewSucessModal};

// const renderItem = () => {
//     return(
//     <View style={styles.item}>
//       <Modal
//         visible={isReviewwriteModalVisible}
//         transparent={true}
//         animationType="slide">
//         <ReviewWriteModal
//           item={selectedItem}
//           onPress={() => {
//             setIsReviewwriteModalVisible(false);
//           }}
//         />
//       </Modal>
//       <View
//         style={{
//           width: '35%',
//           height: 110,
//           borderRadius: 10,
//           //   overflow: 'hidden',
//           borderColor: 'white',
//           borderWidth: 2,
//           shadowColor: '#000',
//           shadowOffset: {
//             width: 0,
//             height: 2,
//           },
//           justifyContent: 'center',
//           alignItems: 'center',
//           shadowOpacity: 0.25,
//           shadowRadius: 3.84,
//           elevation: 5,
//           //   padding:5
//         }}>
//         <Image
//           source={item.image}
//           style={{width: '99%', height: '99%', borderRadius: 9}}
//         />
//       </View>
//       <View
//         style={{
//           marginLeft: 10,
//           flex: 1,
//           height: '100%',
//           justifyContent: 'space-between',
//         }}>
//         <Text style={styles.title}>{item.description}</Text>
//         <Text style={styles.orderId}>Order {item.orderId}</Text>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             width: '100%',
//             gap: 5,
//           }}>
//           <View
//             style={{
//               backgroundColor: '#F9F9F9',
//               //   padding: 5,
//               borderRadius: 10,
//               flex: 1,
//               justifyContent: 'center',
//               alignItems: 'center',
//               height: 30,
//             }}>
//             <Text style={styles.date}>{item.date}</Text>
//           </View>
//           <TouchableOpacity
//             style={{
//               flex: 1,
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: 'white',
//               borderColor: COLORS.primaryButton,
//               borderWidth: 2,
//               borderRadius: 10,
//               height: 30,
//             }}
//             onPress={() => {
//               setSelectedItem(item);
//               setIsReviewwriteModalVisible(true);
//             }}>
//             <Text style={styles.actionText}>{item.action}</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>);
//   }
