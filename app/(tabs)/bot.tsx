import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Image as RNImage, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SlideBar from '../components/SlideBar';

export default function BotScreen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [message, setMessage] = useState('');

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
        <Text style={styles.title}>LIONIX</Text>
      </View>

      {/* Contenido del Chat */}
      <View style={styles.chatContainer}>
        {/* Mascota */}
        <View style={styles.mascotaContainer}>
          <Image
            source={require('@/assets/images/mascota.png')}
            style={styles.mascotaImage}
            contentFit="contain"
          />
        </View>

        {/* Mensajes */}
        <View style={styles.messagesContainer}>
          <View style={styles.messageRow}>
            <Image
              source={require('@/assets/images/icono.png')}
              style={styles.avatar}
              contentFit="cover"
            />
            <View style={styles.botMessage}>
              <Text style={styles.messageText}>¡Hola! ¿En qué puedo ayudarte?</Text>
            </View>
          </View>

          <View style={[styles.messageRow, styles.userMessageRow]}>
            <View style={styles.userMessage}>
              <Text style={styles.messageText}>Hola, necesito información sobre matrículas</Text>
            </View>
            <Image
              source={require('@/assets/images/user.jpg')}
              style={styles.avatar}
              contentFit="cover"
            />
          </View>
        </View>

        {/* Input de mensaje */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe un mensaje..."
            placeholderTextColor="#999"
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send" size={24} color="#006AAA" />
          </TouchableOpacity>
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
  chatContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mascotaContainer: {
    padding: 16,
    alignItems: 'center',
  },
  mascotaImage: {
    width: 280,
    height: 280,
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  userMessageRow: {
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  botMessage: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 12,
    marginLeft: 8,
    maxWidth: '70%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  userMessage: {
    backgroundColor: '#006AAA',
    borderRadius: 20,
    padding: 12,
    marginRight: 8,
    maxWidth: '70%',
  },
  messageText: {
    fontSize: 14,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    fontSize: 14,
  },
  sendButton: {
    padding: 8,
  },
}); 