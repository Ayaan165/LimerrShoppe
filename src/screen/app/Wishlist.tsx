import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import typography from '../../style/typography';

const Wishlist: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Reviews</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    ...typography.RaleWay700,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.28,
  },
});

export default Wishlist;
