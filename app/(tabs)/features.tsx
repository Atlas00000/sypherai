import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const features = [
  { icon: <Ionicons name="create-outline" size={28} color="#a18fff" />, title: 'Content Writing', desc: 'Generate articles, emails, and more.' },
  { icon: <MaterialIcons name="analytics" size={28} color="#f3a6ff" />, title: 'Data Analysis', desc: 'Analyze and visualize your data.' },
  { icon: <Ionicons name="image-outline" size={28} color="#8e6fff" />, title: 'Image Editing', desc: 'Edit and enhance images with AI.' },
  { icon: <Ionicons name="code-slash-outline" size={28} color="#a18fff" />, title: 'Code Generation', desc: 'Write and refactor code instantly.' },
];

const FeaturesScreen: React.FC = () => {
  return (
    <LinearGradient
      colors={['#1a1446', '#3a1e6e', '#8e6fff', '#f3a6ff']}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeIn.duration(700)} style={styles.card}>
          <Text style={styles.title}>Capabilities & Features</Text>
          {features.map((f, i) => (
            <View key={i} style={styles.featureRow}>
              <View style={styles.iconWrap}>{f.icon}</View>
              <View style={{ flex: 1 }}>
                <Text style={styles.featureTitle}>{f.title}</Text>
                <Text style={styles.featureDesc}>{f.desc}</Text>
              </View>
            </View>
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
  featureRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 18 },
  iconWrap: { marginRight: 16, backgroundColor: '#251c4a', borderRadius: 12, padding: 8 },
  featureTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  featureDesc: { color: '#a18fff', fontSize: 14, marginTop: 2 },
});

export default FeaturesScreen; 