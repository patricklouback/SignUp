import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Input({ type, ...props }) {
  const [isFocused, setIsFocused] = useState(false);
  const [eye, setEye] = useState(true);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyles = [
    styles.input,
    isFocused && styles.inputFocused,
  ];

  return (
    <>
      <View style={{ position: "relative", width: "100%", justifyContent: "center" }}>
        <TextInput
          {...props}
          style={inputStyles}
          secureTextEntry={type === 'password' && eye}
          maxLength={type === 'password' ? 12 : 40}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoCapitalize="none"
        />
        {type === 'password' ?
          <>
            <Feather style={styles.iconType} name={"lock"} size={24} color={isFocused ? "#FF641A" : "#9b9fa3"} />
            <TouchableOpacity style={styles.icon} onPress={() => { setEye(state => !state) }}>
              <Feather name={eye ? "eye" : "eye-off"} size={24} color={isFocused ? "#FF641A" : "#9b9fa3"} />
            </TouchableOpacity>
          </> :
          <Feather style={styles.iconType} name={"mail"} size={24} color={isFocused ? "#FF641A" : "#9b9fa3"} />
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 48,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
    color: "#32393F",
    elevation: 2,
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 1, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 2, // Raio da sombra
  },
  inputFocused: {
    borderColor: '#FF641A',
  },
  icon: {
    position: "absolute",
    right: 20,
  },
  iconType: {
    position: "absolute",
    left: 16,
  }
});