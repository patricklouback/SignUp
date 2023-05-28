import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function Button({text, stylesProps}) {
 return (
   <>
    <TouchableOpacity
    style={[styles.btn, stylesProps]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
   </>
  );
}

const styles = StyleSheet.create({
    btn: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        paddingHorizontal: 20,
        backgroundColor: "#FF641A",
        elevation: 2, 
        shadowColor: '#000', // Cor da sombra
        shadowOffset: { width: 1, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 0.5, // Opacidade da sombra
        shadowRadius: 3, // Raio da sombra
    },
    text:{
      fontFamily: "inter_medium",
      fontSize: 16,
      color: "#FFF"
    }
  });