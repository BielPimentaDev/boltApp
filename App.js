import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, CheckBox } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';
import { useState } from 'react';

export default function App() {
  const [isChecked, setIsChecked] = useState(false)
  const [loaded] = useFonts({
    'dm': require('./assets/fonts/DMSans-Medium.ttf'),
    'mont': require('./assets/fonts/Montserrat-Medium.ttf'),
    'montBold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'montExtraBold': require('./assets/fonts/Montserrat-Bold.ttf'),
  })

  if(!loaded){
    return null
  }

  return (
    
     <View style={styles.container}>
          <StatusBar style="auto" />

        <Image style={{width: 300, height: 100, marginTop: 50}} source={require('./assets/images/Logo.png')}/>

     
          <View style={{paddingBottom: 300, alignItems: 'center', marginTop:100}}>

            <TouchableHighlight style={styles.buttonMobileNumber}>

              <View>
              <Image style={{width: 20, height: 20, position: 'absolute', left: -30 }} source={require('./assets/images/Japan.png')}/>
                <Text style={{color: '#FFFFFF',fontFamily: 'dm', fontSize: 16, marginLeft: 20}}>Continue with google for now</Text>
              </View>

            </TouchableHighlight>

            <Text style={{color: '#FFFFFF', marginVertical: 10, fontFamily: 'dm'}}>or</Text>

            <TouchableHighlight style={styles.buttonGoogle}>

              <View>
              <Image style={{width: 20, height: 20, position: 'absolute', left: -30 }} source={require('./assets/images/google.png')}/>
                <Text style={{color: '#093C38',fontFamily: 'dm', fontSize: 16, marginLeft: 20}}>Continue with google for now</Text>
              </View>

            </TouchableHighlight>

            <View  style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center', gap: 10, marginTop:10 }}>
           
            <CheckBox/>
            <Text style={styles.dmWhite}>I agree to <Text style={styles.dmGreen}>Terms & Conditions</Text> and <Text style={styles.dmGreen}>Privacy Policy</Text></Text>
            </View>

           
            </View>
      

        
        <Image style={styles.banner} source={require('./assets/images/CAR.png')}/>
       
     </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent : 'center',
    backgroundColor: '#073633',

  },
  banner:{
    zIndex: 10,
    width: 1000,
    height: 750,
    left:-450,
    bottom: -100,
    position: 'absolute',

    

  },
  dmWhite:{
    fontSize: 12,
    
    color: '#DFDFDF',
    fontFamily: 'dm',
    gap: 10,

  },
  dmGreen:{
    color: '#08B694',

  },
  linearGradient: {
    flex: 1
  },
  buttonGoogle:{
    backgroundColor:'#F4F4F4',
    padding: 10,
    width: 324,
    height:57,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    shadowColor: '#blue',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

  },
  buttonMobileNumber:{
    backgroundColor:'#042927',
    padding: 10,
    width: 324,
    height:57,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  }
});
