import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
// import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Bread'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Juice'},
  ]);

  const deleteItem = (id: string): any => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 60,
  },
});

export default App;
