import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { MyTheme } from '../../utils/myTheme';
import auth from '@react-native-firebase/auth';
import { Header } from '@components';

export const Setting = ({ navigation }) => {
  const logoutHandler = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User Logout successfully');
      })
      .catch(error => {

        console.error(error);
      });
  };

  const editProfilePress = () => {
    navigation.navigate('CreateProfile', { edit: true })
  }
  const changePasswordPress = () => {
    navigation.navigate('UpdatePassword')
  }
  const deleteAccountPress = () => {
    navigation.navigate('DeleteAccount')
  }

  return (
    <View style={styles.homeContainer}>
      <Header heading={'Settings'} />

      <View style={{ padding: '3%', backgroundColor: 'white', paddingBottom: 30 }}>
        <Text style={{ color: MyTheme.textDark, fontSize: 18, fontWeight: 'bold', }}>Ali Husnain</Text>
      </View>

      <SettingItem title={'Edit Profile'} onPress={editProfilePress} />
      <SettingItem title={'Change Password'} onPress={changePasswordPress} />
      <SettingItem title={'Delete Account'} onPress={deleteAccountPress} />



      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        <Pressable
          onPress={() => logoutHandler()}
          style={{ backgroundColor: MyTheme.yellow, padding: '3%', borderRadius: 10 }}>
          <Text style={{ color: MyTheme.black, fontWeight: 'bold', fontSize: 18 }}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};


const SettingItem = ({ title, onPress }) => {

  return (
    <Pressable onPress={onPress}>
      <View style={{ backgroundColor: 'white', padding: '3%', flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: MyTheme.border, borderBottomWidth: 1 }}>
        <Text style={{ color: MyTheme.black, fontSize: 16 }}>
          {title}
        </Text>
        <Image
          source={require('../../assets/icons/rightArrow.png')}
          style={{ width: 22, height: 22, tintColor: 'grey' }} />
      </View>
    </Pressable>
  )
}