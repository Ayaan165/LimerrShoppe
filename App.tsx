import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/navigation/AuthNavigation';
import BottomStack from './src/navigation/BottomStack';
import AppStack from './src/navigation/AppNavigation';

const App = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(true);
  return (
    <NavigationContainer>
      {
        isSignedIn ? <AppStack/> : <AuthNavigation />
      }
    </NavigationContainer>
    // <NavigationContainer>
    //   <AuthNavigation/>
    // </NavigationContainer>
  );
};
export default App;
