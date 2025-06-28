import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

interface ChatBubbleProps {
  text: string;
  fromUser: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, fromUser }) => {
  return (
    <Animated.View
      entering={FadeInUp.duration(500)}
      style={[styles.bubble, fromUser ? styles.user : styles.ai]}
    >
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    maxWidth: '80%',
    borderRadius: 18,
    padding: 14,
    marginVertical: 6,
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  user: {
    backgroundColor: '#2e2266',
    alignSelf: 'flex-end',
  },
  ai: {
    backgroundColor: '#7b5cff',
    alignSelf: 'flex-start',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
  },
});

export default ChatBubble; 