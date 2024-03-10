import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import auth from '@react-native-firebase/auth';
import { Header, ChatCard } from '@components';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
export const Message = ({ navigation }) => {


  return (
    <View style={styles.homeContainer}>
      <Header heading={'Messages'} />
      <View style={{ flex: 1, width: '100%' }}>
        <FlatList
          style={{  }}
          data={DATA}
          renderItem={({ item }) => <ChatCard title={item.title} />}
          keyExtractor={item => item.id}
        />
      </View>


    </View>
  );
};
