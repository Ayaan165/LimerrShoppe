
import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../consts/COLOR';
import typography from '../style/typography';
import commonStyle from '../style/commonStyle';

interface SearchItemProps {
    item: string;
    onPress: () => void;
}

const SearchItem: React.FC<SearchItemProps> = ({item, onPress}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: COLORS.inputBackground,
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderRadius: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 'auto',
        }}>
        <Text
          style={[
            typography.w500s17,
            typography.Raleway,
            {width: 'auto'},
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
};

export default SearchItem;