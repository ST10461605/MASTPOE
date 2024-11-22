import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import ChefLogin from './ChefLogin';
import ChefPage from './ChefPage';
import AddMenu from './AddMenu';
import FilterMenu from './FilterMenu';
import Menu from './Menu';  // Added Menu screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChefLogin" component={ChefLogin} />
        <Stack.Screen name="ChefPage" component={ChefPage} />
        <Stack.Screen name="AddMenu" component={AddMenu} />
        <Stack.Screen name="FilterMenu" component={FilterMenu} />
        <Stack.Screen name="Menu" component={Menu} />  {/* Added Menu screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
