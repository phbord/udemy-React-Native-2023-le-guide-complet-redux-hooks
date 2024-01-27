import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useFetchRecipes} from '../../api/recipes/useFetchRecipes';
import {getRecipesList} from '../../redux/selectors';
import RecipeTile from './RecipeTile';

export default function RecipesList({navigation}) {
  const [page, setPage] = useState(0);
  const {getAllRecipes} = useFetchRecipes();
  const allRecipes = useSelector(getRecipesList);
  //console.log('====> allRecipes:', allRecipes);

  useEffect(() => {
    getAllRecipes(page);
  }, [page]);

  const renderItem = ({item}) => {
    return <RecipeTile item={item} navigation={navigation} />;
  };

  const onEndReached = () => {
    // charger des nouvelles recettes en arrivant en bas de la page
    setPage(currPage => currPage + 1);
  };

  return (
    <>
      <FlatList
        data={allRecipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        onEndReached={onEndReached}
        ListFooterComponent={() => (
          <View style={{padding: 40}}>
            <ActivityIndicator />
          </View>
        )}
      />
    </>
  );
}
