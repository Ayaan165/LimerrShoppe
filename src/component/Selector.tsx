import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Polygon from '../logo/Polygon.svg';
import { COLORS } from "../consts/COLOR";

// Define the type for the selector options
type Option = "All" | number;

const Selector: React.FC = () => {
  const [selected, setSelected] = useState<Option>(20);

  // Define the options
  const options: Option[] = ["All", 10, 20, 30, 40, 50];

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
            {selected === option && <Polygon style={{position:'absolute', top:0}}/>}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 20,

  },
  selector: {
    flexDirection: "row",
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    height:30,
    justifyContent:'center',
    alignItems:'center'
  },
  option: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: 12,
    // position: "relative",
  },
  optionText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#000",
    fontFamily:'Raleway'
  },
  selectedOption: {
    // position:'absolute',
    height:40,
    width:60,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#1E4FFF",
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
    fontSize:18
  },

});

export default Selector;