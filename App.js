
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Search from './components/Search';
import ImageItem from './components/ImageItem';
import GetPictures  from './components/pixabay';

export default function App() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const data = await GetPictures(query);
    setResults(data.hits);
  };

  const renderResults = () => {
    return results.map((result) => (
      <ImageItem key={result.id} image={result} />
    ));
  };

  return (
    <View>
      <Search onSearch={handleSearch} />
      {results.length > 0 ? (
        renderResults()
      ) : (
        <Text>No results found</Text>
      )}
    </View>
  );
}
