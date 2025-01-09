import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import StartLogo from '../../logo/StartLogo.svg';
import { TouchableButton } from '../../component/Button';
import ArrowButton from '../../component/ArrowButton';
import { COLORS } from '../../consts/COLOR';

import { NavigationProp } from '@react-navigation/native';

interface StartScreenProps {
  navigation: NavigationProp<any>;
}

const StartScreen: React.FC<StartScreenProps> = ({ navigation }) => {
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
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 10,
  },
  lightText: {
    fontSize: 16,
    color: COLORS.black,
    textAlign: 'center',
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
    fontSize: 16,
    color: COLORS.black,
  },
});

export default StartScreen;
