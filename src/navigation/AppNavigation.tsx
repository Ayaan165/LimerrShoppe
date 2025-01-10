import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screen/app/Categories';
import BottomStack from './BottomStack';
import ChatScreen from '../screen/app/ChatScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="BottomStack" screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Categories" component={Categories} /> */}
                <Stack.Screen name="BottomStack" component={BottomStack}/>
                <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
    );
};

export default AppStack;