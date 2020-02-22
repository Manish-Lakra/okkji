
import { assets as a } from '../assets/assets'

export const Strings = {
  //language Screen

  

  //otp Screen
  lblNoInternet: 'No internet connection found.\nCheck your connection or try again later.',
  lblOkay: 'Okay',
  otpSentTitle: `OTP has been sent to`,
  otpSentNumberTitle: `9900990099`,
  otpPleaseEnterSixDigitsTitle: `Please enter the 6 digits OTP below`,
  lblUpdate: 'Update',
  lblYes: 'Yes',
  lblNo: 'No',


  regex: {
    floatNumber: /^(\d+)?(\.\d+)?$/,
    justDigits: /^\d+$/,
    stringWithoutSpecialCharacters: /[^a-zA-Z0-9 ]/g,
    email: /^(([^<>()\[\]\\.,;:-\s@"]+(\.[^<>()\[\]\\.,;:-\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
}
