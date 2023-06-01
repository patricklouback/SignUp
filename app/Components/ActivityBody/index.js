import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function ActivityBody() {
  const data = [
    { id: '1', title: 'Show no Garage Rock!', date: "20/06/2023", status: true, imageUrl: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: '2', title: 'Show no HardRock', date: "03/07/2023", status: false, imageUrl: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: '3', title: 'Aula pro Miguel', date: "15/07/2023", status: false, imageUrl: "https://images.pexels.com/photos/164835/pexels-photo-164835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: '4', title: 'Gravação do Single', date: "01/08/2023", status: true, imageUrl: "https://images.pexels.com/photos/1128440/pexels-photo-1128440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: '5', title: 'Férias !', date: "15/08/2023", status: true, imageUrl: "https://images.pexels.com/photos/89909/pexels-photo-89909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Atividades agendadas:</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Entypo style={styles.status} name="controller-record" size={12} color={item.status ? "#00ff1d" : "#ff8300"} />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDate}>{item.date}</Text>
            <Image
              style={styles.image}
              source={{ uri: item.imageUrl }}
            />

          </TouchableOpacity>
        )}
      />
    </View>
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
  Title:{
    fontSize: 28,
    fontWeight: "600",
    marginVertical: 20,
    marginHorizontal: 10,
    color: "#32393F"
  },
  item: {
    backgroundColor: '#000',
    width: 170,
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
  status:{
    position: "absolute",
    top: 5,
    left: 5
  },
  image: {
    width: "100%",
    height: 70,
    borderRadius: 10
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#F6F6F6",
    // color: "#DD3400",
    marginTop: 10
  },
  itemDate: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FF641A",
  }
});

