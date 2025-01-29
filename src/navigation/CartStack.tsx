import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screen/app/CartScreen';
import PaymentScreen from '../screen/app/PaymentScreen';
import {
  AddCardModal,
  CardSelectModal,
  EditCardModal,
} from '../screen/app/Setting/PaymentSetting';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen
        name="AddCardModal"
        component={AddCardModal}
        options={{
          presentation: 'containedTransparentModal',
          contentStyle: {
            zIndex: 1,
          },
        }}
      />
      <Stack.Screen
        name="EditCardModal"
        component={EditCardModal}
        options={{
          presentation: 'containedTransparentModal',
          contentStyle: {
            zIndex: 2,
          },
        }}
      />
      <Stack.Screen
        name="CardSelectModal"
        component={CardSelectModal}
        options={{
          presentation: 'containedTransparentModal',
          contentStyle: {
            zIndex: 2,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
