import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import typography from '../../style/typography';
import {NavigationProp} from '@react-navigation/native';
import BottomBarView from '../../component/BottomBarView';
import SettingArrow from '../../logo/SettingArrow.svg';
import DeleteAccountModal from './Setting/DeleteAccountModal';

const SETTINGS_SECTIONS = [
  {
    title: 'Personal',
    data: [
      {label: 'Profile', route: 'ProfileSettingScreen'},
      {label: 'Shipping Address', route: 'AddressSettingScreen'},
      {label: 'Payment Methods', route: 'PaymentSettingScreen'},
    ],
  },
  {
    title: 'Shop',
    data: [
      {label: 'Country', value: 'Vietnam', route: 'CountrySettingScreen'},
      {label: 'Currency', value: '$ USD', route: 'CurrencySettingScreen'},
      {label: 'Sizes', value: 'UK', route: 'SizeSettingScreen'},
      {label: 'Terms and Conditions', route: 'TermsConditionScreen'},
    ],
  },
  {
    title: 'Account',
    data: [
      {label: 'Language', value: 'English', route: 'LanguageSettingScreen'},
      {label: 'About Slada', route: 'AbourAppScreen'},
    ],
  },
];

interface SettingsScreenProps {
  navigation: NavigationProp<any>;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => item.route && navigation.navigate(item.route)}>
      <View style={styles.itemContent}>
        <Text style={styles.itemLabel}>{item.label}</Text>
        <View>
          {item.value && <Text style={styles.itemValue}>{item.value}</Text>}
        </View>
      </View>
      <SettingArrow />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Modal transparent={true} visible={modalVisible}>
        <DeleteAccountModal
          onCanclePress={() => {setModalVisible(false)}}
          onDeletePress={() => {setModalVisible(false)}}
        />
      </Modal>
      <View>
        <Text style={styles.MainTitle}>Settings</Text>
      </View>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={SETTINGS_SECTIONS}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({item}) => (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            {item.data.map((subItem, subIndex) => (
              <React.Fragment key={subIndex}>
                {renderItem({item: subItem})}
              </React.Fragment>
            ))}
          </View>
        )}
        ListFooterComponent={
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.deleteText}>Delete My Account</Text>
            </TouchableOpacity>
            <Text style={styles.version}>Slada</Text>
            <Text style={{fontSize: 12, ...typography.Nunito400}}>
              Version 1.0 January, 2025
            </Text>
            <BottomBarView />
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  MainTitle: {
    fontSize: 28,
    ...typography.RaleWay700,
    marginBottom: 20,
  },
  sectionContainer: {},
  sectionTitle: {
    fontSize: 20,
    ...typography.RaleWay800,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 43,
    borderBottomWidth: 1,
    marginBottom: 20,
    borderBottomColor: '#eee',
  },
  itemContent: {
    flex: 1,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLabel: {
    fontSize: 16,
    ...typography.Nunito600,
  },
  itemValue: {
    fontSize: 15,
    ...typography.Nunito400,
    marginBottom: 5,
  },
  arrow: {
    fontSize: 16,
    color: '#ccc',
  },
  footer: {
    marginTop: 20,
  },
  deleteText: {
    color: '#D97474',
    fontSize: 13,
    ...typography.Nunito600,
    marginBottom: 20,
  },
  version: {
    fontSize: 20,
    ...typography.RaleWay800,
  },
});

export default SettingsScreen;
