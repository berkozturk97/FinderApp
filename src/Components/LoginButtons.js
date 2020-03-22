import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const LoginButtonPrimary = ({height = 50, width = 150, ...props}) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={['#00F09A', '#00B355']}
        style={[styles.container, {height: height, width: width}]}>
        <Text style={[styles.titleStyle, {fontSize: props.titleSize}]}>
          {props.title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const LoginButtonSecondary = ({...props}) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={['transparent', 'transparent']}
        style={styles.container}>
        <Text style={styles.titleStyleSecondary}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const NewStoryButton = ({...props}) => {
  return (
    <TouchableOpacity style={{alignItems: 'center'}}>
      <LinearGradient
        colors={['#00F09A', '#00B355']}
        style={styles.circleContainer}>
        <Text style={styles.plus}>+</Text>
      </LinearGradient>
      <Text style={styles.newText}>Yeni</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#00B355',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  titleStyle: {
    fontSize: 16,
    fontFamily: 'AvenirNextLTPro-Bold',
    alignSelf: 'center',
    color: 'white',
  },
  titleStyleSecondary: {
    fontSize: 16,
    fontFamily: 'AvenirNextLTPro-Regular',
    color: '#00B355',
  },
  circleContainer: {
    margin: 5,
    marginBottom: 0,
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    fontSize: 30,
    fontFamily: 'AvenirNextLTPro-Bold',
    color: 'white',
  },
  newText: {
    color: '#00B355',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 11,
    marginTop: 6,
  },
});
