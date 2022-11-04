import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputBar from './components/InputBar';

const App = () => {
  const [todoCount, setTodoCount] = useState(0);
  // render
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Yapılacaklar</Text>
        <Text style={styles.headerText}>{todoCount}</Text>
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
});
