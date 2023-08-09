import React from 'react';

import {styles} from './style';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {
  MainNavigation,
  MainParams,
  MainParamsList,
} from '../../navigation/route/interface';
import {RouteProp} from '@react-navigation/native';
import {timeDataConverter} from '../../shared';
import FastImage from 'react-native-fast-image';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {
  addFavorites,
  removeFavorites,
} from '../../store/services/favorites/favorite-slice';

import Feather from 'react-native-vector-icons/Feather';

interface RecipeProps {
  navigation: MainNavigation;
  route: RouteProp<MainParamsList, MainParams.Recipe>;
}

export const RecipeScreen: React.FC<RecipeProps> = ({route, navigation}) => {
  const {recipe} = route?.params;

  const dispatch = useDispatch();
  const {favorites} = useSelector((state: RootState) => state.favorites);

  const isRecipeExistInFavorites = favorites.some(
    item => item.uuid === recipe.uuid,
  );

  const onAddRecipeToFavorite = () => {
    dispatch(addFavorites(recipe));
  };

  const onRemoveRecipeFromFavorite = () => {
    dispatch(removeFavorites({recipe}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <FastImage
          source={{
            uri: recipe.images[0],
            cache: FastImage.cacheControl.web,
            priority: FastImage.priority.high,
          }}
          style={styles.imageStyle}>
          <View style={styles.headerContainer}>
            <Pressable onPress={navigation.goBack} style={styles.arrowStyle}>
              <Feather name="arrow-left" size={24} color={'black'} />
            </Pressable>

            {isRecipeExistInFavorites ? (
              <Pressable
                onPress={onRemoveRecipeFromFavorite}
                style={styles.commonSpace}>
                <MaterialCommunityIcons
                  name="cards-heart"
                  size={24}
                  color={'red'}
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={onAddRecipeToFavorite}
                style={styles.commonSpace}>
                <MaterialCommunityIcons
                  name="cards-heart-outline"
                  size={24}
                  color={'black'}
                />
              </Pressable>
            )}
          </View>
        </FastImage>

        <View style={styles.contentContainer}>
          {!!recipe.description && (
            <Text style={styles.commonText}>{recipe.description}</Text>
          )}
          <Text style={styles.commonText}>{recipe.instructions}</Text>
          <View style={styles.lastUpdateContainer}>
            <Text style={styles.lastUpdateText}>last update:</Text>
            <Text style={styles.lastUpdateText}>
              {timeDataConverter(recipe.lastUpdated)}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
