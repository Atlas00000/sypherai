import * as Clipboard from 'expo-clipboard';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Animated, { FadeInUp } from 'react-native-reanimated';

interface ChatBubbleProps {
  text: string;
  fromUser: boolean;
  onCopy?: (msg: string) => void;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, fromUser, onCopy }) => {
  const handleLongPress = () => {
    Clipboard.setStringAsync(text);
    if (onCopy) onCopy(text);
  };

  return (
    <Animated.View
      entering={FadeInUp.duration(500)}
      style={[styles.bubble, fromUser ? styles.user : styles.ai]}
    >
      <RectButton
        rippleColor={fromUser ? '#a18fff33' : '#fff3'}
        onLongPress={handleLongPress}
        style={{ borderRadius: 18 }}
      >
        <Text style={styles.text}>{text}</Text>
      </RectButton>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    maxWidth: '80%',
    borderRadius: 18,
    marginVertical: 6,
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  user: {
    backgroundColor: '#3a1e6e',
    alignSelf: 'flex-end',
  },
  ai: {
    backgroundColor: '#8e6fff',
    alignSelf: 'flex-start',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
    padding: 14,
  },
});

export default ChatBubble; 