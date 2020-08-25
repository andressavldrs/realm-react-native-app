import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceDetailScreen = props => {
  return (
    <View>
      <Text> Detalhes do lugar aqui -> </Text>
    </View>
  );
};

PlaceDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('placeTitle'),
  };
};
const styles = StyleSheet.create({});

export default PlaceDetailScreen;
