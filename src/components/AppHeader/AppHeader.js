import React, {Component} from 'react';
import {TextInput,Text, View, TouchableOpacity, Image, ImageBackground, SafeAreaView} from 'react-native';

import {themes as t} from '../../res/themes';
import {assets as a} from '../../assets/assets';
import {withNavigation} from 'react-navigation';
import CustomTextInput from '../CustomTextInput';
import {colors as c} from '../../res/colors'


class AppHeader extends Component {

    render() {
        let {showBack, title, showleftHeaderText, isTextInput, leftImage1, rightImage1, rightImage2,textInputRightIcon,textInputLeftIcon,
            textFocus,rightText =false,headerContainerStyle,leftImage1Style = {},rightImage1Style = {},rightImage2Style={},
            rightTextStyle = {},
        } = this.props;

        return (<View style={[t.headerContainer]}>
            {showBack && <TouchableOpacity
                {...this.props.leftImage1Action}
                style={[t.headerBackwardArrow,{marginHorizontal: 4,},leftImage1Style.style,]}>
                <Image source={leftImage1}/>
            </TouchableOpacity>
            }
            {showleftHeaderText && <Text style={[t.headerTextStyle,{color : 'white', marginLeft : 10, fontSize: 20} ]}>{title}</Text>}
            {isTextInput && <CustomTextInput
                style={{}}
                righticon={{
                    style: {},
                    source: textInputRightIcon,
                    ...this.props.rightTextIconOnPress,
                }}
                lefticon={{
                    style: {},
                    source: textInputLeftIcon,
                }}
                textFocus ={ textFocus == undefined ? false : true}
                placeholder={title}
                // onEndEditing={() => this.props.onEndEditing()}
                onSubmitEditing={() => this.props.onSubmitEditing()}
                {...this.props.onChangeCustomText}/>}
                   {showleftHeaderText && <View style={{width : '55%'}}></View>}
            {!rightText && <TouchableOpacity
                {...this.props.rightImage1Action}
                style={[t.headerRightIcon,{ marginLeft: 10,},rightImage1Style.style]}>
                <Image source={rightImage1}/>
            </TouchableOpacity>}
          { !rightText && <TouchableOpacity
                {...this.props.rightImage2Action}
                style={[t.headerRightIcon,{ marginLeft: 4,  flexDirection : 'row-reverse'},rightImage2Style,]}>
                <Image source={rightImage2}/>
                <View style={{height : 10,width :10,position : 'absolute', top:19.5,left:2.5, borderRadius:10, }}>

                {/* <Text style={{fontSize:8, fontWeight : 'bold', color : c.white}}>4</Text> */}
                </View>
                {/* <Text style = {{backgroundColor :'green', position : 'absolute',top:10,left:3,fontSize : 6, borderRadius:20,color : c.white, borderColor: c.white, alignItems : 'center' }}> 4</Text> */}
            </TouchableOpacity>}

           {rightText && <TouchableOpacity
            style = {[{padding: 10,marginLeft: 5,},rightTextStyle.style]}
           {...this.props.rightTextOnPress}
            >
            
            <Text style= {{color : 'white'}}> {rightText}</Text>
            </TouchableOpacity>}
        </View>);
    }
}

export default AppHeader;
