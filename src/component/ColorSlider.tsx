// import React, {useState} from 'react';
// import {View, Text, StyleSheet, ScrollView} from 'react-native';
// import Check from '../logo/Check.svg';

// const ColorSlider: React.FC = () => {
//     const [selectedColor, setSelectedColor] = useState('');
//     const colors = ['#EBEBEB', '#2A2A2A', '#0C29B9', '#FF3333', '#0CA8B9', '#E4A719', '#9D3CB9'];
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         // paddingVertical: 10,
//         paddingLeft: 15,
//         gap:8,
//         // backgroundColor: 'red',
//       }}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {colors.map((color, index) => (
//             <Color key={index} color={color} />
//         ))}
//         </ScrollView>
//     </View>
//   );
// };

// interface ColorProps {
//   color: string;
// }

// const Color: React.FC<ColorProps> = ({color}) => {
//   return (
//     <View
//       style={{
//         backgroundColor: 'white',
//         height: 40,
//         width: 40,
//         borderRadius: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginHorizontal: 5,
//         shadowColor: '#000',
//         shadowOffset: {width: 0, height: 2},
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 2,
//         marginVertical: 7,
//       }}>
//       <View
//         style={{
//           height: 30,
//           width: 30,
//           borderRadius: 15,
//           backgroundColor: color,
//         }}></View>
//       <Check style={{position: 'absolute' , top:-3, right:-7}}  />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default ColorSlider;



import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Check from '../logo/Check.svg';

const ColorSlider: React.FC = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const colors = ['#EBEBEB', '#2A2A2A', '#0C29B9', '#FF3333', '#0CA8B9', '#E4A719', '#9D3CB9'];

  const toggleSelection = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(item => item !== color) : [...prev, color]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {colors.map((color, index) => (
          <Color
            key={index}
            color={color}
            isSelected={selectedColors.includes(color)}
            onSelect={() => toggleSelection(color)}
          />
        ))}
      </ScrollView>

      {/* {selectedColors.length > 0 && (
        <Text style={styles.selectedText}>
          Selected Colors:{' '}
          <Text style={{ fontWeight: 'bold' }}>
            {selectedColors.join(', ')}
          </Text>
        </Text>
      )} */}
    </View>
  );
};

interface ColorProps {
  color: string;
  isSelected: boolean;
  onSelect: () => void;
}

const Color: React.FC<ColorProps> = ({ color, isSelected, onSelect }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onSelect} style={styles.colorContainer}>
      <View style={[styles.colorCircle, { backgroundColor: color }]} />
      {isSelected && <Check style={styles.checkIcon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    gap: 8,
  },
  colorContainer: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 7,
  },
  colorCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  checkIcon: {
    position: 'absolute',
    top: -3,
    right: -7,
  },
  selectedText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
    fontWeight: '500',
  },
});

export default ColorSlider;