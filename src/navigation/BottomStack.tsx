import React from 'react';
import {View} from 'react-native';
import {
  createBottomTabNavigator,
  SceneStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack';
import ProfileStack from './ProfileStack';
import WishlistStack from './WishlistStack';
import CategoriesStack from './CategoriesStack';
import CartStack from './CartStack';
import Shop from '../logo/Shop.svg';
import Wishlist from '../logo/Wishlist.svg';
import Categories from '../logo/Categories.svg';
import Cart from '../logo/Cart.svg';
import Profile from '../logo/Profile.svg';
import ActiveCart from '../logo/ActiveCart.svg';
import ActiveProfile from '../logo/ActiveProfile.svg';
import ActiveShop from '../logo/ActiveShop.svg';
import ActiveWishlist from '../logo/ActiveWishlist.svg';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="ShopStack"
      screenOptions={{
        headerShown: false,
        // animation: 'shift',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 84,
          backgroundColor: '#fff',
          paddingTop: 15,
        },
      }}>
      <Tab.Screen
        name="ShopStack"
        component={ShopStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View>{focused ? <ActiveShop /> : <Shop />}</View>
          ),
        }}
      />
      <Tab.Screen
        name="WishlistStack"
        component={WishlistStack}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({focused}) => (
            <View>{focused ? <ActiveWishlist /> : <Wishlist />}</View>
          ),
        }}
      />
      <Tab.Screen
        name="CategoriesStack"
        component={CategoriesStack}
        options={{
          tabBarStyle:{display:'none'},
          tabBarLabel: 'Categories',
          tabBarIcon: ({focused}) => <Categories />,
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused}) => (
            <View>{focused ? <ActiveCart /> : <Cart />}</View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'profile',
          tabBarIcon: ({focused}) => (
            <View>{focused ? <ActiveProfile /> : <Profile />}</View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;
