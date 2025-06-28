import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Animated as RNAnimated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const history = [
  { id: '1', title: 'React Animations', time: 'Today, 2:34 PM' },
  { id: '2', title: 'AI Image Editing', time: 'Yesterday, 5:12 PM' },
  { id: '3', title: 'Data Analysis', time: 'Mon, 10:01 AM' },
];

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const HistoryScreen: React.FC = () => {
  const scrollY = useSharedValue(0);
  const onScroll = RNAnimated.event(
    [{ nativeEvent: { contentOffset: { y: (y: number) => (scrollY.value = y) } } }],
    { useNativeDriver: true }
  );

  const titleStyle = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [0, 80], [1, 0.93]);
    const opacity = interpolate(scrollY.value, [0, 80], [1, 0.7]);
    return { transform: [{ scale }], opacity };
  });

  return (
    <View style={{ flex: 1 }}>
      <AnimatedLinearGradient
        colors={['#1a1446', '#3a1e6e', '#8e6fff', '#f3a6ff']}
        start={[0, 0]}
        end={[1, 1]}
        style={StyleSheet.absoluteFill}
      />
      <RNAnimated.ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={onScroll}
      >
        <Animated.View entering={FadeIn.duration(700)} style={styles.card}>
          <Animated.Text style={[styles.title, titleStyle]}>History & Archive</Animated.Text>
          {history.map((h, i) => (
            <HistoryRow key={h.id} h={h} index={i} />
          ))}
        </Animated.View>
      </RNAnimated.ScrollView>
    </View>
  );
};

const HistoryRow: React.FC<{ h: any; index: number }> = ({ h, index }) => {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  return (
    <Animated.View entering={FadeIn.delay(index * 120).duration(600)} style={styles.historyRow}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPressIn={() => (scale.value = withSpring(1.13))}
        onPressOut={() => (scale.value = withSpring(1))}
      >
        <Animated.View style={animatedStyle}>
          <Ionicons name="chatbubble-ellipses-outline" size={22} color="#a18fff" style={{ marginRight: 12 }} />
        </Animated.View>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={styles.historyTitle}>{h.title}</Text>
        <Text style={styles.historyTime}>{h.time}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#fff" />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  scrollContent: { flexGrow: 1, justifyContent: 'center' },
  card: {
    margin: 24,
    backgroundColor: 'rgba(42, 30, 80, 0.85)',
    borderRadius: 24,
    padding: 28,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 10,
  },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 18, alignSelf: 'center' },
  historyRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 18, backgroundColor: '#251c4a', borderRadius: 14, padding: 12 },
  historyTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  historyTime: { color: '#a18fff', fontSize: 13, marginTop: 2 },
});

export default HistoryScreen; 