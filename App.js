
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
;
import CheckBox from '@react-native-community/checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';
import { useState } from 'react';

import Book from './screen/Book/Index';
import Wallet from './screen/Wallet/Index';


export default function App() {
  const [isChecked, setIsChecked] = useState(false)
 
  const [loaded] = useFonts({
   dm : require('./assets/fonts/DMSans-Medium.ttf'),
   mont : require('./assets/fonts/Montserrat-Medium.ttf'),
   montLight : require('./assets/fonts/Montserrat-Light.ttf'),
   montBold : require('./assets/fonts/Montserrat-Bold.ttf'),
   montSemiBold : require('./assets/fonts/Montserrat-SemiBold.ttf'),
   montExtraBold : require('./assets/fonts/Montserrat-ExtraBold.ttf'),  
   montBoldItalic : require('./assets/fonts/Montserrat-BoldItalic.ttf'),
   montExtraItalic : require('./assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
  })

  if(!loaded){
    return null
  }
  return (
    
   
   <Wallet/>
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
    fontSize: 10,

    color: '#DFDFDF',
    fontFamily: 'dm'
    

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
    width: 330,
    height:57,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

 


  },
  buttonMobileNumber:{
    backgroundColor:'#042927',
    padding: 10,
    width: 330,
    height:57,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

  }
});
