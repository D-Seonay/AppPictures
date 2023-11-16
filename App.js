
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Image } from 'react-native';
import Search from './components/Search';
import ImageItem from './components/ImageItem';
import GetPictures from './components/Pixabay';


export default function App() {
  const [images, setImages] = useState([]);

  const searchImages = async (searchTerm) => {
    const results = await GetPictures.searchImages(searchTerm);
    setImages(results);
  };

  return (
    <View style={styles.container}>
      <Search onSearch={searchImages} />
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ImageItem image={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
