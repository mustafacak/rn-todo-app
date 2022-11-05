import React from 'react';
import {View, Text} from 'react-native';
import styles from './TodoItem.styles';

const TodoItem = ({todo}) => {
  // render
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
    </View>
  );
};

export default TodoItem;
