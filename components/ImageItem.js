// Components/ImageItem.js
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function Imageitem(image) {

 const img = image.image;
 //console.log(img)

return (
<View style={styles.main_container}>
 <Image style={styles.image} source={{ uri: img.webformatURL }}/>
 <Text style={styles.title_text}>Id :{img.id}</Text>
 <Text style={styles.title_text}>tags :{img.tags}</Text>
 <Text style={styles.title_text}>downloads :{img.downloads}</Text>
</View>
);
}


const styles = StyleSheet.create({
 main_container: {
 marginLeft: 10,
marginRight: 10,
 height: 190,
 marginTop: 50,
 marginBottom: 50
 },
 title_text: {
 fontSize:20
 },
 image: {
   width: '100%',
   height: '80%',
   borderRadius: 3, 
 }
})