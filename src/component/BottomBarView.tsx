import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const BottomBarView: React.FC = () => {
  const bottomViewHeight = useBottomTabBarHeight();
  return <View style={{height: bottomViewHeight}}></View>;
};

const BottomBarHeight: React.FC = () => {
  const bottomViewHeight = useBottomTabBarHeight();
  return bottomViewHeight;
};
const styles = StyleSheet.create({});

export default BottomBarView ;
export {BottomBarHeight};
