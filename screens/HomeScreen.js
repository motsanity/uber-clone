import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';


export default function HomeScreen() {
    return (
        <SafeAreaView style={[tw`bg-white h-full`]}>
            <View>
                <Image
                    style={[tw `mx-auto`,
                    {
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                    }]}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />
                <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

//make styles

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'red',
        fontFamily: 'Arial',
    },
});