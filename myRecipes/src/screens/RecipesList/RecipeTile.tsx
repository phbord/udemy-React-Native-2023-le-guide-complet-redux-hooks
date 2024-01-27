import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function RecipeTile({item, navigation}) {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/';

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('RecipesDetails', {id: item.id})}
      style={styles.container}>
      <Image
        source={{
          uri: `${IMAGE_PATH}${item.backdrop_path}?api_key=bmlkLCjrIWnnZzdAQ4uNPG9JFdj`,
        }}
        style={styles.image}
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderWidth: 1,
  },
  subContainer: {
    width: '70%',
    padding: 7,
  },
  image: {
    width: '30%',
    height: 70,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
