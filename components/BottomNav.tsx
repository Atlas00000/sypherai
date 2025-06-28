import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const BottomNav: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBtn}>
        <Ionicons name="chatbubble-ellipses-outline" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconBtn}>
        <MaterialIcons name="dashboard" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconBtn}>
        <Ionicons name="history" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconBtn}>
        <Ionicons name="person-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#251c4a',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 8,
    marginBottom: 8,
  },
  iconBtn: {
    padding: 8,
    borderRadius: 16,
  },
});

export default BottomNav; 