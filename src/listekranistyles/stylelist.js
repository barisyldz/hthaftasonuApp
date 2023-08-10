import React from "react";
import {Dimensions, StyleSheet, Text,} from "react-native";
import { useFonts } from 'expo-font';



    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;



export const stylelist = StyleSheet.create({

    liste: {
        flex: 1,
        backgroundColor: "white",
        height: windowHeight,
        width: windowWidth / 1.25,
        marginBottom: 55,
        marginLeft: 25,
        marginRight: 15,
        zIndex: 1,

    },
    ayrac: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 1,
        top: -4


    },
    listeId: {
        justifyContent: "center",
        top: windowHeight / 1.66,
        position: "absolute",
        right: windowWidth / 3,
        zIndex: 0,


    },
    cubuk: {
        borderWidth: 1,
        width: windowWidth / 7,
        top: '50%',
        right: -50,
        position: "absolute",
        borderColor: "#E9D29E",

    },
    baslik: {
        fontSize: 15,
        textAlign: "center",
        marginTop: 10,
        fontFamily: 'poppins-regular'
    },
    baslikaciklama: {
        fontSize: 22,
        textAlign: "center",
        marginVertical: 5,
        marginHorizontal: windowWidth / 18,
        fontWeight: "500",
        height: "14%",
        fontFamily: 'playfairdisplay-bold'
    },
    mainDescription: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "300",
        marginHorizontal: windowWidth / 20,
        height: windowHeight / 6,
        fontFamily: 'poppins-regular'
    },
    tarih: {
        fontSize: 14,
        textAlign: "center",
        fontWeight: "300",
        marginBottom: 10,
        fontFamily: 'poppins-regular'
    },
    showButton: {
        width: windowWidth / 2,
        height: windowHeight / 18,
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: "black",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: 'white',
        top: 15
    },
    shadowShowButton: {
        width: windowWidth / 2,
        height: windowHeight / 18,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "white",
        justifyContent: "center",
        alignSelf: "center",
    },
    headImage: {
        width: "80%",
        height: windowHeight / 5.4,
        justifyContent: "center",
        alignSelf: "center",

    },
    butonyazisi: {
        fontSize: 19,
        textAlign: "center",
        fontWeight: "400",
        fontFamily: 'poppins-regular',
        top: 1
    },
    video: {
        width: windowWidth / 10,
        height: windowHeight / 20,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center"
    },
    videoView: {
        height: windowHeight / 2.65,
        justifyContent: 'flex-end',
        width: "100%",
        alignItems: "center",
        position: "absolute"
    },
    advert: {
        width: "90%",
        height: "40%",


    }
})
const font = () => {
    const [loaded] = useFonts({
        'poppins-regular': require('hthaftasonu/assets/fonts/Poppins-Regular.ttf'),
        'playfairdisplay-bold': require('hthaftasonu/assets/fonts/PlayfairDisplay-Regular.ttf'),
        'poppins-medium': require('hthaftasonu/assets/fonts/Poppins-Medium.ttf'),
        'playfairdisplay-medium': require('hthaftasonu/assets/fonts/PlayfairDisplay-Medium.ttf'),
        'playfairdisplay-extrabold': require('hthaftasonu/assets/fonts/PlayfairDisplay-ExtraBold.ttf')
    });

    if (!loaded) {
        return null;
    }

    return (
        <Text style={style.text}>başarılı</Text>

    );
};

export default font;


