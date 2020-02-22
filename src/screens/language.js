import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import SafeAreaCompoment from '../components/SafeAreaComponent'
import { assets as asset } from '../assets/assets';
import { colors } from '../res/colors';
import { Button, OutlinedButton } from '../components/Button/button';
import strings from '../vernacular';

const window = Dimensions.get('window');


export default class Language extends Component {

  constructor(props) {
    super(props);
    this.lang = [
      {
        shortform: 'hi_IN',
        longform: 'हिंदी',
      },
      {
        shortform: 'en_US',
        longform: 'English',
      },
    ];
    this.state = { authenticated: false };
  }


  setLang(value) {
    alert(value)
    strings.setLanguage(value);
    //AsyncStorage.setItem('language', value);
    this.props.navigation.navigate('Login');
  }


  render() {
    return (
      <ImageBackground source={asset.splash.background} style={{ width: '100%', height: '100%' }}>
        <SafeAreaCompoment color='blue' >
          <View style={styles.container}>
            <View style={{ flex: 0.4, paddingVertical: 15, top: 40 }}>
              <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  //style={{width:100, height:100}}
                  source={asset.language.logo}
                />
              </View>
              <View style={{ flex: 0.5, backgroundColor: colors.white, width: window.width * 0.8, borderBottomWidth: 2, borderRightWidth: 2, borderColor: colors.lightGray, justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 15, elevation: 1 }}>
                <Image
                  style={{ width: 70, height: 90 }}
                  source={asset.language.E2HLogo}
                />
                <Text style={{ color: colors.lightBlack, paddingBottom: 20, fontSize: 20 }}>
                  Choose Language
        </Text>

              </View>
            </View>

            <View style={{ flex: 0.6, width: window.width * 0.8 }}>
              <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <TouchableOpacity style={{ flex: 0.45, height: 120, backgroundColor: colors.white, borderBottomWidth: 2, borderRightWidth: 2, borderColor: colors.lightGray, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, elevation: 1 }} onPress={() => this.setLang('en_US')} >
                  <Image
                    style={{ width: 60, height: 60 }}
                    source={asset.language.AUnselected}
                  />
                  <Text style={{ color: colors.lightBlack, paddingTop: 20, fontSize: 20 }}> English </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 0.45, height: 120, backgroundColor: colors.white, width: window.width * 0.3, borderBottomWidth: 2, borderRightWidth: 2, borderColor: colors.lightGray, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, elevation: 1 }} onPress={() => this.setLang('hi_IN')}>
                  <Image
                    style={{ width: 60, height: 60 }}
                    source={asset.language.AAUnselected}
                  />
                  <Text style={{ color: colors.lightBlack, paddingTop: 20, fontSize: 20 }}>Hindi</Text>
                </TouchableOpacity>

              </View>
              <View style={{ flex: 0.5, justifyContent: 'flex-start' }}>
                <OutlinedButton
                  onPress={
                    () => alert('pressed')
                  }
                  text={'Continue'}
                />
              </View>
            </View>
          </View>
        </SafeAreaCompoment>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});