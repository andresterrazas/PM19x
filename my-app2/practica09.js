import React, {useState} from "react";
import {View, Text, TextInput, Button, Alert, SafeAreaView, Platform, StyleSheet} from "react-native";

const App = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telefono, setTelefono] = useState("");

    const mostrarAlerta = () => {
        if (!nombre || !email || !password) {
            if (Platform.OS === "web") {
                window.alert("Por favor, completa todos los campos obligatorios.");
        } else {
                Alert.alert("Error",
                    "Por favor, completa todos los campos obligatorios.",
                    [{text: "OK"}]
                );
            }
                if (Platform.OS === "web") {
                    window.alert(`registro exitoso \n Nombre: ${nombre} \n Email: ${email}`);
                    limpiarFormulario();
                }else{
                    Alert.alert(
                        "Registro exitoso",
                        `Nombre: ${nombre} \n Email: ${email}`,
                        [{text: "OK", onPress: limpiarFormulario()}]
                    );
                }
            }
    const limpiarFormulario = () => {
        setNombre("");
        setEmail("");
        setPassword("");
        setTelefono("");
    };
}

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.formulario}>
                <Text style={styles.titulo}>Registro de usuario</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre completo *"
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email *"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña *"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Teléfono (opcional)"
                    value={telefono}
                    onChangeText={setTelefono}
                    keyboardType="phone-pad"
                />
                <Button title="Registrarse" onPress={mostrarAlerta} />

            </View>

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    formulario: {
        backgroundColor: "#f5f5f5",
        padding: 20,
        borderRadius: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "white",
    },

});

export default App;