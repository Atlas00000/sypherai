import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ChatBubbleProps {
  text: string;
  fromUser: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, fromUser }) => {
  return (
    <View style={[styles.bubble, fromUser ? styles.user : styles.ai]}> 
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    maxWidth: '80%',
    borderRadius: 18,
    padding: 14,
    marginVertical: 6,
    alignSelf: 'flex-start',
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