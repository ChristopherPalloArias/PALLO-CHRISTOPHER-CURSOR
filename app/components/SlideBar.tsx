import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Animated, Dimensions, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const SCREEN_HEIGHT = Platform.OS === 'ios' ? height : height + (StatusBar.currentHeight || 0);

interface SlideBarProps {
  isVisible: boolean;
  onClose: () => void;
}

const SlideBar = ({ isVisible, onClose }: SlideBarProps) => {
  const slideAnim = React.useRef(new Animated.Value(-width)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : -width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <View style={styles.wrapper}>
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={onClose}
          />
          <Animated.View
            style={[
              styles.container,
              {
                transform: [{ translateX: slideAnim }],
              },
            ]}>
            <View style={styles.content}>
              <TouchableOpacity style={styles.menuItem}>
                <MaterialIcons name="language" size={24} color="#333" />
                <Text style={styles.menuText}>Idioma</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <MaterialIcons name="chat" size={24} color="#333" />
                <Text style={styles.menuText}>Sugerencias</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Ionicons name="help-circle-outline" size={24} color="#333" />
                <Text style={styles.menuText}>Ayuda y Soporte</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={onClose}>
              <Text style={styles.logoutText}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 1000,
    zIndex: 1000,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    elevation: 1001,
    zIndex: 1001,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: width * 0.5,
    backgroundColor: '#fff',
    elevation: 1002,
    zIndex: 1002,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    paddingTop: 40,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 20,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    padding: 12,
    backgroundColor: '#ff4444',
    marginHorizontal: 15,
    marginBottom: 50,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SlideBar; 