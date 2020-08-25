import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';

const PlacesNavigator = createStackNavigator({
  Places: PlacesListScreen,
  PlaceDetail: PlaceDetailScreen,
  NewPlace: NewPlaceScreen,
  Map: MapScreen
}
);

export default createAppContainer(PlacesNavigator);
