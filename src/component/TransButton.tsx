import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface TransButtonProps {
  title: string;
  onPress: () => void;
}

const TransButton: React.FC<TransButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    width: 335,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginVertical:20,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize:15,
fontWeight: 300,},
});

export default TransButton;
