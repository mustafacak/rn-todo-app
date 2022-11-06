import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './TodoItem.styles';

const TodoItem = ({todo, toggle}) => {
  // render
  return (
    <TouchableOpacity
      style={todo.isActive ? styles.active : styles.passive}
      onPress={() => {
        toggle(todo.id);
      }}>
      <Text style={todo.isActive ? styles.title : styles.titlePassive}>
        {todo.title}
      </Text>
    </TouchableOpacity>
  );
};

export default TodoItem;
