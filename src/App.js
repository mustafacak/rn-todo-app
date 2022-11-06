import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';

const dataList = [
  {
    id: '1',
    title: 'Buy milk',
    isActive: true,
  },
  {
    id: '2',
    title: 'Buy cast',
    isActive: false,
  },
  {
    id: '3',
    title: 'Buy asdcat',
    isActive: true,
  },
];
const App = () => {
  const [todos, setTodos] = useState(dataList);
  const [text, setText] = useState('');

  const renderTodo = ({item}) => <TodoItem todo={item} toggle={toggleTodo} />;

  const addTodo = () => {
    setTodos([...todos, {id: Date.now(), title: text, isActive: true}]);
    console.log(text);
    setText('');
  };

  const toggleTodo = todo => {
    console.log('test + ' + todo);
    const newTodos = todos.map((item, index) => {
      if (item.id === todo) {
        console.log('item bu:' + item.title);
        item.isActive = !item.isActive;
      }
      return item;
    });
    setTodos(newTodos);
  };

  const todosLength = () => {
    let count = 0;
    todos.forEach(item => {
      if (item.isActive === true) {
        count += 1;
        console.log(item.title);
      }
    });
    return count;
  };

  // render
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Yapılacaklar</Text>
        <Text style={styles.headerText}>{todosLength()}</Text>
      </View>
      <View style={styles.flatView}>
        <FlatList data={todos} renderItem={renderTodo} />
      </View>
      <InputBar add={addTodo} text={text} setText={setText} />
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
