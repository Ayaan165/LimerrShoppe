import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle } from 'react-native';
import Arrow from '../logo/Arrow.svg';
import { COLORS } from '../consts/COLOR';

interface ArrowButtonProps {
    onPress: () => void;
    style?: ViewStyle;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({onPress , style}) => {
    return (
        <TouchableOpacity style={[styles.round, style]} onPress={onPress}>
        <Arrow/>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    round: {
        backgroundColor: COLORS.primaryButton,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginLeft: 10,
      },
});

export default ArrowButton;