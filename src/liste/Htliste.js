import { Text, View, ImageBackground, Image, FlatList, Dimensions, TouchableOpacity } from "react-native";
import data from "../data/databases.json";
import { stylelist } from "hthaftasonu/src/listekranistyles/stylelist";
import { imageMapping } from "../imagesdata/resimlerdata";
import React, { useEffect, useState } from "react";
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from "expo-font";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Htliste({navigation}) {

    const [JsonData, setJsonData] = useState(null);

    useEffect(() => {
        setJsonData(data.body.items);
    }, []);

    const [fontsLoaded] = useFonts({
        'poppins-regular': require('hthaftasonu/assets/fonts/Poppins-Regular.ttf'),
        'playfairdisplay-bold': require('hthaftasonu/assets/fonts/PlayfairDisplay-Bold.ttf'),
        'playfairdisplay-regular': require('hthaftasonu/assets/fonts/PlayfairDisplay-Regular.ttf'),
        'poppins-medium': require('hthaftasonu/assets/fonts/Poppins-Medium.ttf'),
        'playfairdisplay-medium': require('hthaftasonu/assets/fonts/PlayfairDisplay-Medium.ttf'),
        'playfairdisplay-extrabold': require('hthaftasonu/assets/fonts/PlayfairDisplay-ExtraBold.ttf')
    });

    if (!fontsLoaded) {
        return <Text>Yükleniyor...</Text>;
    }

    const Item = ({item}) => {
        let header = null;
          let cover = null;
            let firstadImage = null;
              let secondadImage = null;

        const formattedId = item.id < 10 ? `0${item.id}` : `${item.id}`;

        if (imageMapping.hasOwnProperty(item.headerImage)) {
            header = imageMapping[item.headerImage]
        }
        if (imageMapping.hasOwnProperty(item.coverImage)) {
            cover = imageMapping[item.coverImage]
        }
        if (imageMapping.hasOwnProperty(item.adImages.firstAdImage)) {
            firstadImage = imageMapping[item.adImages.firstAdImage]
        }
        if (imageMapping.hasOwnProperty(item.adImages.secondAdImage)) {
            secondadImage = imageMapping[item.adImages.secondAdImage]
        }

        return(
            <View
                style={{
                    flex:1,
                    height:windowHeight/1.35}}>
                <View
                    style={stylelist.liste}>

                    <View
                        style={stylelist.cubuk}/>
                    {
                        item.type === "news" && cover === null &&
                        <View
                            style={{
                                flex:1,
                                justifyContent:"center"}}>
                            {
                                header != null && <Image source={header}
                                style={stylelist.headImage}
                                resizeMode={"cover"}/>
                            }
                            <Text
                                style=  {stylelist.baslik}>{item.lineOptions.title}</Text>
                            <View
                                style = {[stylelist.ayrac,
                                         {marginHorizontal: windowWidth/3.4}]}/>
                            <Text
                                style = {stylelist.baslikaciklama}>{item.lineOptions.desc}</Text>
                            <View
                                style = {[stylelist.ayrac,
                                         {marginHorizontal: windowWidth/4.3}]}/>
                            <Text
                                style ={stylelist.mainDescription}>{item.desc}</Text>
                            <Text
                                style ={stylelist.tarih}>{item.dateTime} {item.time}</Text>
                            <TouchableOpacity onPress={() => {navigation.navigate("Detail", item.id);
                            }}
                                style ={stylelist.showButton}>
                                <Text
                                style ={stylelist.butonyazisi}>{item.buttonTitle}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    {
                        item.type === "news" && cover != null &&
                        <View
                            style ={{
                                flex:1,
                                justifyContent:"center"}}>
                            <ImageBackground
                                source={cover}
                                style={{flex:1}}>
                                <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.6)']}
                                style ={{
                                    width: "100%",
                                    height:"100%",
                                    top: 0,
                                    position: "absolute"}}/>
                                {
                                    item.videoButton === true &&
                                    <View
                                        style ={stylelist.videoView}>
                                        <TouchableOpacity onPress={() => {}}
                                           style={stylelist.video}>
                                            <Image
                                               source={require("hthaftasonu/assets/videobeyaz.png")}
                                               resizeMode={"center"}></Image>
                                        </TouchableOpacity>
                                    </View>
                                }
                                <View
                                    style ={{flex:1,
                                            justifyContent:"flex-end",
                                            marginBottom: "10%"}}>
                                    <Text
                                        style ={[stylelist.baslik,
                                              {color: "white"}]}>{item.lineOptions.title}</Text>
                                    <View
                                        style = {[stylelist.ayrac,
                                                 {marginHorizontal: windowWidth/3.4,
                                                  borderColor: "white"}]}/>
                                    <Text
                                        style ={[stylelist.baslikaciklama,
                                               {color: "white"}]}>{item.lineOptions.desc}</Text>

                                    <TouchableOpacity onPress={() => {navigation.navigate("Detail", item.id);
                                    }}
                                      style ={stylelist.shadowShowButton}>
                                        <Text
                                            style={[stylelist.butonyazisi,
                                                  {color: "white"}]}>{item.buttonTitle}</Text>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </View>
                    }
                    {
                        item.type === "ads" && cover != null &&
                        <ImageBackground
                            source={cover}
                            style ={{
                                flex:1,
                                marginHorizontal:10}}/>
                    }
                    {
                        item.type === "ads" && cover === null &&
                        <View
                            style ={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center"}}>
                            <Image
                            source={firstadImage}
                            resizeMode={"contain"}
                            style ={stylelist.advert}></Image>
                            <Text
                            style ={{
                                fontSize: 16,
                                marginVertical: 10}}>{item.lineOptions.title}</Text>
                            <Image
                            source={secondadImage}
                            resizeMode={"contain"}
                            style ={stylelist.advert}></Image>
                        </View>
                    }
                </View>
                <View
                    style={stylelist.listeId}>
                    <Text
                      style={{
                          textAlign:'center',
                          fontSize:74,
                          fontFamily:'playfairdisplay-medium',
                          }}>{formattedId}</Text>
                </View>
            </View>
        )
    };
    return (
        <View
            style={{
                flex: 1}}>

            <View
                style={{
                 flex:1}}>
                <FlatList
                    data={JsonData}
                    renderItem={Item}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={item => item.id}>
                </FlatList>
            </View>

        </View>
    );

}
export default Htliste;