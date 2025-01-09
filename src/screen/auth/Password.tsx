import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Alert,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../consts/COLOR';
import typography from '../../style/typography';
import ArrowButton from '../../component/ArrowButton';
import commonStyle from '../../style/commonStyle';
import Bubble3 from '../../logo/Bubble3.svg';
import Bubble4 from '../../logo/Bubble4.svg';
import Avatar from '../../component/Avatar';
import {windowHeight, windowWidth} from '../../style/commonStyle';

import {NavigationProp} from '@react-navigation/native';

interface PasswordProps {
  navigation: NavigationProp<any>;
}

const PasswordScreen: React.FC<PasswordProps> = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 7) {
      inputs.current[index + 1]?.focus();
    } else if (!text && index > 0) {
      inputs.current[index - 1]?.focus();
    }

    if (index === 7 && newOtp.join('') === '00000000') {
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
    <View style={{flex: 1, height: windowHeight, width: windowWidth}}>
      <Bubble3 style={[styles.bubble, {top: 0, left: 0, zIndex: 1}]} />
      <Bubble4 style={[styles.bubble, {top: 0, left: 0, zIndex: 1}]} />

      <View style={styles.container}>
        <View
          style={[
            commonStyle.alignItemsCenter,
            commonStyle.flex2,
            commonStyle.justifyContentCenter,
            commonStyle.zIndex1,
          ]}>
          <Avatar />
          <Text
            style={[
              typography.textBold28,
              typography.Raleway,
              commonStyle.m20,
            ]}>
            Hello, Romina!!
          </Text>
          <Text
            style={[
              typography.regulartext19,
              typography.Raleway,
              commonStyle.mb20,
            ]}>
            Type your password
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => (inputs.current[index] = ref)}
                style={[styles.input, digit && styles.filledInput]}
                keyboardType="web-search"
                maxLength={1}
                value={digit}
                onChangeText={text => handleChange(text, index)}
                onKeyPress={e => handleKeyPress(e, index)}
                secureTextEntry
              />
            ))}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('passwordRecovery')}>
            <Text
              style={[
                typography.regulartext15,
                typography.Nunito,
                {color: COLORS.black20},
              ]}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            commonStyle.flexDirectionRow,
            commonStyle.alignItemsCenter,
            styles.bg,
          ]}>
          <Text style={[typography.regulartext15, typography.Raleway]}>
            Not you?
          </Text>
          <ArrowButton
            onPress={() => {
              navigation.navigate('Login');
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
    gap: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  input: {
    width: 17,
    height: 17,
    textAlign: 'center',
    // backgroundColor: COLORS.primaryButton,
    // backgroundColor: COLORS.inputBackground,
    backgroundColor: COLORS.alert,
    fontSize: 24,
    borderRadius: 20,
    marginBottom: 30,
    color: 'transparent',
  },
  filledInput: {
    // backgroundColor: COLORS.primaryButton // Blue color for filled input
    backgroundColor: COLORS.alert,
  },
  bg: {
    flex: 1,
  },
  bubble: {
    position: 'absolute',
  },
});

export default PasswordScreen;
