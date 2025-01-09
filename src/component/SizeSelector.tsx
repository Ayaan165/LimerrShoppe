import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Polygon from '../logo/Polygon.svg';
import { COLORS } from "../consts/COLOR";
import { windowWidth } from "../style/commonStyle";

// Define the type for the selector options
type Option = "All" | string | number;

const SizeSelector: React.FC = () => {
  const [selected, setSelected] = useState<Option>(20);

  // Define the options
  const options: Option[] = ["XS", "S", "M", "L", "XL", "2XL"];

  return (
    <View style={styles.container}>
      <View style={styles.selector}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selected === option && styles.selectedOption,
            ]}
            onPress={() => setSelected(option)}
          >
            <Text
              style={[
                styles.optionText,
                selected === option && styles.selectedText,
              ]}
            >
              {typeof option === "string" ? option : `${option}%`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,

  },
  selector: {
    flexDirection: "row",
    backgroundColor: "#F4F6FE",
    borderRadius: 15,
    height:28,
    // justifyContent:'center',
    alignItems:'center',
    // gap:30
  },
  option: {
    // flex: 1,
    width:windowWidth*0.14,
    alignItems: 'center',
    justifyContent: "center",
    // width:30,
    // backgroundColor:'red',
    padding:5
  },
  optionText: {
    fontSize: 13,
    fontWeight: 800,
    color: "#AAC3FF",
    fontFamily:'Raleway'
  },
  selectedOption: {
    // position:'absolute',
    height:windowWidth*0.14,
    backgroundColor: "#FFFFFF",
    borderRadius: windowWidth*0.14/2,
    borderWidth: 3,
    borderColor: "#E5EBFC",
    shadowColor: "#1E4FFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  selectedText: {
    color: "#1E4FFF",
    fontWeight: 800,
    fontFamily:'Raleway',
    fontSize:15
  },

});

export default SizeSelector;



