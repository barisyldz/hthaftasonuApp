import React from "react";
import { Image, TouchableOpacity, Dimensions, ImageBackground, StatusBar, StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const GirisEkrani = ({navigation}) => {
    const [fontsLoaded] = useFonts({
        'poppins-regular': require('hthaftasonu/assets/fonts/Poppins-Regular.ttf'),
        'playfairdisplay-bold': require('hthaftasonu/assets/fonts/PlayfairDisplay-Bold.ttf'),
        'poppins-medium': require('hthaftasonu/assets/fonts/Poppins-Medium.ttf'),
        'playfairdisplay-medium': require('hthaftasonu/assets/fonts/PlayfairDisplay-Medium.ttf'),
        'playfairdisplay-extrabold': require('hthaftasonu/assets/fonts/PlayfairDisplay-ExtraBold.ttf')
    });

    if (!fontsLoaded) {
        return <Text>Yükleniyor...</Text>;
    }

    return (

        <View
            style={styles.container}>
            <StatusBar
                hidden={true}
            />
            <View style={styles.anasayfadikdortgen}
            />
            <View style={styles.anasayfakutu}
            />
            <View style={styles.solustbeyaz}
            />

            <TouchableOpacity
                style={{ position: 'absolute' }}>
                <Image
                    source={require('hthaftasonu/assets/sagustcubuk.png')}
                    style={styles.sagustcubuk}
                />
            </TouchableOpacity>
            <Image
                source={require('hthaftasonu/assets/solusththaftasonu.png')}
                style={styles.solusthaftasonu}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Haftasonu")}
                style={{ position: 'absolute' }}>
                <Image
                    source={require('hthaftasonu/assets/anasayfasiyahok.png')}
                    style={styles.anasayfasiyahok}
                />
            </TouchableOpacity>
            <Image
                source={require('hthaftasonu/assets/haftasonuanasayfa.png')}
                style={styles.htanasayfayazi}
            />
            <ImageBackground
                source={require('hthaftasonu/assets/arkaplanhalka.png')}
                style={styles.backgroundImage}
            />
            <Text
                style={styles.copyright}>Copyright © 2020 - Tüm hakları saklıdır. Habertürk Gazetecilik
                A.Ş.</Text>
            <TouchableOpacity
                style={{ position: 'absolute' }} onPress={() => navigation.navigate("Haftasonu")}>
                <Text
                    style={styles.goruntule}>görüntüle</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF8EA',
        flex: 1,
    },
    backgroundImage: {
        top: windowHeight * 0.2,
        left: -windowWidth * 0.175,
        width: windowWidth * 1.35,
        height: windowWidth * 1.35,
        zIndex: -2,
        position:"absolute"
    },
    goruntule: {
        position: "absolute",
        top: windowHeight * 0.63,
        left: windowWidth * 0.22,
        width: windowWidth * 0.3,
        height: windowHeight * 0.06,
        fontSize: windowWidth * 0.051,
        color: '#000000',
        fontFamily: 'playfairdisplay-bold',
        opacity: 1,
        zIndex: 2
    },
    htanasayfayazi: {
        resizeMode: "contain",
        top: windowHeight * 0.250,
        left: windowWidth * 0.13,
        width: windowWidth * 0.755,
        height: windowHeight * 0.185,
    },
    anasayfadikdortgen: {
        position: "absolute",
        top: windowHeight * 0.617,
        left: windowWidth * 0.15,
        width: windowWidth * 0.37,
        height: windowHeight * 0.066,
        borderWidth: 2,
        borderColor: '#E9D29E',
        borderRadius: 95,
        overflow: "hidden",
        zIndex: -1
    },
    anasayfasiyahok: {
        position: 'absolute',
        top: windowHeight * 0.641,
        left: windowWidth * 0.450,
        width: windowWidth * 0.35,
        height: windowHeight * 0.015,
        aspectRatio:1,
        resizeMode:"contain"
    },
    solusthaftasonu: {
        resizeMode:"contain",
        top: windowHeight * -0.07,
        left: windowWidth * -0.11,
        height: windowHeight * 0.040,
        width: windowWidth * 0.5


    },
    solustbeyaz: {
        borderColor:'white',
        borderWidth:2,
        borderBottomEndRadius:95,
        borderBottomStartRadius: 70,
        height: "10%",
        width:"30%",
        backgroundColor:'white',
        justifyContent:'center',
        alignItems: 'center'

    },
    anasayfakutu: {
        position: 'absolute',
        top: windowHeight * 0.617,
        left: windowWidth * 0.56,
        width: windowWidth * 0.13,
        height: windowHeight * 0.065,
        backgroundColor: '#FFF8EA',
        borderRadius: 75,
        borderWidth:2,
        borderColor:'#E9D29E',


    },
    sagustcubuk: {
        position: 'absolute',
        top: windowHeight * 0.040,
        width: windowWidth * 0.1,
        height: windowHeight * 0.02,
        resizeMode:"contain",
        left: windowWidth * 0.85
    },
    copyright: {
        position: 'absolute',
        bottom: windowHeight * 0.02,
        alignSelf: 'center',
        fontSize: 10,
        fontFamily: 'poppins-regular',
        color: '#7D7D7D',
    },
});

export default GirisEkrani;