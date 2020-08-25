import React from 'react';
import { Platform, StyleSheet, View, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';

const PlacesListScreen = props => {
  const places = useSelector(state => state.places.places);

  return (
    <FlatList data={places}
      keyExtrator={item => item.id}
      renderItem={itemData =>
        <PlaceItem
          title={itemData.item.title}
          onSelect={() => {
            props.navigation.navigate('PlaceDetail', { placeTitle: itemData.item.title, placeId: itemData.item.id });
          }}
        />
      }
    />
  );
};

PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Places',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={ HeaderButton }>
        <Item
          title="Add Place"
          iconName={ Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
          onPress={ () => {
            navData.navigation.navigate('NewPlace');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
