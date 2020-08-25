import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';

import * as placesActions from '../store/places-action';

const NewPlaceScreen = props => {
    const [titleValue, setTitleValue] = useState('');
    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        //todo add validation
        setTitleValue(text);
    }


    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(titleValue));
        props.navigation.goBack();
    };

    return(
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={titleChangeHandler}
                    value={titleValue}
                /> 
            <Button title="Save place" color={Colors.light.tabIconSelected} onPress={savePlaceHandler}></Button>
            </View>
        </ScrollView>
    );
};

NewPlaceScreen.navigationOptions = navData =>{
    return {
        headerTitle: 'New Place',
    }
};
const styles = StyleSheet.create({
    form: {
        margin:30
    },
    label:{
        fontSize: 18,
        marginBottom: 15
    },
    textInput:{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default NewPlaceScreen;