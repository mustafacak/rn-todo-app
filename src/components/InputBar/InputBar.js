import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './InputBar.styles';

const InputBar = () => {
  // render
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.txtInput}
        placeholderTextColor={'#fff'}
        placeholder="Yapılacak.."
      />
      <TouchableOpacity style={styles.kaydetBtn}>
        <Text style={styles.kaydetBtnText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputBar;
