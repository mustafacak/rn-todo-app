import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './InputBar.styles';

const InputBar = ({text, setText, add}) => {
  const [todo, setTodo] = useState({});
  // render
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.txtInput}
        placeholderTextColor={'#fff'}
        placeholder="Yapılacak.."
      />
      <TouchableOpacity onPress={add} style={styles.kaydetBtn}>
        <Text style={styles.kaydetBtnText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputBar;
