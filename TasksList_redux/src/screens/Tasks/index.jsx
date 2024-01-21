import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTask, toggleTask} from '../../redux/actions';
import {getTasks} from '../../redux/selectors';
import Header from '../../components/Header';
import TaskTile from './TaskTile';
import TaskForm from './TaskForm';
import FloatingBtn from '../../components/FloatingBtn';
import Counter from '../../components/Counter';

export default function TasksScreen() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  console.log('useSelector(getTasks) ====>', tasks);

  const renderItem = ({item}) => {
    return (
      <TaskTile
        task={item}
        onUpdateTask={onUpdateTask}
        onDeleteTask={onDeleteTask}
      />
    );
  };

  const onDeleteTask = id => {
    dispatch(deleteTask(id));
  };

  const onUpdateTask = id => {
    dispatch(toggleTask(id));
  };

  const toggleForm = () => setIsFormVisible(!isFormVisible);

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {isFormVisible && <TaskForm />}
            <View style={styles.containerCounters}>
              <Counter nb={tasks.length} title="Tâches crées" />
              <Counter
                nb={tasks.filter(t => t.isCompleted === true).length}
                title="Tâches effectuées"
              />
            </View>
          </>
        }
        contentContainerStyle={{flexGrow: 1}}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <FloatingBtn toggle={toggleForm} isOpen={isFormVisible} />
    </>
  );
}

const styles = StyleSheet.create({
  containerCounters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
