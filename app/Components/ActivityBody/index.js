import React from 'react';
import Animated, { SlideInRight, SlideInLeft } from 'react-native-reanimated';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import dataEvent from '../../utils/dataEvents';

export default function ActivityBody() {

  return (
    <Animated.View style={styles.container} entering={SlideInLeft.duration(1000)}>

      <FlatList
        data={dataEvent}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>

            <View style={styles.status}>
              <Entypo name="controller-record" size={12} color={item.status ? "#00ff1d" : "#ff8300"} />
              <Text style={styles.itemStatus}>{item.status ? "OK" : "Pendente"}</Text>
            </View>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDate}>{item.date}</Text>
            <Image
              style={styles.image}
              source={{ uri: item.imageUrl }}
            />

          </TouchableOpacity>
        )}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 20,
    marginHorizontal: 10
  },
  item: {
    backgroundColor: '#000',
    width: 175,
    height: 230,
    borderRadius: 10,
    marginHorizontal: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    paddingVertical: 16,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    position: "absolute",
    top: 5,
    left: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5
  },
  image: {
    width: "100%",
    height: 70,
    borderRadius: 10
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#F6F6F6",
    marginTop: 16
  },
  itemDate: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FF641A",
  },
  itemStatus: {
    fontSize: 12,
    fontWeight: "100",
    color: "#F6F6F6"
  }
});

