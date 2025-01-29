import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import {COLORS} from '../consts/COLOR';

interface TintedButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  TextStyle?: TextStyle;
  badge?: boolean;
  badgeColor?: string;
}

const TintedButton: React.FC<TintedButtonProps> = ({
  title,
  onPress,
  style,
  TextStyle,
  badge,
  badgeColor
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: COLORS.tintedButton}, style]}
      onPress={onPress}>
      <Text style={(styles.buttonText, TextStyle)}>{title}</Text>
      {badge && (
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: badgeColor,
            borderColor: '#fff',
            borderWidth: 2,
          }}></View>
      )}
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
