import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {windowWidth} from '../../../style/commonStyle';
import Icon from '../../../logo/Icon.svg';
import ErrorIcon from '../../../logo/Erroricon.svg';
import typography from '../../../style/typography';
import {TouchableButton} from '../../../component/Button';

interface DeleteAccountModalProps {
  onCanclePress: () => void;
  onDeletePress: () => void;
}

const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
  onCanclePress,
  onDeletePress,
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
              You are going to delete your account
            </Text>
          </View>
          <Text style={{fontSize: 13, ...typography.Nunito600}}>
            You won't be able to restore your data
          </Text>
          <View style={{flexDirection: 'row', gap: 10, marginTop: 20}}>
            <TouchableButton
              style={{
                width: '43%',
                height: 40,
                borderRadius: 10,
                backgroundColor: '#202020',
              }}
              onPress={onCanclePress}
              TextStyle={{fontSize: 16, ...typography.Nunito300, color: '#fff'}}
              title="Cancel"
            />
            <TouchableButton
              style={{
                width: '43%',
                height: 40,
                borderRadius: 10,
                backgroundColor: '#D97474',
              }}
              TextStyle={{fontSize: 16, ...typography.Nunito300, color: '#fff'}}
              title="Delete"
              onPress={onDeletePress}
            />
          </View>
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


export default DeleteAccountModal;