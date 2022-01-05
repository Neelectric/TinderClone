import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './src/components/Tinder Card';
import users from './TinderAssets/assets/data/users'

const jeff = {
    name: 'Jefff',
    bio: ' Im Jeff',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
}
const App = () => {
    return (
        <View style={styles.pageContainer}>
            <Card user={users[0]}/>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export default App;