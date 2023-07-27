import React, { Component } from 'react'
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';


const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "OptionScreen",
    },    
]



export default function NavOptions() {
    
    const navigation = useNavigation();

    return (
        <FlatList style={tw`mx-auto`}
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity 
                onPress={() => navigation.navigate(item.screen)}
                style={tw`bg-gray-200 p-10 m-2`}>
                    <View>
                        <Image
                            style={{
                                width: 120,
                                height: 120,
                                resizeMode: "contain",
                            }}  
                            source={{
                                uri: item.image,
                            }}
                        />
                    </View>
                    <Text style={tw`mx-auto font-semibold`}>{item.title}</Text>
                    <Icon style = {tw`p-2 bg-black rounded-full w-10 mt-4 mx-auto`}
                    name='arrowright' type='antdesign' color='white' />
                </TouchableOpacity>
            )}
        />
    )
}
