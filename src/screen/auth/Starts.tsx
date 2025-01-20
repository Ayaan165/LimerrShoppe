import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import StartLogo from '../../logo/StartLogo.svg';
import {TouchableButton} from '../../component/Button';
import ArrowButton from '../../component/ArrowButton';
import {COLORS} from '../../consts/COLOR';

import {NavigationProp} from '@react-navigation/native';

interface StartScreenProps {
  navigation: NavigationProp<any>;
}

const StartScreen: React.FC<StartScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logoBackground}>
          <StartLogo />
        </View>
        <Text style={styles.mainTitle}>Shoppe</Text>
        <Text style={styles.lightText}>
          Beautiful eCommerce UI Kit{'\n'}for your online store
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableButton
          title="Let's get started"
          onPress={() => {
            navigation.navigate('createAccount');
          }}
          TextStyle={{color: '#f3f3f3', fontSize: 22, fontFamily: 'Nunito-Light'}}
        />
        <View style={styles.row}>
          <Text style={styles.lightText2}>I already have an account</Text>
          <ArrowButton
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBackground: {
    height: 130,
    width: 130,
    borderRadius: 75,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  mainTitle: {
    fontSize: 52,
    fontFamily: 'Raleway-Bold',
    color: COLORS.black,
    marginBottom: 10,
  },
  lightText: {
    fontSize: 19,
    color: COLORS.black20,
    textAlign: 'center',
    lineHeight: 33,

    fontFamily: 'Nunito-Light',
  },
  bottomContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  lightText2: {
    fontSize: 15,
    fontFamily: 'Nunito-Light',
    color: COLORS.black20,
  },
});

export default StartScreen;
