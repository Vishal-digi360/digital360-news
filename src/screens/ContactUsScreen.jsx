import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity, Linking } from 'react-native';
import Navbar from '../components/Navbar/Navbar';

const ContactUsScreen = () => {
  return (
    <>
    <Navbar/>
      <View style={styles.container}>
        {/* <Text style={styles.Text1}>Contact</Text> */}

        <Text style={styles.Text11}>Centralized Dealing Desk</Text>

        <View style={styles.container2}>
          {/* box1; */}
          <TouchableOpacity style={[styles.box,{marginRight:6}]} onPress={()=>{ Linking.openURL(`tel:${7055333321}`)}}>
          <Image
              style={styles.call}
              source={require('../../assets//call.png')}
            />
            <Text style={styles.boxText}>+91 7055333321</Text>
          </TouchableOpacity>

          {/* box2; */}
          {/* <TouchableOpacity style={[styles.box,{marginLeft:6}]} onPress={()=>{ Linking.openURL(`tel:${7055333321}`)}}>
            <Image
              style={styles.call}
              source={require('../assets/global/call.png')}
            />
            <Text style={styles.boxText}>+91 7055333321</Text>
          </TouchableOpacity> */}

        </View>
        <Text style={styles.Text11}>Customer Care</Text>
        <View style={styles.container2}>
          {/* box1; */}
          <TouchableOpacity style={[styles.box,{marginRight:6}]} onPress={()=>{ Linking.openURL(`tel:${7055333321}`)}}>
          <Image
              style={styles.call}
              source={require('../../assets//call.png')}
            />
            <Text style={styles.boxText}>+91 7055333321</Text>
          </TouchableOpacity>

          {/* box2; */}
          <TouchableOpacity style={[styles.box,{marginLeft:6}]} onPress={()=>{ Linking.openURL(`tel:${7055333321}`)}}>
            <Image
              style={styles.call}
              source={require('../../assets//call.png')}
            />
            <Text style={styles.boxText}>+91 7055333321</Text>
          </TouchableOpacity>

        </View>
        
        <Text style={styles.Text11}>Email us at</Text>
        <View style={styles.container2}>
          {/* box3; */}
          <TouchableOpacity style={[styles.box,{width:"70%"}]} onPress={()=>{Linking.openURL('mailto:'+"info@cyberyouth.com")}}>
            <Image
              style={styles.email}
              source={require('../../assets/email.png')}
            />
            <Text style={styles.boxText}>info@cyberyouth.com</Text>
          </TouchableOpacity>

        </View>
        
      </View>
    </>
  )
}

export default ContactUsScreen

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#e6ebe6',
    paddingTop:40
  },
  Text1: {
    color: '#000000',
    fontSize: 20,
    fontWeight: "600",
    padding: 10,
  },
  Text11: {
    color: '#000000',
    fontSize: 20,
    fontWeight: "600",
    paddingLeft: 20,
    paddingBottom:10,
    marginTop:20,
  },
  view1: {
    background: "#C2DE86",
  },
  call: {
    height: 20,
    width: 20,
  },
  email: {
    height: 20,
    width: 25,
  },
  container2:{
    flexDirection:'row',
    width:'92%',
    marginHorizontal:'3%',
    
  },
  box:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    width:"50%",
    backgroundColor: "#b30b0c",
    padding:10,
    borderRadius:5,
    justifyContent:"flex-start"
  },
  boxText:{
    color:"#ffffff",
    paddingLeft:6,
  }
})