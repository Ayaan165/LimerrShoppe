import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screen/app/CartScreen';

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator initialRouteName="CartScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CartScreen" component={CartScreen} />
        </Stack.Navigator>
    );
};

export default CartStack;