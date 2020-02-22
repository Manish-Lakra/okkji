import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
  hi_IN: {
    login:{
      getStarted: 'प्रारम्भ करे',
      login:'Login',
      phonePlaceholder:'Enter your mobile number',
      contactUsText:'यदि आप पंजीकृत नहीं हैं, तो कृपया हमसे संपर्क करें',
      
    },
    

  },

  en_US: {

    login:{
      getStarted: 'Get started with OkkJi',
      login:'Login',
      phonePlaceholder:'Enter your mobile number',
      contactUsText:'If you are not registered please, Contact Us',
      
    },
    

    
  },

});

export default strings;
