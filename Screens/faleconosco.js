import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';



export default function faleconosco() {
    const Drawer = createDrawerNavigator();
    return (    

<NavigationContainer>
            <Drawer.Navigator>
              <Drawer.Screen name="Estoque" component={Estoque} />
              <Drawer.Screen name="faleconosco" component={faleconosco} />
            </Drawer.Navigator>
                        <View style={styles.container}>
            
                          <TextInput style={styles.container}
                          placeholder='Nome'
                          />
                
                          <TextInput style={styles.container}
                          placeholder='e-mail'
                          />
            
                          <Button styles={styles.container}>
                               
                          </Button>
            
                          </View>
                          </NavigationContainer>


    )
}

