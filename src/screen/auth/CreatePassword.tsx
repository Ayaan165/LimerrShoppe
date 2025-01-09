import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';
import typography from '../../style/typography';
import { Input } from '../../component/Input';
import commonStyle from '../../style/commonStyle';
import {TouchableButton} from '../../component/Button';
import TransButton from '../../component/TransButton';
import Bubbles from '../../logo/Bubbles.svg';
import {Dimensions} from 'react-native';
import Avatar from '../../component/Avatar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CreatePassword: React.FC = () => {
  return (
    <View style={[commonStyle.flex1 , {height: windowHeight, width: windowWidth}]}>
      <Bubbles
        style={{position: 'absolute', top:0 ,right:0}}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', gap:15}}>
          <Avatar />
          <Text style={[typography.textBold21, typography.Raleway]}>
            Setup New Password
          </Text>
          <Text
            style={[typography.regulartext19,commonStyle.textAlignCenter,typography.Nunito,{width:290 ,  lineHeight :27}
            ]}>
            Please, setup a new password for your account
          </Text>
          <View style={{gap: 10}}>
            <Input
              placeholder="New Password"
              type={'default'}
              style={{...commonStyle.textAlignCenter, borderRadius: 9 , ...typography.Raleway}}
            />
            <Input
              placeholder="Repeat Password"
              type={'default'}
              style={{...commonStyle.textAlignCenter, borderRadius: 9 , ...typography.Raleway}}
            />
          </View>
        </View>
      </View>
      <View style={[commonStyle.alignItemsCenter ,{paddingVertical:windowHeight*0.08}]}>
          <TouchableButton title="Save" onPress={() => {}} />
          <TransButton title="Cancel" onPress={() => {}} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreatePassword;
