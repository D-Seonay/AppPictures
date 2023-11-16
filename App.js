import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search'
import Nav from './NAV/nav'
import { listeFav } from './components/AppContext';

export default function App() {
  const [myFav,setmyFav] = useState([]);

  return (
    <listeFav.Provider value={[myFav,setmyFav]}>
      <Nav />
    </listeFav.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});