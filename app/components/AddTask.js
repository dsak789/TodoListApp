import { StyleSheet, Text, View, TextInput, Button } from "react-native";

AddTask = (props) =>{
return(
    <View style={styles.addTaskContainer}>
        <View>
            <TextInput style={styles.inputField} placeholder='Enter Your Tasks' value={props.goalV.goalV}  onChangeText={e=>{props.goalV.setGoalV(e)}}/>
        </View>
        <View style={styles.addbtnContainer} >
            <Button title='Add Task'onPress={props.goalV.addGoalBtn}/> 
        </View>
    </View>
)
}

export default AddTask;

const styles = StyleSheet.create({
    addTaskContainer:{
        flex:3,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    inputField:{
        height:50,
        width:350,
        borderWidth:2,
        borderColor:'#e79c9c',
        borderRadius:10,
        margin:5,
        paddingLeft:20,
    },
   
    addbtnContainer:{
        marginBottom:20
    }
    
})