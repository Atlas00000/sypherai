import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const DOTS = 3;
const DOT_SIZE = 8;
const DOT_SPACING = 6;

const TypingIndicator: React.FC = () => {
  // Each dot has its own animated value
  const scales = Array.from({ length: DOTS }, () => useSharedValue(1));

  React.useEffect(() => {
    scales.forEach((scale, i) => {
      scale.value = withRepeat(
        withTiming(1.5, { duration: 400, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      {scales.map((scale, i) => {
        const animatedStyle = useAnimatedStyle(() => ({
          transform: [{ scale: scale.value }],
        }));
        return <Animated.View key={i} style={[styles.dot, animatedStyle]} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 4,
    paddingLeft: 8,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: '#a18fff',
    marginRight: DOT_SPACING,
  },
});

export default TypingIndicator; 