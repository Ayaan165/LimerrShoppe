import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
  View,
  Text,
} from 'react-native';
import {COLORS} from '../consts/COLOR';
import typography from '../style/typography';

interface InputProps extends TextInputProps {
  placeholder: string;
  type: 'default' | 'email-address' | 'numeric' | 'phone-pad' ;
  style?: TextStyle | ViewStyle;
  inputStyle?: TextStyle | ViewStyle;
  label?: string;
}

const Input: React.FC<InputProps> = ({placeholder, type, style, ...props}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      keyboardType={type}
      {...props}
    />
  );
};

const PasswordInput: React.FC<InputProps> = ({
  placeholder,
  type,
  inputStyle,
  style,
  ...props
}) => {
  return (
    <View style={[styles.input, style]}>
      <TextInput
        style={[{flex: 1}, inputStyle]}
        placeholder={placeholder}
        keyboardType={type}
        secureTextEntry={true}
        {...props}
      />
    </View>
  );
};

const SettingInput: React.FC<InputProps> = ({
  placeholder,
  type,
  inputStyle,
  style,
  label,
  ...props
}) => {
  return (
    <>
      <Text
        style={{
          lineHeight: 20,
          marginBottom: 5,
          color: COLORS.black20,
          ...typography.Nunito600,
        }}>
        {label}
      </Text>
      <View style={[styles.Settinginput, style]}>
        <TextInput
          style={[{flex: 1}, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={'#9EB4E8'}
          keyboardType={type}
          {...props}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.inputBackground,
    width: 335,
    height: 52,
    borderRadius: 60,
    fontSize: 16,
    color: COLORS.black20,
    paddingLeft: 20,
    // fontWeight: 'bold',
  },
  Settinginput: {
    backgroundColor: '#F1F4FE',
    width: '100%',
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 17,
    ...typography.RaleWay400,
    color: COLORS.black20,
    paddingLeft: 20,
  },
});

export {Input, PasswordInput, SettingInput};
