import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import TaskTile from './TaskTile'
import TaskForm from './TaskForm'
import FloatingBtn from '../../components/FloatingBtn'
import Counter from '../../components/Counter'

export default function TasksScreen() {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [tasks, setTasks] = useState([])

  const renderItem = ({item}) => {
    return (<TaskTile task={item} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />)
  }

  const onAddTask = (title) => {
    setTasks([...tasks, {
      id: Date.now(),
      title,
      isCompleted: false,
    }])
  }

  const onDeleteTask = (id) => {
    let newTasks = []

    tasks.forEach(t => {
      if (t.id !== id) {
        newTasks.push(t)
        return
      }
    })

    setTasks(newTasks)
  }

  const onUpdateTask = (id) => {
    let newTasks = []

    tasks.forEach(t => {
      if (t.id !== id) {
        newTasks.push(t)
        return
      }

      newTasks.push({
        id,
        title: t.title,
        isCompleted: !t.isCompleted
      })
    })

    setTasks(newTasks)
  }

  const toggleForm = () => setIsFormVisible(!isFormVisible)

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {isFormVisible && <TaskForm onAddTask={onAddTask} />}
            <View style={styles.containerCounters}>
              <Counter nb={tasks.length} title="Tâches crées" />
              <Counter nb={tasks.filter(t => t.isCompleted === true).length} title="Tâches effectuées" />
            </View>
          </>
        }
        contentContainerStyle={{flexGrow: 1}}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem} />
      <FloatingBtn toggle={toggleForm} isOpen={isFormVisible} />
    </>
  )
}

const styles = StyleSheet.create({
  containerCounters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
