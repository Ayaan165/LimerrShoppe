import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Input, PasswordInput} from '../../component/Input';
import {TouchableButton} from '../../component/Button';
import UploadPhoto from '../../logo/UploadPhoto.svg';
import Bubble2 from '../../logo/Bubble2.svg';
import Bubble1 from '../../logo/Bubble1.svg';
import Line from '../../logo/Line.svg';
import TransButton from '../../component/TransButton';
import {windowWidth, windowHeight} from '../../style/commonStyle';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from 'react-native-country-picker-modal';
import DROPDOWN from '../../logo/DROPDOWN.svg';
import HIDE from '../../logo/HIDE.svg';
import SHOW from '../../logo/SHOW.svg';
import typography from '../../style/typography';
import {COLORS} from '../../consts/COLOR';

const CreateAccount = () => {
  const [countryCode, setCountryCode] = useState<CountryCode>(
    'AD' as CountryCode,
  );
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [country, setCountry] = useState<Country>({} as Country);
  const [withCountryNameButton, setWithCountryNameButton] =
    useState<boolean>(false);
  const [withFlag, setWithFlag] = useState<boolean>(true);
  const [withEmoji, setWithEmoji] = useState<boolean>(true);
  const [withFilter, setWithFilter] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  const switchVisible = () => setVisible(!visible);
  const switchHidden = () => setIsHidden(!isHidden);

  return (
    <SafeAreaView style={styles.root}>
      <Bubble2 style={styles.bubble2} />
      <Bubble1 style={styles.bubble1} />
      <View style={styles.container}>
        <View style={{gap: windowHeight > 700 ? 60 : 20}}>
          <View style={styles.titleContainer}>
            <Text style={[typography.boldtitle50, styles.titleText]}>
              Create {'\n'}Account
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <UploadPhoto style={styles.uploadPhoto} />
            <Input
              placeholder="Email"
              type="email-address"
              style={{width: windowWidth - 40}}
            />
            <View style={styles.passwordContainer}>
              <PasswordInput
                type="default"
                placeholder="Password"
                style={{width: windowWidth - 100}}
                secureTextEntry={isHidden}
              />
              <View>
                {!isHidden ? (
                  <TouchableOpacity onPress={switchHidden}>
                    <HIDE height={20} width={20} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={switchHidden}>
                    <SHOW height={20} width={20} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View style={styles.numberContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <TouchableOpacity
                    style={styles.countryPicker}
                    onPress={switchVisible}>
                    <CountryPicker
                      {...{
                        countryCode,
                        withFilter,
                        withFlag,
                        withCountryNameButton,
                        withEmoji,
                        onSelect,
                        modalProps: {visible},
                        onClose: () => setVisible(false),
                        onOpen: () => setVisible(true),
                      }}
                    />
                    <DROPDOWN />
                  </TouchableOpacity>
                </View>
                <View style={{marginHorizontal: 15}}>
                  <Line />
                </View>
                <View>
                  <Input
                    placeholder="Phone Number"
                    type="phone-pad"
                    style={{width: 200, paddingLeft: 0}}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableButton
              title="Done"
              onPress={() => console.log('Create Account')}
              style={{width: windowWidth - 40}}
            />
            <TransButton
              title="Cancel"
              onPress={() => console.log('Clicked')}
              // style={{width:windowWidth-40}}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    backgroundColor: COLORS.white,
  },
  bubble2: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bubble1: {
    position: 'absolute',
    right: 0,
    top: windowHeight * 0.07,
    zIndex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: windowHeight,
    width: windowWidth,
    zIndex: 1,
  },
  numberContainer: {
    backgroundColor: COLORS.inputBackground,
    width: windowWidth - 40,
    height: 52,
    borderRadius: 60,
    fontSize: 16,
    color: COLORS.black20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    backgroundColor: COLORS.inputBackground,
    width: windowWidth - 40,
    height: 52,
    borderRadius: 60,
    fontSize: 16,
    color: COLORS.black20,
  },
  titleContainer: {
    width: windowWidth - 40,
    zIndex: 3,
  },
  titleText: {
    marginBottom: 10,
  },
  uploadPhoto: {
    marginBottom: 30,
    zIndex: 3,
  },
  inputContainer: {
    gap: 10,
  },
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    gap: 10,
  },
});

export default CreateAccount;
