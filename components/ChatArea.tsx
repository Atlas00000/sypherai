import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ChatBubble from './ChatBubble';
import TypingIndicator from './TypingIndicator';

const messages = [
  { id: '1', text: 'Hey SypherAI, can you help me build a React component with animations?', fromUser: true },
  { id: '2', text: `Absolutely! I'd love to help you create an animated React component. Let's start with Framer Motion for smooth animations. What type of component are you building?`, fromUser: false },
];

const ChatArea: React.FC = () => {
  const [toast, setToast] = useState('');

  const handleCopy = (msg: string) => {
    setToast('Copied to clipboard!');
    setTimeout(() => setToast(''), 1200);
  };

  return (
    <View style={styles.container}>
      {toast ? (
        <View style={styles.toast}><Text style={styles.toastText}>{toast}</Text></View>
      ) : null}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {messages.map(msg => (
          <ChatBubble key={msg.id} text={msg.text} fromUser={msg.fromUser} onCopy={handleCopy} />
        ))}
        <TypingIndicator />
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
  toast: {
    position: 'absolute',
    top: 8,
    alignSelf: 'center',
    backgroundColor: '#2d0b4e',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 6,
    zIndex: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  toastText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ChatArea; 