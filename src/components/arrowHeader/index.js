import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export const ArrowHeader = ({ heading }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.arrowContainer}>
      <Pressable style={styles.arrowPress} onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/icons/leftArrow.png')}
          style={styles.leftArrow}
        />
      </Pressable>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.free}></View>
    </View>
  );
};
