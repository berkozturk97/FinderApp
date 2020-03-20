import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

export const TabLabel = ({title = '', ...props}) => {
  const [focused, setFocused] = useState(props.focused);

  // [] içerisindeki props.isFocused değiştiği zaman useEffect yeniden çalışacak demektir.
  useEffect(() => {
    setFocused(props.focused);
  }, [props.focused]);

  /*
 <Text style={[styles.text, focused ? {color: 'white'} : {color: 'gray'}]}>
      {title}
    </Text>
  */
  return <View />;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 11,
  },
});
