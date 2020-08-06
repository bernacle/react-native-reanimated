import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {View, StyleSheet, StatusBar} from 'react-native';

const App: React.FC = () => {
  const titlePosition = useSharedValue(30);

  useEffect(() => {
    titlePosition.value = withTiming(0, {
      duration: 1000,
      easing: Easing.bounce,
    });
  }, []);

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
      <Animated.Text style={[styles.title, titleStyle]}>
        Example Text
      </Animated.Text>
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
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
  },
});

export default App;
