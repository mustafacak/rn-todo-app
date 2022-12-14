import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';

const dataList = [
  {
    id: '1',
    title: 'Markete git',
    isActive: true,
  },
  {
    id: '2',
    title: 'Evi temizle',
    isActive: false,
  },
  {
    id: '3',
    title: 'Araştırma yap',
    isActive: true,
  },
];
const App = () => {
  const [todos, setTodos] = useState(dataList);
  const [text, setText] = useState('');
  const [todoCount, setTodoCount] = useState(0);

  const renderTodo = ({item}) => (
    <TodoItem todo={item} toggle={toggleTodo} remove={removeTodo} />
  );

  const addTodo = () => {
    text.trim() !== ''
      ? setTodos([...todos, {id: Date.now(), title: text, isActive: true}])
      : null;
    setText('');
  };

  const removeTodo = id => {
    const newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const toggleTodo = todo => {
    const newTodos = todos.map((item, index) => {
      if (item.id === todo) {
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
