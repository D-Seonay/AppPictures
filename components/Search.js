// ./components/Search.js
import React from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import Imageitem from './ImageItem';
export default function Search() {
    return (
    <View style={styles.container}>
    <TextInput style={styles.textinput} placeholder="Mot clef " />
    <Button title="Rechercher" />
    <FlatList
    data={[{ key: 'a' }, { key: 'b' }]}
    renderItem={({ item }) => <Imageitem />}
    />
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
    marginTop: 20,
    },
    textinput: {
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    },
});