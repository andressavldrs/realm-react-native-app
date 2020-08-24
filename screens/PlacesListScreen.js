import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const PlacesListScreen = props => {
    return(
        <View>
            <Text> PlacesListScreen </Text>
        </View>
    );
};

PlacesListScreen.navigationOptions = navData =>{
    return {
        headerTitle: 'All Places',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Add Place"
                    iconName={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
                    onPress={() => {
                        navData.navigation.navigate('NewPlace');
                    }}
                />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({});

export default PlacesListScreen;