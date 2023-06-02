import React from 'react';
import Animated, { SlideInRight, SlideInLeft } from 'react-native-reanimated';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function ActivityBody({data, orientation = "left", backgroundStyle = 'black'}) {

  return (
    <Animated.View 
    style={styles.container} 
    entering={orientation == "left" ? SlideInLeft.duration(1000) : SlideInRight.duration(1000)}>

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.item, backgroundStyle == "black" ?{ backgroundColor: '#000'}: {backgroundColor: '#FF641A'},]}>

            <View style={styles.status}>
              <Entypo name="controller-record" size={12} color={item.status ? "#00ff1d" : "#ff8300"} />
              <Text style={styles.itemStatus}>{item.status ? "OK" : "Pendente"}</Text>
            </View>
            <Text style={[styles.itemTitle, backgroundStyle == "black"? {color: "#F6F6F6"} : {color: "#32393F"}]}>{item.title}</Text>
            <Text style={[styles.itemDate, backgroundStyle == "black"? {color: "#FF641A"} : {color: "#32393F"}]}>{item.date}</Text>
            <Image
              style={[styles.image, backgroundStyle == "black" ? {}: {borderColor: "#32393F", borderWidth: 0.1}]}
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
    marginTop: 16
  },
  itemDate: {
    fontSize: 28,
    fontWeight: "700",
  },
  itemStatus: {
    fontSize: 12,
    fontWeight: "100",
    color: "#F6F6F6"
  }
});

