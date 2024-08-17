import React, { useEffect, useState } from 'react'
import SplashScreen from './components/SplashScreen'
import Introduction1 from './components/Introduction1'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Introduction2 from './components/Introduction2';
import Introduction3 from './components/Introduction3';
import SignIn from './components/SignIn';


const App = () => {
  const Stack = createNativeStackNavigator();
  const [isSplash, setIsSplash] = useState(true);

  useEffect( () => {
    setTimeout(() =>{
      setIsSplash(false);
    },1000);
  })
  if (isSplash) {
    return <SplashScreen />;
  }

  return (
    <>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Introduction1' component={Introduction1}  />
      <Stack.Screen name='Introduction2' component={Introduction2} />
      <Stack.Screen name='Introduction3' component={Introduction3} />
      <Stack.Screen name='SignIn' component={SignIn} />
    </Stack.Navigator>
  </NavigationContainer>
    </>
  )
}

export default App