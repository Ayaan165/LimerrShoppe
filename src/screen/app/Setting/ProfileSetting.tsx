import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import typography from '../../../style/typography';
import {TouchableButton} from '../../../component/Button';
import BottomBarView from '../../../component/BottomBarView';
import EditIcon from '../../../logo/EditIcon.svg';

const ProfileSetting: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.subtitle}>Your Profile</Text>
          </View>
          <View>
            <View
              style={{
                marginHorizontal: 20,
                height: 105,
                width: 105,
                borderRadius: 105 / 2,
                backgroundColor: 'white',
                justifyContent: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 3.84,
                elevation: 5,
                alignItems: 'center',
                marginBottom: 25,
              }}>
              <Image
                source={require('../../../assets/image/FS1.png')}
                resizeMode="cover"
                style={{height: 92, width: 92, borderRadius: 92 / 2}}
              />
              <EditIcon
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  borderColor: 'white',
                  borderWidth: 1,
                  borderRadius: '50%',
                }}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Name"
                keyboardType="default"
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
              />
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <TouchableButton
            title="Save Changes"
            onPress={() => {}}
            style={{marginTop: 20, width: '100%', height: 40, borderRadius: 9}}
            TextStyle={{fontSize: 16, ...typography.Nunito300, lineHeight: 25}}
          />
          <BottomBarView />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  title: {
    fontSize: 28,
    ...typography.RaleWay700,
    marginBottom: 7,
    // color: '#000',
  },
  subtitle: {
    fontSize: 16,
    ...typography.RaleWay500,
    marginBottom: 20,
  },
  input: {
    height: 40,
    marginHorizontal: 20,
    borderRadius: 9,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F1F4FE',
    fontSize: 17,
    ...typography.RaleWay400,
  },
});

export default ProfileSetting;
