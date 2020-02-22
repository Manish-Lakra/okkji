import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image
} from 'react-native';
import { assets as asset} from '../assets/assets';
import  { colors } from '../res/colors';



export default class Splash extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {

    setTimeout(() => {
      
              this.props.navigation.navigate('Language')
           
    }, 1000);
  }



  render() {
    return (
      <ImageBackground source={asset.splash.background} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <View style={{flex:0.2}}>
          <Image
          
          source={asset.splash.logo}
        />
         </View>
           
         </View>
         <View style={{ alignItems:'center' }}>
              <Text style={{ fontSize: 20, paddingTop: 20, color: colors.textColor }}>Connecting Customer's Need </Text>
            </View>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',

  },
});