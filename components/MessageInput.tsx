import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const [focused, setFocused] = useState(false);
  const scale = useSharedValue(1);

  const animatedBorder = useAnimatedStyle(() => ({
    shadowColor: focused ? '#a18fff' : 'transparent',
    shadowOpacity: focused ? 0.7 : 0,
    shadowRadius: focused ? 16 : 0,
    shadowOffset: { width: 0, height: 0 },
    elevation: focused ? 10 : 0,
  }));

  const handleSend = () => {
    scale.value = withSpring(0.85, {}, () => {
      scale.value = withSpring(1);
    });
    setMessage('');
  };

  const animatedSend = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.container, animatedBorder]}>
      <TextInput
        style={styles.input}
        placeholder="Message SypherAI..."
        placeholderTextColor="#b3aaff"
        value={message}
        onChangeText={setMessage}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <Animated.View style={animatedSend}>
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Ionicons name="send" size={22} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
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