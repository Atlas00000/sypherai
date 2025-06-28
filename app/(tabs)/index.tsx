import React from 'react';
import { StyleSheet, View } from 'react-native';
import BottomNav from '../../components/BottomNav';
import ChatArea from '../../components/ChatArea';
import Header from '../../components/Header';
import MessageInput from '../../components/MessageInput';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ChatArea />
      <MessageInput />
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1446', // matches reference image
  },
});

export default HomeScreen;
