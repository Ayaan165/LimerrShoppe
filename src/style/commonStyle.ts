import {Dimensions, StyleSheet} from 'react-native';
export const windowWidth = Dimensions.get('window').width; 
export const windowHeight = Dimensions.get('window').height; 

// import {colors} from '@app/constants/colors';

const commonStyle = StyleSheet.create({
  // flex
  flex0: {
    flex: 0,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  // flex direction
  flexDirectionRow: {
    flexDirection: 'row',
  },
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  // align items
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  // justify content
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentStart: {
    justifyContent: 'flex-start',
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
  justifyContentSpaceB: {
    justifyContent: 'space-between',
  },
  justifyContentSpaceA: {
    justifyContent: 'space-around',
  },
  justifyContentSpaceE: {
    justifyContent: 'space-evenly',
  },
  // align self
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  // text align
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignJustify: {
    textAlign: 'justify',
  },
  // margin
  m0: {
    margin: 0,
  },
  m5: {
    margin: 5,
  },
  m10: {
    margin: 10,
  },
  m15: {
    margin: 15,
  },
  m20: {
    margin: 20,
  },
  m25: {
    margin: 25,
  },
  m30: {
    margin: 30,
  },
  // margin vertical
  mv0: {
    marginVertical: 0,
  },
  mv5: {
    marginVertical: 5,
  },
  mv10: {
    marginVertical: 10,
  },
  mv15: {
    marginVertical: 15,
  },
  mv20: {
    marginVertical: 20,
  },
  mv25: {
    marginVertical: 25,
  },
  mv30: {
    marginVertical: 30,
  },
  // margin horizontal
  mh0: {
    marginHorizontal: 0,
  },
  mh3: {
    marginHorizontal: 3,
  },
  mh5: {
    marginHorizontal: 5,
  },
  mh10: {
    marginHorizontal: 10,
  },
  mh15: {
    marginHorizontal: 15,
  },
  mh20: {
    marginHorizontal: 20,
  },
  mh25: {
    marginHorizontal: 25,
  },
  mh30: {
    marginHorizontal: 30,
  },
  // margin left
  ml0: {
    marginLeft: 0,
  },
  ml5: {
    marginLeft: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  ml15: {
    marginLeft: 15,
  },
  ml20: {
    marginLeft: 20,
  },
  ml25: {
    marginLeft: 25,
  },
  ml30: {
    marginLeft: 30,
  },
  // margin right
  mr0: {
    marginRight: 0,
  },
  mr3: {
    marginRight: 3,
  },
  mr5: {
    marginRight: 5,
  },
  mr10: {
    marginRight: 10,
  },
  mr15: {
    marginRight: 15,
  },
  mr20: {
    marginRight: 20,
  },
  mr25: {
    marginRight: 25,
  },
  mr30: {
    marginRight: 30,
  },
  // margin top
  mt0: {
    marginTop: 0,
  },
  mt2: {
    marginTop: 2,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt20: {
    marginTop: 20,
  },
  mt25: {
    marginTop: 25,
  },
  mt30: {
    marginTop: 30,
  },
  // margin bottom
  mb0: {
    marginBottom: 0,
  },
  mb2: {
    marginBottom: 2,
  },
  mb5: {
    marginBottom: 5,
  },
  mb7: {
    marginBottom: 7,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mb20: {
    marginBottom: 20,
  },
  mb25: {
    marginBottom: 25,
  },
  mb30: {
    marginBottom: 30,
  },
  mb40: {
    marginBottom: 40,
  },
  // padding
  p0: {
    padding: 0,
  },
  p5: {
    padding: 5,
  },
  p10: {
    padding: 10,
  },
  p15: {
    padding: 15,
  },
  p20: {
    padding: 20,
  },
  p25: {
    padding: 25,
  },
  p30: {
    padding: 30,
  },
  // padding vertical
  pv0: {
    paddingVertical: 0,
  },
  pv5: {
    paddingVertical: 5,
  },
  pv10: {
    paddingVertical: 10,
  },
  pv15: {
    paddingVertical: 15,
  },
  pv20: {
    paddingVertical: 20,
  },
  pv25: {
    paddingVertical: 25,
  },
  pv30: {
    paddingVertical: 30,
  },
  // padding horizontal
  ph0: {
    paddingHorizontal: 0,
  },
  ph5: {
    paddingHorizontal: 5,
  },
  ph10: {
    paddingHorizontal: 10,
  },
  ph15: {
    paddingHorizontal: 15,
  },
  ph20: {
    paddingHorizontal: 20,
  },
  ph25: {
    paddingHorizontal: 25,
  },
  ph30: {
    paddingHorizontal: 30,
  },
  // padding left
  pl0: {
    paddingLeft: 0,
  },
  pl5: {
    paddingLeft: 5,
  },
  pl10: {
    paddingLeft: 10,
  },
  pl15: {
    paddingLeft: 15,
  },
  pl20: {
    paddingLeft: 20,
  },
  pl25: {
    paddingLeft: 25,
  },
  pl30: {
    paddingLeft: 30,
  },
  // padding right
  pr0: {
    paddingRight: 0,
  },
  pr5: {
    paddingRight: 5,
  },
  pr10: {
    paddingRight: 10,
  },
  pr15: {
    paddingRight: 15,
  },
  pr20: {
    paddingRight: 20,
  },
  pr25: {
    paddingRight: 25,
  },
  pr30: {
    paddingRight: 30,
  },
  // padding top
  pt0: {
    paddingTop: 0,
  },
  pt5: {
    paddingTop: 5,
  },
  pt10: {
    paddingTop: 10,
  },
  pt15: {
    paddingTop: 15,
  },
  pt20: {
    paddingTop: 20,
  },
  pt25: {
    paddingTop: 25,
  },
  pt30: {
    paddingTop: 30,
  },
  // padding bottom
  pb0: {
    paddingBottom: 0,
  },
  pb5: {
    paddingBottom: 5,
  },
  pb10: {
    paddingBottom: 10,
  },
  pb15: {
    paddingBottom: 15,
  },
  pb20: {
    paddingBottom: 20,
  },
  pb25: {
    paddingBottom: 25,
  },
  pb30: {
    paddingBottom: 30,
  },
  pb35: {
    paddingBottom: 35,
  },
  pb50: {
    paddingBottom: 80,
  },
  pb100: {
    paddingBottom: 100,
  },
  // width
  widthP5: {
    width: '5%',
  },
  widthP15: {
    width: '15%',
  },
  widthP20: {
    width: '20%',
  },
  widthP25: {
    width: '25%',
  },
  widthP50: {
    width: '50%',
  },
  widthP75: {
    width: '75%',
  },
  widthP80: {
    width: '80%',
  },
  widthP85: {
    width: '85%',
  },
  widthP100: {
    width: '100%',
  },
  // height
  heightP50: {
    height: '50%',
  },
  heightP100: {
    height: '100%',
  },
  height40: {
    height: 40,
  },
  height50: {
    height: 50,
  },
  // position
  positionA: {
    position: 'absolute',
  },
  positionR: {
    position: 'relative',
  },
  // error text
  zIndex1:{
    zIndex:1
  }
});

export default commonStyle;