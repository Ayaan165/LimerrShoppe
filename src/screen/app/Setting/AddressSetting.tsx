import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import typography from '../../../style/typography';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowButton from '../../../component/ArrowButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  AddressSetting: undefined;
  CountrySelection: {setCountry: (country: string) => void, country: string};
};
type AddressSettingScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddressSetting'
>;

const AddressSetting: React.FC = () => {
  const [country, setCountry] = useState('Choose your country');
  const navigation = useNavigation<AddressSettingScreenProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Shipping Address</Text>
      </View>
      <View style={{paddingHorizontal: 20, paddingVertical: 5}}>
        <Text style={[styles.label]}>Country</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                ...typography.RaleWay700,
                color: country === 'Choose your country' ? '#202020' : '#004CFF',
              }}>
              {country}
            </Text>
          </View>
          <View>
            <ArrowButton
              onPress={() => {
                navigation.navigate('CountrySelection', { setCountry , country});
              }}
            />
          </View>
        </View>
        <Text style={styles.label}>Address</Text>
        <TextInput
          keyboardType="default"
          style={styles.input}
          placeholder="Required"
          placeholderTextColor={'#9EB4E8'}
        />
        <Text style={styles.label}>Town / City</Text>
        <TextInput
          keyboardType="default"
          style={styles.input}
          placeholder="Required"
          placeholderTextColor={'#9EB4E8'}
        />
        <Text style={styles.label}>Postcode</Text>
        <TextInput
          keyboardType="default"
          style={styles.input}
          placeholder="Required"
          placeholderTextColor={'#9EB4E8'}
        />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          keyboardType="default"
          style={styles.input}
          placeholder="Required"
          placeholderTextColor={'#9EB4E8'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    ...typography.RaleWay700,
    marginBottom: 7,
    // color: '#000',
  },
  subtitle: {
    fontSize: 16,
    ...typography.RaleWay500,
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    ...typography.Nunito600,
    // marginBottom: 20,
    lineHeight: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#F1F4FE',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 17,
    ...typography.RaleWay400,
  },
});

export default AddressSetting;
