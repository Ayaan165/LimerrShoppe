import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wishlist from '../screen/app/Wishlist';
import RecentlyViewedScreen from '../screen/app/RecentlyViewedScreen';

const Stack = createNativeStackNavigator();

const WishlistStack = () => {
    return (
        <Stack.Navigator initialRouteName="wishlist" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="wishlist" component={Wishlist} />
            <Stack.Screen name="RecentlyViewedScreen" component={RecentlyViewedScreen} />
        </Stack.Navigator>
    );
};

export default WishlistStack;