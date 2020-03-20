/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, Dimensions, View, Image} from 'react-native';

export const TabIcon = ({iconName = 'info', ...props}) => {
  const [size, setSize] = useState(props.size);
  const [icon, setIcon] = useState(iconName);
  const [focused, setFocused] = useState(props.focused);

  useEffect(() => {
    setFocused(props.focused);
  }, [props.focused]);

  const image = () => {
    if (icon === 'mainMenu') {
      return 'https://cora-images.s3.eu-central-1.amazonaws.com/1584307413818';
    } else if (icon === 'messages') {
      return 'https://cora-images.s3.eu-central-1.amazonaws.com/1584307221875';
    } else {
      return 'https://cora-images.s3.eu-central-1.amazonaws.com/1584276207178';
    }
  };
  const IconSizeWidth = icon === 'mainMenu' ? 26 : 30;
  const IconSizeHeight = icon === 'mainMenu' ? 36 : 30;
  return (
    <View style={styles.mainView}>
      {/*<Icon name={icon} size={size} color={focused ? 'white' : 'gray'} />*/}
      <Image
        source={{uri: image()}}
        style={{width: IconSizeWidth, height: IconSizeHeight}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  mainView: {
    width: Dimensions.get('window').width / 3 - 30,
    backgroundColor: '#1A2430',
    //#1A2430
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#182234',
    alignItems: 'center',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
  },
});
