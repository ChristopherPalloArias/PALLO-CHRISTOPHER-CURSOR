import { FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Image as RNImage, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SlideBar from '../components/SlideBar';

export default function HomeScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalPages = 3; // Ahora tenemos 3 páginas

  const notificationImage = require('@/assets/images/banner.png');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {[...Array(totalPages)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: currentPage === index ? '#fff' : 'rgba(255,255,255,0.5)' }
            ]}
          />
        ))}
      </View>
    );
  };

  const handlePress = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const renderContent = () => {
    switch(currentPage) {
      case 0:
        return (
          <>
            <Text style={styles.notificationsTitle}>NOTIFICACIONES</Text>
            <View style={styles.notificationItem}>
              <Ionicons name="notifications-outline" size={18} color="#fff" />
              <Text style={styles.notificationText}>Recordatorio: reunión a las 10.00</Text>
            </View>
            <View style={styles.notificationItem}>
              <MaterialIcons name="event-note" size={18} color="#fff" />
              <Text style={styles.notificationText}>Evento añadido para el viernes</Text>
            </View>
            <View style={styles.notificationItem}>
              <Ionicons name="mail-outline" size={18} color="#fff" />
              <Text style={styles.notificationText}>Nuevo mensaje de Carla</Text>
            </View>
          </>
        );
      case 1:
        return (
          <>
            <Text style={styles.notificationsTitle}>TAREAS PREVIAS</Text>
            <View style={styles.notificationItem}>
              <MaterialIcons name="menu-book" size={18} color="#fff" />
              <Text style={styles.notificationText}>Leer capítulo 1 del libro de Programación</Text>
            </View>
            <View style={styles.notificationItem}>
              <MaterialIcons name="assignment" size={18} color="#fff" />
              <Text style={styles.notificationText}>Realizar cuadro conceptual de COBIT</Text>
            </View>
            <View style={styles.notificationItem}>
              <MaterialIcons name="groups" size={18} color="#fff" />
              <Text style={styles.notificationText}>Preparar exposición sobre metodología Scrum</Text>
            </View>
          </>
        );
      case 2:
        return (
          <View style={styles.imageContainer}>
            <Image 
              source={notificationImage} 
              style={styles.notificationImage}
              contentFit="cover"
            />
          </View>
        );
    }
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

      {/* Body */}
      <ScrollView contentContainerStyle={styles.body} showsVerticalScrollIndicator={false}>
        {/* Buscador */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" style={{ marginLeft: 8 }} />
          <TextInput
            placeholder="Ingrese Búsqueda"
            style={styles.searchInput}
            placeholderTextColor="#888"
          />
        </View>

        {/* Notificaciones deslizable */}
        <TouchableOpacity
          style={styles.notificationsContainer}
          onPress={handlePress}
          activeOpacity={0.8}
        >
          {renderContent()}
          {renderDots()}
        </TouchableOpacity>

        {/* Próxima clase */}
        <Text style={styles.sectionTitle}>Próxima Clase</Text>
        <View style={styles.nextClassContainer}>
          <View style={styles.classInfo}>
            <Text style={styles.classTitle}>PROGRAMACIÓN PARA DISPOSITIVOS MÓVILES</Text>
          </View>
          <View style={styles.classRoom}>
            <Text style={styles.classRoomText}>PARALELO: S110-001{"\n"}AULA: RM50LABCIENCIAS4{"\n"}18:00-20:00</Text>
          </View>
        </View>

        {/* Editar */}
        <Text style={styles.sectionTitleRight}>Editar</Text>
        <View style={styles.editContainer}>
          <View style={styles.scheduleBox}>
            <FontAwesome5 name="calendar-alt" size={32} color="#fff" />
            <Text style={styles.scheduleText}>Horarios{"\n"}y Tareas</Text>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.notesBox}>
              <Text style={styles.notesTitle}>20/20</Text>
              <Text style={styles.notesText}>Consulta de{"\n"}calificaciones</Text>
            </View>
            <View style={styles.attendanceBox}>
              <MaterialCommunityIcons name="clipboard-check-outline" size={32} color="#fff" />
              <Text style={styles.attendanceText}>Consulta de{"\n"}asistencia</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  logo: { width: 50, height: 50 },
  body: { paddingHorizontal: 16, paddingBottom: 16 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    marginTop: 16,
    marginBottom: 16,
    height: 40,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    color: '#222',
    backgroundColor: 'transparent',
  },
  notificationsContainer: {
    backgroundColor: '#006AAA',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    marginHorizontal: 40,
    minHeight: 180,
    justifyContent: 'center',
    position: 'relative',
  },
  notificationsTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  notificationText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
  },
  notificationImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    resizeMode: 'cover',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 4,
    color: '#222',
  },
  sectionTitleRight: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 4,
    marginRight: 24,
    color: '#222',
    textAlign: 'right',
  },
  nextClassContainer: {
    flexDirection: 'row',
    backgroundColor: '#006AAA',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    height: 100,
  },
  classInfo: {
    flex: 1,
    backgroundColor: '#006AAA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: '#fff',
  },
  classTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  classRoom: {
    flex: 1,
    backgroundColor: '#006AAA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  classRoomText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  editContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 16,
    height: 160,
    gap: 8,
  },
  scheduleBox: {
    flex: 1,
    backgroundColor: '#006AAA',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  rightContainer: {
    flex: 1,
    gap: 8,
  },
  scheduleText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  notesBox: {
    flex: 1,
    backgroundColor: '#006AAA',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  notesTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  notesText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  attendanceBox: {
    flex: 1,
    backgroundColor: '#006AAA',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  attendanceText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#e6e6e6',
    backgroundColor: '#fff',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
