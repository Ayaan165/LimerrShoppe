import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../consts/COLOR';

interface CustomContainerProps {
  SvgComponent?: React.ComponentType;
  style?: object;
  badgeCount?: number;
  [key: string]: any;
}

const CustomContainer: React.FC<CustomContainerProps> = ({ SvgComponent, style, badgeCount, ...props }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      {SvgComponent && <SvgComponent />}
      {badgeCount ? (
        <View style={styles.badgeContainer}>     
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    position: 'relative',
  },
  badgeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth:3,
    borderColor:'white',
    backgroundColor:COLORS.primaryButton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CustomContainer;