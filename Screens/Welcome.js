import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableHighlight } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imgmain}
                    source={require('../assets/img/bg.png')}
                />
                <View style={styles.container2}>
                    <Text style={styles.tvtitle}>Welcome to "SuBee Nail"</Text>
                    <Text style={styles.tvcontent}>Extravagant, Friendly Nail Service at an</Text>
                    <Text style={styles.tvcontent2}>Affordable Price.</Text>
                    <LinearGradient style={styles.button} colors={['#FF00A9', '#FF3D81']}><Text style={styles.tvgetstarted}>Get Started</Text></LinearGradient>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: "#fff",
    },
    container2: {
        top: '46%',
        position: 'relative',
        width: '100%',
        height: '80%',
    },
    imgmain: {
        position: 'absolute',
        top: '8%',
        width: '90%',
        height: '40%',
        alignSelf: 'center',
    },
    button: {
        position: 'absolute',
        top: "27%",
        alignSelf: 'center',
        width: '80%',
        height: "10%",
        borderRadius: 15
    },
    tvtitle: {
        top: '2%',
        position: 'absolute',
        alignSelf: 'center',
        color: '#000',
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: "Roboto-Black",
    },
    tvcontent: {
        position: 'absolute',
        top: "10%",
        alignSelf: 'center',
        color: '#54414A',
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
    },
    tvcontent2: {
        position: 'absolute',
        top: "16%",
        alignSelf: 'center',
        color: '#54414A',
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
    },
    tvgetstarted: {
        marginTop: "4%",
        alignSelf: 'center',
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: "Roboto-Black",
    }

});

