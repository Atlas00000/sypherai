import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Image source={require('../assets/images/icon.png')} style={styles.logo} />
        <Text style={styles.title}>SypherAI</Text>
      </View>
      <TouchableOpacity style={styles.profileBtn}>
        {/* Placeholder for profile icon */}
        <View style={styles.profileIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 16,
    backgroundColor: 'transparent',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  profileBtn: {
    padding: 6,
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3a2e7b',
  },
});

export default Header; 