import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/navigation/AuthNavigation';
import BottomStack from './src/navigation/BottomStack';

const App = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(true);
  return (
    <NavigationContainer>
      {
        isSignedIn ? <BottomStack/> : <AuthNavigation />
      }
    </NavigationContainer>
  );
};
export default App;
