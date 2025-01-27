import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import CustomContainer from '../../component/CustomeContainer';
import commonStyle from '../../style/commonStyle';
import typography from '../../style/typography';
import PhotoFrame from '../../component/PhotoFrame';
import Scanner from '../../logo/Scanner.svg';
import Menu from '../../logo/Menu.svg';
import Setting from '../../logo/Setting.svg';
import {ReviewSucessModal, ReviewWriteModal} from '../../component/ReviewModal';
import {NavigationProp} from '@react-navigation/native';
import {COLORS} from '../../consts/COLOR';

interface HistoryScreenProps {
  navigation: NavigationProp<any>;
}

const HistoryScreen: React.FC<HistoryScreenProps> = ({navigation}) => {
  const [isReviewwriteModalVisible, setIsReviewwriteModalVisible] =
    useState(false);
  const [isReviewSuccessModalVisible, setIsReviewSuccessModalVisible] =
    useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const reviews = [
    {
      id: '1',
      image: require('../../assets/image/card1.png'), // Replace with actual image path
      description: 'Lorem ipsum dolor sit amet consectetur.',
      orderId: '#92287157',
      date: 'April, 06',
      action: 'Review', // Button text
    },
    {
      id: '2',
      image: require('../../assets/image/card2.png'),
      description: 'Lorem ipsum dolor sit amet consectetur.',
      orderId: '#92287158',
      date: 'April, 06',
      action: 'Review',
    },
    {
      id: '3',
      image: require('../../assets/image/FS1.png'),
      description: 'Lorem ipsum dolor sit amet consectetur.',
      orderId: '#92287157',
      date: 'April, 06',
      action: 'Review',
    },
    {
      id: '4',
      image: require('../../assets/image/FS3.png'),
      description: 'Lorem ipsum dolor sit amet consectetur.',
      orderId: '#92287157',
      date: 'April, 06',
      action: 'Review',
    },
    {
      id: '5',
      image: require('../../assets/image/FS6.png'),
      description: 'Lorem ipsum dolor sit amet consectetur.',
      orderId: '#92287157',
      date: 'April, 06',
      action: 'Review',
    },
  ];

  const renderItem = ({
    item,
  }: {
    item: {
      id: string;
      image: any;
      description: string;
      orderId: string;
      date: string;
      action: string;
    };
  }) => (
    <View style={styles.item}>
      <Modal
        visible={isReviewwriteModalVisible}
        transparent={true}
        animationType="slide">
        <ReviewWriteModal
          item={selectedItem}
          onPress={() => {
            setIsReviewwriteModalVisible(false);
            setIsReviewSuccessModalVisible(true);
          }}
        />
      </Modal>
        <Modal
            visible={isReviewSuccessModalVisible}
            transparent={true}
            animationType="none">
            <ReviewSucessModal />
        </Modal>
            
      <View
        style={{
          width: '35%',
          height: 110,
          borderRadius: 10,
          //   overflow: 'hidden',
          borderColor: 'white',
          borderWidth: 2,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          justifyContent: 'center',
          alignItems: 'center',
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          //   padding:5
        }}>
        <Image
          source={item.image}
          style={{width: '99%', height: '99%', borderRadius: 9}}
        />
      </View>
      <View
        style={{
          marginLeft: 10,
          flex: 1,
          height: '100%',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.title}>{item.description}</Text>
        <Text style={styles.orderId}>Order {item.orderId}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            gap: 5,
          }}>
          <View
            style={{
              backgroundColor: '#F9F9F9',
              //   padding: 5,
              borderRadius: 10,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: 30,
            }}>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderColor: COLORS.primaryButton,
              borderWidth: 2,
              borderRadius: 10,
              height: 30,
            }}
            onPress={() => {
              setSelectedItem(item);
              setIsReviewwriteModalVisible(true);
            }}>
            <Text style={styles.actionText}>{item.action}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
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
              History
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
      <View style={{marginTop: 15}}>
        <FlatList
          data={reviews}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    height: 110,
    // backgroundColor: '#F9F9F9',
  },
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
});

export default HistoryScreen;
