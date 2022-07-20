import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, StyleSheet, Pressable, Text, SafeAreaView} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';

const App = () => {
    const [activeScreen, setActiveScreen] = useState('HOME');

    const color = '#b5b5b5';
    const activeColor = '#F76C6B'
    const topIconSize = 30;

  return (
    <SafeAreaView style = {styles.root}>
        <View style={styles.pageContainer}>
            <View style={styles.topNavigation}>
                <Pressable onPress={() => setActiveScreen('HOME')}>
                    <Fontisto name="tinder" size={topIconSize} color={activeScreen == 'HOME' ? activeColor : color} />
                </Pressable>
                <MaterialCommunityIcons name="star-four-points" size={topIconSize} color={color} />
                <Pressable onPress={() => setActiveScreen('CHAT')}>
                    <Ionicons name="ios-chatbubbles" size={topIconSize} color={activeScreen == 'CHAT' ? activeColor : color} />
                </Pressable>
                <FontAwesome name="user" size={topIconSize} color={color} />       
            </View>
            <HomeScreen />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,

    },
    topNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 10,
    },
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default App;