import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Modal,
  SafeAreaView,
} from 'react-native';
import commonStyle from '../../style/commonStyle';
import typography from '../../style/typography';
import Avatar from '../../component/Avatar';
import {COLORS} from '../../consts/COLOR';
import {BlackButton, SendAgainButton} from '../../component/Button';
import TransButton from '../../component/TransButton';
import Icon from '../../logo/Icon.svg';
import ErrorIcon from '../../logo/Erroricon.svg';
import Bubbles from '../../logo/Bubbles.svg';
import {Dimensions} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface PasswordRecoveryCodeProps {
  navigation: NavigationProp<any>;
}
const PasswordRecoveryCode: React.FC<PasswordRecoveryCodeProps> = ({
  navigation,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
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
    <View
      style={{
        flex: 1,
        height: windowHeight,
        width: windowWidth,
      }}>
      <Bubbles style={{position: 'absolute', top: 0, right: 0}} />
      <View style={styles.container}>
        <Modal visible={isVisible} animationType="none" transparent>
          <SafeAreaView
            style={[
              commonStyle.flex1,
              commonStyle.justifyContentCenter,
              commonStyle.alignItemsCenter,
              {backgroundColor: 'rgba(52, 52, 52, 0.8)'}, // Darker background
            ]}>
            <View
              style={[
                commonStyle.alignItemsCenter,
                commonStyle.justifyContentCenter,
                {
                  backgroundColor: '#fff',
                  width: 350,
                  height: 225,
                  padding: 20,
                  borderRadius: 19,
                  // backgroundColor: '#0E0E0E',
                  gap: 20,
                },
              ]}>
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  top: -40,
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon />
                <ErrorIcon style={{position: 'absolute'}} />
              </View>
              <View></View>
              <Text
                style={[
                  typography.w500s18,
                  commonStyle.textAlignCenter,
                  commonStyle.mt10,
                  typography.Raleway,
                  {color: COLORS.black20},
                ]}>
                You reached out maximum {'\n'}amount of attempts.{'\n'} Please,
                try later.
              </Text>
              <BlackButton onPress={() => setIsVisible(false)} />
            </View>
          </SafeAreaView>
        </Modal>
        <View
          style={[
            commonStyle.alignItemsCenter,
            commonStyle.justifyContentCenter,
            styles.gap,
            commonStyle.mt30,
          ]}>
          <Avatar />
          <Text style={[typography.textBold21, typography.Raleway]}>
            Password Recovery
          </Text>
          <Text
            style={[
              typography.regulartext19,
              commonStyle.textAlignCenter,
              typography.Nunito,
            ]}>
            Enter 4-digits code we sent you {'\n'}on your phone number
          </Text>
          <Text style={[typography.Boldtext16, typography.Nunito]}>
            +98*******00
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
        </View>
        <View
          style={[
            commonStyle.alignItemsCenter,
            commonStyle.justifyContentCenter,
          ]}>
          <SendAgainButton
            onPress={() => {
              navigation.navigate('createPassword');
            }}
          />
          <TransButton
            title="Cancel"
            onPress={() => {
              setIsVisible(true);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 150,
    height: windowHeight,
    width: windowWidth,
  },
  gap: {
    gap: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    // backgroundColor:'red',
    // justifyContent: 'center',
    // width: '80%',
    gap: 10,
  },
  input: {
    width: 17,
    height: 17,
    textAlign: 'center',
    backgroundColor: COLORS.inputBackground,
    fontSize: 24,
    borderRadius: 20,
    marginBottom: 50,
    color: 'transparent',
  },
  filledInput: {
    backgroundColor: COLORS.primaryButton, // Blue color for filled input
  },
});

export default PasswordRecoveryCode;
