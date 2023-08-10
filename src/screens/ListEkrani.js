import {Text, View, ImageBackground, SafeAreaView, Image, TouchableOpacity, Dimensions} from "react-native";
import  React from "react";
import Htliste from "hthaftasonu/src/liste/Htliste";
import { useFonts } from 'expo-font';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ListEkrani({navigation}) {
    const [fontsLoaded] = useFonts({
        'poppins-regular': require('hthaftasonu/assets/fonts/Poppins-Regular.ttf'),
        'playfairdisplay-bold': require('hthaftasonu/assets/fonts/PlayfairDisplay-Bold.ttf'),
        'poppins-medium': require('hthaftasonu/assets/fonts/Poppins-Medium.ttf'),
        'playfairdisplay-extrabold': require('hthaftasonu/assets/fonts/PlayfairDisplay-ExtraBold.ttf')

    });
    if (!fontsLoaded) {
        return <Text>Yükleniyor...</Text>;
    }
    return (

        <SafeAreaView
            style={{
                backgroundColor:"#FFF8EA" ,
                flex: 1,
            }}>
            <ImageBackground
                source={require("hthaftasonu/assets/arkaplanhalka.png")}
                resizeMode="cover"
                style={{
                    top: windowHeight * 0.20,
                    left: -windowWidth * 0.175,
                    width: windowWidth * 1.35,
                    height: windowWidth * 1.35,
                    flex:1

                }}>


                <View
                    style={{
                        justifyContent:'space-between',
                        flexDirection:'row',
                        width:135,
                        }}>


                    <TouchableOpacity onPress={()=> navigation.goBack()}
                                      style={{
                                          borderColor:'white',
                                          borderWidth:2,
                                          borderBottomEndRadius:100,
                                          borderBottomStartRadius: 45,
                                          width:windowWidth * 0.3,
                                          height:windowHeight * 0.1,
                                          backgroundColor:'white',
                                          justifyContent:'center',
                                          alignItems: 'center',
                                          top:windowHeight * -0.20,
                                          left:windowWidth * 0.15 }}>
                        <Image
                        source={require("hthaftasonu/assets/haftasonusiyah.png")}
                        resizeMode={"contain"}
                        style={{
                            width: windowWidth * 0.15,
                            height: windowHeight * 0.5 ,
                            top:windowHeight * -0.005,
                            left:windowWidth * 0.008}}></Image>
                    </TouchableOpacity>
                    <View
                        style={{
                            left:windowWidth * 0.75,
                            top:windowHeight * -0.16,
                            width:windowWidth * 0.15,
                            height:windowHeight * 0.15
                             }}>
                        <Image
                        source={require("hthaftasonu/assets/sagustcubuk.png")}></Image>
                    </View>
                </View>

                <View
                    style={{
                        flex:1,
                        justifyContent:"center",
                        top:windowHeight * -0.12,
                        left:windowWidth * 0.15,
                        width:windowWidth * 1.01,
                        height:windowHeight * -0.9
                        }}>
                    <Htliste navigation={navigation}></Htliste>
                </View>

                <Text
                    style={{
                        bottom: windowHeight * 0.22,
                        alignSelf: 'center',
                        fontSize: 10,
                        color: '#333333',
                        fontFamily:'poppins-regular'}}>Copyright © 2020 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.
                </Text>

            </ImageBackground>

        </SafeAreaView>
    );
}


export default ListEkrani;