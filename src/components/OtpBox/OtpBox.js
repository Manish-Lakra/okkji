import { colors } from '../../res/colors';
import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native'

export default class OtpBox extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            a: '',
            b: '',
            c: '',
            d: '',
            e: '',
            f: '',
        }
    }

    getinput() {
        return this.state.a +
            this.state.b +
            this.state.c +
            this.state.d +
            this.state.e +
            this.state.f
            // this.state.d + (this.props.length == 4 ? "" : (
            //     this.state.e +
            //     this.state.f))
    }

    clearViea() {
        this.setState({ a: '', b: '', c: '', d: '', e: '', f: '' })
        this.refs.a.focus()
    }

    setText(text) {

    }

    render() {

        return (
            <View style={[{ marginTop: 20, }, this.props.containerStyle,]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={[styles.digitWrapper, this.props.digitWrapper]}>

                            <TextInput
                                {...this.props}
                                value={this.state.a}
                                ref={'a'}
                                maxLength={1}
                                keyboardType={'number-pad'}
                                secureTextEntry={true}
                                contextMenuHidden={true}
                                style={[styles.digitInput, this.props.digitInput]}
                                onChangeText={a => {
                                    // if (Utility.sharedInstance.removeCharsExcept('0123456789', a).length != a.length) return
                                    if (this.state.a.length == 0 && a.length != 0)
                                        this.refs.b.focus()
                                    this.setState({ a: a })
                                    //this.setState({a: Utility.sharedInstance.removeCharsExcept('0123456789', a)})
                                }} />
                        </View>
                        <View style={[styles.digitWrapper, this.props.digitWrapper]}>
                            <TextInput
                                {...this.props}
                                value={this.state.b}
                                ref={'b'}
                                keyboardType={'number-pad'}
                                maxLength={1}
                                secureTextEntry={true}
                                contextMenuHidden={true}
                                style={[styles.digitInput, this.props.digitInput]}
                                onChangeText={a => {
                                    // if (Utility.sharedInstance.removeCharsExcept('0123456789', a).length != a.length) return
                                    if (this.state.b.length != 0 && a.length == 0)
                                        this.refs.a.focus()
                                    else
                                        this.refs.c.focus()
                                    this.setState({ b: a })
                                    //this.setState({b: Utility.sharedInstance.removeCharsExcept('0123456789', a)})
                                }} />
                        </View>
                        <View style={[styles.digitWrapper, this.props.digitWrapper]}>
                            <TextInput
                                {...this.props}
                                value={this.state.c}
                                ref={'c'}
                                secureTextEntry={true}
                                contextMenuHidden={true}
                                keyboardType={'number-pad'}
                                maxLength={1}
                                style={[styles.digitInput, this.props.digitInput]}
                                onChangeText={a => {
                                    // if (Utility.sharedInstance.removeCharsExcept('0123456789', a).length != a.length) return
                                    if (this.state.c.length != 0 && a.length == 0)
                                        this.refs.b.focus()
                                    else
                                        this.refs.d.focus()
                                    this.setState({ c: a })
                                    // this.setState({c: Utility.sharedInstance.removeCharsExcept('0123456789', a)})
                                }} />
                        </View>
                        <View style={[styles.digitWrapper, this.props.digitWrapper]}>
                            <TextInput
                                {...this.props}
                                value={this.state.d}
                                ref={'d'}
                                secureTextEntry={true}
                                contextMenuHidden={true}
                                keyboardType={'number-pad'}
                                maxLength={1}
                                style={[styles.digitInput, this.props.digitInput]}
                                onChangeText={a => {
                                    // if (Utility.sharedInstance.removeCharsExcept('0123456789', a).length != a.length) return
                                    if (this.state.d.length != 0 && a.length == 0)
                                        this.refs.c.focus()
                                    else if (this.props.length == 4) {
                                        this.props.onComplete && this.props.onComplete(this.getinput())
                                    }
                                    else this.refs.e.focus()
                                    this.setState({ d: a })
                                }} />
                        </View>
                        {
                            this.props.length != 4 &&
                            <View style={[styles.digitWrapper, this.props.digitWrapper]}>
                                <TextInput
                                    {...this.props}
                                    value={this.state.e}
                                    ref={'e'}
                                    secureTextEntry={true}
                                    contextMenuHidden={true}
                                    maxLength={1}
                                    keyboardType={'number-pad'}
                                    style={[styles.digitInput, this.props.digitInput]}
                                    onChangeText={a => {
                                        // if (Utility.sharedInstance.removeCharsExcept('0123456789', a).length != a.length) return
                                        if (this.state.e.length != 0 && a.length == 0)
                                            this.refs.d.focus()
                                        else
                                            this.refs.f.focus()
                                        this.setState({ e: a })

                                    }} />
                            </View>
                        }
                        {
                            this.props.length != 4 &&
                            <View style={[styles.digitWrapper, this.props.digitWrapper]}>
                                <TextInput
                                    {...this.props}
                                    value={this.state.f}
                                    ref={'f'}
                                    secureTextEntry={true}
                                    contextMenuHidden={true}
                                    maxLength={1}
                                    keyboardType={'number-pad'}
                                    style={[styles.digitInput, this.props.digitInput]}
                                    onChangeText={a => {
                                        // if (Utility.sharedInstance.removeCharsExcept('0123456789', a).length != a.length) return
                                        if (this.state.f.length != 0 && a.length == 0)
                                            this.refs.e.focus()
                                        this.setState({ f: a }, () => this.props.onComplete && this.props.onComplete(this.getinput()))
                                    }} />
                            </View>
                        }
                    </View>

                    {this.props.info ? <TouchableOpacity style={{
                        marginLeft: 15,
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: 'grey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', textAlign: 'center', color: colors.black }}>i</Text>
                    </TouchableOpacity> : <View style={{
                        marginLeft: 15,
                        width: 20,
                        height: 20,
                    }} />}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    digitWrapper: {
        borderColor: colors.otpBoxBorderColor,
        borderRadius: 5,
        borderWidth: 1,
        marginHorizontal: 5,
        height: 50,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    digitInput: {
        textAlign: 'center',
        fontSize: 16
    },
});