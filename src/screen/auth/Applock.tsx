import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet, Text, Alert, Image} from 'react-native';
import {COLORS} from '../../consts/COLOR';
import typography from '../../style/typography';
import ArrowButton from '../../component/ArrowButton';
import commonStyle from '../../style/commonStyle';
import Bubble3 from '../../logo/Bubble3.svg';
import Bubble4 from '../../logo/Bubble4.svg';
import Avatar from '../../component/Avatar';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Applock: React.FC = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    } else if (!text && index > 0) {
      inputs.current[index - 1]?.focus();
    }

    if (index === 3 && newOtp.join('') === '0000') {
      Alert.alert('Success', 'Password is correct');
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputs.current[index - 1]?.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
      }
    }
  };

  return (
    <View style={[commonStyle.flex1]}>
      <Bubble3 style={[styles.bubble, {top: 0, left: 0}]} />
      <Bubble4 style={[styles.bubble]} />
      <View style={styles.container}>
        <View
          style={[
            commonStyle.alignItemsCenter,
            commonStyle.flex2,
            commonStyle.justifyContentCenter,
            commonStyle.zIndex1,
            commonStyle.mt30
          ]}>
          <Avatar />
          <Text
            style={[
              typography.textBold28,
              typography.Raleway,
              commonStyle.m30,
            ]}>
            Hello, Romina!!
          </Text>
          <Text
            style={[
              typography.regulartext19,
              typography.Nunito,
              commonStyle.m10,
            ]}>
            Type your password
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => (inputs.current[index] = ref)}
                style={styles.input}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={text => handleChange(text, index)}
                onKeyPress={e => handleKeyPress(e, index)}
                secureTextEntry
              />
            ))}
          </View>
        </View>
        <View
          style={[
            commonStyle.flexDirectionRow,
            commonStyle.alignItemsCenter,
            styles.bg,
          ]}>
          <Text style={[typography.regulartext15, typography.Nunito]}>
            Not you?
          </Text>
          <ArrowButton
            onPress={() => {
              console.log('not implemented');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    gap: 10,
    height: windowHeight,
    width: windowWidth,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  input: {
    width: 50,
    height: 50,

    textAlign: 'center',
    backgroundColor: COLORS.inputBackground,
    fontSize: 24,
    borderRadius: 10,
    marginBottom: 50,
  },
  bg: {
    flex: 1,
  },
  bubble: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
});

export default Applock;
