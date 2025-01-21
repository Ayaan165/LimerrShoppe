import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screen/app/Profile';
import StoryScreen from '../screen/app/StoryScreen';
import LiveScreen from '../screen/app/LiveScreen';
import VoucherScreen from '../screen/app/VoucherScreen';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="StoryScreen" component={StoryScreen} />
            <Stack.Screen name="LiveScreen" component={LiveScreen} />
            <Stack.Screen name="VoucherScreen" component={VoucherScreen} />

        </Stack.Navigator>
    );
};

export default ProfileStack;