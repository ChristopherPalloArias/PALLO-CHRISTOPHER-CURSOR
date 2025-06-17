import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Image as RNImage, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SlideBar from '../components/SlideBar';

export default function PerfilScreen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPromedio, setShowPromedio] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePromedio = () => {
    setShowPromedio(!showPromedio);
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
        <Text style={styles.title}>Perfil</Text>
      </View>

      {/* Contenido del Perfil */}
      <View style={styles.profileContainer}>
        {/* Foto y Email */}
        <View style={styles.userInfoContainer}>
          <Image
            source={require('@/assets/images/user.jpg')}
            style={styles.userPhoto}
            contentFit="cover"
          />
          <Text style={styles.userName}>Christopher Pallo</Text>
          <Text style={styles.userEmail}>cipallo@uce.edu.ec</Text>
        </View>

        {/* Información Académica */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Información Académica</Text>
          <Text style={styles.infoText}>Facultad: Ingeniería y Ciencias Aplicadas</Text>
          <Text style={styles.infoText}>Carrera: Sistemas de Información</Text>
          <Text style={styles.infoText}>Semestre: 10</Text>
        </View>

        {/* Progreso Académico */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Progreso Académico</Text>
          <View style={styles.progressInfo}>
            <Text style={styles.infoText}>Créditos: 150/240</Text>
            <View style={styles.promedioContainer}>
              <Text style={styles.infoText}>
                Promedio: {showPromedio ? '18.12' : '••.••'}
              </Text>
              <TouchableOpacity onPress={togglePromedio}>
                <Ionicons 
                  name={showPromedio ? "eye-off" : "eye"} 
                  size={20} 
                  color="#fff" 
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
  profileContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    gap: 16,
  },
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  userPhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  infoCard: {
    backgroundColor: '#006AAA',
    borderRadius: 10,
    padding: 20,
    width: '85%',
    minHeight: 150,
    justifyContent: 'space-around',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  infoText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  progressInfo: {
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
  },
  promedioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
}); 