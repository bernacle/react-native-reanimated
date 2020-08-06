import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

// import { Container } from './styles';

const Scroll: React.FC = () => {
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event: any) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 180],
        [300, 120],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <View>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{paddingTop: 300}}>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
        <Text style={styles.listItem}>Item from List</Text>
      </Animated.ScrollView>
      <Animated.View style={[styles.header, headerStyle]}>
        <Image
          source={{
            uri: 'https://github.com/bernacle.png',
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Bruno Simplicio</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 300,
    backgroundColor: '#6c63ff',
    paddingVertical: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    right: 0,
    top: 0,
  },
  avatar: {
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#fff',
  },
  listItem: {
    padding: 20,
    fontSize: 18,
  },
});

export default Scroll;
