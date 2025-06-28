import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const Header: React.FC = () => {
  // Pulse animation for profile icon
  const pulse = useSharedValue(1);
  React.useEffect(() => {
    pulse.value = withRepeat(withTiming(1.15, { duration: 900 }), -1, true);
  }, []);
  const animatedProfile = useAnimatedStyle(() => ({
    transform: [{ scale: pulse.value }],
    shadowColor: '#a18fff',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  }));

  return (
    <Animated.View entering={FadeInDown.duration(700)} style={styles.header}>
      <View style={styles.left}>
        <Image source={require('../assets/images/icon.png')} style={styles.logo} />
        <Text style={styles.title}>SypherAI</Text>
      </View>
      <TouchableOpacity style={styles.profileBtn}>
        <Animated.View style={[styles.profileIcon, animatedProfile]} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 16,
    backgroundColor: 'transparent',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  profileBtn: {
    padding: 6,
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3a2e7b',
    borderWidth: 2,
    borderColor: '#a18fff',
  },
});

export default Header; 