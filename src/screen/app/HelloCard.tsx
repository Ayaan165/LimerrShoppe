import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import typography from '../../style/typography';
import commonStyle from '../../style/commonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Bubble8 from '../../logo/Bubble8.svg';

const HelloCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Bubble8 style={{position: 'absolute', top: 0, left: -20}} />
      <ScrollView
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        style={{
          width: windowWidth,
          height: windowHeight,
        }}>
            <View style={[commonStyle.flex1, commonStyle.justifyContentCenter]}>
        <View style={styles.card}>
          <View style={styles.upper}>
            <Image
              source={require('../../assets/image/card1.png')}
              resizeMode="cover"
              style={{
                width: windowWidth - 40,
                height: windowHeight*0.5,
                borderTopLeftRadius: 34,
                borderTopRightRadius: 34,
              }}
            />
          </View>
          <View style={styles.lower}>
            <Text
              style={[
                typography.textBold28,
                commonStyle.textAlignCenter,
                typography.Raleway,
              ]}>
              Hello
            </Text>
            <Text
              style={[
                typography.regulartext19,
                ,
                commonStyle.textAlignCenter,
                typography.Nunito,
                {width: 244, lineHeight: 29},
              ]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              consectetur turpis. Morbi eu eleifend lacus.
            </Text>
          </View>
        </View>
                        
        </View>
        <View style={[commonStyle.flex1, commonStyle.justifyContentCenter]}>
          <View style={styles.card}>
            <View style={styles.upper}>
              <Image
                source={require('../../assets/image/card1.png')}
                resizeMode="cover"
                style={{
                  width: windowWidth - 40,
                  height: windowHeight*0.5,
                  borderTopLeftRadius: 34,
                  borderTopRightRadius: 34,
                }}
              />
            </View>
            <View style={styles.lower}>
              <Text
                style={[
                  typography.textBold28,
                  commonStyle.textAlignCenter,
                  typography.Raleway,
                ]}>
                Hello
              </Text>
              <Text
                style={[
                  typography.regulartext19,
                  ,
                  commonStyle.textAlignCenter,
                  typography.Nunito,
                  {width: 244, lineHeight: 29},
                ]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                consectetur turpis. Morbi eu eleifend lacus.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: windowWidth - 40,
    height: windowHeight*0.8,
    backgroundColor: 'grey',
    borderRadius: 34,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    margin: 20,
    elevation:3,
  },
  upper: {
    height: windowHeight*0.5,
    backgroundColor: 'red',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
  },
  lower: {
    height: windowHeight*0.3,
    backgroundColor: 'white',
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
    // gap: 20,
  },
});

export default HelloCard;
