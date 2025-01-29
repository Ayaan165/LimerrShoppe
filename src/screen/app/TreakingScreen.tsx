import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Text,
  ScrollView,
} from 'react-native';
import Svg, {Line, Circle, Defs, LinearGradient, Stop} from 'react-native-svg';
import {COLORS} from '../../consts/COLOR';
import ProfileHeader from '../../component/ProfileHeader';
import {windowWidth} from '../../style/commonStyle';
import Order from '../../logo/Order.svg';
import Arrow3 from '../../logo/Arrow3.svg';

const {width} = Dimensions.get('window');
const steps = 3; // Number of steps

interface OrderTrackingBarProps {
  currentStep: number;
  status: string;
}

const OrderTrackingBar: React.FC<OrderTrackingBarProps> = ({
  currentStep,
  status,
}) => {
  const stepWidth = width * 0.75; // Width of the progress bar
  const stepSpacing = stepWidth / (steps - 1); // Even spacing

  return (
    <View style={styles.container}>
      <Svg height="80" width={width * 0.85}>
        {/* Gradient Definition */}

        {status === 'Delivered' ? (
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0%" stopColor={'#004CFF'} />
              <Stop offset="100%" stopColor={'#17BE5A'} />
            </LinearGradient>
            <LinearGradient id="grad1" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0%" stopColor={'#004cff'} />
              <Stop offset="100%" stopColor={'#064afd'} />
            </LinearGradient>
            <LinearGradient id="grad2" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0%" stopColor={'#0881b2'} />
              <Stop offset="100%" stopColor={'#0e87a8'} />
            </LinearGradient>
            <LinearGradient id="grad3" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0%" stopColor={'#15b669'} />
              <Stop offset="100%" stopColor={'#16be5b'} />
            </LinearGradient>
          </Defs>
        ) : status === 'failed' ? (
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0%" stopColor={COLORS.primaryButton} />
              <Stop offset="70%" stopColor={'#3030D2'} />
              <Stop offset="100%" stopColor={'#FF003D'} />
            </LinearGradient>
            <LinearGradient id="grad1" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0%" stopColor={'#004cff'} />
              <Stop offset="100%" stopColor={'#064afd'} />
            </LinearGradient>
            <LinearGradient id="grad2" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0%" stopColor={'#1c3ce5'} />
              <Stop offset="100%" stopColor={'#2139e2'} />
            </LinearGradient>
            <LinearGradient id="grad3" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0%" stopColor={'#ea044c'} />
              <Stop offset="100%" stopColor={'#ff003d'} />
            </LinearGradient>
          </Defs>
        ) : status === 'Packed' ? (
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0%" stopColor={COLORS.primaryButton} />
              <Stop offset="100%" stopColor={COLORS.primaryButton} />
            </LinearGradient>
            <LinearGradient id="grad1" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0%" stopColor={COLORS.primaryButton} />
              <Stop offset="100%" stopColor={COLORS.primaryButton} />
            </LinearGradient>
            <LinearGradient id="grad2" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0%" stopColor={COLORS.primaryButton} />
              <Stop offset="100%" stopColor={COLORS.primaryButton} />
            </LinearGradient>
            <LinearGradient id="grad3" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0%" stopColor={COLORS.primaryButton} />
              <Stop offset="100%" stopColor={COLORS.primaryButton} />
            </LinearGradient>
          </Defs>
        ) : (
          <Defs></Defs>
        )}

        {/* Background Line */}
        <Line
          x1="5%"
          y1="40"
          x2="95%"
          y2="40"
          stroke="#E5EBFC"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {Array.from({length: steps}).map((_, index) => (
          <Circle
            key={index}
            cx={`${5 + index * (90 / (steps - 1))}%`}
            cy="40"
            r={14}
            fill="#E5EBFC"
          />
        ))}
        <Line
          x1="5%"
          y1="40"
          x2={`${5 + (currentStep - 1) * (90 / (steps - 1))}%`}
          y2="40"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Step Circles */}
        {Array.from({length: steps}).map((_, index) => (
          <Circle
            key={index}
            cx={`${5 + index * (90 / (steps - 1))}%`}
            cy="40"
            r={10}
            fill={
              index < Math.floor(currentStep)
                ? index === 0
                  ? 'url(#grad1)'
                  : index === 1
                  ? 'url(#grad2)'
                  : index === 2
                  ? 'url(#grad3)'
                  : '#E5EBFC'
                : '#E5EBFC'
            }
            stroke={index < Math.floor(currentStep) ? 'white' : '#E5EBFC'}
            strokeWidth="2"
          />
        ))}

        {/* Progress Line */}
        <Line
          x1="5%"
          y1="40"
          x2={`${5 + (currentStep - 1) * (90 / (steps - 1))}%`}
          y2="40"
          stroke="url(#grad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

import {
  NavigationProp,
  Route,
  RouteProp,
  useRoute,
} from '@react-navigation/native';
import typography from '../../style/typography';
import {BottomTabView} from '@react-navigation/bottom-tabs';
import BottomBarView from '../../component/BottomBarView';

interface OrderTrackingProps {
  navigation: NavigationProp<any>;
}
type OrderTrackingParams = RouteProp<{
  params: {
    trackingDetails: {
      status: string;
      currentStep: number;
      trackingNumber: string;
      statuses: any[];
      failedDelivery: {
        title: string;
        timestamp: string;
      };
    };
  };
}>;

const OrderTracking: React.FC<OrderTrackingProps> = ({navigation}) => {
  const route = useRoute<OrderTrackingParams>();
  const trackingDetails = route.params.trackingDetails;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.headerContainer}>
        <ProfileHeader navigation={navigation} />
      </View>
      <ScrollView>
        <View>
          <OrderTrackingBar
            currentStep={trackingDetails.currentStep}
            status={trackingDetails.status}
          />
        </View>
        <View>
          <View
            style={[
              styles.trackingInfoContainer,
              {
                backgroundColor:
                  trackingDetails.status === 'Delivered'
                    ? '#FFEBEB'
                    : '#F9F9F9',
              },
            ]}>
            <View>
              <Text style={styles.trackingText}>Tracking Number</Text>
              <Text style={styles.trackingNumber}>
                {trackingDetails.trackingNumber}
              </Text>
            </View>
            <View>
              <Order />
            </View>
          </View>
          <View style={styles.statusContainer}>
            {trackingDetails.statuses.map((item, index) => (
              <View style={styles.statusItem} key={index}>
                <View style={styles.statusHeader}>
                  <Text
                    style={[
                      styles.statusTitle,
                      {
                        color: item.status === 'upcoming' ? '#CBD3EB' : 'black',
                      },
                    ]}>
                    {item.title}
                  </Text>
                  <View
                    style={[
                      styles.statusTimestampContainer,
                      {
                        backgroundColor:
                          trackingDetails.status === 'Delivered'
                            ? '#FFEBEB'
                            : item.status === 'upcoming'
                            ? '#E5EBFC'
                            : '#F9F9F9',
                      },
                    ]}>
                    <Text style={[styles.statusTimestamp]}>
                      {item.status === 'upcoming' && 'Expected on '}
                      {item.timestamp}
                    </Text>
                  </View>
                </View>
                <Text
                  style={[
                    styles.statusDescription,
                    {
                      color: item.status === 'upcoming' ? '#CBD3EB' : 'black',
                    },
                  ]}>
                  {item.description}
                </Text>
              </View>
            ))}
            {trackingDetails.failedDelivery && (
              <View style={styles.statusItem}>
                <View style={styles.FailedstatusHeader}>
                  <View style={styles.failedTitleContainer}>
                    <Text style={styles.FailedstatusTitle}>
                      {trackingDetails.failedDelivery.title}
                      {'  '}
                      <Arrow3 />
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.FaildstatusTimestampContainer,
                      {backgroundColor: '#F63C3C'},
                    ]}>
                    <Text style={styles.FaildstatusTimestamp}>
                      {trackingDetails.failedDelivery.timestamp}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
        <BottomBarView />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderTracking;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  safeAreaView: {flex: 1, backgroundColor: 'white'},
  headerContainer: {width: windowWidth - 40, marginHorizontal: 20},
  trackingInfoContainer: {
    height: 55,
    width: windowWidth - 40,
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  trackingText: {
    lineHeight: 18,
    fontSize: 14,
    ...typography.RaleWay700,
  },
  trackingNumber: {
    lineHeight: 18,
    fontSize: 12,
    ...typography.Nunito400,
  },
  statusContainer: {marginTop: 10},
  statusItem: {marginHorizontal: 20, marginVertical: 15, gap: 5},
  statusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusTitle: {
    fontSize: 17,
    lineHeight: 21,
    ...typography.RaleWay700,
  },
  statusTimestampContainer: {
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  statusTimestamp: {
    fontSize: 13,
    lineHeight: 20,
    ...typography.RaleWay500,
  },
  statusDescription: {
    lineHeight: 16,
    fontSize: 12,
    ...typography.Nunito400,
  },
  FailedstatusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  failedTitleContainer: {
    width: '70%',
  },
  FailedstatusTitle: {
    fontSize: 16,
    lineHeight: 21,
    ...typography.RaleWay700,
    color: COLORS.primaryButton,
  },
  FaildstatusTimestampContainer: {
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 22,
  },
  FaildstatusTimestamp: {
    fontSize: 13,
    lineHeight: 20,
    ...typography.RaleWay500,
    color: 'white',
  },
});
