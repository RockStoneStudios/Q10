import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { ApiContext } from './src/context/ApiContext';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';

const STACK = createNativeStackNavigator();


function App(): JSX.Element {

  return (
  <ApiContext>
    <NavigationContainer> 
      <STACK.Navigator screenOptions={{headerShown : false}}>
        <STACK.Screen name='Welcome' component={Welcome} />
        <STACK.Screen name='Home' component={Home} />
     </STACK.Navigator>
    
     </NavigationContainer> 
   
  </ApiContext>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor:'#123'
  }
});

export default App;
