import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput
} from 'react-native';
import strings from '../vernacular';
import { SmallButton } from '../components/Button/button';


const window = Dimensions.get('window');

export default class Splash extends Component {

  constructor(props) {
    super(props)
  }





  render() {
    let value = '9999590899'
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.7, backgroundColor: 'green', width: window.width, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Cut-out here</Text>
        </View>
        <View style={{ flex: 0.3, backgroundColor: 'white', width: window.width, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1, width: window.width, padding: 15 }}>
            <Text style={{ fontSize: 20 }}>{strings.login.getStarted} </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.textStyle}>+91</Text>
              <Text style={styles.textStyle }>|</Text>
              <TextInput
                style={styles.textInputStyle}
                onChangeText={text => onChangeText(text)}
                value={value}

              />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>
              <SmallButton
                onPress={
                  () => alert('Login pressed')
                }
                text={strings.login.login}
              />
            </View>
              <Text>{strings.login.contactUsText}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: window.width,
  },
  textInputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    height: 50,
    paddingVertical: 15,
    width: window.width * 0.5,
    left:20

  },
  textStyle: {
    height: 40,
    paddingVertical: 15,
    fontSize: 15,
    left:20
    // textDecorationLine:'underline',
    // marginBottom:10
  }
});