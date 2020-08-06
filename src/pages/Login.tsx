import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  sequence,
} from 'react-native-reanimated';
import {View, StyleSheet, StatusBar} from 'react-native';
import heroImg from '../../src/assets/hero.png';

const Login: React.FC = () => {
  const titlePosition = useSharedValue(30);
  const imagePosition = useSharedValue(-30);

  useEffect(() => {
    imagePosition.value = withTiming(
      0,
      {
        duration: 500,
      },
      () => {
        titlePosition.value = sequence(
          withTiming(0, {
            duration: 1000,
            easing: Easing.bounce,
          }),
          withTiming(-300, {
            duration: 500,
            easing: Easing.bounce,
          }),
        );
      },
    );
  }, []);

  const heroStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: imagePosition.value}],
    };
  });

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: titlePosition.value}],
      opacity: interpolate(
        titlePosition.value,
        [30, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />

      <Animated.Image style={[styles.hero, heroStyle]} source={heroImg} />
      <Animated.Text style={[styles.title, titleStyle]}>Welcome</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13131a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: {
    width: 288,
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
  },
});

export default Login;
