import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { themes } from "../../res/themes";
import { colors } from '../../res/colors';

renderItem = (item, index) => {
    return (
        <View>
            <TouchableOpacity style={{ paddingHorizontal: 10 }}
                // onPress={() => alert(item.category_name)}>
                onPress={() => null}>
                <Text style={{ color: colors.textColor }}>{item.category_name}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default HorizontalTabView = props => {
    return (<View style={themes.headerContainer}>
        {props.allCategories.length > 0 && <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1, }}
            data={props.allCategories}
            renderItem={({ item, index }) => renderItem(item, index)}
            keyExtractor={item => item._id} />}
    </View>);
}