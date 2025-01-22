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
import {NavigationProp} from '@react-navigation/native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {AnnouncementBanner,VoucherExpireyBanner,RewardBanner} from '../../component/ProfileBanner';

interface ProfileScreenProps {
  navigation: NavigationProp<any>;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const bottomViewHeight = useBottomTabBarHeight();
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
            <PhotoFrame size={43} url={require('../../assets/image/RV1.png')} />
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
            <CustomContainer
              SvgComponent={Scanner}
              onPress={() => {
                navigation.navigate('VoucherScreen');
              }}
            />
            <CustomContainer SvgComponent={Menu} badgeCount={1} />
            <CustomContainer
              SvgComponent={Setting}
              onPress={() => {
                navigation.navigate('SettingsStack');
              }}
            />
          </View>
        </View>
        <View style={[commonStyle.ph20, commonStyle.pv15]}>
          <View>
            <Text style={[typography.textBold28, typography.Raleway]}>
              Hello, Romina!
            </Text>
          </View>
          <View>
              <AnnouncementBanner/>
              {/* <VoucherExpireyBanner/> */}
              {/* <RewardBanner/> */}
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
                navigation.navigate('LiveScreen');
              }}
            />
            <TintedButton
              title="To Review"
              onPress={() => {
                navigation.navigate('StoryScreen');
              }}
            />
          </View>
        </View>
        <Stories navigation={navigation} />
        <NewItem />
        <MostPopular />
        <Categories />
        <FlashSale />
        <TopProducts />
        <JustForYou navigation={navigation} />
        <View
          style={{
            height: bottomViewHeight,
          }}
        />
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
