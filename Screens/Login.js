import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet, TextInput, Image } from 'react-native'
const LIGHT_GRAY = "#D3D3D3";
const BLUE = "#DC008B";
class Login extends Component {
    state = {
        isFocused: false
    };
    handleFocus = event => {
        this.setState({ isFocused: true });
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };
    handleBlur = event => {
        this.setState({ isFocused: false });
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };

    render() {
        const { isFocused } = this.state;
        const { onFocus, onBlur } = this.props;
        return (
            <View style={styles.container}>

                <View style={styles.viewsign}>

                    <TouchableHighlight style={styles.tvsign} ><Text style={styles.sign}>Sign In</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.tvsign}><Text style={styles.sign}>Sign Up</Text></TouchableHighlight>
                </View>
                <View style={styles.viewsign2}>
                    <Text style={styles.tv}>Email</Text>
                    <TextInput placeholder="Email" selectionColor={BLUE} underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
                        onFocus={this.handleFocus} onBlur={this.handleBlur} style={styles.textInput} ></TextInput>
                    <Text style={styles.tv}>Password</Text>
                    <TextInput placeholder="Email" selectionColor={BLUE} underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
                        onFocus={this.handleFocus} onBlur={this.handleBlur} style={styles.textInput} ></TextInput>
                </View>
                <View style={styles.viewbutton}>
                    <TouchableHighlight style={styles.touchablelogin} ><Text style={styles.tvlogin}>Login</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.touchablegg}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('../assets/img/icongg.png')}
                            />
                            <Text style={styles.tvgg}>Login with Google Account</Text>
                        </View>
                    </TouchableHighlight>

                </View>
            </View>
        )
    }
}
export default Login;
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '90%',
        alignSelf: 'center',
        height: '100%',
        backgroundColor: "#fff",
    },
    viewbutton: {
        position: 'absolute', bottom: '15%',
        width: '90%', height: 140,
        alignSelf: 'center',
        borderWidth: 3,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    touchablelogin: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#DC008B', borderRadius: 5
    },
    touchablegg: {
        width: '90%', alignSelf: 'center', backgroundColor: '#fff',
        borderRadius: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8, shadowRadius: 2, elevation: 1,
    },
    tv: {
        color: "#340021",
        fontSize: 12,
        fontFamily: 'Roboto-Black'
    },
    tvlogin: {
        fontFamily: 'Roboto-Black',
        fontSize: 20, color: '#fff',
        alignSelf: 'center',
        padding: 10
    },
    tvgg: {
        fontFamily: 'Roboto-Black',
        fontSize: 16,
        color: '#000',
        alignSelf: 'flex-end',
        padding: 10
    },
    textInput: {
        height: 40,
        paddingLeft: 6,
    },
    viewsign: {
        position: 'absolute',
        top: '20%',
        borderWidth: 1,
        width: '100%',
        height: '10%',
        flexDirection: 'row'
        , justifyContent: 'space-around',
    },
    viewsign2: {
        position: 'absolute',
        top: '34%',
        borderWidth: 1,
        width: '100%',
        height: '26%',
        flexDirection: 'column'
        , justifyContent: 'space-around',
    },
    tvsign: {
        borderBottomWidth: 4, borderBottomColor: '#DC008B',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sign: {
        alignSelf: 'center', color: '#DC008B',
        fontFamily: 'Roboto-Black',
        fontSize: 20
    },
    borderlogin: {
        width: '90%',
        alignSelf: 'center',
    }

})