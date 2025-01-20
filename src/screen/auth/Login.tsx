// import React from 'react';
// import {View, Text, StyleSheet, Button, SafeAreaView} from 'react-native';
// import Bubble3 from '../../logo/bubble3.svg';
// import Bubble4 from '../../logo/bubble4.svg';
// import Bubble5 from '../../logo/Bubble5.svg';
// import Bubble6 from '../../logo/bubble6.svg';

// const LoginScreen = () => {
//   return (
//     <View style={{flex: 1,}}>
//         <View>

//         </View>
//       <Bubble3 style={{position: 'absolute', zIndex:1 ,marginLeft:-220}} />
//       <Bubble4 style={{position: 'absolute' , zIndex:2 , marginLeft:-220}} />
//       <Bubble5 style={{position: 'absolute' ,  zIndex:1 , marginTop:300 , marginLeft:150}} />
//       <Bubble6 style={{position: 'absolute', zIndex:1 ,  marginTop:600}} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
} from 'react-native';
import Bubble3 from '../../logo/Bubble3.svg';
import Bubble4 from '../../logo/Bubble4.svg';
import Bubble5 from '../../logo/Bubble5.svg';
import Bubble6 from '../../logo/Bubble6.svg';
import typography from '../../style/typography';
import {Input} from '../../component/Input';
import {TouchableButton} from '../../component/Button';
import TransButton from '../../component/TransButton';
import commonStyle from '../../style/commonStyle';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import {NavigationProp} from '@react-navigation/native';
import {COLORS} from '../../consts/COLOR';

interface LoginScreenProps {
  navigation: NavigationProp<any>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View style={[commonStyle.flex1]}>
      <Bubble3 style={[styles.bubble, styles.b1]} />
      <Bubble4 style={[styles.bubble, styles.b2]} />
      <Bubble5 style={[styles.bubble, styles.b3]} />
      <Bubble6 style={[styles.bubble, styles.b4]} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={[typography.boldTitle52, commonStyle.mb5]}>Login</Text>
          <Text
            style={[
              {
                fontFamily: 'Nuinto-Light',
                fontSize: 19,
                fontWeight: 300,
                color: COLORS.black20,
              },
              commonStyle.mb30,
            ]}>
            Good to see you back! 🖤
          </Text>
          <View style={[commonStyle.mb20]}>
            <Input placeholder="Email" type={'default'} />
          </View>
          <TouchableButton
            title="Next"
            onPress={() => {
              navigation.navigate('passwordScreen');
            }}
            TextStyle={{
              fontFamily: 'Nunito',
              fontSize: 22,
              fontWeight: 300,
            }}
          />
          <TransButton
            title="Cancel"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  bubble: {
    position: 'absolute',
  },
  b1: {
    zIndex: 1,
  },
  b2: {
    zIndex: 1,
  },
  b3: {
    top: windowHeight / 3,
    right: 0,
    zIndex: 1,
  },
  b4: {
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  content: {
    // gap:10,
    // justifyContent:'space-evenly',
    marginBottom: windowHeight / 30,
    zIndex: 2,
  },
});
