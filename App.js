

import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import Login from './Screens/Login';
import Estoque from './Screens/Estoque'
import faleconosco from './Screens/faleconosco'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/stack';
import { Screen } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (  

<NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="estoque" component={Estoque} />
              <Stack.Screen name="faleconosco" component={faleconosco} />
              </Stack.Navigator>
              <Drawer.Navigator>
              <Drawer.Screen name="Estoque" component={Estoque} />
              <Drawer.Screen name="faleconosco" component={faleconosco} />
              <Drawer.Screen name="Login" component={Login} />

            </Drawer.Navigator>
            <Drawer.Navigator>
              <Drawer.Screen name="faleconosco" component={faleconosco} />
              <Drawer.Screen name="Estoque" component={Estoque} />
              <Drawer.Screen name="Login" component={Login} />

            </Drawer.Navigator>
            </NavigationContainer>

            




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },

});
