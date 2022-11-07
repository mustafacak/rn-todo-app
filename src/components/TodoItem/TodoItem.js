import React, {useState} from 'react';
import {View, Text, Pressable, Animated} from 'react-native';
import styles from './TodoItem.styles';

const TodoItem = ({todo, toggle, remove}) => {
  // render
  return (
    <View>
      <Pressable
        style={todo.isActive ? styles.active : styles.passive}
        onLongPress={() => {remove(todo.id)}}
        onPress={() => {
          toggle(todo.id);
        }}>
        <Text style={todo.isActive ? styles.title : styles.titlePassive}>{todo.title}</Text>
      </Pressable>
    </View>
  );
};

export default TodoItem;
