import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Image as RNImage, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SlideBar from '../components/SlideBar';

export default function CarnetScreen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="menu" size={32} color="#fff" />
        </TouchableOpacity>
        <RNImage
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <SlideBar isVisible={isMenuOpen} onClose={toggleMenu} />

      {/* Título */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Carnet Estudiantil</Text>
      </View>

      {/* Carnet */}
      <View style={styles.carnetContainer}>
        <Image
          source={require('@/assets/images/carnet.png')}
          style={styles.carnetImage}
          contentFit="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#006AAA',
  },
  logo: {
    width: 50,
    height: 50,
  },
  titleContainer: {
    backgroundColor: '#006AAA',
    paddingVertical: 15,
    paddingLeft: 16,
    alignItems: 'flex-start',
    marginTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  carnetContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  carnetImage: {
    width: '90%',
    height: '90%',
    borderRadius: 20,
    overflow: 'hidden',
  },
}); 