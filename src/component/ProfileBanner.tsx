import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import typography from '../style/typography';
import {COLORS} from '../consts/COLOR';
import commonStyle from '../style/commonStyle';
import ArrowButton from './ArrowButton';
import RedAppIcon from '../logo/RedAppIcon.svg';
import Heart2 from '../logo/Heart2.svg';
import Check from '../logo/Check.svg';

const AnnouncementBanner: React.FC = () => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: COLORS.inputBackground,
        borderRadius: 10,
        marginTop: 10,
      }}>
      <View>
        <Text style={[typography.Boldtext16, typography.Raleway]}>
          Announcement
        </Text>
      </View>
      <View
        style={[
          commonStyle.flexDirectionRow,
          commonStyle.justifyContentCenter,
        ]}>
        <View style={{width: '80%'}}>
          <Text
            style={[
              typography.w500s12,
              typography.Nunito,
              {lineHeight: 20, width: '100%'},
            ]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            hendrerit luctus libero ac vulputate.
          </Text>
        </View>
        <View style={[commonStyle.alignItemsEnd, {width: '20%'}]}>
          <ArrowButton onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const VoucherExpireyBanner: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        // paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
      }}>
      <View>
        <View
          style={{
            height: 70,
            width: 70,
            borderWidth: 5,
            borderColor: '#D97474',
            borderRadius: 35,
            shadowColor: '#000',
            backgroundColor: 'white',
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
          <RedAppIcon />
        </View>
      </View>
      <View style={{marginLeft: 10, width: '80%'}}>
        <Text style={styles.text}>Your voucher will expire in 3 days</Text>
        <Text
          style={{
            fontSize: 11,
            ...typography.Nunito400,
            lineHeight: 16,
            marginTop: 5,
          }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt
        </Text>
      </View>
    </View>
  );
};

const RewardBanner: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        // paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
      }}>
      <View>
        <View
          style={{
            height: 70,
            width: 70,
            borderWidth: 1,
            borderColor: COLORS.primaryButton,
            borderRadius: 35,
            shadowColor: '#000',
            backgroundColor: 'white',
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
          <Heart2 />
          <Check style={{position: 'absolute', top: -1, right: -1}} />
        </View>
      </View>
      <View style={{marginLeft: 10, width: '80%'}}>
        <Text style={styles.text}>You just got a reward</Text>
        <Text
          style={{
            fontSize: 11,
            ...typography.Nunito400,
            lineHeight: 16,
            marginTop: 5,
          }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 14,
    ...typography.RaleWay700,
  },
});

export {AnnouncementBanner, VoucherExpireyBanner, RewardBanner};
