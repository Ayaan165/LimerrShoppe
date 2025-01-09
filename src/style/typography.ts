import {StyleSheet} from 'react-native';
import {COLORS} from '../consts/COLOR';

const typography = StyleSheet.create({
  boldTitle52: {
    fontSize: 52,
    fontWeight: 700,
    fontFamily: 'Raleway',
  },
  boldtitle50: {
    fontSize: 50,
    fontWeight: 700,
  },
  buttonText22: {
    fontSize: 22,
    fontWeight: 300,
  },
  regulartext19: {
    fontSize: 19,
    fontWeight: 300,
  },
  regulartext15: {
    fontSize: 15,
    fontWeight: 300,
  },
  textBold28: {
    fontSize: 28,
    fontWeight: 700,
  },
  textBold21: {
    fontSize: 21,
    fontWeight: 700,
  },
  boldTint15: {
    fontSize: 15,
    fontWeight: 700,
    color: COLORS.blueTintText,
  },
  Boldtext16: {
    fontSize: 16,
    fontWeight: 700,
  },
  textBold14: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight:18
  },
  w500s18 :{
    width:500,
    fontSize:18,
  },
  w500s15 :{
    width:500,
    fontSize:15,
  },
  w500s16 :{
    width:500,
    fontSize:16,
    lineHeight:20,
    color:COLORS.white,
  },
  Raleway: {
    fontFamily: 'Raleway',
  },
  Nunito: {
    fontFamily: 'nunito',
  },
  NunitoIT: {
    fontFamily: 'numitoIt',
  },
  w400s10:{
    fontWeight:400,
    fontSize:10,
  },
  w500s12:{
    fontWeight:400,
    fontSize:12,
  },
  w600s13:{
    // fontWeight:600,
    fontWeight:'bold',
    fontSize:13
  },
  w400s12:{
    fontWeight:400,
    fontSize:12,
  },
  boldText17:{
    fontSize:17,
    fontWeight:700,
  },
  w500s17:{
    fontSize:17,
    fontWeight:500,
  }
});

export default typography;
