import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image, Text, TextInput } from 'react-native-web';

export default function Login() {

  const Stack = createStackNavigator();
          return (
            <Stack.Navigator>
              <Stack.Screen name="estoque" component={Estoque} />
              <Stack.Screen name="faleconosco" component={faleconosco} />
            
            <View style={styles.container}>

              <TextInput style={styles.container}
              placeholder='E-MAIL'
              />
    
              <TextInput style={styles.container}
              placeholder='SENHA'
              />

              <Button styles={styles.container}>
                ENTRAR    
              </Button>

              </View>
              </Stack.Navigator>

            
          );
        }

    
    
