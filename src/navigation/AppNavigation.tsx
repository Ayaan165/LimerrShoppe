import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screen/app/Categories';
import BottomStack from './BottomStack';
import ChatScreen from '../screen/app/ChatScreen';
import ProductPage from '../screen/app/ProductPage';
import JustForYou from '../component/JustForYou';
import ReviewScreen from '../screen/app/ReviewScreen';
import PaymentScreen from '../screen/app/PaymentScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="BottomStack" screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Categories" component={Categories} /> */}
                <Stack.Screen name="BottomStack" component={BottomStack}/>
                <Stack.Screen name="ChatScreen" component={ChatScreen} />
                <Stack.Screen name ="ProductPage" component={ProductPage}/>
                <Stack.Screen name="JustForYou" component={JustForYou}/>
                <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
                {/* <Stack.Screen name="PaymentScreen" component={PaymentScreen} /> */}
        </Stack.Navigator>
    );
};

export default AppStack;