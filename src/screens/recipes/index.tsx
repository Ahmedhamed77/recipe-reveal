import React from 'react';

import {styles} from './style';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useGetRecipesQuery} from '../../store/services/recipes/get-recipes';
import {RecipeCard} from '../../shared/ui/recipe-card';
import {Recipe} from '../../store/services/recipes/types';
import {PressableScaleCard} from '../../shared/ui/pressable-scale-card';
import {MainNavigation, MainParams} from '../../navigation/route/interface';
import {COLORS} from '../../shared';

interface RecipesScreenProps {
  navigation: MainNavigation;
}

export const RecipesScreen: React.FC<RecipesScreenProps> = ({navigation}) => {
  const {data, isLoading} = useGetRecipesQuery();

  const onGoToRecipeDetails = (item: Recipe) => {
    navigation.navigate(MainParams.Recipe, {recipe: item});
  };

  const renderItem: ListRenderItem<Recipe> = ({item}) => {
    const onPress = () => onGoToRecipeDetails(item);
    return (
      <PressableScaleCard onPress={onPress}>
        <RecipeCard recipe={item} />
      </PressableScaleCard>
    );
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        color={COLORS.manatee}
        style={styles.centerContainer}
      />
    );
  }

  if (!data) {
    return (
      <View style={styles.centerContainer}>
        <Text>No data here yet</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{}}>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={data.recipes}
        keyExtractor={item => item.uuid}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
