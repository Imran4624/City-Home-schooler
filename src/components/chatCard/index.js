import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { MyTheme } from '../../utils';

export const ChatCard = ({ title }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: MyTheme.background, borderTopWidth: 1, borderColor: MyTheme.border, paddingHorizontal: '2%' }}>
    <View style={{ padding: '1%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ backgroundColor: MyTheme.primary, width: 10, height: 10, borderRadius: 5,  }} />
      <Image
        source={require('../../assets/icons/userdummy.jpg')}
        style={{ width: 40, height: 40, borderRadius: 20, overflow: 'hidden',marginLeft:'2%' }}
      />
    </View>
    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'stretch', flexDirection: 'row' }}>
      <View style={{ flex: 4, justifyContent: 'center', padding: '3%', }}>
        <Text style={{ color: MyTheme.textDark, fontSize: 15, fontWeight: 'bold' }}>User Name</Text>
        <Text style={{ color: MyTheme.textDark, fontSize: 12,}}>Just burned 2000 calories. Never take a nap with brownies in the oven </Text>
      </View>
      
      <View style={{
        flex: 0.4, justifyContent: 'center',
        alignItems: 'center', 
      }}>
        <Image
          source={require('../../assets/icons/rightArrow.png')}
          style={{ width: 18, height: 18, }}
        />
      </View>
    </View>
  </View>
);