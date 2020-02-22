import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
//import { theme, colors } from '../styles';

const window = Dimensions.get('window')
const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    //fontWeight: '800'
  },
  outlinedButtonText: {
    fontSize: 20,
    padding: 10,
    color: 'black',
    textAlign: 'center',
    fontWeight: '300'
  },

  buttonWrapper: {
    backgroundColor: 'red',
    borderColor: 'red',

    marginTop: 20,
    marginBottom: 20,
    height: 50,
    width: window.width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 8,
    alignSelf: 'center',
    //elevation: 5

  },
  OutLinedbuttonWrapper: {
    //backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 0.4,
    marginTop: 20,
    marginBottom: 20,
    height: 50,
    width: window.width * 0.6,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 8,
    alignSelf: 'center',
    //elevation: 5

  },
  SmallbuttonWrapper: {
    backgroundColor: 'green',
    marginBottom: 10,
    width: 180,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: 'gray',
  },
  SmallestbuttonWrapper: {
    backgroundColor: 'red',
    marginBottom: 10,
    width: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'red',

  },
  SmallbuttonText: {
    fontSize: 20,
    padding: 10,
    color: 'white',
    textAlign: 'center',
  },
  SmallestbuttonText: {
    fontSize: 15,
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  choiceButtonText: {
    fontSize: 12,
    paddingTop: 15,
    paddingBottom: 15,
    color: 'black',
    textAlign: 'center',
  },
  choiceButtonWrapper: {
    backgroundColor: 'white',
    width: '100%',
    borderWidth: 2,
    borderColor: 'white',
  },
});

export const Button = props => (
 
  <View style={props.style}>
    <TouchableOpacity
      activeOpacity={0.5}
      style={StyleSheet.compose(styles.buttonWrapper, props.style)}
      onPress={props.onPress}
    >
      <Text style={StyleSheet.compose(styles.buttonText, props.textStyle)}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
 
);

export const OutlinedButton = props => (
 
  <View style={props.style}>
    <TouchableOpacity
      activeOpacity={0.5}
      style={StyleSheet.compose(styles.OutLinedbuttonWrapper, props.style)}
      onPress={props.onPress}
    >
      <Text style={StyleSheet.compose(styles.outlinedButtonText, props.textStyle)}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
 
);


export const SmallButton = props => (
  <View style={props.style}>
    <TouchableOpacity
      style={StyleSheet.compose(styles.SmallbuttonWrapper, props.style)}
      onPress={props.onPress}
    >
      <Text style={StyleSheet.compose(styles.buttonText, props.textStyle)}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);

export const SmallestButton = props => (
  <View style={props.style}>
    <TouchableOpacity
      style={StyleSheet.compose(styles.SmallestbuttonWrapper, props.style)}
      onPress={props.onPress}
    >
      <Text style={StyleSheet.compose(styles.SmallestbuttonText, props.textStyle)}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);

export const ChoiceButton = props => (
  <View style={props.style}>
    <TouchableOpacity
      style={[styles.choiceButtonWrapper, { borderColor: props.borderColor }]}
      onPress={props.onPress}
    >
      <Text style={styles.choiceButtonText}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);

