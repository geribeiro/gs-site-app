
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackHome from './screens/StackHome'
import About from './screens/About'

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={StackHome} />
        <Tab.Screen name="Sobre" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
    )
}
