import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

 const CustomButton =  (props) => {
  
    return (
   <Button style={styles.textColor} title="add product" onPress={() => props.onPress()} />
    
    )
  }
  const styles = StyleSheet.create({ 
 
      textColor:{
        color:"red"
      }
  });

export default CustomButton; 