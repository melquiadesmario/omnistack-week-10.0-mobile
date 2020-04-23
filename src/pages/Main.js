import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'

const Main = () => {
    const [currentRegion, setCurrentRegion] = useState(null)

    useEffect(() => {
        async function loadInitialPosition(){
            const { granted } = await requestPermissionsAsync()

            if(granted){
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                })

                const { latitude, longitude } = coords

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                })
            }
        }
        loadInitialPosition()
    }, [])

    if(!currentRegion) null

    return(
        <MapView initialRegion={ currentRegion } style={ styles.map }>
            <Marker coordinate={{ latitude: -8.325353, longitude: -36.1436768 }}>
                <Image style={ styles.avatar } source={{ uri: 'https://avatars2.githubusercontent.com/u/24658474?s=460&u=3431e2a69457286717db18bbb6083ea3956337fa&v=4' }} />
                <Callout>
                    <View style={ styles.callout }>
                        <Text style={ styles.devName }>Melquíades Mário</Text>
                        <Text style={ styles.devBio }>Developer and enthusiast of javascript technologies, such as Node.js, React JS, React Native and MongoDB.</Text>
                        <Text style={ styles.devTechs }>ReactJS, Node.js, React Native, MongoDB</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#FFF'
    },

    callout: {
        width: 260
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16
    },

    devBio: {
        color: '#666',
        marginTop: 5
    },

    devTechs: {
        marginTop: 5
    }
})

export default Main
