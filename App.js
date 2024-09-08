import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { useEffect, useState } from 'react'; 

import AddTask from './app/components/AddTask';
import ShowTasks from './app/components/ShowTasks'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [goal,setGoal] = useState('')
  const [goals,setGoals] = useState([])

  const addGoal = async ()=>{
    setGoals((CurGoals)=>[...CurGoals,{task:goal,id:Math.random().toString()}])
    await AsyncStorage.setItem('tasks',JSON.stringify(goals))
    setGoal('')
  }
  
  const removeTask =async (item) =>{
    console.log('Delete-X',item)
    // console.log('Data ==>',goals)
    setGoals((CurGoals)=>{
      return CurGoals.filter((goal)=>goal.id !== item)
    })
    await AsyncStorage.setItem('tasks',JSON.stringify(goals))
  }

  const gettasks = async() =>{
    const tasks = await AsyncStorage.getItem('tasks')
    const goals = tasks ? JSON.parse(tasks) : []
    setGoals(goals)
  }

useEffect(()=>{
  gettasks()
},[])


  const values = {
    'goalV': goal,
    'setGoalV': setGoal,
    'addGoalBtn':addGoal
  }
  return (
    <View style={styles.view}>
      <Text style={styles.logo}>Todo List</Text>
      <AddTask goalV={values}/>
      <ShowTasks list={goals} rmTask={removeTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  
  view:{
    flex:1,
    margin:15,
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'#caccca',
    borderRadius:5
  },
  logo:{
    margin:'auto',
    marginTop:20,
    backgroundColor:'#bcc449',
    borderBottomWidth:2,
    borderLeftWidth:5,
    borderRadius:10,
    width:'100%',
    padding:10,
    textAlign:'center',
    borderLeftColor:'#ff0808',
    color:'#eb240a',
    fontWeight:'900',
    fontSize:25,
    letterSpacing:12,
  }
});
