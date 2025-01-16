import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
} from 'react-native';
import typography from '../../style/typography';
import commonStyle, {windowHeight, windowWidth} from '../../style/commonStyle';
import CAM from '../../logo/CAM.svg';
import Close from '../../logo/Close.svg';
import Close2 from '../../logo/Close2.svg';
import Filter from '../../logo/Filter.svg';
import BIN from '../../logo/BIN.svg';
import JustForYou from '../../component/JustForYou';
import NewItem from '../../component/NewItem';
import Discover from '../../component/Discover';
import {COLORS} from '../../consts/COLOR';
import SearchItem from '../../component/SearchItem';
import CategoriesSelector from '../../component/CategoriesSelector';
import ColorSlider from '../../component/ColorSlider';
import Selector from '../../component/Selector';
import SizeSelector from '../../component/SizeSelector';
import {PrimaryBorderButton, TouchableButton} from '../../component/Button';
import {
  ProductSorter,
  PriceRangeSlider,
} from '../../component/PRICINGCOMPONENT';
import { NavigationProp } from '@react-navigation/native';

interface SearchScreenProps {
    navigation: NavigationProp<any>;
}
const SearchScreen: React.FC<SearchScreenProps> = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');

  const FilterModal = () => {
    return (
      <SafeAreaView
        style={[commonStyle.flex1, commonStyle.justifyContentSpaceB]}>
        <View style={{flex: 1}}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 10,
                marginBottom: 15,
                marginHorizontal: 20,
              }}>
              <Text
                style={[
                  typography.textBold28,
                  typography.Raleway,
                  {width: 'auto'},
                ]}>
                Filter
              </Text>
              <TouchableOpacity onPress={() => setIsVisible(false)}>
                <Close2 />
              </TouchableOpacity>
            </View>
            <View style={{marginBottom: 20, marginHorizontal: 20}}>
              <CategoriesSelector />
            </View>
            <View style={{marginHorizontal: 20, marginBottom: 20}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    fontFamily: 'Raleway',
                    width: 'auto',
                  }}>
                  Size
                </Text>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <TouchableOpacity
                    style={{
                      height: 25,
                      width: 70,
                      backgroundColor: '#E5EBFC',
                      borderColor: COLORS.primaryButton,
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        fontFamily: 'Raleway',
                        color: COLORS.primaryButton,
                      }}>
                      Clothes
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      height: 25,
                      width: 70,
                      backgroundColor: '#FFEBEB',
                      //   borderColor: COLORS.primaryButton,
                      //   borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        fontFamily: 'Raleway',
                        // color: COLORS.primaryButton,
                      }}>
                      Shoes
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <SizeSelector />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  fontFamily: 'Raleway',
                  marginHorizontal: 20,
                  marginBottom: 10,
                }}>
                Color
              </Text>
              <ColorSlider />
            </View>
            <PriceRangeSlider />
            <ProductSorter />
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginBottom: 20,
          }}>
          <PrimaryBorderButton
            title="Clear"
            style={{width: '28%'}}
            onPress={() => {}}
          />
          <TouchableButton
            title="Apply"
            style={{width: '68%'}}
            onPress={() => {setIsVisible(false)}}
          />
        </View>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <Modal visible={isVisible} animationType="slide">
        <FilterModal />
      </Modal>
      <View
        style={[
          commonStyle.flexDirectionRow,
          commonStyle.justifyContentSpaceB,
          commonStyle.alignItemsCenter,
          commonStyle.ph20,
          commonStyle.pb10,
          {gap: 5},
        ]}>
        <View>
          <Text style={[typography.textBold28, typography.Raleway]}>
            Search
          </Text>
        </View>
        <View
          style={{
            marginLeft: 10,
            flex: 1,
            borderColor: '#F1F0F0',
            height: 38,
            borderWidth: 1,
            borderRadius: 20,
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              value={searchText}
              onChangeText={text => setSearchText(text)}
              placeholder="Search"
              style={{fontSize: 16, color: isFocused ? 'black' : '#0042E0'}}
              returnKeyType="done"
              onFocus={() => setIsFocused(true)} // Set focus state to true
              onBlur={() => setIsFocused(false)}
            />
            {!isFocused && searchText !== '' && (
              <TouchableOpacity
                onPress={() => setSearchText('')}
                style={{marginHorizontal: 5}}>
                <Close />
              </TouchableOpacity>
            )}
          </View>
          <CAM />
        </View>
        {!isFocused && searchText !== '' && (
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Filter />
          </TouchableOpacity>
        )}
      </View>
      {!isFocused && searchText !== '' ? (
        <ScrollView>
          <JustForYou title="" navigation={navigation} />
        </ScrollView>
      ) : (
        <View style={[commonStyle.mh20]}>
          <View
            style={[
              commonStyle.alignItemsCenter,
              commonStyle.flexDirectionRow,
              commonStyle.justifyContentSpaceB,
              commonStyle.pv5,
            ]}>
            <View style={[commonStyle.alignItemsCenter]}>
              <Text
                style={[
                  typography.w500s18,
                  typography.Raleway,
                  {width: 'auto'},
                ]}>
                Search history
              </Text>
            </View>
            <TouchableOpacity>
              <BIN />
            </TouchableOpacity>
          </View>
          <View
            style={[commonStyle.flexDirectionRow, {flexWrap: 'wrap', gap: 8}]}>
            <SearchItem
              item="Socks"
              onPress={() => {
                setSearchText('Socks');
              }}
            />
            <SearchItem
              item="Red Dress"
              onPress={() => {
                setSearchText('Red Dress');
              }}
            />
            <SearchItem
              item="Sunglasses"
              onPress={() => {
                setSearchText('Sunglasses');
              }}
            />
            <SearchItem
              item="Mustard Pants"
              onPress={() => {
                setSearchText('Mustard Pants');
              }}
            />
            <SearchItem
              item="80-s Skirt"
              onPress={() => {
                setSearchText('80-s Skirt');
              }}
            />
          </View>
          <View style={[commonStyle.pv10, commonStyle.mt10]}>
            <Text
              style={[
                typography.w500s18,
                typography.Raleway,
                commonStyle.mb10,
              ]}>
              Recommendations
            </Text>
            <View
              style={[
                commonStyle.flexDirectionRow,
                {flexWrap: 'wrap', gap: 8},
              ]}>
              <SearchItem
                item="Skirt"
                onPress={() => {
                  setSearchText('Skirt');
                }}
              />
              <SearchItem
                item="Accessories"
                onPress={() => {
                  setSearchText('Accessories');
                }}
              />
              <SearchItem
                item="Black T-Shirt"
                onPress={() => {
                  setSearchText('Black T-Shirt');
                }}
              />
              <SearchItem
                item="Jeans"
                onPress={() => {
                  setSearchText('Jeans');
                }}
              />
              <SearchItem
                item="White Shoes"
                onPress={() => {
                  setSearchText('White Shoes');
                }}
              />
            </View>
          </View>
          <Discover />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    backgroundColor: '#fff',
    width: windowWidth,
    paddingTop: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
