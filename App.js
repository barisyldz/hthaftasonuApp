import React from 'react';
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GirisEkrani from "./src/screens/GirisEkrani";
import ListEkrani from "./src/screens/ListEkrani";




const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                      initialRouteName={"Home"}
                      screenOptions={{headerShown: false}}>
                     <Stack.Screen name={"Home"} component={GirisEkrani}/>
                     <Stack.Screen name={"Haftasonu"} component={ListEkrani}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App;