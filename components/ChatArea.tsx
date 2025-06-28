import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ChatBubble from './ChatBubble';

const messages = [
  { id: '1', text: 'Hey SypherAI, can you help me build a React component with animations?', fromUser: true },
  { id: '2', text: `Absolutely! I'd love to help you create an animated React component. Let's start with Framer Motion for smooth animations. What type of component are you building?`, fromUser: false },
];

const ChatArea: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {messages.map(msg => (
          <ChatBubble key={msg.id} text={msg.text} fromUser={msg.fromUser} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  scrollContent: {
    paddingVertical: 8,
  },
});

export default ChatArea; 