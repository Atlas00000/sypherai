import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Placeholder for send logic
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Message SypherAI..."
        placeholderTextColor="#b3aaff"
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
        <Ionicons name="send" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#251c4a',
    borderRadius: 24,
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 6,
  },
  sendBtn: {
    marginLeft: 10,
    backgroundColor: '#7b5cff',
    borderRadius: 20,
    padding: 8,
  },
});

export default MessageInput; 