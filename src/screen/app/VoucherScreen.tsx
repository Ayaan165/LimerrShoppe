import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import PhotoFrame from '../../component/PhotoFrame';
import CustomContainer from '../../component/CustomeContainer';
import {COLORS} from '../../consts/COLOR';
import ScannerWhite from '../../logo/ScannerWhite.svg';
import Menu from '../../logo/Menu.svg';
import Setting from '../../logo/Setting.svg';
import typography from '../../style/typography';
import Gift from '../../logo/Gift.svg';
import FromApp from '../../logo/FromApp.svg';
import Heart2 from '../../logo/Heart2.svg';
import Cloud from '../../logo/Cloud.svg';
import Cloth from '../../logo/Cloth.svg';
import Smile from '../../logo/Smile.svg';
import Star3 from '../../logo/ProgressStar.svg';

const vouchers = [
  {
    id: 1,
    title: 'First Purchase',
    description: '5% off for your next order',
    validUntil: '4.21.20',
    daysLeft: 3,
    collected: true,
    color: 'red',
    Icon: 'FromApp',
  },
  {
    id: 2,
    title: 'Gift From Customer Care',
    description: '15% off your next purchase',
    validUntil: '6.20.20',
    collected: true,
    color: 'blue',
    Icon: 'gift',
  },
  {
    id: 3,
    title: 'Loyal Customer',
    description: '10% off your next purchase',
    validUntil: '6.20.20',
    collected: true,
    color: 'blue',
    Icon: 'heart',
  },
];

const ProgressStats = [
  {
    id: 1,
    title: 'First Purchase',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
    Icon: <FromApp />,
    complete: '78%',
  },
  {
    id: 2,
    title: 'Loyal Customer',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
    Icon: <Heart2 />,
    complete: '100%',
  },
  {
    id: 3,
    title: 'Review Maker',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
    Icon: <Star3 />,
    complete: '30%',
  },
  {
    id: 4,
    title: 'Big Soul',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
    Icon: <Cloud />,
    complete: '0%',
  },
  {
    id: 4,
    title: 'T-Shirt Collector',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
    Icon: <Cloth />,
    complete: '0%',
  },
  {
    id: 6,
    title: '10+ Orders',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
    Icon: <Smile />,
    complete: '30%',
  },
];

import {NavigationProp} from '@react-navigation/native';
import BottomBarView from '../../component/BottomBarView';

interface VoucherScreenProps {
  navigation: NavigationProp<any>;
}

const VoucherScreen: React.FC<VoucherScreenProps> = ({navigation}) => {
  const bottomViewHeight = useBottomTabBarHeight();

  const [openTab, setOpenTab] = useState('Active Rewards');
  interface Voucher {
    id: number;
    title: string;
    description: string;
    validUntil: string;
    daysLeft?: number;
    collected: boolean;
    color: string;
    Icon: string;
  }
  const VoucherCard: React.FC<{voucher: Voucher}> = ({voucher}) => {
    return (
      <View
        style={[
          styles.voucherCard,
          {
            borderColor:
              voucher.color === 'red' ? '#F2B8B8' : COLORS.primaryButton,
          },
        ]}>
        {/* Left and Right Circular Cutouts */}
        <View style={[styles.cutout, {left: -21}]} />
        <View
          style={[
            styles.cutoutBordered,
            {
              left: -10,
              borderColor:
                voucher.color === 'red' ? '#F2B8B8' : COLORS.primaryButton,
            },
          ]}
        />
        <View style={[styles.cutout, {right: -21}]} />
        <View
          style={[
            styles.cutoutBordered,
            {
              right: -10,
              borderColor:
                voucher.color === 'red' ? '#F2B8B8' : COLORS.primaryButton,
            },
          ]}
        />

        {/* Voucher Header */}
        <View
          style={[
            styles.voucherHeaderContainer,
            {
              borderColor:
                voucher.color === 'red' ? '#F2B8B8' : COLORS.primaryButton,
            },
          ]}>
          <Text
            style={[
              styles.voucherHeader,
              {
                color:
                  voucher.color === 'red' ? '#F2B8B8' : COLORS.primaryButton,
              },
            ]}>
            Voucher
          </Text>
          <View style={styles.voucherHeaderRight}>
            <Text style={styles.daysLeft}>
              {voucher.daysLeft ? `${voucher.daysLeft} days left` : ''}
            </Text>
            <Text
              style={[
                styles.validUntil,
                voucher.color === 'red' && styles.validUntilRedBackground,
              ]}>
              Valid Until {voucher.validUntil}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderColor:
              voucher.color === 'red' ? '#F2B8B8' : COLORS.primaryButton,
            height: 5,
            width: '100%',
            borderWidth: 1.5,
            borderStyle: 'dashed',
          }}>
          <View
            style={{
              height: 4,
              width: '100%',
              position: 'absolute',
              backgroundColor: 'white',
            }}></View>
        </View>
        {/* Voucher Body */}
        <View style={styles.voucherBody}>
          <View style={{width: '70%'}}>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Gift />
              <Text style={styles.voucherTitle}>{voucher.title}</Text>
            </View>
            <Text style={styles.voucherDescription}>{voucher.description}</Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              //   width: '30%',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.collectedButton}>
              <Text style={styles.collectedText}>
                {voucher.collected ? 'Collected' : 'Collect'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <PhotoFrame size={43} url={require('../../assets/image/RV1.png')} />
          <Text style={styles.headerTitle}>Vouchers</Text>
        </View>
        <View style={styles.headerRight}>
          <CustomContainer
            SvgComponent={ScannerWhite}
            onPress={() => navigation.navigate('VoucherScreen')}
            active={true}
          />
          <CustomContainer SvgComponent={Menu} badgeCount={1} />
          <CustomContainer SvgComponent={Setting} />
        </View>
      </View>

      {/* Tab Buttons */}
      <View style={styles.tabButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.TabButton,
            {
              backgroundColor:
                openTab === 'Active Rewards' ? '#E5EBFC' : '#F9F9F9',
            },
          ]}
          onPress={() => setOpenTab('Active Rewards')}>
          <Text
            style={[
              styles.TabText,
              {
                color:
                  openTab === 'Active Rewards' ? COLORS.primaryButton : 'black',
              },
            ]}>
            Active Rewards
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.TabButton,
            {backgroundColor: openTab === 'Progress' ? '#E5EBFC' : '#F9F9F9'},
          ]}
          onPress={() => setOpenTab('Progress')}>
          <Text
            style={[
              styles.TabText,
              {
                color: openTab === 'Progress' ? COLORS.primaryButton : 'black',
              },
            ]}>
            Progress
          </Text>
        </TouchableOpacity>
      </View>

      {openTab === 'Active Rewards' && (
        <ScrollView style={styles.scrollView}>
          {vouchers.map(voucher => (
            <VoucherCard key={voucher.id} voucher={voucher} />
          ))}
          <BottomBarView />
        </ScrollView>
      )}
      {openTab === 'Progress' && (
        <>
          <ProgressTab />
          <BottomBarView />
        </>
      )}
    </SafeAreaView>
  );
};

const ProgressTab = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
      }}>
      {ProgressStats.map(progress => (
        <ProgressCard progress={progress} key={progress.id} />
      ))}
    </View>
  );
};

interface Progress {
  id: number;
  title: string;
  description: string;
  Icon: any;
  complete: string;
}

const ProgressCard: React.FC<{progress: Progress}> = ({progress}) => {
  return (
    <View style={{width: '47%', alignItems: 'center'}}>
      <View>
        <View
          style={{
            height: 70,
            width: 70,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 35,
          }}>
          <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              borderColor: COLORS.primaryButton,
              borderWidth: 1,
            }}>
              {progress.Icon}
          </View>
        </View>
      </View>
      <View
        style={{width: '100%', marginVertical: 10, paddingVertical: 5, gap: 5}}>
        <Text
          style={{textAlign: 'center', fontSize: 15, ...typography.RaleWay700}}>
          {progress.title}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 11,
            ...typography.Nunito400,
            lineHeight: 18,
          }}>
          {progress.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    flex: 1,
    marginVertical: Platform.OS === 'android' ? 10 : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: '700',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 10,
  },
  tabButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
  },
  TabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 15,
    height: 30,
  },
  TabText: {
    fontSize: 15,
  },
  voucherCard: {
    borderWidth: 1.5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  voucherHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  voucherHeader: {
    fontSize: 19,
    ...typography.RaleWay700,
  },
  voucherHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  daysLeft: {
    fontSize: 11,
    color: '#F2B8B8',
  },
  validUntil: {
    fontSize: 12,
    marginLeft: 10,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 4,
    ...typography.RaleWay500,
  },
  validUntilRedBackground: {
    backgroundColor: '#F2B8B8',
  },
  voucherBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingLeft: 16,
    paddingTop: 15,
    // backgroundColor:'red',
    paddingVertical: 10,
  },
  voucherTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 5,
    // width: '90%',
    ...typography.RaleWay700,
  },
  voucherDescription: {
    fontSize: 12,
    color: 'black',
    ...typography.Nunito600,
  },
  collectedButton: {
    backgroundColor: COLORS.primaryButton,
    paddingHorizontal: 10,
    height: 27,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  collectedText: {
    color: 'white',
    fontSize: 14,
    ...typography.RaleWay500,
  },
  cutout: {
    backgroundColor: 'white',
    height: 20,
    width: 20,
    position: 'absolute',
    zIndex: 2,
  },
  cutoutBordered: {
    backgroundColor: 'white',
    height: 21,
    width: 21,
    position: 'absolute',
    borderRadius: 10,
    borderWidth: 1.5,
    // borderStyle: 'dashed',
  },
});

export default VoucherScreen;
