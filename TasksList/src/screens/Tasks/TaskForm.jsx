import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function TaskForm({onAddTask}) {
  const [newTitle, setNewTitle] = useState('')

  const onChangeText = (val) => {
    setNewTitle(val)
  }

  const onAddNewTask = () => {
    if (newTitle === '') return
    onAddTask(newTitle)
    setNewTitle('')
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        onChangeText={onChangeText}
        value={newTitle}
        placeholder='Nouvelle tâche' />
      <TouchableOpacity
        style={styles.button}
        onPress={onAddNewTask}>
        <Text style={styles.buttonText}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: '70%',
    height: 40,
  },
  button: {
    backgroundColor: 'blue',
  },
  buttonText: {
    padding: 8,
    color: 'white',
    fontSize: 16,
  },
});
