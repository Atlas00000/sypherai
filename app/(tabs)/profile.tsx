import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const ProfileScreen: React.FC = () => {
  const scrollY = useSharedValue(0);
  // For parallax/fade on avatar/name
  const avatarStyle = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [0, 80], [1, 0.93]);
    const opacity = interpolate(scrollY.value, [0, 80], [1, 0.7]);
    return { transform: [{ scale }], opacity };
  });
  const helpScale = useSharedValue(1);
  const helpAnimated = useAnimatedStyle(() => ({
    transform: [{ scale: helpScale.value }],
  }));
  return (
    <View style={{ flex: 1 }}>
      <AnimatedLinearGradient
        colors={['#1a1446', '#3a1e6e', '#8e6fff', '#f3a6ff']}
        start={[0, 0]}
        end={[1, 1]}
        style={StyleSheet.absoluteFill}
      />
      <Animated.View entering={FadeIn.duration(700)} style={styles.card}>
        <Animated.View style={[styles.avatarWrap, avatarStyle]}>
          <Image source={require('../../assets/images/icon.png')} style={styles.avatar} />
          <Text style={styles.name}>Your Name</Text>
        </Animated.View>
        <Animated.View entering={FadeIn.delay(100).duration(600)} style={styles.row}>
          <Text style={styles.label}>Dark Theme</Text>
          <Switch value={true} onValueChange={() => {}} thumbColor="#a18fff" trackColor={{ true: '#3a1e6e', false: '#ccc' }} />
        </Animated.View>
        <Animated.View entering={FadeIn.delay(200).duration(600)} style={styles.row}>
          <Text style={styles.label}>Language</Text>
          <TouchableOpacity style={styles.langBtn}><Text style={styles.langText}>EN</Text></TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeIn.delay(300).duration(600)}>
          <TouchableOpacity
            style={styles.helpBtn}
            activeOpacity={0.8}
            onPressIn={() => (helpScale.value = withSpring(1.13))}
            onPressOut={() => (helpScale.value = withSpring(1))}
          >
            <Animated.View style={helpAnimated}>
              <Text style={styles.helpText}>Help & Support</Text>
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  card: {
    margin: 24,
    marginTop: 60,
    backgroundColor: 'rgba(42, 30, 80, 0.85)',
    borderRadius: 24,
    padding: 28,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 10,
    alignItems: 'center',
  },
  avatarWrap: { alignItems: 'center', marginBottom: 18 },
  avatar: { width: 64, height: 64, borderRadius: 32, marginBottom: 8 },
  name: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginVertical: 10 },
  label: { color: '#fff', fontSize: 16 },
  langBtn: { backgroundColor: '#8e6fff', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 4 },
  langText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  helpBtn: { marginTop: 24, backgroundColor: '#f3a6ff', borderRadius: 16, paddingVertical: 10, paddingHorizontal: 24 },
  helpText: { color: '#1a1446', fontWeight: 'bold', fontSize: 16 },
});

export default ProfileScreen; 