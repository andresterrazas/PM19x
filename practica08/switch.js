import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const App = () => {
  const [activo, setActivo] = useState(false);

  const cambiarSwitch = () => {
    setActivo((previousState) => !previousState);
  };

return (
    <View style={switchStyles.container}>
        <Text style={switchStyles.label}>Activar característica:</Text>

        <Switch
            onValueChange={cambiarSwitch}
            value={activo} 
        />

        <Text style={switchStyles.statusText}>
            Estado actual: {activo ? "Activado" : "Desactivado"}
        </Text>
    </View>
);
};

const switchStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#333",
  },
  statusText: {
    marginTop: 20,
    fontSize: 18,
    color: "#666",
  },
});

export default App;