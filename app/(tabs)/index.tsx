import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import BottomNav from '../../components/BottomNav';
import ChatArea from '../../components/ChatArea';
import Header from '../../components/Header';
import MessageInput from '../../components/MessageInput';

const HomeScreen: React.FC = () => {
  return (
    <LinearGradient
      colors={['#2d0b4e', '#6a3bbd', '#a18fff']}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Header />
        <ChatArea />
        <MessageInput />
        <BottomNav />
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
});

export default HomeScreen;
