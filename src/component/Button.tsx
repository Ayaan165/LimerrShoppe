import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {COLORS} from '../consts/COLOR';
import typography from '../style/typography';
import {title} from 'process';

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({onClick, label, disabled = false}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

interface TouchableButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  TextStyle?: TextStyle;
  disable?: boolean;
}

const TouchableButton: React.FC<TouchableButtonProps> = ({
  onPress,
  title,
  style,
  TextStyle,
  disable=false
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]} disabled={disable}>
      <Text style={[styles.text, TextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

interface SendAgainButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

const SendAgainButton: React.FC<SendAgainButtonProps> = ({onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.sendAgainButton, style]}>
      <Text style={styles.sendAgainText}>Send Again</Text>
    </TouchableOpacity>
  );
};

interface BlackButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  title?: string;
}

const BlackButton: React.FC<BlackButtonProps> = ({onPress, style, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.BlackButton, style]}>
      <Text style={styles.BlackText}>{title}</Text>
    </TouchableOpacity>
  );
};

interface PrimaryBorderButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  title: string;
}

const PrimaryBorderButton: React.FC<PrimaryBorderButtonProps> = ({
  onPress,
  style,
  title,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.borderbutton, style]}>
      <Text style={styles.borderbuttontext}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primaryButton,
    alignItems: 'center',
    justifyContent: 'center',
    width: 335,
    height: 60,
    borderRadius: 16,
  },
  text: {
    textAlign: 'center',
    lineHeight: 31,
    color: '#fff',
    fontSize: 22,
  },
  sendAgainButton: {
    backgroundColor: COLORS.secondaryButton,
    // padding: 10,
    borderRadius: 16,
    alignItems: 'center',
    width: 200,
    height: 50,
    justifyContent: 'center',
  },
  sendAgainText: {
    color: '#F3F3F3',
    fontSize: 22,
    fontWeight: 300,
    textAlign: 'center',
  },
  BlackButton: {
    backgroundColor: '#000',
    // padding: 10,
    borderRadius: 16,
    alignItems: 'center',
    width: 200,
    height: 50,
    justifyContent: 'center',
  },
  BlackText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 300,
    textAlign: 'center',
    ...typography.Nunito,
  },
  borderbutton: {
    backgroundColor: 'transparent',
    borderColor: COLORS.primaryButton,
    borderWidth: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: 335,
    height: 60,
  },
  borderbuttontext: {
    color: COLORS.primaryButton,
    fontSize: 22,
    ...typography.Nunito,
  },
});

export {
  Button,
  TouchableButton,
  SendAgainButton,
  BlackButton,
  PrimaryBorderButton,
};
