import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

 const CustomButton =  (props) => {
  
    return (
   <Button title="add product" onPress={() => props.onPress()} />
    
    )
  }


export default CustomButton; 