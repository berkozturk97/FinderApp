/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LoginButtonPrimary, LoginButtonSecondary } from '../../Components/LoginButtons';
import { observer } from 'mobx-react';
import Store from '../../Utils/Store/Store';


const Initial = ({ ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const passPage = () => {
   // @observer
    Store.setUserToken("SLK")
   // props.navigation.navigate({ name: 'MainTabNavigator'});
  };
  return (
    <ImageBackground source={{ uri: 'https://instagram.fist2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/71023429_1258918090947485_7483899679116318557_n.jpg?_nc_ht=instagram.fist2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=2nEzcoX7UJwAX-DYp8x&oh=34ce46d55a29d69f29fda8e935898aef&oe=5E9EED98' }} style={styles.imageBackground}>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient colors={['transparent', 'transparent', '#1A2430', '#1A2430']} style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Üniversitende yeni arkadaşlar bul!</Text>
        </View>
        <View style={styles.buttonView}>
          <LoginButtonPrimary onPress={passPage}
            title={'Kayıt Ol'} />
          <LoginButtonSecondary title={'Giriş'} />
        </View>
      </LinearGradient>
    </ImageBackground>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    flex: 0.6,
    justifyContent: 'flex-end',
  },
  imageBackground: {
    flex: 1,
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'AvenirNextLTPro-Bold',
    textAlign: 'center',
  },
  buttonView: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Initial;
