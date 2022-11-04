import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [todoCount, setTodoCount] = useState(0);
  // render
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Yapılacaklar</Text>
        <Text>{todoCount}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
