import React, {lazy} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';
import typography from '../style/typography';
import EditIcon from '../logo/EditIcon.svg';
import {BlurView} from '@react-native-community/blur';
import {windowWidth} from '../style/commonStyle';
import {TouchableButton} from './Button';
import ArrowGrey from '../logo/ArrowGrey.svg';

interface AddressCardProps {
  onPress: () => void;
}

const AddressCard: React.FC<AddressCardProps> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={{width: '85%', gap: 10}}>
        <Text style={styles.title}>Shipping Address</Text>
        <Text style={styles.address}>
          26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city
        </Text>
      </View>
      <View
        style={{
          width: '15%',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity onPress={onPress}>
          <EditIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface AddressdEditModalProps {
  onSaveChanges: () => void;
}

const AddressdEditModal: React.FC<AddressdEditModalProps> = ({
  onSaveChanges,
}) => {
  return (
    <View style={Model.constainer}>
      <BlurView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        blurType="light"
        blurAmount={3}
        reducedTransparencyFallbackColor="rgba(255, 248, 248, 0.72)"
      />
      <View
        style={{
          backgroundColor: 'white',
          width: windowWidth,
          marginBottom: 20,
        }}>
        <View
          style={{
            backgroundColor: '#F8FAFF',
            height: 80,
            paddingHorizontal: 20,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 22, ...typography.RaleWay700}}>
            Shipping Address
          </Text>
        </View>
        <View style={{padding: 20}}>
          <View>
            <Text style={Model.label}>Country</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={Model.label2}>India</Text>
              <ArrowGrey/>
            </View>
          </View>
          <View>
            <Text style={Model.label}>Address</Text>
            <TextInput 
            keyboardType='default'
            autoComplete='street-address'
            style={Model.input}/>
          </View>
          <View>
            <Text style={Model.label}>Town / City</Text>
            <TextInput 
            keyboardType='default'
            autoComplete='address-line2'
            style={Model.input}/>
          </View>
          <View>
            <Text style={Model.label}>Postcode</Text>
            <TextInput 
            autoComplete='postal-code'
            keyboardType='decimal-pad'
            style={Model.input}/>
          </View>
          <TouchableButton
            style={{height: 40, borderRadius: 10, marginTop: 10}}
            TextStyle={{
              fontSize: 16,
              ...typography.Nunito300,
              color: 'white',
              lineHeight: 25,
            }}
            title={'Save Changes'}
            onPress={onSaveChanges}
          />
        </View>
      </View>
    </View>
  );
};

const Model = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  label: {
    fontSize: 15,
    ...typography.Nunito600,
  },
  label2: {
    fontSize: 20,
    ...typography.RaleWay700,
    color:'#E7E8EB'
  },
  input: {
    backgroundColor: '#F1F4FE',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    ...typography.RaleWay700,
    lineHeight: 18,
  },
  address: {
    fontSize: 12,
    ...typography.Nunito400,
    lineHeight: 15,
  },
});

export default AddressCard;

interface ContectCardProps {
  onPress: () => void;
}

const ContectCard: React.FC<ContectCardProps> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={{width: '85%', gap: 10}}>
        <Text style={styles.title}>Contact Information</Text>
        <Text style={styles.address}>
          +91987654321{`\n`}
          gmail@example.com
        </Text>
      </View>
      <View
        style={{
          width: '15%',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity onPress={onPress}>
          <EditIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {AddressCard, ContectCard, AddressdEditModal};
