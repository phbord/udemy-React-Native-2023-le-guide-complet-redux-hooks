import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import TasksScreen from './src/screens/Tasks';

function App({children, title}) {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <TasksScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
});

export default App;
