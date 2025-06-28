import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const history = [
  { id: '1', title: 'React Animations', time: 'Today, 2:34 PM' },
  { id: '2', title: 'AI Image Editing', time: 'Yesterday, 5:12 PM' },
  { id: '3', title: 'Data Analysis', time: 'Mon, 10:01 AM' },
];

const HistoryScreen: React.FC = () => {
  return (
    <LinearGradient
      colors={['#1a1446', '#3a1e6e', '#8e6fff', '#f3a6ff']}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeIn.duration(700)} style={styles.card}>
          <Text style={styles.title}>History & Archive</Text>
          {history.map((h) => (
            <TouchableOpacity key={h.id} style={styles.historyRow}>
              <Ionicons name="chatbubble-ellipses-outline" size={22} color="#a18fff" style={{ marginRight: 12 }} />
              <View style={{ flex: 1 }}>
                <Text style={styles.historyTitle}>{h.title}</Text>
                <Text style={styles.historyTime}>{h.time}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#fff" />
            </TouchableOpacity>
          ))}
        </Animated.View>
      </ScrollView>
    </LinearGradient>
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