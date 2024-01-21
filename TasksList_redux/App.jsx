import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import TasksScreen from './src/screens/Tasks';

function App({children, title}) {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <TasksScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
