import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Platform,
  FlatList,
} from 'react-native';
import {useWindowDimensions} from 'react-native';
import typography from '../../style/typography';
import PhotoFrame from '../../component/PhotoFrame';
import commonStyle from '../../style/commonStyle';
import {COLORS} from '../../consts/COLOR';
import CustomContainer from '../../component/CustomeContainer';
import Scanner from '../../logo/Scanner.svg';
import Menu from '../../logo/Menu.svg';
import Setting from '../../logo/Setting.svg';
import ArrowButton from '../../component/ArrowButton';
import TintedButton from '../../component/TintedButton';
import {Image} from 'react-native';
import Play from '../../logo/Play.svg';
import NewItem from '../../component/NewItem';
import RecentlyVisited from '../../component/RecentlyVisited';
import Stories from '../../component/Stories';
import MostPopular from '../../component/MostPopular.';
import Categories from '../../component/Categories';
import FlashSale from '../../component/FlashSale';
import TopProducts from '../../component/TopProducts';
import JustForYou from '../../component/JustForYou';
import { NavigationProp } from '@react-navigation/native';

interface ProfileScreenProps{
  navigation: NavigationProp<any>;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const styles = useStyle();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        style={{
          flex: 1,
          marginVertical: Platform.OS === 'android' ? 10 : 0,
        }}>
        <View
          style={[
            commonStyle.flexDirectionRow,
            commonStyle.justifyContentSpaceB,
            commonStyle.alignItemsCenter,
            commonStyle.ph20,
          ]}>
          <View
            style={[
              commonStyle.flexDirectionRow,
              commonStyle.alignItemsCenter,
              {gap: 13},
            ]}>
            <PhotoFrame
              size={43}
              url={require('../../assets/image/profilePhoto.png')}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: 120,
                backgroundColor: COLORS.primaryButton,
                borderRadius: 20,
              }}>
              <Text
                style={[
                  typography.w500s16,
                  {
                    textAlign: 'center',
                    width: 120,
                    color: COLORS.white,
                  },
                ]}>
                My Activity
              </Text>
            </View>
          </View>
          <View style={[commonStyle.flexDirectionRow, {gap: 10}]}>
            <CustomContainer SvgComponent={Scanner} />
            <CustomContainer SvgComponent={Menu} badgeCount={1} />
            <CustomContainer SvgComponent={Setting} />
          </View>
        </View>
        <View style={[commonStyle.ph20, commonStyle.pv15]}>
          <View>
            <Text style={[typography.textBold28, typography.Raleway]}>
              Hello, Romina!
            </Text>
          </View>
          <View>
            <View
              style={{
                padding: 10,
                backgroundColor: COLORS.inputBackground,
                borderRadius: 10,
                marginTop: 10,
              }}>
              <View>
                <Text style={[typography.Boldtext16, typography.Raleway]}>
                  Announcement
                </Text>
              </View>
              <View
                style={[
                  commonStyle.flexDirectionRow,
                  commonStyle.justifyContentCenter,
                ]}>
                <View style={{width: '80%'}}>
                  <Text
                    style={[
                      typography.w500s12,
                      typography.Nunito,
                      {lineHeight: 20, width: '100%'},
                    ]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas hendrerit luctus libero ac vulputate.
                  </Text>
                </View>
                <View style={[commonStyle.alignItemsEnd, {width: '20%'}]}>
                  <ArrowButton onPress={() => {}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <RecentlyVisited />
        <View style={[commonStyle.ph20, commonStyle.pv15]}>
          <View>
            <Text style={[typography.textBold21, typography.Raleway]}>
              My Orders
            </Text>
          </View>
          <View
            style={[commonStyle.flexDirectionRow, commonStyle.mt15, {gap: 10}]}>
            <TintedButton
              title="To Pay"
              onPress={() => {
                navigation.navigate('ShopStack');
              }}
            />
            <TintedButton
              title="To Recieve"
              onPress={() => {
                console.log('hello');
              }}
            />
            <TintedButton
              title="To Review"
              onPress={() => {
                console.log('hello');
              }}
            />
          </View>
        </View>
        <Stories />
        <NewItem />
        <MostPopular />
        <Categories />
        <FlashSale/>
        <TopProducts />
        <JustForYou/>
      </ScrollView>
    </SafeAreaView>
  );
};

function useStyle() {
  const {width, height} = useWindowDimensions();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      height: height,
      width: width,
    },
  });
}

export default ProfileScreen;
