import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Avatar from '../../component/Avatar';
import typography from '../../style/typography';
import commonStyle from '../../style/commonStyle';
import {TouchableButton} from '../../component/Button';
import TransButton from '../../component/TransButton';
import {COLORS} from '../../consts/COLOR';
import Select from '../../logo/Select.svg';
import Bubbles from '../../logo/Bubbles.svg';
import {windowHeight, windowWidth} from '../../style/commonStyle';

import { NavigationProp } from '@react-navigation/native';

interface PasswordRecoveryProps {
  navigation: NavigationProp<any>;
}
const PasswordRecovery: React.FC<PasswordRecoveryProps> = ({navigation}) => {
  const [Method, setMethod] = React.useState('SMS');
  return (
    <View style={styles.container}>
      <Bubbles style={{position: 'absolute', top: 0, right: 0}} />
      <View
        style={[
          commonStyle.justifyContentCenter,
          commonStyle.flex1,
          {paddingBottom: windowHeight * 0.1},
        ]}>
        <View style={{alignItems: 'center', justifyContent: 'center', gap: 10}}>
          <Avatar />
          <Text style={[typography.textBold21, commonStyle.mb10]}>
            Password Recovery
          </Text>
          <Text style={[typography.regulartext19, commonStyle.textAlignCenter]}>
            How you would like to restore {'\n'}your password?
          </Text>
          <View style={[commonStyle.mt20, {gap: 10}]}>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                width: 200,
                height: 40,
                backgroundColor: '#E5EBFC',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 18,
              }}
              onPress={() => setMethod('SMS')}>
              <Text style={[typography.boldTint15]}>SMS</Text>
              <View
                style={{
                  height: 24,
                  width: 24,
                  backgroundColor: COLORS.primaryButton,
                  borderRadius: 11,
                  position: 'absolute',
                  right: 10,
                  borderColor: 'white',
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {Method === 'SMS' && <Select />}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                width: 200,
                height: 40,
                backgroundColor: '#FFEBEB',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 18,
              }}
              onPress={() => setMethod('Email')}>
              <Text
                style={[
                  typography.Raleway,
                  {color: COLORS.black20, fontSize: 15, fontWeight: 500},
                ]}>
                Email
              </Text>
              <View
                style={{
                  height: 24,
                  width: 24,
                  backgroundColor: '#F8CECE',
                  borderRadius: 11,
                  position: 'absolute',
                  right: 10,
                  borderColor: 'white',
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {Method === 'Email' && <Select />}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <TouchableButton
          title="Next"
          onPress={() => {
            navigation.navigate('passwordRecoveryCode');
          }}
        />
        <TransButton
          title="Cancel"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: windowHeight,
    width: windowWidth,
    paddingVertical: windowHeight * 0.07,
  },
});

export default PasswordRecovery;
