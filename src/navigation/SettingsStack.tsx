import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screen/app/CartScreen';
import PaymentScreen from '../screen/app/PaymentScreen';
import Settings from '../screen/app/Settings';
import ProfileSetting from '../screen/app/Setting/ProfileSetting';
import AddressSetting from '../screen/app/Setting/AddressSetting';
import PaymentSetting from '../screen/app/Setting/PaymentSetting';
import CountrySetting from '../screen/app/Setting/CountrySetting';
import CurrencySetting from '../screen/app/Setting/CurrencySetting';
import SizeSetting from '../screen/app/Setting/SizeSetting';
import TermsCondition from '../screen/app/Setting/TermsCondition';
import LanguageSetting from '../screen/app/Setting/LanguageSetting';
import AboutApp from '../screen/app/Setting/AboutApp';
import CountrySelection from '../screen/app/Setting/CountrySelection';


const Stack = createNativeStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator initialRouteName="SettingHome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SettingHome' component={Settings} />
            <Stack.Screen name='ProfileSettingScreen' component={ProfileSetting} />
            <Stack.Screen name='AddressSettingScreen' component={AddressSetting} />
            <Stack.Screen name='PaymentSettingScreen' component={PaymentSetting} />
            <Stack.Screen name='CountrySettingScreen' component={CountrySetting} />
            <Stack.Screen name='CurrencySettingScreen' component={CurrencySetting} />
            <Stack.Screen name='SizeSettingScreen' component={SizeSetting} />
            <Stack.Screen name='TermsConditionScreen' component={TermsCondition} />
            <Stack.Screen name='LanguageSettingScreen' component={LanguageSetting} />
            <Stack.Screen name='AbourAppScreen' component={AboutApp} />
            <Stack.Screen name='CountrySelection' component={CountrySelection} />
        </Stack.Navigator>
    );
};

export default SettingsStack;