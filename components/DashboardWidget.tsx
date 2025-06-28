import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';

const AnimatedText = Animated.createAnimatedComponent(Text);

const AnimatedStat: React.FC<{ value: number; label: string; color?: string }> = ({ value, label, color }) => {
  const animated = useSharedValue(0);
  React.useEffect(() => {
    animated.value = withTiming(value, { duration: 900 });
  }, [value]);
  const animatedProps = useAnimatedProps(() => ({
    text: `${Math.round(animated.value)}`,
  }));
  return (
    <View style={styles.statBox}>
      <AnimatedText style={[styles.statValue, color ? { color } : {}]} animatedProps={animatedProps} />
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
};

const DashboardWidget: React.FC = () => {
  return (
    <Animated.View entering={FadeIn.duration(700)} style={styles.cardWrap}>
      <BlurView intensity={40} tint="dark" style={styles.card}>
        <Text style={styles.title}>Quick Stats</Text>
        <View style={styles.statsRow}>
          <AnimatedStat value={12} label="Chats" color="#a18fff" />
          <AnimatedStat value={4} label="Tips Used" color="#f3a6ff" />
          <AnimatedStat value={99} label="Uptime" color="#8e6fff" />
        </View>
        <Text style={styles.tip}>💡 Tip: Long-press a message to copy it!</Text>
        <TouchableOpacity style={styles.shortcutBtn}>
          <Ionicons name="flash" size={18} color="#fff" />
          <Text style={styles.shortcutText}>Quick Action</Text>
        </TouchableOpacity>
      </BlurView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardWrap: {
    margin: 16,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 10,
    borderWidth: 1.5,
    borderColor: 'rgba(161,143,255,0.18)',
    overflow: 'hidden',
  },
  card: {
    backgroundColor: 'rgba(42, 30, 80, 0.7)',
    borderRadius: 20,
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    color: '#a18fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.7,
  },
  tip: {
    color: '#f3a6ff',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 12,
  },
  shortcutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#8e6fff',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginTop: 4,
  },
  shortcutText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 6,
    fontSize: 15,
  },
});

export default DashboardWidget; 