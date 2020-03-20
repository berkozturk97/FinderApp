/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
const url = "https://instagram.fist2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/71023429_1258918090947485_7483899679116318557_n.jpg?_nc_ht=instagram.fist2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=2nEzcoX7UJwAX-DYp8x&oh=34ce46d55a29d69f29fda8e935898aef&oe=5E9EED98";
const Messages = ({navigation}) => {
    return (
        <View style={styles.container} />
    );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1A2430',
  },
  titleView:{
    flex:0.6,
    justifyContent:'flex-end',
  },
  imageBackground:{
    flex: 1,
  },
  titleText:{
    color:'white',
    fontSize:25,
    fontFamily: 'AvenirNextLTPro-Bold',
    textAlign:'center',
  },
  buttonView:{
    flex:0.4,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  storyView:{
    width:80,
    height:80,
    backgroundColor:'transparent',
    margin:5,
    alignItems:'center'
  },
  imageView:{
    width:70,
    height:70,
    borderRadius:100,
  },
  nameText:{
    color:'white',
    fontFamily:'AvenirNextLTPro-Regular',
    fontSize:11,
    marginTop:5
  },
});

export default Messages;
