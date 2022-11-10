import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './Home'
import Details from './Details'

export default function StackHome(){
  return (
      <Stack.Navigator>
        <Stack.Screen name="Stellantis" component={Home} />
        <Stack.Screen name="Detalhes" component={Details} />
      </Stack.Navigator>
  )
}