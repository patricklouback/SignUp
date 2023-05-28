import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export default function Input({ placeholder, type = 'text' }) {
  const [isFocused, setIsFocused] = useState(false);

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
      <TextInput
        style={inputStyles}
        placeholder={placeholder}
        secureTextEntry={type === 'password'}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoCapitalize="none"
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 20,
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
    borderColor: '#DD3400',
  },
});



// import React from 'react';
// import { TextInput, StyleSheet, View } from 'react-native';

// export default function Input({placeholder}) {
//  return (
//    <>
//     <TextInput
//     style={styles.input}
//     placeholder={placeholder}
//     />
//    </>
//   );
// }

// const styles = StyleSheet.create({
//     input: {
//         width: "100%",
//         height: 50,
//         borderRadius: 10,
//         paddingHorizontal: 20,
//         backgroundColor: "#FFF"
//     }
//   });