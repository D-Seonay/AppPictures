// /components/DetailImage.js
import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button} from 'react-native';
import { listeFav } from './AppContext';
function libbuttonfav(id, lesFavoris) { //une fonction pour afficher le bon libelle sur le boutton
 if (lesFavoris.findIndex((idimg) => idimg == id) === -
1){return 'Ajouter aux favories '; } else {return 'Supprimer des favories';}
 }
function togglefav(id,lesFavoris,setlesFavoris){

 if (lesFavoris.findIndex((idimg) => idimg == id) === -1) {
 //si l'id de l'image n'est pas dans le tableau alors on ajoute l'id au tableau des favories
 lesFavoris.push(id)
 setlesFavoris(lesFavoris)
 }else
 {//sinon on supprime l'id du tableau des favoris
 lesFavoris.splice(lesFavoris.findIndex((idimg) => idimg == id),1)
 setlesFavoris(lesFavoris)
 }
}
export default function DetailImage({ navigation, route }) {
 const img = route.params.image.item || 'unknown';
 const [lesFavoris, setlesFavoris] = useContext(listeFav); //on recupere le Hooks depuis le contexte
 const [txtbutton, setTextbutton] = useState(libbuttonfav(img.id, lesFavoris))
 return (
 <View style={styles.container}>
 <Image
 style={{
 width: img.previewWidth,
 height: img.previewHeight,
 marginBottom: 10,
 }}
 source={{ uri: img.previewURL }}
 />
 <Button title={txtbutton} onPress={() => {togglefav(img.id,lesFavoris,setlesFavoris); setTextbu
tton(libbuttonfav(img.id, lesFavoris))}} />
 <Text style={styles.text}>id : {img.id}</Text>
 <Text style={styles.text}>type : {img.type}</Text>
 <Text style={styles.text}>tags : {img.tags}</Text>
 <Text style={styles.text}>downloads : {img.downloads}</Text>
 <Text style={styles.text}>favorites : {img.favorites}</Text>
 <Text style={styles.text}>likes : {img.likes}</Text>
 </View>
 );
}
const styles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    alignItems: 'center',
    },
    text: {
    fontSize: 15,
    },
   });
   