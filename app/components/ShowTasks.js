import {StyleSheet,Text,View,Pressable, ScrollView} from 'react-native'



ShowTasks = (props) => {
    
    return (
        <View style={styles.allTasksContainer}>
            <View >
                <Text style={styles.allTasksLabel}>
                    All Tasks
                </Text>
                
                <Text style={styles.taskdeleteLabel}>
                    Tap to DELETE 
                </Text>
            </View>
            <ScrollView>
                {props.list !="" &&
                props.list.map((item,index)=>(
                    <Pressable style={styles.goalItem} key={index} onPress={props.rmTask.bind(this,item.id)}>
                        <Text key={index}>{item.task}</Text>
                    </Pressable>
                ))
                }
            </ScrollView>
        </View>
    )
}

export default ShowTasks


const styles = StyleSheet.create({
    allTasksContainer:{
        flex:5 ,
        flexDirection:'column',
        backgroundColor:'#3b78d274',
        justifyContent:'center',
        width:'100%',
        padding:10,
        borderRadius:15,
        overflow:'hidden'
    },
    goalItem:{
        backgroundColor:'#95d295',
        padding:10,
        margin:10,
        borderWidth:1,
        borderColor:'#622e2e',
        borderRadius:5,

    },
    allTasksLabel:{
        flexDirection:'row',
        textAlign:'center',
        justifyContent:'center',
        fontSize:25,
        borderBottomWidth:2,
        color:'#0c00f9',
        fontWeight:'600',
    },
    taskdeleteLabel:{
        flexDirection:'row',
        textAlign:'center',
        justifyContent:'center',
        // borderBottomWidth:1,
        color:'#f90000',
        fontWeight:'400',
        fontSize:12
    }
})