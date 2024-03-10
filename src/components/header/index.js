import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export const Header = ({ heading }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.arrowContainer}>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};
