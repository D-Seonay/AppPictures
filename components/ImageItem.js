// Components/ImageItem.js
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
export default function ImageItem() {
return (
<View style={styles.main_container}>
    <Text style={styles.title_text}>image</Text>
    <Text style={styles.title_text}>tags</Text>
</View>
);
}
const styles = StyleSheet.create({
    main_container: {
    height: 190
    },
    title_text: {
    fontSize:35
    }
})