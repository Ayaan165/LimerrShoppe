import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Input, PasswordInput} from '../../component/Input';
import {TouchableButton} from '../../component/Button';
import UploadPhoto from '../../logo/UploadPhoto.svg';
import Bubble2 from '../../logo/Bubble2.svg';
import Bubble1 from '../../logo/Bubble1.svg';
import TransButton from '../../component/TransButton';
import {windowWidth, windowHeight} from '../../style/commonStyle';
import typography from '../../style/typography';

const CreateAccount = () => {
  return (
    <View style={{height: windowHeight, width: windowWidth, flex: 1}}>
      <Bubble2
        style={{
          zIndex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <Bubble1
        style={{
          position: 'absolute',
          right: 0,
          top: windowHeight * 0.07,
          zIndex: 1,
        }}
      />
      <View style={styles.container}>
        <View>
          <View style={{alignItems: 'flex-start', width: 335, zIndex: 3}}>
            <Text style={[typography.boldtitle50, {marginBottom: 10}]}>
              Create {'\n'}Account
            </Text>
          </View>
          <UploadPhoto style={{marginBottom: 30, zIndex: 3}} />
        </View>
        <View style={{gap: 10}}>
          <Input placeholder="Email" type="email-address" />
          <PasswordInput type="default" placeholder={'Password'} />
          {/* <Input placeholder="Your Number" type="phone-pad" /> */}
          {/* <CountrySelect/> */}
        </View>
        <View>
          <TouchableButton
            title="Done"
            onPress={() => console.log('Create Account')}
          />
          <TransButton title="Cancel" onPress={() => console.log('Clicked')} />
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
    height: windowHeight,
    width: windowWidth,
    // backgroundColor: 'red',
    zIndex: 1,
  },
});

export default CreateAccount;
