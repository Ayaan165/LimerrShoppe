import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import typography from '../../../style/typography';
import Logo from '../../../logo/StartLogo.svg';
import BottomBarView from '../../../component/BottomBarView';

const AboutApp: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding:20, alignItems:"center", justifyContent:'center', flex:1}}>
        <Logo/>
      </View>
      <View style={{padding:20}}>
        <Text style={{fontSize:28, ...typography.RaleWay700, lineHeight:36, marginBottom:16}}>About Shoppe</Text>
        <Text style={{fontSize:16, ...typography.Nunito300, marginBottom:16}}>
          Shoppe - Shopping UI kit" is likely a user interface (UI) kit designed
          to facilitate the development of e-commerce or shopping-related
          applications. UI kits are collections of pre-designed elements,
          components, and templates that developers and designers can use to
          create consistent and visually appealing user interfaces.
        </Text>
        <Text style={{fontSize:16, ...typography.Nunito300, marginBottom:10}}>
          If you need help or you have any questions, feel free to contact me by
          email.
        </Text>
        <Text style={{fontSize:17,...typography.RaleWay700}}>hello@mydomain.com</Text>
        <BottomBarView/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AboutApp;
