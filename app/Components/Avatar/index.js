import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { showModal } from '../../redux/store';

export default function Avatar({ avaliacaoUsuario = 3}) {
    const dispatch = useDispatch();
    const urlAvatar = "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    function renderStars() {
        const stars = [];

        for (let i = 0; i < avaliacaoUsuario; i++) {
            stars.push(
                <Entypo key={i} name="star" size={14} color="#FF641A" />
            );
        }

        for (let i = 0; i < 5 - avaliacaoUsuario; i++) {
            stars.push(
                <Entypo key={i + avaliacaoUsuario} name="star" size={12} color="#F6F6F6" />
            );
        }

        return stars;
    }

    function SetModalVisible(){
        dispatch(showModal());
    }

    return (
        <TouchableOpacity style={styles.container}onPress={SetModalVisible}>
            <Image source={{ uri: urlAvatar }} style={styles.avatar} />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                {renderStars()}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 5,
        padding: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
});
