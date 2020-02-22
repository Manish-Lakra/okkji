import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  {assets as a}  from './assets/assets';
import Splash from './screens/splash'
import HomeScreen from './screens/home'
import Language from './screens/language'
import Login from './screens/login'
import OTP from './screens/enterOTP'


// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

function HomeScreen1({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  

function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  function Draw() {
    return (
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    );
  }
  




  function Home() {
    return (
      <Tab.Navigator

    //  screenOptions={({ route }) => ({
    //       tabBarIcon: ({ focused, color, size }) => {
    //         let iconName;

    //         if (route.name === 'Home') {
    //           iconName = focused
    //             ? 'ios-information-circle'
    //             : 'ios-information-circle-outline';
    //         } else if (route.name === 'Settings') {
    //           iconName = focused ? 'ios-list-box' : 'ios-list';
    //         }

    //         // You can return any component that you like here!
    //         return <Ionicons name={iconName} size={size} color={color} />;
    //       },
    //     })}
      
      tabBarOptions={{
        tabBarIcon:  a.home.home,
        showIcon: true,
        initialRouteName:"Home",
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Home" component={HomeScreen} tabBarIcon= {a.home.home} />
        <Tab.Screen name="Order" component={DetailsScreen} tabBarIcon= {a.home.home} />
        <Tab.Screen name="Khata Book" component={HomeScreen} tabBarIcon= {a.home.home} />
        <Tab.Screen name="Wallet" component={DetailsScreen} tabBarIcon= {a.home.home}/>
        <Tab.Screen name="Notification" component={DetailsScreen} tabBarIcon= {a.home.home}/>
      </Tab.Navigator>
    );
  }
  
  

const Stack = createStackNavigator();

function okkjiRetail() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OTPScreen" headerMode='none'>
          <Stack.Screen name="Splash" component={Splash}/>
          <Stack.Screen name="Language" component={Language}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="OTPScreen" component={OTP}/>
      <Stack.Screen name="Drawer" component={Draw} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default okkjiRetail;