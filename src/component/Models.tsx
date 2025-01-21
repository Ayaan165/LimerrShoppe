import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {windowWidth} from '../style/commonStyle';
import Icon from '../logo/Icon.svg';
import ErrorIcon from '../logo/Erroricon.svg';
import typography from '../style/typography';
import ProgressIcon from '../logo/ProgressIcon.svg';
import {TouchableButton} from './Button';
import Sucess from '../logo/Sucess.svg';

const PaymentProgress: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <View
          style={{
            position: 'absolute',
            top: -40,
            height: 80,
            width: 80,
            justifyContent: 'center',
            alignItems: 'center',
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
          }}>
          {/* <Icon />
          <ErrorIcon style={{position: 'absolute'}} /> */}
          <ProgressIcon />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center', gap: 10}}>
          <Text style={{fontSize: 20, ...typography.RaleWay700}}>
            Payment is in progress
          </Text>
          <Text style={{fontSize: 13, ...typography.Nunito600}}>
            Please, wait a few moments
          </Text>
        </View>
      </View>
    </View>
  );
};

interface PaymentFailedProps {
  onChangePress: () => void;
  onTryAgainPress: () => void;
}

const PaymentFailed: React.FC<PaymentFailedProps> = ({
  onChangePress,
  onTryAgainPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentViewFailed}>
        <View
          style={{
            position: 'absolute',
            top: -40,
            height: 80,
            width: 80,
            justifyContent: 'center',
            alignItems: 'center',
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
          }}>
          <Icon />
          <ErrorIcon style={{position: 'absolute'}} />
          {/* <ProgressIcon /> */}
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '60%',
            }}>
            <Text
              style={{
                fontSize: 19,
                ...typography.RaleWay700,
                textAlign: 'center',
              }}>
              We couldn't proceed your payment
            </Text>
          </View>
          <Text style={{fontSize: 13, ...typography.Nunito600}}>
            Please, change your payment method or try again{' '}
          </Text>
          <View style={{flexDirection: 'row', gap: 10, marginTop: 20}}>
            <TouchableButton
              style={{
                width: '43%',
                height: 40,
                borderRadius: 10,
                backgroundColor: 'black',
              }}
              onPress={onTryAgainPress}
              TextStyle={{fontSize: 16, ...typography.Nunito300}}
              title="Try Again"
            />
            <TouchableButton
              style={{
                width: '43%',
                height: 40,
                borderRadius: 10,
                backgroundColor: 'rgba(231, 232, 235, 1)',
              }}
              TextStyle={{fontSize: 16, ...typography.Nunito300}}
              title="Change"
              onPress={onChangePress}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

interface PaymentSucessProps {
  ontrackPress: () => void;
}

const PaymentSucess: React.FC<PaymentSucessProps> = ({ontrackPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentViewSucess}>
        <View
          style={{
            position: 'absolute',
            top: -40,
            height: 80,
            width: 80,
            justifyContent: 'center',
            alignItems: 'center',
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
          }}>
          <Sucess />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center', gap: 10}}>
          <Text style={{fontSize: 19, ...typography.RaleWay700}}>
          Done!
          </Text>
          <Text style={{fontSize: 13, ...typography.Nunito600}}>
          You card has been successfully charged
          </Text>
        </View>
        <View>
          <TouchableButton
            title="Track My Order"
            style={{
              width: 'auto',
              paddingHorizontal: 20,
              borderRadius: 10,
              backgroundColor: 'rgba(231, 232, 235, 1)',
              height:40,
              marginTop: 10
            }}
            TextStyle={{fontSize: 16, ...typography.Nunito300, color: 'black'}}
            onPress={ontrackPress}
          />
        </View>
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'background: rgba(231, 232, 235, 0.8)',
    width: '100%',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  contentViewFailed: {
    width: windowWidth - 40,
    paddingBottom: 20,
    paddingTop: 70,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    width: windowWidth - 40,
    paddingBottom: 50,
    paddingTop: 70,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentViewSucess: {
    width: windowWidth - 40,
    paddingBottom: 30,
    paddingTop: 60,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {PaymentProgress, PaymentFailed, PaymentSucess};
