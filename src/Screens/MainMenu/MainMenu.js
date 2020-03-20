/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet,Image, TouchableOpacity, StatusBar} from 'react-native';
import Store from '../../Utils/Store/Store';
//obsever için yani dili değişmek için class base yapmak gerekebilir.

const MainMenu = ({navigation}) => {
    return (
    <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <Text style={styles.titleText}>{Store.resource.checkInPage.title}</Text>
        <Text style={styles.subTitleText}>{Store.resource.checkInPage.subTitle}</Text>
        <TouchableOpacity>
        <View style={styles.imageView}>
          <Image source={{uri:'https://cora-images.s3.eu-central-1.amazonaws.com/1584307413818'}} style={styles.imageStyle}/>
        </View>
        </TouchableOpacity>
    </View>
    );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1A2430',
    alignItems:'center',
    justifyContent:'center',
  },
  titleView:{
    flex:0.6,
    justifyContent:'flex-end',
  },
  imageBackground:{
    flex: 1,
  },
  imageStyle:{
    width:100,
    height:138,
  },
  titleText:{
    color:'white',
    fontSize:25,
    marginTop:100,
    fontFamily: 'AvenirNextLTPro-Bold',
    textAlign:'center',
  },
  subTitleText:{
    color:'grey',
    fontSize:15,
    marginTop:15,
    fontFamily: 'AvenirNextLTPro-Regular',
    textAlign:'center',
  },
  flatListView:{
   height:110,
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
    alignItems:'center',
  },
  imageView:{
    backgroundColor:'#212A39',
    marginTop:50,
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height:200,
    borderRadius:300,
  },
  nameText:{
    color:'white',
    fontFamily:'AvenirNextLTPro-Regular',
    fontSize:11,
    marginTop:5,
  },
});

export default MainMenu;

/*
  const renderStories = ({item,index})=>{
    return (
        <TouchableOpacity>
            <View style={styles.storyView}>
                <Image style={styles.imageView} source={{uri:item.photo}} />
                <Text style={styles.nameText}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
  };
  const renderHeader = ({item,index})=>{
    return (
        <NewStoryButton/>
    );
  };
  <FlatList
  data={storyData}
  horizontal
  //showsHorizontalScrollIndicator={false}
  renderItem={renderStories}
  ListHeaderComponent={renderHeader}
/>
*/