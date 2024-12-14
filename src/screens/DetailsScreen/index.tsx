import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function DetailsScreen({ route }) {
  const { dictionary } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: dictionary.image }} style={styles.image} />
      <Text style={styles.title}>{dictionary.name}</Text>
      <Text style={styles.author}>By: {dictionary.author}</Text>
      <Text style={styles.isbn}>ISBN: {dictionary.isbn}</Text>
      <Text style={styles.publication}>Publication Year: {dictionary.publication}</Text>
      <Text style={styles.description}>{dictionary.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    marginBottom: 5,
  },
  isbn: {
    fontSize: 16,
    marginBottom: 5,
  },
  publication: {
    fontSize: 16,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});
