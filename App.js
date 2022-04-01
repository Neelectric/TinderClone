import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './src/components/TinderCard';
import users from './TinderAssets/assets/data/users'
import AnimatedStack from './src/components/AnimatedStack';


const App = () => {

    const onSwipeLeft = (user) => {
        console.warn("swipe left", user.name)
    };
    
    const onSwipeRight = (user) => {
        console.warn("swipe right", user.name)
    };


    return (
        <View style={styles.pageContainer}>
            <AnimatedStack
                data={users}
                renderItem={(({ item}) => <Card user ={item} />)}
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
            />
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