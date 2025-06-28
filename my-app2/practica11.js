import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, ImageBackground, Switch, Image, ActivityIndicator } from 'react-native';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [activo, setActivo] = useState(false);
  const [loading, setLoading] = useState(true);

  const validarDatos = () => {
    if (!nombre || !email) {
      Alert.alert('Error', 'Por favor completa todos los campos', [{ text: 'OK' }]);
    } else if (!activo) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones', [{ text: 'OK' }]);
    } else {
      Alert.alert('Registro exitoso', `Nombre: ${nombre}\nEmail: ${email}`, [{ text: 'OK' }]);
    }
  };

  const cambiarSwitch = () => setActivo(prev => !prev);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return (
      <View style={styles.splash}>
        <Image source={{ uri: 'https://www.citypng.com/photo/29021/round-loading-circle-black-icon-image-png' }} />
        <Text style={styles.splashText}>Cargando...</Text>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1519681393784-d120267933ba' }}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.formulario}>
        <Text style={styles.titulo}>Registro de Usuario</Text>

        <TextInput
          placeholder="Nombre Completo"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Aceptar Términos y Condiciones</Text>
          <Switch onValueChange={cambiarSwitch} value={activo} />
        </View>
        <View style={styles.boton}>
          <Button title="Registrar" onPress={validarDatos} color="#1abc9c" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  formulario: {
    padding: 20,
    margin: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  switchLabel: {
    fontSize: 14,
    color: '#333',
  },
  boton: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default App;
