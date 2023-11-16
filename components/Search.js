// ./components/Search.js
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text} from 'react-native';
import Imageitem from './ImageItem';
import GetPictures from './Pixabay';
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
 GetPictures(motrecherche).then((rep) => {
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
 borderRadius: 5,
 borderWidth: 1,
 height: 30,
 },
});