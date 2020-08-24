import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors'
import { color } from 'react-native-reanimated';

const CustomHeaderButton = props => {
    return(
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}   
        />

    );
};

export default CustomHeaderButton;