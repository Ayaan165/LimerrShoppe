import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomContainer from './CustomeContainer';
import typography from '../style/typography';
import { COLORS } from '../consts/COLOR';
import commonStyle from '../style/commonStyle';
import PhotoFrame from './PhotoFrame';
import Scanner from '../logo/Scanner.svg';
import Menu from '../logo/Menu.svg';
import Setting from '../logo/Setting.svg';

import { NavigationProp } from '@react-navigation/native';

const ProfileHeader = ({navigation}: {navigation: NavigationProp<any>}) => {
  return (
    <View
      style={[
        commonStyle.flexDirectionRow,
        commonStyle.justifyContentSpaceB,
        commonStyle.alignItemsCenter,
        // commonStyle.ph20,
      ]}>
      <View
        style={[
          commonStyle.flexDirectionRow,
          commonStyle.alignItemsCenter,
          {gap: 13},
        ]}>
        <PhotoFrame size={43} url={require('../assets/image/RV1.png')} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ActivityScreen');
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            width: 120,
            backgroundColor: COLORS.primaryButton,
            borderRadius: 20,
          }}>
          <Text
            style={[
              typography.font16,
              typography.RaleWay500,
              {
                textAlign: 'center',
                width: 120,
                color: COLORS.white,
              },
            ]}>
            My Activity
          </Text>
        </TouchableOpacity>
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
  );
};

export default ProfileHeader;
