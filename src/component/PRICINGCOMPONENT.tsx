import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../consts/COLOR';
import Check from '../logo/Check.svg';

const ProductSorter: React.FC = () => {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState<string>('Popular');

  const options = [
    {label: 'Popular'},
    {label: 'Newest'},
    {label: 'Price High to Low'},
    {label: 'Price Low to High'},
  ];

  const handleSelection = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View style={style.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            style.option,
            selectedOption === option.label && style.SelectedOption,
          ]}
          onPress={() => handleSelection(option.label)}>
          <Text
            style={[
              style.text,
              selectedOption === option.label && style.SelectedText,
            ]}>
            {option.label}
          </Text>
          {selectedOption === option.label && <Check style={style.check} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  SelectedText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primaryButton,
    fontFamily: 'Raleway',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.black,
    fontFamily: 'Raleway',
  },
  SelectedOption: {
    width: '48%',
    backgroundColor: '#E5EBFC',
    borderRadius: 15,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    alignItems: 'center',
    width: '48%',
    backgroundColor: '#F9F9F9',
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
  },
  check: {
    position: 'absolute',
    right: 3,
  },
});

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {windowWidth} from '../style/commonStyle';

const PriceRangeSlider: React.FC = () => {
  const [range, setRange] = useState<[number, number]>([10, 150]); // Initial range values as a tuple

  const handleValuesChange = (values: number[]) => {
    // TypeScript ensures values are an array of numbers
    setRange([values[0], values[1]]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Price</Text>
        <Text style={styles.priceText}>
          ${range[0]} — ${range[1]}
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <MultiSlider
          values={range}
          min={0}
          max={200}
          step={1}
          sliderLength={windowWidth - 60} // Adjust width of slider
          onValuesChange={handleValuesChange}
          selectedStyle={styles.selectedTrack}
          unselectedStyle={styles.unselectedTrack}
          trackStyle={styles.track}
          markerStyle={styles.marker}
          isMarkersSeparated={false} // Markers behave together or separately
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.black,
    lineHeight: 26,
    fontFamily: 'Raleway',
  },
  priceText: {
    fontSize: 19,
    fontWeight: '500',
    color: '#000',
    lineHeight:23,
    fontFamily: 'Raleway',
  },
  selectedTrack: {
    backgroundColor: COLORS.primaryButton, // Blue color for selected range
  },
  unselectedTrack: {
    backgroundColor: '#E5EBFC', // Light gray for unselected range
  },
  track: {
    height: 5,
    borderRadius: 5,
  },
  marker: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#E5EBFC',
    shadowColor: '#00000029',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
});

export {ProductSorter, PriceRangeSlider};
