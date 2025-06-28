import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { ZoomIn, ZoomOut, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import ChatArea from '../../components/ChatArea';
import DashboardWidget from '../../components/DashboardWidget';
import Header from '../../components/Header';
import MessageInput from '../../components/MessageInput';

const HomeScreen: React.FC = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const toggleScale = useSharedValue(1);

  const handleToggle = () => {
    toggleScale.value = withSpring(1.15, {}, () => {
      toggleScale.value = withSpring(1);
    });
    setShowDashboard((v) => !v);
  };

  const animatedToggle = useAnimatedStyle(() => ({
    transform: [{ scale: toggleScale.value }],
  }));

  return (
    <LinearGradient
      colors={['#1a1446', '#3a1e6e', '#8e6fff', '#f3a6ff']}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Header />
          <Animated.View style={animatedToggle}>
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={handleToggle}
              activeOpacity={0.8}
            >
              <Text style={styles.toggleBtnText}>
                {showDashboard ? 'Chat' : 'Dashboard'}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <View style={{ flex: 1 }}>
          {showDashboard ? (
            <Animated.View entering={ZoomIn} exiting={ZoomOut} style={{ flex: 1 }}>
              <DashboardWidget />
            </Animated.View>
          ) : (
            <Animated.View entering={ZoomIn} exiting={ZoomOut} style={styles.chatAreaWrap}>
              <ChatArea />
            </Animated.View>
          )}
        </View>
        <MessageInput />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleBtn: {
    marginRight: 16,
    marginTop: 40,
    backgroundColor: '#8e6fff',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 2,
  },
  toggleBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  chatAreaWrap: {
    flex: 1,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
    borderRadius: 24,
    overflow: 'hidden',
    marginHorizontal: 8,
    marginBottom: 8,
    marginTop: 2,
  },
});

export default HomeScreen;
