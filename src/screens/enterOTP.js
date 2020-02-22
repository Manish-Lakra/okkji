import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text, 
  Dimensions
} from 'react-native';


const window = Dimensions.get('window');

export default class OTP extends Component {

  constructor(props) {
    super(props)
  }

 

 

  render() {
    return (
      <View style={styles.container}>
       <View style={{flex:0.4, backgroundColor:'green', width:window.width,}}>
         <Text>one section</Text>
       </View>
       <View style={{height:100, width:window.width*0.8, backgroundColor:'red', elevation:80, zIndex: 5}}>
        <Text>otp</Text>
       </View>
       <View style={{flex:0.6, width:window.width,}}>
         <Text>other section</Text>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  }
});