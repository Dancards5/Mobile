import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';



export default function Estoque() {
    const Drawer = createDrawerNavigator();
    return (    

<NavigationContainer>
            <Drawer.Navigator>
              <Drawer.Screen name="Estoque" component={Estoque} />
              <Drawer.Screen name="faleconosco" component={faleconosco} />
            </Drawer.Navigator>
  
              <View>
              <Image source={require('./')} />

                <Image source={{uri:'https://www.bing.com/images/search?view=detailV2&ccid=MZLtxuId&id=4E476090597BFC963FAAAD1327131BD4D6212EF5&thid=OIP.MZLtxuIdU63tsBfLYrieZAHaHa&mediaurl=https%3a%2f%2fassets-mantosdofutebol.sfo2.digitaloceanspaces.com%2fwp-content%2fuploads%2f2020%2f05%2fvisilfer-16.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.3192edc6e21d53adedb017cb62b89e64%3frik%3d9S4h1tQbEycTrQ%26pid%3dImgRaw%26r%3d0&exph=1400&expw=1400&q=camisas+imagens&simid=608052265069793549&FORM=IRPRST&ck=02C57F5B0263716910DAA133B4AD9DA7&selectedIndex=29&itb=0'}}/>
                <Text>Camisas de time</Text>
               
                <Image source={{uri:'https://www.bing.com/images/search?view=detailV2&ccid=ebn4LWSC&id=DA449F7320A0BFC9D35B02BC717879CDDE6D23E1&thid=OIP.ebn4LWSCgryB2ogCUant_gHaHa&mediaurl=https%3a%2f%2fstatic.netshoes.com.br%2fprodutos%2fcamisa-selecao-brasil-i-2018-n-10-neymar-jr-torcedor-nike-masculina%2f46%2fD12-9669-046%2fD12-9669-046_zoom2.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.79b9f82d648282bc81da880251a9edfe%3frik%3d4SNt3s15eHG8Ag%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1200&q=camisas+imagens&simid=608048743166931589&FORM=IRPRST&ck=C7911F678976BC4EB273D222794A161F&selectedIndex=15&itb=0'}}/>
                <Text>Camisas de time</Text>

                <Image source={{uri:'https://www.bing.com/images/search?view=detailV2&ccid=DM68%2bKr%2b&id=4E476090597BFC963FAAFAB52A5BE48A4809BB6A&thid=OIP.DM68-Kr-YUfW9VzZAMAWBwHaHa&mediaurl=https%3a%2f%2fassets-mantosdofutebol.sfo2.digitaloceanspaces.com%2fwp-content%2fuploads%2f2020%2f05%2fvisilfer-27.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.0ccebcf8aafe6147d6f55cd900c01607%3frik%3darsJSIrkWyq1%252bg%26pid%3dImgRaw%26r%3d0&exph=1400&expw=1400&q=camisas+imagens&simid=608035536165827165&FORM=IRPRST&ck=94D196C232109B4C9B11BF9ECFD11676&selectedIndex=28&itb=0'}}/>
                <Text>Camisas de time</Text>

               
                <Image source={{uri:'https://www.bing.com/images/search?view=detailV2&ccid=9c%2fY87cL&id=19A0E979427C05617453BEE615752824A3140D1E&thid=OIP.9c_Y87cL_4Z_EWIewgH8NgHaIR&mediaurl=https%3a%2f%2fhttp2.mlstatic.com%2fcamisa-flamengo-retr-listrada-adidas-original-2015-D_NQ_NP_801359-MLB31139658537_062019-F.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.f5cfd8f3b70bff867f11621ec201fc36%3frik%3dHg0UoyQodRXmvg%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1074&q=camisas+imagens&simid=608008263101347785&FORM=IRPRST&ck=B44429002E3F930FB6BADACCE815B5F9&selectedIndex=19&itb=0'}}/>
                <Text>Camisas de time</Text>

                <Image source={{uri:'https://www.bing.com/images/search?view=detailV2&ccid=KR94GE3M&id=4E476090597BFC963FAA9F6E8CDEEDA2DBF9E8E0&thid=OIP.KR94GE3MLEixe0iVk-0hawHaHa&mediaurl=https%3a%2f%2fassets-mantosdofutebol.sfo2.digitaloceanspaces.com%2fwp-content%2fuploads%2f2020%2f05%2fvisilfer-22.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.291f78184dcc2c48b17b489593ed216b%3frik%3d4Oj526Lt3oxunw%26pid%3dImgRaw%26r%3d0&exph=1400&expw=1400&q=camisas+imagens&simid=608045882772304379&FORM=IRPRST&ck=2368E3235C61A410E4769BF921DE9F40&selectedIndex=23&itb=0'}}/>
                <Text>Camisas de time</Text>

                </View>
                </NavigationContainer>
  
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });
  