import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native';


const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event:any) => {
    const currentScrollPosition = event.nativeEvent.contentOffset.y;
    if (currentScrollPosition > scrollPosition && navbarVisible) {
      setNavbarVisible(false);
    } else if (currentScrollPosition < scrollPosition && !navbarVisible) {
      setNavbarVisible(true);
    }
    setScrollPosition(currentScrollPosition);
  };

  const navbarStyles = [
    styles.navbar,
    { opacity: navbarVisible ? 1 : 0, transform: [{ translateY: navbarVisible ? 0 : -60 }] },
  ];

  return (
    <View>
      <View style={navbarStyles}>
        <View style={{display:'flex', flexDirection:"row"}}>
        <TouchableOpacity style={styles.navbarButton}>
        <Image style={{width:95 , height:30}} source={require('../../../assets/cynewslogo.png')}  />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.navbarButton}>
          <Text style={styles.navbarButtonText}>Digi News</Text>
        </TouchableOpacity> */}
        </View>
        <TouchableOpacity style={styles.LoginBtn}>
          <Text style={[styles.navbarButtonTextLogin, styles.btnBorder]}>Login</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {/* Your content goes here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#b30b0c',
    height: 60,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    elevation: 1,
    // paddingHorizontal:10
    paddingRight:10
  },
  navbarButton: {
    // paddingHorizontal: 2,
    marginLeft:15,
    paddingVertical: 8,
    backgroundColor:"#ffffff"
    
  },
  LoginBtn: {
    display:"none",
    // paddingHorizontal: 2,
    // marginLeft:15,
    // paddingVertical: 7,
    backgroundColor:"#ffffff",
    borderRadius:5
    
  },
  navbarButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"#274472"
    
  },
  navbarButtonTextLogin: {
    fontSize: 13,
    fontWeight: '400',
    color:"#274472"


    
  },
  scrollView: {
    flex: 1,
    marginTop: 60,
  },
  scrollViewContent: {
    padding: 16,
  },

btnBorder:{

    borderColor:"#274472",
    paddingHorizontal:15,
    paddingVertical:5,
    borderWidth:1,
    borderRadius:5
    
}

});

export default Navbar;