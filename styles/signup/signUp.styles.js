import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      padding:24,
      flex:1
    },
    title:{
      justifyContent:'center',
      alignSelf:'center',
      fontSize:30,
      marginVertical:35
    },
    subTitle:{
      fontSize:20,
      marginBottom:8
    },
    inputContainer:{
      alignSelf:'center'
    },
    inputControls:{
      paddingHorizontal:10,
      backgroundColor:"white",
      borderRadius: 10,
      borderWidth: 1,
      height:40,
      width:300,
      marginBottom:10
    },
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: 150,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: 'black',
    },
    buttonLabel: {
      color: 'white',
      fontSize: 20,
      justifyContent:'center'
    },
    footer:{
      textAlign:"center",
      paddingVertical:8
    },
  });

  export default styles