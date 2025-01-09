import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wishlist from '../screen/app/Wishlist';

const Stack = createNativeStackNavigator();

const WishlistStack = () => {
    return (
        <Stack.Navigator initialRouteName="wishlist" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="wishlist" component={Wishlist} />
        </Stack.Navigator>
    );
};

export default WishlistStack;