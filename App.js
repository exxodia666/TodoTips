import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoListContainer from './containers/TodoListContainer'
import { Provider } from 'react-redux';
import { Store } from './Store';




export default function App() {
  //const [state, setState] = useState('Basic State');
  return (
    <View style={styles.container}>
      <Provider store = { Store }>
        <TodoListContainer />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
