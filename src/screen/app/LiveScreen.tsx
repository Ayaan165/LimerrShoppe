import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import Forward from '../../logo/Forward.svg';
import {COLORS} from '../../consts/COLOR';
import {TouchableButton} from '../../component/Button';
import {windowHeight} from '../../style/commonStyle';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
const {width, height} = Dimensions.get('window');

function LiveScreen() {
  const usableheght = windowHeight - useBottomTabBarHeight();
  return (
    <SafeAreaView style={[styles.container, {height: usableheght}]}>
      <View style={[styles.imageContainer, {height: usableheght * 0.85}]}>
        <Image
          source={require('../../assets/image/LIVE.png')}
          resizeMode="cover"
          style={[styles.image, {height: usableheght * 0.85}]}
        />
      </View>

      <View style={[styles.footer, {height: usableheght * 0.065}]}>
        <View style={styles.footerContent}>
          <View style={styles.viewersContainer}>
            <Image
              source={require('../../logo/Eye.png')}
              style={styles.eyeIcon}
            />
            <Text>2,530</Text>
          </View>
          <View style={styles.liveBadge}>
            <View style={styles.liveIndicator}></View>
            <Text style={styles.liveText}>Live</Text>
          </View>
          <Forward />
        </View>
        <View>
          <TouchableButton
            title="Shop"
            style={styles.shopButton}
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width - 40,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  footerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  viewersContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeIcon: {
    width: 25,
    height: 20,
  },
  liveBadge: {
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#08C514',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  liveIndicator: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  liveText: {
    textDecorationStyle: 'dotted',
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.white,
  },
  shopButton: {
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});

export default LiveScreen;
