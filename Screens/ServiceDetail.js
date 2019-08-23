import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableHighlight } from 'react-native'

class ServiceDetail extends Component {
    render() {
        return (
            <View style={{ width: '100%' }}>
                <Image
                    style={{ width: '100%', height: 193, marginTop: 60 }}
                    source={require('../assets/img/imgservice.png')}
                />
                <Text style={{ fontFamily: 'Roboto-Black', fontSize: 20, alignSelf: 'flex-start', color: '#340021', padding: 10 }}>Lorem ipsum</Text>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, alignSelf: 'flex-start', color: '#54414A', paddingLeft: 10 }}>Lorem ipsum,Dolor sit, Amet consectetur, Elit</Text>
                <Text style={{ fontFamily: 'Roboto-Black', fontSize: 16, alignSelf: 'flex-start', color: '#340021', padding: 10 }}>$50</Text>
                <TouchableHighlight style={styles.touchablelogin} ><Text style={styles.tvlogin}>Book</Text></TouchableHighlight>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, padding: 10, color: '#54414A', textAlign: 'left' }}>Nulla elementum hendrerit velit vitae consectetur. Praesent vulputate dui eget semper posuere.
                 Duis elit mi, dapibus eget nisl nec, congue gravida ante. Aenean id consectetur erat.
                 Aenean quis ante id sapien pretium fermentum vitae quis sem. Cras vel scelerisque elit.
                 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Image
                        style={{ width: 65, height: 65 }}
                        source={require('../assets/img/imghand.png')}
                    />
                    <Image
                        style={{ width: 65, height: 65 }}
                        source={require('../assets/img/imghand.png')}
                    />
                    <Image
                        style={{ width: 65, height: 65 }}
                        source={require('../assets/img/imghand.png')}
                    />
                    <Image
                        style={{ width: 65, height: 65 }}
                        source={require('../assets/img/imghand.png')}
                    />
                </View>
            </View>
        )
    }
}
export default ServiceDetail;
const styles = StyleSheet.create({
    imgmain: {

    },
    touchablelogin: {
        width: '40%',
        marginLeft: 10,
        alignSelf: 'flex-start',
        backgroundColor: '#DC008B', borderRadius: 5
    },
    tvlogin: {
        fontFamily: 'Roboto-Black',
        fontSize: 20, color: '#fff',
        alignSelf: 'center',
        padding: 10
    },
})
