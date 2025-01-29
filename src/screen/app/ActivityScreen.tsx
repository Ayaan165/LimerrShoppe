import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import typography from '../../style/typography';
import DOWNARROW from '../../logo/DOWNARROW.svg';
import {windowWidth} from '../../style/commonStyle';
import ProfileHeader from '../../component/ProfileHeader';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const RoundedArcPieChart: React.FC<{
  data: {percentage: number; color: string}[];
  radius?: number;
  strokeWidth?: number;
}> = ({data, radius = 100, strokeWidth = 30}) => {
  const padding = strokeWidth / 2; // Adjust padding based on stroke width
  const total = data.reduce((sum, item) => sum + item.percentage, 0); // Sum of all percentages

  const calculateArcPath = (startAngle: number, endAngle: number) => {
    const adjustedRadius = radius - padding;
    const centerX = radius + padding;
    const centerY = radius + padding;

    const startX = centerX + adjustedRadius * Math.cos(startAngle);
    const startY = centerY + adjustedRadius * Math.sin(startAngle);
    const endX = centerX + adjustedRadius * Math.cos(endAngle);
    const endY = centerY + adjustedRadius * Math.sin(endAngle);

    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
    return `M ${startX} ${startY} A ${adjustedRadius} ${adjustedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
  };

  let startAngle = -Math.PI / 2;

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: (radius + padding) * 2 + 10,
        width: (radius + padding) * 2 + 10,
        backgroundColor: 'white',
        borderRadius: radius + padding + 5,
      }}>
      <Svg height={(radius + padding) * 2} width={(radius + padding) * 2}>
        <G>
          {data.map((slice, index) => {
            const angle = (slice.percentage / total) * 2 * Math.PI; // Calculate proportional angle
            const endAngle = startAngle + angle;
            const path = calculateArcPath(startAngle, endAngle);
            startAngle = endAngle;

            return (
              <Path
                key={`arc-${index}`}
                d={path}
                fill="none"
                stroke={slice.color}
                strokeWidth={strokeWidth}
                strokeLinecap="round" // Rounded ends for each arc
              />
            );
          })}
        </G>
      </Svg>
      <View
        style={[
          styles.innerCircle,
          {
            width: radius * 2 - 80,
            height: radius * 2 - 80,
            borderRadius: radius - 40,
            transform: [{rotate: '90deg'}],
          },
        ]}>
        <Text style={styles.innerText}>Total</Text>
        <Text style={styles.PriceText}>${total},00</Text>
      </View>
    </View>
  );
};

import {NavigationProp} from '@react-navigation/native';
import {COLORS} from '../../consts/COLOR';
import {TouchableButton} from '../../component/Button';

const App: React.FC<{navigation: NavigationProp<any>}> = ({navigation}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const data = [
    {percentage: 92, color: '#9DEB44', label: 'Accesories'},
    {percentage: 47, color: '#FE7F00', label: 'Shoes'},
    {percentage: 43, color: '#F34D75', label: 'Bags'},
    {percentage: 185, color: '#003BE3', label: 'Clothing'},
  ];

  const handleMonthChange = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
    } else {
      setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
    }
  };
  const order = [
    {id: '1', status: 'Ordered', Quantty: 12},
    {id: '2', status: 'Recieved', Quantty: 7},
    {id: '3', status: 'To Receive', Quantty: 5},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: windowWidth - 40}}>
        <ProfileHeader navigation={navigation} />
      </View>
      <View>
        <View
          style={{
            alignItems: 'center',
            margin: 20,
            backgroundColor: '#F9F9F9',
            height: 40,
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              ...typography.RaleWay700,
              color: COLORS.primaryButton,
            }}>
            {months[currentMonth]}
            </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: windowWidth,
            marginVertical: 10,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleMonthChange('prev')}>
            <DOWNARROW style={{transform: [{rotate: '-90deg'}]}} />
          </TouchableOpacity>
          <View
            style={{
              transform: [{rotate: '-90deg'}],
              // backgroundColor: 'red',
            }}>
            <RoundedArcPieChart
              data={data}
              radius={110} // Adjust radius as needed
              strokeWidth={20} // Adjust arc thickness as needed
            />
          </View>
          <TouchableOpacity
            onPress={() => handleMonthChange('next')}
            style={styles.button}>
            <DOWNARROW style={{transform: [{rotate: '90deg'}]}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          {data.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 5,
                marginHorizontal: 5,
                backgroundColor: item.color,
                // padding: 5,
                paddingHorizontal: 5,
                borderRadius: 15,
                height: 30,
              }}>
              <Text
                style={{
                  marginLeft: 10,
                  ...typography.RaleWay500,
                  fontSize: 15,
                  color: 'white',
                }}>
                {item.label} ${item.percentage},00{'  '}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            margin: 20,
          }}>
          {order.map((item, index) => (
            <View key={index} style={{alignItems: 'center', gap: 10}}>
              <View
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
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
                }}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: '#004CFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      ...typography.RaleWay500,
                      fontSize: 21,
                      color: 'white',
                    }}>
                    {item.Quantty}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  ...typography.RaleWay700,
                  fontSize: 13,
                }}>
                {item.status}
              </Text>
            </View>
          ))}
        </View>
        <View>
          <TouchableButton
            title="Order History"
            style={{
              width: windowWidth - 40,
              height: 40,
              alignSelf: 'center',
              borderRadius: 10,
            }}
            TextStyle={{color: 'white', fontSize: 16, ...typography.Nunito300}}
            onPress={() => {
              navigation.navigate('HistoryScreen');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: windowWidth,
    backgroundColor: '#fff',
  },
  innerCircle: {
    position: 'absolute',
    borderRadius: 75,
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
  },
  innerText: {
    fontSize: 16,
    ...typography.RaleWay500,
  },
  PriceText: {
    fontSize: 21,
    lineHeight: 30,
    ...typography.RaleWay700,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
