import React from 'react';
import { FlatList, TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation, data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.isbn}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Details', { dictionary: item })}
        >
          <Image source={{ uri: item.image }} style={styles.thumbnail} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
