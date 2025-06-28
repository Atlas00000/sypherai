import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Animated as RNAnimated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeInDown, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const features = [
  { icon: <Ionicons name="create-outline" size={32} color="#a18fff" />, title: 'Content Writing', desc: 'Generate articles, emails, and more.', badge: 'New' },
  { icon: <MaterialIcons name="analytics" size={32} color="#f3a6ff" />, title: 'Data Analysis', desc: 'Analyze and visualize your data.' },
  { icon: <Ionicons name="image-outline" size={32} color="#8e6fff" />, title: 'Image Editing', desc: 'Edit and enhance images with AI.', badge: 'Beta' },
  { icon: <Ionicons name="code-slash-outline" size={32} color="#a18fff" />, title: 'Code Generation', desc: 'Write and refactor code instantly.' },
];

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const FeaturesScreen: React.FC = () => {
  // For animated gradient background
  const scrollY = useSharedValue(0);
  const onScroll = RNAnimated.event(
    [{ nativeEvent: { contentOffset: { y: (y: number) => (scrollY.value = y) } } }],
    { useNativeDriver: true }
  );

  // Animate gradient colors based on scroll
  const gradientStyle = useAnimatedStyle(() => {
    const shift = interpolate(scrollY.value, [0, 200], [0, 1]);
    return {
      opacity: 1,
      // Could animate other props if desired
    };
  });

  // Parallax/fade for hero
  const heroStyle = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [0, 120], [1, 0.92]);
    const opacity = interpolate(scrollY.value, [0, 120], [1, 0.7]);
    return { transform: [{ scale }], opacity };
  });

  return (
    <View style={{ flex: 1 }}>
      <AnimatedLinearGradient
        colors={['#1a1446', '#3a1e6e', '#8e6fff', '#f3a6ff']}
        start={[0, 0]}
        end={[1, 1]}
        style={[StyleSheet.absoluteFill, gradientStyle]}
      />
      <RNAnimated.ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={onScroll}
      >
        {/* Hero Section */}
        <Animated.View entering={FadeInDown.duration(700)} style={[styles.heroWrap, heroStyle]}>
          <LinearGradient colors={["#a18fff", "#f3a6ff"]} start={[0, 0]} end={[1, 1]} style={styles.heroIconBg}>
            <Ionicons name="sparkles" size={48} color="#fff" style={{ alignSelf: 'center' }} />
          </LinearGradient>
          <Text style={styles.heroTitle}>Explore SypherAI's Capabilities</Text>
          <Text style={styles.heroDesc}>Unlock powerful features to boost your productivity and creativity.</Text>
        </Animated.View>
        {/* Divider */}
        <LinearGradient colors={["#a18fff", "#f3a6ff", "#8e6fff"]} start={[0, 0]} end={[1, 0]} style={styles.divider} />
        {/* Features List */}
        <View style={styles.featuresList}>
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} />
          ))}
        </View>
      </RNAnimated.ScrollView>
    </View>
  );
};

const FeatureCard: React.FC<{ feature: any; index: number }> = ({ feature, index }) => {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    shadowOpacity: scale.value > 1 ? 0.25 : 0.18,
  }));
  return (
    <Animated.View entering={FadeIn.delay(index * 120).duration(600)} style={[styles.cardWrap, animatedStyle]}> 
      <BlurView intensity={40} tint="dark" style={styles.card}>
        <View style={styles.cardHeader}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPressIn={() => (scale.value = withSpring(1.13))}
            onPressOut={() => (scale.value = withSpring(1))}
            style={styles.iconWrap}
          >
            {feature.icon}
          </TouchableOpacity>
          {feature.badge && <View style={styles.badge}><Text style={styles.badgeText}>{feature.badge}</Text></View>}
        </View>
        <Text style={styles.featureTitle}>{feature.title}</Text>
        <Text style={styles.featureDesc}>{feature.desc}</Text>
        <TouchableOpacity
          style={styles.demoBtn}
          activeOpacity={0.8}
          onPressIn={() => (scale.value = withSpring(1.07))}
          onPressOut={() => (scale.value = withSpring(1))}
        >
          <Ionicons name="play" size={18} color="#fff" />
          <Text style={styles.demoBtnText}>Try Demo</Text>
        </TouchableOpacity>
      </BlurView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  scrollContent: { flexGrow: 1, paddingBottom: 32 },
  heroWrap: {
    alignItems: 'center',
    marginTop: 36,
    marginBottom: 18,
  },
  heroIconBg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#a18fff',
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 10,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  heroDesc: {
    color: '#a18fff',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 8,
  },
  divider: {
    height: 4,
    borderRadius: 2,
    marginHorizontal: 40,
    marginBottom: 18,
  },
  featuresList: {
    gap: 18,
    marginTop: 8,
    marginBottom: 24,
  },
  cardWrap: {
    marginHorizontal: 24,
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
    padding: 22,
    alignItems: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 8,
  },
  iconWrap: {
    backgroundColor: '#251c4a',
    borderRadius: 14,
    padding: 10,
    marginRight: 10,
  },
  badge: {
    backgroundColor: '#f3a6ff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginLeft: 'auto',
  },
  badgeText: {
    color: '#1a1446',
    fontWeight: 'bold',
    fontSize: 12,
  },
  featureTitle: { color: '#fff', fontSize: 17, fontWeight: 'bold', marginBottom: 2, alignSelf: 'flex-start' },
  featureDesc: { color: '#a18fff', fontSize: 14, marginBottom: 10, alignSelf: 'flex-start' },
  demoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#8e6fff',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginTop: 4,
  },
  demoBtnText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 6,
    fontSize: 15,
  },
});

export default FeaturesScreen; 