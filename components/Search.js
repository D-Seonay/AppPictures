// ./components/Search.js
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import ImageItem from './ImageItem';
import getPictures from './Pixabay';

export default function Search() {
    const [motrecherche, setMotrecherche] = useState();
    const [data_img, setData_img] = useState();
    return (
    <View style={styles.container}>
    <TextInput
    onChangeText={(text) => setMotrecherche(text)}
    value={motrecherche}
    style={styles.textinput}
    PlaceHolder="Mots Clefs"
    />
    <Button
    title="Rechercher"
    onPress={() => {
    getPictures(motrecherche).then((rep) => {
    setData_img(rep.hits);
    });
    }}
    />
    <FlatList
    data={data_img}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => <Imageitem image={item} />}
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