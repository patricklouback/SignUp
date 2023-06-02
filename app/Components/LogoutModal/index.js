import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout, hideModal } from '../../redux/store';

export default function LogoutModal() {
  const dispatch = useDispatch();
  const modalVisible = useSelector(state => state.modal.visible);

  function Logout() {
    dispatch(logout());
    dispatch(hideModal());
  }

  return (
    <Modal visible={modalVisible} transparent={true}>

      <View style={styles.container}>

        <View style={styles.modal}>

          <Text style={styles.title}>Deseja Sair?</Text>

          <View style={styles.viewBtn}>

            <TouchableOpacity style={styles.BtnSim} onPress={Logout}>
              <Text style={styles.textBtnSim}>Sim</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.BtnNao} onPress={()=>{dispatch(hideModal())}}>
              <Text style={styles.textBtnNao}>Não</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>

    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,0.5)"
  },
  modal: {
    width: "60%",
    height: "18%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 1, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.6, // Opacidade da sombra
    shadowRadius: 2, // Raio da sombra,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#32393F"
  },
  viewBtn: {
    flexDirection: 'row',
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    marginTop: 25
  },
  textBtnSim: {
    fontSize: 22,
    fontWeight: "700",
    color: "#F6F6F6"
  },
  textBtnNao: {
    fontSize: 22,
    fontWeight: "700",
    color: "#32393F"
  },
  BtnSim: {
    padding: 10,
    borderRadius: 999,
    backgroundColor: "#32393F"
  },
  BtnNao: {
    padding: 10,
    borderRadius: 999,
    backgroundColor: "#FF641A"
  }
});
