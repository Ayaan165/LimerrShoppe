import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import PhotoFrame from './PhotoFrame';
import commonStyle from '../style/commonStyle';
import typography from '../style/typography';


const RecentlyVisited = () => {
    return (
        <View>
          <View style={[commonStyle.ml20]}>
            <Text
              style={[
                typography.textBold21,
                typography.Raleway,
                // commonStyle.mt15,
                commonStyle.mb15,
              ]}>
              Recently viewed
            </Text>
          </View>
          <View style={[commonStyle.flexDirectionRow, commonStyle.flex1]}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <PhotoFrame
                size={60}
                url={require('../assets/image/RV1.png')}
                style={{marginLeft: 20}}
              />
              <PhotoFrame
                size={60}
                url={require('../assets/image/RV2.png')}
                style={{marginLeft: 10}}
              />
              <PhotoFrame
                size={60}
                url={require('../assets/image/RV3.png')}
                style={{marginLeft: 10}}
              />
              <PhotoFrame
                size={60}
                url={require('../assets/image/RV4.png')}
                style={{marginLeft: 10}}
              />
              <PhotoFrame
                size={60}
                url={require('../assets/image/RV5.png')}
                style={{marginLeft: 10}}
              />
              <PhotoFrame
                size={60}
                url={require('../assets/image/RV2.png')}
                style={{marginLeft: 10}}
              />
            </ScrollView>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productContainer: {
        marginRight: 10,
        alignItems: 'center',
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    productName: {
        marginTop: 5,
        textAlign: 'center',
    },
});

export default RecentlyVisited;