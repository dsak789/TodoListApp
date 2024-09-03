import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { useState } from 'react'; 

import AddTask from './app/components/AddTask';
import ShowTasks from './app/components/ShowTasks'


export default function App() {
  const [goal,setGoal] = useState('')
  const [goals,setGoals] = useState([])

  const addGoal = ()=>{
    setGoals((CurGoals)=>[...CurGoals,{task:goal,id:Math.random().toString()}]  )
    setGoal('')
  }

  const removeTask = (item) =>{
    console.log('Delete-X',item)
    // console.log('Data ==>',goals)
    setGoals((CurGoals)=>{
      return CurGoals.filter((goal)=>goal.id !== item)
    })
    
}


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
    backgroundColor:'#564a4a',
    borderBottomWidth:2,
    borderLeftWidth:5,
    borderRadius:10,
    width:'100%',
    padding:10,
    textAlign:'center',
    borderLeftColor:'#bcacac',
    color:'#bececc',
    fontSize:20,
  }
});
