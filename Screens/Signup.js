import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Image, TextInput } from 'react-native'
const LIGHT_GRAY = "#D3D3D3";
const BLUE = "#DC008B";
class Signup extends Component {
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
                <TouchableHighlight style={styles.touchablegg}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('../assets/img/icongg.png')}
                        />
                        <Text style={styles.tvgg}>Login with Google Account</Text>
                    </View>
                </TouchableHighlight>

                <Text style={{ color: '#340021', fontFamily: 'Roboto-Black', fontSize: 20 }}>OR</Text>

                <View style={styles.viewsign2}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.tv}>Email</Text>
                            <TextInput placeholder="Email" selectionColor={BLUE} underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
                                onFocus={this.handleFocus} onBlur={this.handleBlur} style={styles.textInput} ></TextInput>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.tv}>Password</Text>
                            <TextInput placeholder="Email" selectionColor={BLUE} underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
                                onFocus={this.handleFocus} onBlur={this.handleBlur} style={styles.textInput} ></TextInput>
                        </View>
                    </View>
                    <Text style={styles.tv}>Email</Text>
                    <TextInput placeholder="Email" selectionColor={BLUE} underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
                        onFocus={this.handleFocus} onBlur={this.handleBlur} style={styles.textInput} ></TextInput>
                    <Text style={styles.tv}>Password</Text>
                    <TextInput placeholder="Email" selectionColor={BLUE} underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
                        onFocus={this.handleFocus} onBlur={this.handleBlur} style={styles.textInput} ></TextInput>
                </View>
                <TouchableHighlight style={styles.touchablelogin} ><Text style={styles.tvlogin}>Login</Text></TouchableHighlight>
            </View>
        )
    }
}
export default Signup;
const styles = StyleSheet.create({
    container: {
        paddingTop:64,
        position: 'relative',
        width: '90%',
        alignSelf: 'center',
        height: '100%',
        borderWidth: 1,
        backgroundColor: "#fff",
        flexDirection: 'column',
        alignItems: 'center',

    },
    viewsign: {

        borderWidth: 1,
        width: '100%',
        height: '10%',
        flexDirection: 'row'
        , justifyContent: 'space-around',
    },
    viewsign2: {

        marginVertical:24,
        borderWidth: 1,
        width: '100%',
        height: '26%',
        flexDirection: 'column'
        , justifyContent: 'space-around',
    },
    sign: {
        alignSelf: 'center', color: '#DC008B',
        fontFamily: 'Roboto-Black',
        fontSize: 20
    },
    tvsign: {
        borderBottomWidth: 4, borderBottomColor: '#DC008B',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tv: {
        color: "#340021",
        fontSize: 12,
        fontFamily: 'Roboto-Black'
    },
    touchablegg: {
        width: '90%', backgroundColor: '#fff',
        borderRadius: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8, shadowRadius: 2, elevation: 1, marginVertical: 24
    },
    tvgg: {
        fontFamily: 'Roboto-Black',
        fontSize: 16,
        color: '#000',
        alignSelf: 'flex-end',
        padding: 10
    },
    touchablelogin: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#DC008B', borderRadius: 5
    },
    tvlogin: {
        fontFamily: 'Roboto-Black',
        fontSize: 20, color: '#fff',
        alignSelf: 'center',
        padding: 10
    },
})
