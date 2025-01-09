import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shop from '../screen/app/Shop';
import Categories from '../component/Categories';
import Sale from '../screen/app/Sale';
import SearchScreen from '../screen/app/SearchScreen';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator initialRouteName="ShopScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ShopScreen" component={Shop} />
            <Stack.Screen name="sale" component={Sale} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
    );
};

export default ShopStack;