/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, StatusBar, ActivityIndicator,TouchableOpacity, ScrollView } from 'react-native';
import Store from '../../Utils/Store/Store';
import { LoginButtonPrimary } from '../../Components/LoginButtons';
import { TextInput } from 'react-native-gesture-handler';
//obsever için yani dili değişmek için class base yapmak gerekebilir.

const Profile = ({ navigation }) => {

  const [isVisibleHeader, setVisibleHeader] = useState(true);
  const [isVisibleBottom, setVisibleBottom] = useState(true);

  const renderHeader = () => {
    if (isVisibleHeader === true) {
      return (
        <View>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={styles.nameText}>Tarkan,</Text>
            <Text style={[styles.nameText, { color: 'grey', marginLeft: 5 }]}>22</Text>
          </View>
          <Image source={{ uri: 'https://cdn.sporx.com/img/59/2017/e3c0974c8f23c599c76552a045646ea3.jpg' }} style={styles.profilePhoto} />
          <View style={styles.uniView}>
            <Image source={require('../../Images/School.png')} style={styles.icons} />
            <Text style={styles.uniText}>Bahçeşehir Üniversitesi</Text>
          </View>
          <View style={styles.departmentView}>
            <Image source={require('../../Images/Graduate.png')} style={styles.icons} />
            <Text style={styles.uniText}>Yazılım Mühendisliği</Text>
          </View>
          <View style={{ marginTop: 10, width: Dimensions.get('window').width, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Image source={{}} style={[styles.icons]} />
            <LoginButtonPrimary height={30} width={170} titleSize={12} title={Store.resource.profilePage.settingsButton} />
           <TouchableOpacity>
            <Image source={require('../../Images/Settings.png')} style={[styles.icons, { width: 25, height: 25 }]} />
           </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <ActivityIndicator color="#00B355" size={50} />
        </View>);
    }
  };

  const renderBottom = () => {
    if (isVisibleBottom === true) {
      return (
        <View style={{ flex: 1 }}>
          <Text style={styles.hakkimdaText}>{Store.resource.profilePage.aboutMe} </Text>
          <View style={styles.hakkimdaView}>
            <TextInput
            multiline
            />
          </View>
          <Text style={styles.hakkimdaText}>{Store.resource.profilePage.checkInPlaces}</Text>
          <View style={[styles.hakkimdaView, { flex: 1 }]}>
         
          </View>
        </View>
      );
    } else {
      return (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator color="#00B355" size={70} />
        </View>);
    }
  };


  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.headerContainer}>
        {renderHeader()}
      </View>
      <View style={styles.bottomContainer}>
        {renderBottom()}
      </View>
    </ScrollView>
  );
};
/*
  <Text style={styles.titleText}>{Store.resource.checkInPage.title}</Text>
        <Text style={styles.subTitleText}>{Store.resource.checkInPage.subTitle}</Text>
        <TouchableOpacity>
        <View style={styles.imageView}>
          <Image source={{uri:'https://cora-images.s3.eu-central-1.amazonaws.com/1584307413818'}} style={styles.imageStyle}/>
        </View>
        </TouchableOpacity>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2430',
  },
  headerContainer: {
    flex: 0.45,
    padding:20,
    backgroundColor: '#212A39',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.55,
    padding: 10,
  },
  hakkimdaView: {
    backgroundColor: '#6C778B',
    marginTop: 5,
    height: 80,
    padding:5,
    borderRadius: 20,
  },
  nameText: {
    fontSize: 20,
    marginTop: 30,
    color: 'white',
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  profilePhoto: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderRadius: 10,
    marginTop: 5,
  },
  uniView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,

  },
  departmentView:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  uniText: {
    color: 'grey',
    fontSize: 15,
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  icons: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
  hakkimdaText: {
    marginTop: 5,
    color: 'white',
    fontFamily: 'AvenirNextLTPro-Bold',
  },

});

export default Profile;

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
