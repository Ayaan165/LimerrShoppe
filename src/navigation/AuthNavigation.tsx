import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screen/auth/Starts';
import LoginScreen from '../screen/auth/Login';
import CreateAccount from '../screen/auth/CreateAccount';
import PasswordScreen from '../screen/auth/Password';
import PasswordRecovery from '../screen/auth/PasswordRecovery';
import PasswordRecoveryCode from '../screen/auth/PasswordRecoveryCode';
import CreatePassword from '../screen/auth/CreatePassword';


const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
            <Stack.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="createAccount" component={CreateAccount} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="passwordScreen" component={PasswordScreen} />
                <Stack.Screen name="passwordRecovery" component={PasswordRecovery} />
                <Stack.Screen name="passwordRecoveryCode" component={PasswordRecoveryCode} />
                <Stack.Screen name="createPassword" component={CreatePassword} />
            </Stack.Navigator>
    );
};

export default AuthNavigation;