import {StyleSheet} from 'react-native';
import {COLORS} from '../consts/COLOR';
import {Platform} from 'react-native';

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
    fontFamily: 'Raleway300',
  },
  regulartext19: {
    fontSize: 19,
    fontFamily: 'Raleway300',
  },
  regulartext15: {
    fontSize: 15,
    // fontWeight: 300,
    fontFamily: 'Raleway300',
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
    fontFamily: 'Raleway700',
  },
  textBold14: {
    fontSize: 14,
    fontFamily: 'Raleway700',
    lineHeight: 18,
  },
  w500s18: {
    fontFamily: 'Raleway500',
    fontSize: 18,
  },
  w500s15: {
    fontFamily: 'Raleway500',
    fontSize: 15,
  },
  w500s16: {
    fontFamily: 'Raleway500',
    fontSize: 16,
    lineHeight: 20,
    color: COLORS.white,
  },
  Raleway: {
    fontFamily: 'Raleway',
  },
  Raleway700: {
    fontFamily: 'Raleway700',
  },
  Nunito: {
    // fontFamily: 'nunito',
  },
  NunitoIT: {
    fontFamily: 'numitoIt',
  },
  w400s10: {
    fontFamily: 'Raleway400',
    fontSize: 10,
  },
  w500s12: {
    fontFamily: 'Raleway500',
    fontSize: 12,
  },
  w600s13: {
    fontFamily: 'Raleway600',
    fontSize: 13,
  },
  w400s12: {
    fontFamily: 'Raleway400',
    fontSize: 12,
  },
  boldText17: {
    fontSize: 17,
    // fontFamily:'Raleway',
    // fontWeight:700
  },
  w500s17: {
    fontSize: 17,
    fontFamily: 'Raleway500',
  },

  // NEW TYPOGRAPHY

  RaleWay700: {
    ...Platform.select({
      ios: {fontFamily: 'Raleway', fontWeight: '700'},
      android: {fontFamily: 'Raleway700'},
    }),
  },
  RaleWay600: {
    ...Platform.select({
      ios: {fontFamily: 'Raleway', fontWeight: '600'},
      android: {fontFamily: 'Raleway600'},
    }),
  },
  RaleWay400: {
    ...Platform.select({
      ios: {fontFamily: 'Raleway', fontWeight: '400'},
      android: {fontFamily: 'Raleway400'},
    }),
  },
  RaleWay500: {
    ...Platform.select({
      ios: {fontFamily: 'Raleway', fontWeight: '500'},
      android: {fontFamily: 'Raleway500'},
    }),
  },
  RaleWay800: {
    ...Platform.select({
      ios: {fontFamily: 'Raleway', fontWeight: '800'},
      android: {fontFamily: 'Raleway800'},
    }),
  },
  Nunito400: {
    ...Platform.select({
      ios: {fontFamily: 'Nunito', fontWeight: '400'},
      android: {fontFamily: 'Nunito400'},
    }),
  },
  Nunito300: {
    ...Platform.select({
      ios: {fontFamily: 'Nunito', fontWeight: '300'},
      android: {fontFamily: 'Nunito300'},
    }),
  },
  Nunito600: {
    ...Platform.select({
      ios: {fontFamily: 'Nunito', fontWeight: '600'},
      android: {fontFamily: 'Nunito600'},
    }),
  },
  Nunito800: {
    ...Platform.select({
      ios: {fontFamily: 'Nunito', fontWeight: '800'},
      android: {fontFamily: 'Nunito800'},
    }),
  },
  font21: {
    fontSize: 21,
  },
  font15: {
    fontSize: 15,
  },
  font12: {
    fontSize: 12,
  },
  font13: {
    fontSize: 13,
  },
  font14: {
    fontSize: 14,
  },
  font16: {
    fontSize: 16,
  },
  font17: {
    fontSize: 17,
  },
  font18: {
    fontSize: 18,
  },
  font20: {
    fontSize: 20,
  },
  font22: {
    fontSize: 22,
  },
  font28: {
    fontSize: 28,
  },
});

export default typography;
