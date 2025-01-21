import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screen/app/CartScreen';
import PaymentScreen from '../screen/app/PaymentScreen';

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator initialRouteName="CartScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        </Stack.Navigator>
    );
};

export default CartStack;