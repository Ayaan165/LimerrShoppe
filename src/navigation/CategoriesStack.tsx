import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screen/app/Categories';

const Stack = createNativeStackNavigator();

const  CategoriesStack = () => {
    return (
        <Stack.Navigator initialRouteName="Categories" screenOptions={{ headerShown: false}} >
            <Stack.Screen name="Categories" component={Categories} />
        </Stack.Navigator>
    );
};

export default CategoriesStack;