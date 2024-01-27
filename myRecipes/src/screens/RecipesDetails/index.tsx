import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getSelectedRecipe} from '../../redux/selectors';
import {useFetchRecipes} from '../../api/recipes/useFetchRecipes';

export default function RecipesDetails({route, navigation}) {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/';
  const {id} = route.params;
  const recipe = useSelector(getSelectedRecipe);
  const {getRecipeById} = useFetchRecipes();
  console.log(id, '=====> getRecipeById:', getRecipeById(id));

  useEffect(() => {
    getRecipeById(id);
  }, []);

  return (
    <>
      <Image
        source={{uri: `${IMAGE_PATH}${recipe.backdrop_path}`}}
        style={styles.image}
      />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.caption}>{recipe.release_date}</Text>
      <View style={styles.containerList}>
        {recipe.production_companies?.map(item => (
          <Text key={item.id}>{item.name} ({item.origin_country})</Text>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Revenir</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caption: {
    textAlign: 'center',
  },
  containerList: {
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 6,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  titleList: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
