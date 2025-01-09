import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import PriceSlider from '../../component/PriceSlider';
// import RangeSlider from '../../../RangeSlider';

const CartScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Cart Screen</Text>
            {/* <PriceSlider /> */}
            {/* <RangeSlider to={40} from={20}/> */}
        </View>
    );

    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default CartScreen;


