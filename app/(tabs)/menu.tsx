import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SlideBar from '../components/SlideBar';

interface MenuButtonProps {
  icon: React.ReactNode;
  label: string;
  size?: 'normal' | 'large';
  onPress?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ icon, label, size = 'normal', onPress }) => (
  <TouchableOpacity 
    style={[
      styles.menuButton,
      size === 'large' && styles.menuButtonLarge
    ]} 
    onPress={onPress}
  >
    <View style={[
      styles.iconContainer,
      size === 'large' && styles.iconContainerLarge
    ]}>
      {icon}
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  </TouchableOpacity>
);

export default function MenuScreen() {
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
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <SlideBar isVisible={isMenuOpen} onClose={toggleMenu} />

      {/* Grid de botones */}
      <View style={styles.gridContainer}>
        {/* Primera fila - botones grandes */}
        <View style={styles.row}>
          <MenuButton
            icon={<FontAwesome5 name="user" size={28} color="#fff" />}
            label="Directorio UCE"
            size="large"
          />
          <MenuButton
            icon={<MaterialCommunityIcons name="book-open-page-variant" size={28} color="#fff" />}
            label="Historial académico"
            size="large"
          />
          <MenuButton
            icon={<MaterialCommunityIcons name="file-document-multiple" size={28} color="#fff" />}
            label="Malla curricular"
            size="large"
          />
        </View>

        {/* Segunda fila */}
        <View style={styles.row}>
          <MenuButton
            icon={<FontAwesome5 name="language" size={24} color="#fff" />}
            label="Idiomas"
          />
          <MenuButton
            icon={<FontAwesome5 name="dollar-sign" size={24} color="#fff" />}
            label="Orden de cobro"
          />
          <MenuButton
            icon={<MaterialCommunityIcons name="file-document-outline" size={24} color="#fff" />}
            label="Trámites y Formatos"
          />
        </View>

        {/* Tercera fila */}
        <View style={styles.row}>
          <MenuButton
            icon={<MaterialCommunityIcons name="gift" size={24} color="#fff" />}
            label="Beneficios"
          />
          <MenuButton
            icon={<FontAwesome5 name="star" size={24} color="#fff" />}
            label="Consultar Promedio"
          />
          <MenuButton
            icon={<MaterialCommunityIcons name="shield-check" size={24} color="#fff" />}
            label="Certificado de seguro de vida"
          />
        </View>

        {/* Cuarta fila */}
        <View style={styles.row}>
          <MenuButton
            icon={<FontAwesome5 name="globe" size={24} color="#fff" />}
            label="Redes sociales"
          />
          <MenuButton
            icon={<FontAwesome5 name="book" size={24} color="#fff" />}
            label="Biblioteca"
          />
          <MenuButton
            icon={<FontAwesome5 name="check" size={24} color="#fff" />}
            label="Tutoriales"
          />
        </View>

        {/* Quinta fila */}
        <View style={styles.lastRow}>
          <MenuButton
            icon={<FontAwesome5 name="hospital" size={24} color="#fff" />}
            label="Hospital del Día"
          />
          <MenuButton
            icon={<FontAwesome5 name="briefcase" size={24} color="#fff" />}
            label="Oferta laboral"
          />
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
  gridContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  lastRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
    gap: 16,
  },
  menuButton: {
    width: '30%',
  },
  menuButtonLarge: {
    width: '31%',
  },
  iconContainer: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#006AAA',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  iconContainerLarge: {
    aspectRatio: 0.9,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 11,
    textAlign: 'center',
  },
}); 