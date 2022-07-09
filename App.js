import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import {useFonts} from 'expo-font'
import Login from './screen/Login';
import Home from './screen/Home/Index';
import Wallet from './screen/Wallet/Index';

import Book from './screen/Book/Index';

export default function App() {

 
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
    
      //<Login/>
    <Home/>
//<Book/>
     //<Wallet/>
  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1

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
