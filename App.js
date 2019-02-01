import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from "./components/CustomButton.js"
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyANT_sox-TS0fK110WugUKb8mEvwlwfkfQ",
    authDomain: "react-firebase-38af2.firebaseapp.com",
    databaseURL: "https://react-firebase-38af2.firebaseio.com",
    projectId: "react-firebase-38af2",
    storageBucket: "",

};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  
   state ={
        productCount: 0
    }

  addProduct = () => {
    this.setState({'productCount' :this.state.productCount + 1})
  }

  render() {
    return (
     
      <View style={{ flex:1, alignItems: 'center', justifyContent:'center'}}>

     

      <View style={{height:200, width:200, backgroundColor:'pink', alignItems: 'center', justifyContent:'center'}}>
      <Text>{this.state.productCount}</Text>
      <CustomButton onPress={this.addProduct}/>
      
      </View>

      </View>   
    );
  }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
    textColor:{
      color:"aqua"
    }
});
