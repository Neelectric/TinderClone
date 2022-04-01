import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Pressable, useWindowDimensions} from 'react-native';
import Card from './src/components/Tinder Card';
import users from './TinderAssets/assets/data/users'
import Animated, { 
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    useDerivedValue,
    interpolate,
    withSpring,
    runOnJS,
    }from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Like from './TinderAssets/assets/images/LIKE.png'
import Nope from './TinderAssets/assets/images/nope.png'



const jeff = {
    name: 'Jefff',
    bio: ' Im Jeff',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
}

const ROTATION = 45;
const SWIPE_VELOCITY = 800;

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(currentIndex +1);

    const currentProfile = users[currentIndex];
    const nextProfile = users[nextIndex];

    const {width: screenWidth} = useWindowDimensions();

    const hiddenTranslateX = 2* screenWidth;

    const translateX = useSharedValue(0);
    const rotate = useDerivedValue(() => interpolate(translateX.value, [0, hiddenTranslateX], [0,ROTATION]) + 'deg',);

    const cardStyle = useAnimatedStyle (() => ({
        transform: [
            {translateX: translateX.value,},
        {rotate: rotate.value,}
    ],
    }));

    const nextCardStyle = useAnimatedStyle (() => ({
        transform: [
            {
                scale: interpolate(
                    translateX.value,
                     [-hiddenTranslateX, 0, hiddenTranslateX],
                      [1, 0.92, 1],
                      ),
            }
            ],
            opacity: interpolate(
                translateX.value,
                 [-hiddenTranslateX, 0, hiddenTranslateX],
                  [1, 0.75, 1],
                  ),                
            }
        )
    );

    const likeStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            translateX.value,
             [0, hiddenTranslateX/5],
             [0, 1],
        ),
    }));


    const nopeStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            translateX.value,
             [0, -hiddenTranslateX/5],
             [0, 1],
        ),
    }))

    

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.startX = translateX.value;
        },
        onActive: (event, context) => {
            translateX.value = context.startX + event.translationX;
        },
        onEnd: (event) => {
            if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
                translateX.value = withSpring(0);
                return;
        }
        translateX.value = withSpring(
            event.velocityX * Math.sign(event.velocityX),
            {},
            () => runOnJS(setCurrentIndex)(currentIndex +1)
        );

        }
    });

    useEffect(() => {
        translateX.value = 0;
        setNextIndex(currentIndex +1);
    }, [currentIndex, translateX]);

    return (
        <View style={styles.pageContainer}>
            {nextProfile && (
            <View style={styles.nextCardContainer}>
                <Animated.View style={[ styles.animatedCard, nextCardStyle]}>
                    <Card user={nextProfile} />
                </Animated.View>
            </View>
            )}
            
            {currentProfile && (
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[ styles.animatedCard, cardStyle]}> 
                    <Animated.Image 
                    source={Like} 
                    style={[styles.like, {left: 10}, likeStyle]} 
                    resizeMode="contain" 
                    />
                    <Animated.Image 
                    source={Nope} 
                    style={[styles.like, {right: 10}, nopeStyle ]}
                    resizeMode="contain" />
                    <Card user={currentProfile}/>
                </Animated.View>
            </PanGestureHandler> 
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,            
    },
    animatedCard: {
        width: '90%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextCardContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',    
        zIndex: 2,              
    },
    like: {
        width: 150,
        height: 100,
        position: 'absolute',
        zIndex: 1,
    },

});

export default App;