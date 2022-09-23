import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/TinderCard';
import users from '../../TinderAssets/assets/data/users';


import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import AnimatedStack from '../components/AnimatedStack';
import { reduce } from 'core-js/core/array';

const HomeScreen = () => {
  const onSwipeLeft = user => {
    console.warn('swipe left', user.name);
  };

  const onSwipeRight = user => {
    console.warn('swipe right: ', user.name);
  };

  const botIconSize = 30;

  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        data={users}
        renderItem={({ item }) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
      <View style={styles.icons}>
        <View style={styles.button}>
          <FontAwesome name="undo" size={botIconSize} color="#FBD88B" />
        </View>
        <View style={styles.button}>
          <Entypo name="cross" size={botIconSize} color="#F76C6B" />
        </View>
        <View style={styles.button}>
          <FontAwesome name="star" size={botIconSize} color="#3AB4CC" />
        </View>
        <View style={styles.button}>
          <FontAwesome name="heart" size={botIconSize} color="#4FCC94" />
        </View>
        <View style={styles.button}>
          <Ionicons name="flash" size={botIconSize} color="#A65CD2" />
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#ededed',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
  button: {
    width: 50,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  }

});

export default HomeScreen;