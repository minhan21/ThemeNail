import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import flatListData from '../Screens/Flatlistdata'
class FlatFlistItem extends Component {
    render() {
        return (
            <View style={styles.flatlistitem}>
                <Text style={styles.tvstt}>{this.props.item.stt}</Text>
                <Image
                    style={{ width: 50, height: 50, marginLeft: 20 }}
                    source={require('../assets/img/imgavarta.png')}
                />
                <Text style={styles.tvnamefl}>{this.props.item.name}</Text>
                <Text style={styles.tvpointfl}>{this.props.item.point}</Text>
            </View>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tvhome}>Home</Text>
                <LinearGradient style={styles.button} colors={['#FF00A9', '#FF3D81']}>
                    <View>
                        <Text style={styles.tvname}>Hi, Jane Doe</Text>
                        <Text style={styles.tvpoint}>1000 Point</Text>
                    </View>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../assets/img/imgavarta.png')}
                    />
                </LinearGradient>
                <View style={styles.view2text}>
                    <Text style={{ color: '#340021', fontFamily: 'Roboto-Bold', fontSize: 16, fontWeight: 'bold' }}>Hot Services</Text>
                    <Text style={{ color: '#340021', fontFamily: 'Roboto-Regular', fontSize: 10 }}>Watch More ></Text>
                </View>
                <View style={{ width: '100%', height: 182 }}>
                    <ScrollView style={styles.scroolview} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ height: 152, position: 'relative', marginHorizontal: 14 }}>
                            <Image
                                style={{ width: 111, height: 152 }}
                                source={require('../assets/img/img1.png')}
                            />
                            <View style={styles.viewlorem}>
                                <Text style={styles.tvlorem}>Lorem Ipsum</Text>
                            </View>
                        </View>
                        <View style={{ height: 152, position: 'relative', marginHorizontal: 14 }}>
                            <Image
                                style={{ width: 111, height: 152 }}
                                source={require('../assets/img/img2.png')}
                            />
                            <View style={styles.viewlorem}>
                                <Text style={styles.tvlorem}>Lorem Ipsum</Text>
                            </View>
                        </View>
                        <View style={{ height: 152, position: 'relative', marginHorizontal: 14 }}>
                            <Image
                                style={{ width: 111, height: 152 }}
                                source={require('../assets/img/img3.png')}
                            />
                            <View style={styles.viewlorem}>
                                <Text style={styles.tvlorem}>Lorem Ipsum</Text>
                            </View>
                        </View>
                        <View style={{ height: 152, position: 'relative', marginHorizontal: 14 }}>
                            <Image
                                style={{ width: 111, height: 152 }}
                                source={require('../assets/img/img1.png')}
                            />
                            <View style={styles.viewlorem}>
                                <Text style={styles.tvlorem}>Lorem Ipsum</Text>
                            </View>
                        </View >
                        <View style={{ height: 152, position: 'relative', marginHorizontal: 14 }}>
                            <Image
                                style={{ width: 111, height: 152 }}
                                source={require('../assets/img/img2.png')}
                            />
                            <View style={styles.viewlorem}>
                                <Text style={styles.tvlorem}>Lorem Ipsum</Text>
                            </View>
                        </View>
                        <View style={{ height: 152, position: 'relative', marginHorizontal: 14 }}>
                            <Image
                                style={{ width: 111, height: 152 }}
                                source={require('../assets/img/img3.png')}
                            />
                            <View style={styles.viewlorem}>
                                <Text style={styles.tvlorem}>Lorem Ipsum</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <Text style={styles.tvrankingmember}>Ranking Member</Text>
                <FlatList
                    style={{ width: '100%' }}
                    data={flatListData}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatFlistItem item={item} index={index}>

                            </FlatFlistItem>);
                    }}
                >
                </FlatList>
            </View>
        )
    }
}
export default Home;
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginTop: 40,
        width: '90%',
        height: '100%',
        alignSelf: 'center',
        // borderWidth: 3,
        flexDirection: 'column',
        backgroundColor: "#fff",
        alignItems: 'center',

    },
    view2text: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        width: '100%',
        height: "15%",
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    tvname: {
        color: '#fff',
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        textAlign: 'left',
    },
    tvpoint: {
        color: '#fff',
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
        textAlign: 'left',
    },
    scroolview: {
        // borderColor: 'red',
        // borderWidth: 2,
        marginTop: 20,

    },
    viewlorem: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 40,
        backgroundColor: '#000',
        opacity: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30
    },
    tvlorem: {
        fontFamily: 'Roboto-Black',
        color: '#fff',
        fontSize: 12,
        alignSelf: 'center'
    },
    tvrankingmember: {
        fontFamily: 'Roboto-Bold',
        color: '#340021',
        fontSize: 16,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    flatlistitem: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    tvstt: {
        alignSelf: 'center',
        color: '#340021',
        fontFamily: 'Roboto-Black',
        fontSize: 20
    },
    tvnamefl: {
        textAlign: 'left',
        alignSelf: 'center',
        marginLeft: 20,
        color: '#340021',
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        fontWeight: 'bold'
    },
    tvpointfl: {
        textAlign: 'left',
        alignSelf: 'center',
        marginLeft: 20,
        color: '#340021',
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold'
    },
    tvhome: {
        color: '#340021',
        fontFamily: 'Roboto-Black',
        fontSize: 24,
        alignSelf: 'flex-start',
        marginBottom: 30
    },
});