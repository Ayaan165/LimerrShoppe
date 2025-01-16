import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import PhotoFrame from './PhotoFrame'; // Assuming this is a custom component
import Check from '../logo/Check.svg'; // Assuming this is an SVG
import { windowWidth } from '../style/commonStyle';
import { platform } from 'os';

const CategoriesSelector: React.FC = () => {
  const size = windowWidth * 0.13;

  const data = [
    { id: 1, url: require('../assets/image/TP1.png'), name: 'Dresses' },
    { id: 2, url: require('../assets/image/TP2.png'), name: 'Pants' },
    { id: 3, url: require('../assets/image/TP3.png'), name: 'Skirts' },
    { id: 4, url: require('../assets/image/TP4.png'), name: 'Shorts' },
    { id: 5, url: require('../assets/image/TP5.png'), name: 'Jackets' },
    { id: 6, url: require('../assets/image/TP6.png'), name: 'Hoodies' },
    { id: 7, url: require('../assets/image/TP7.png'), name: 'Shirts' },
    { id: 8, url: require('../assets/image/TP8.png'), name: 'Polo' },
    { id: 9, url: require('../assets/image/TP9.png'), name: 'T-shirts' },
    { id: 10, url: require('../assets/image/TP10.png'), name: 'Tunics' },
  ];

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedItems((prev) => {
      const newSelectedItems = new Set(prev);
      if (newSelectedItems.has(id)) {
        newSelectedItems.delete(id);
      } else {
        newSelectedItems.add(id);
      }
      return Array.from(newSelectedItems);
    });
  };

  const selectedNames = data
    .filter((item) => selectedItems.includes(item.id))
    .map((item) => item.name);

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <Item
          key={item.id}
          item={item}
          size={size}
          url={item.url}
          name={item.name}
          isSelected={selectedItems.includes(item.id)}
          toggleSelection={() => toggleSelection(item.id)}
        />
      ))}
    </View>
  );
};

interface ItemProps {
  item: { id: number; url: any };
  size: number;
  url: any;
  name: string;
  isSelected: boolean;
  toggleSelection: () => void;
}

const Item: React.FC<ItemProps> = ({
  size,
  url,
  isSelected,
  toggleSelection,
  name,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={toggleSelection} style={{ position: 'relative' }}>
      <PhotoFrame size={size} url={url} />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 13,
          fontWeight: Platform.OS === 'android' ? 'bold' : '500',
          fontFamily: 'Raleway',
        }}
      >
        {name}
      </Text>
      {isSelected && <Check style={styles.checkIcon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  checkIcon: {
    position: 'absolute',
    top: 0,
    right: -5,
  },
  selectedNamesContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  selectedNamesText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Raleway',
    color: '#333',
  },
});

export default CategoriesSelector;