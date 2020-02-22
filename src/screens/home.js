import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image
} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import {assets as asset} from '../assets/assets'
import SafeAreaCompoment from  '../components/SafeAreaComponent'
import Login from '../screens/login'

const window = Dimensions.get('window');
let menues = ['Home', 'order', 'khata Book', 'Wallet', 'Notification'];


export default class Splash extends Component {

  _renderScreens = ({ route }) => {
    switch (route.key) {
        case menues[0]:
            return (<Login {...this.props} />);
        case menues[1]:
            return (<Login {...this.props} />);
        case menues[2]:
            return (<Login {...this.props} />);
        case menues[3]:
            return (<Login {...this.props} />);
        case menues[4]:
              return (<Login {...this.props} />);
        default:
            return null;
    }
};

constructor(props) {
    super(props);
   
    this.state = {
        //index: props.navigation.state.params !=undefined ? props.navigation.state.params.index|| 0 : 0,
        index:0,
        routes: [
            { key: menues[0], icon_sl: asset.home.home, icon_usl: asset.home.home, index: 0, name: 'home' },
            { key: menues[1], icon_sl: asset.home.order, icon_usl: asset.home.order, index: 1, name: 'order' },
            { key: menues[2], icon_sl: asset.home.khataBook, icon_usl: asset.home.khataBook, index: 2, name: 'khataBook' },
            { key: menues[3], icon_sl: asset.home.Wallet, icon_usl: asset.home.Wallet, index: 3, name: 'Wallet' },
            { key: menues[4], icon_sl: asset.home.Notification, icon_usl: asset.home.Notification, index: 4, name: 'Notification' },
        ],
    };
}
 
_renderIcon = ({ route }) => (
  <View style={{ alignItems: 'center', minWidth: 40 }}>
      <Image style={{width:50, height:50}}
          source={this.state.index == route.index ? route.icon_sl : route.icon_usl} />
      <Text style={{ marginTop: 5, fontSize: 11, fontWeight: '500', color: this.state.index == route.index ? 'green' : 'black' }}>{route.name}</Text>
  </View>
);

 

  render() {
    return (
      <SafeAreaCompoment color='blue' >
      <TabView navigationState={this.state}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{
              width: window.width,
              height: window.height,
              backgroundColor: 'white',
              color: 'black',
          }}
          swipeEnabled={false}
          renderScene={this._renderScreens}
          tabBarPosition='bottom'
          renderTabBar={(props) => <TabBar {...props}
              indicatorStyle={{ backgroundColor: 'white' }}
              labelStyle={styles.labelStyle}
              renderIcon={this._renderIcon}
              tabStyle={{ paddingVertical: 0, paddingHorizontal:5 }}
              style={styles.tabBarShadow} />} />
  </SafeAreaCompoment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
  },
  labelStyle: {
      color: 'black',
  },

  tabBarShadow: {
      shadowColor: 'black',
      shadowOpacity: 0.30,
      backgroundColor: 'white',
      color: 'black',
      shadowRadius: 5,
      shadowOffset: {
          width: 0,
          height: -5,
      },
  },
});
