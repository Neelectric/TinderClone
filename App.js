import React from 'react';
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';
const App = () => {
    return (
        <View style={styles.pageContainer}>
            <View style={styles.card}>
                    <ImageBackground
                    source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'
                    }} 
                    style={styles.image}>
                    <View style={styles.cardInner}>
                        <Text style={styles.name}>Elon Musk</Text>
                        <Text style={styles.bio}>Dude with rocket looking for girl with fuel</Text>    
                    </View>
                    </ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    card: {
        width: '95%',
        height: '70%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 13.97,

        elevation: 15,
    },
    image: {
        width: '100%',
        height: '100%',        
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'flex-end',
    },
    cardInner: {
        padding:10,
    },
    name: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    bio: {
        fontSize: 18,
        color: 'white',
        lineHeight: 25,
    },

});

export default App;