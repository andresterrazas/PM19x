import { View, Text, StyleSheet, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="person-outline" size={28} color="green" />
        <Text style={styles.title}>Perfil de usuario</Text>
      </View>
      {/* Botón para navegar a la pantalla de Detalles */}
      <View style={styles.buttonContainer}>
        <Button
          title="Detalles de usuario"
          onPress={() => navigation.navigate('Detail')}
          color="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 15,
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 6, 
  },
});