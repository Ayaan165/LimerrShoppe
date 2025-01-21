import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {COLORS} from '../consts/COLOR';

interface TintedButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  TextStyle?: TextStyle;
}

const TintedButton: React.FC<TintedButtonProps> = ({title, onPress, style, TextStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: COLORS.tintedButton}, style]}
      onPress={onPress}>
      <Text style={(styles.buttonText, TextStyle)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.primaryButton,
    fontSize: 16,
    fontWeight: 500,
  },
});

export default TintedButton;
