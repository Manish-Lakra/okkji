import Toast from 'react-native-root-toast';
import AlertMessages from '../constants/AlertMessages'

import { AsyncStorage, ToastAndroid, Platform } from 'react-native'
import AsyncStorageValues from '../constants/AsyncStorageValues'
import NavUtil from '../Utility/NavUtil'
import { Strings } from '../constants/Strings';

export default class Utility {
    static sharedInstance = Utility.sharedInstance == null ? new Utility() : Utility.sharedInstance;

    showToast(message) {
        if (Platform.OS === 'ios') {
            let toast = Toast.show(message, {
                duration: Toast.durations.LONG,
                position: -50,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
                onShow: () => {

                },
                onShown: () => {

                },
                onHide: () => {

                },
                onHidden: () => {

                },
            });
            setTimeout(function () {
                Toast.hide(toast);
            }, 5000);
        } else {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        }
    }

    validateMobileNumber = (fieldValue) => {
        if (fieldValue.trim() == '') {
            this.showToast(AlertMessages.emptyMobileNumberError)
            return false
        } else if (fieldValue.length < 7 || fieldValue.length > 10) {
            this.showToast(AlertMessages.invalidMobileNumberError)
            return false
        }
        return true
    }

    validateRegex = (regex, text) => regex.test(text)

    validateEmailAddress = (email) => {
         if (!this.validateRegex(Strings.regex.email, email)) {
            return false
        }
        return true
    }

    secondsToValidTimeRepresentation(sec) {
        let seconds = sec.toFixed(0);


        let hrs = ~~(seconds / 3600)
        let mins = ~~((seconds % 3600) / 60)
        let secs = seconds % 60

        let output = ""

        if (hrs > 0) output += "" + hrs + ":" + (mins < 10 ? "0" : "")
        output += "" + mins + ":" + (secs < 10 ? "0" : "")
        output += "" + secs

        return output   // Output like "1:01" or "4:03:59" or "123:03:59"
    }

    static log(msg, ...options) {
        if (__DEV__) {
            console.log(msg, options);
        }
    }

    // handler for AppHeader
    profileHandler = async (context) => {
        const token = await AsyncStorage.getItem(AsyncStorageValues.token);
        if (token != null) {
            // logout screen
            NavUtil.navUtil.navigateTo(context, 'LogoutScreen')
        } else {
            // login screen
            NavUtil.navUtil.navigateTo(context, 'LoginScreen')
        }
    }

    saveDataToCart = async (data) => {
        await AsyncStorage.setItem('Cart', JSON.stringify(data));
    }
}
