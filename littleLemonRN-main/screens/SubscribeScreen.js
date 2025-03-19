
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from "react-native";

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (text) => {
    setEmail(text);
    setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text));
  };

  const handleSubscribe = () => {
    if (isValid) {
      Alert.alert("Thanks for subscribing, stay tuned!");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/little-lemon-logo.png")} style={styles.logo} />
      <Text style={styles.title}>Subscribe to our newsletter for our latest delicious recipes!</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your email"
        keyboardType="email-address"
        value={email}
        onChangeText={validateEmail}
      />
      <TouchableOpacity style={[styles.button, !isValid && styles.buttonDisabled]} onPress={handleSubscribe} disabled={!isValid}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  logo: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 18, textAlign: "center", marginBottom: 10 },
  input: { width: "100%", padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 },
  button: { backgroundColor: "green", padding: 10, borderRadius: 5 },
  buttonDisabled: { backgroundColor: "gray" },
  buttonText: { color: "white", fontSize: 16 },
});

export default SubscribeScreen;
