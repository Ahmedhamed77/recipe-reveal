import React from 'react';

import {styles} from './style';
import {FlatList, ListRenderItem, SafeAreaView, View} from 'react-native';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {RecipeCard} from '../../shared/ui/recipe-card';
import {Recipe} from '../../store/services/recipes/types';

interface FavoritesScreenProps {}

export const FavoritesScreen: React.FC<FavoritesScreenProps> = () => {
  const {favorites} = useSelector((state: RootState) => state.favorites);

  const renderItem: ListRenderItem<Recipe> = ({item}) => {
    return <RecipeCard recipe={item} />;
  };

  if (!favorites.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorites yet</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={favorites}
        renderItem={renderItem}
        keyExtractor={item => item.uuid}
      />
    </SafeAreaView>
  );
};
