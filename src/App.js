import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';

const dataList = [
  {
    id: '1',
    title: 'Buy milk',
  },
  {
    id: '2',
    title: 'Buy cast',
  },
  {
    id: '3',
    title: 'Buy asdcat',
  },
];
const App = () => {
  const [todoCount, setTodoCount] = useState(0);

  const renderTodo = ({item}) => <TodoItem todo={item} />;

  // render
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Yapılacaklar</Text>
        <Text style={styles.headerText}>{todoCount}</Text>
      </View>
      <View style={styles.flatView}>
        <FlatList data={dataList} renderItem={renderTodo} />
      </View>
      <InputBar />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  headerText: {
    color: 'orange',
    fontSize: 35,
    fontWeight: 'bold',
    padding: 10,
  },
  flatView: {
    flex: 1,
    //backgroundColor: 'red',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
