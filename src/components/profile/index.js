import { View, Text, Image, Pressable, ScrollView, Linking, Alert } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { MyTheme } from '../../utils';
import { deviceWidth } from '../../utils/dimensions';

export const Profile = ({ uid, userData, image, backPress }) => {
  const linkPress = (link) => {
    if (!link) {
      Alert.alert('Error', 'Invalid link')
      return
    }
    console.log('openUrl', link)
    Linking.canOpenURL(link).then(res => {
      console.log('can open url ', res)

      Linking.openURL(link).then(res => { }).catch(err => {
        console.log('cannot open url', err)
      })
    })
      .catch(err => {

        console.log('cannot open url', err)
      })
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: '3%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          {backPress && <Pressable style={{ position: 'absolute', left: 0 }} onPress={() => backPress()}>
            <Image
              source={require('../../assets/icons/leftArrow.png')}
              style={[{ width: 20, height: 20, }]}
            />
          </Pressable>}
          <Image source={require('../../assets/icons/homeLogo.png')}
            style={{ width: '70%', height: 50, borderRadius: 20, overflow: 'hidden', marginBottom: '2%' }}
          />
        </View>
        <Image source={image ? { uri: image } : require('../../assets/icons/userdummy.jpg')}
          style={{ width: '100%', height: deviceWidth - (deviceWidth / 3), borderRadius: 20, overflow: 'hidden' }}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-end', paddingVertical: '2%', marginTop: '2%' }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ color: MyTheme.textDark, fontSize: 16, fontWeight: 'bold' }}>{(userData?.name || '--')}</Text>
            <Text style={{ color: MyTheme.textDark, fontSize: 12 }}>{(userData?.city || '--') + '  ' + (userData?.zipCode || '--')}</Text>
            <Text style={{ color: MyTheme.textDark, fontSize: 12 }}>{(userData?.neighborhood || '--')}</Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../assets/icons/plus.png')}
              style={{ width: 30, height: 30, }}
            />
          </View>

          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
            <Pressable
              onPress={() => logoutHandler()}
              style={{ backgroundColor: MyTheme.yellow, paddingHorizontal: '5%', paddingVertical: '2%', borderRadius: 10 }}>
              <Text style={{ color: MyTheme.black, fontWeight: 'bold', fontSize: 14 }}>
                Message
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={{ borderWidth: 1, borderRadius: 15, borderColor: MyTheme.blue, padding: '4%', marginTop: '5%' }}>
          <Text style={{ color: MyTheme.textDark, fontSize: 15, marginBottom: '3%' }}>About Me...</Text>
          <Text style={{ color: MyTheme.textDark, fontSize: 13 }}>
            {(userData?.aboutYou || '')}
          </Text>
        </View>


        <View style={{ borderWidth: 1, borderRadius: 15, borderColor: MyTheme.blue, padding: '4%', marginTop: '5%' }}>
          <Text style={{ color: MyTheme.textDark, fontSize: 15, marginBottom: '3%' }}>
            Homeschoolers...
          </Text>
          <Text style={{ color: MyTheme.textDark, fontSize: 13 }}>
            {(userData?.aboutHome || '')}
          </Text>
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <SocialIcon
            show={userData?.fb}
            onPress={() => linkPress(userData?.fb)}
            icon={require('../../assets/icons/fb.png')}
          />
          <SocialIcon
            show={userData?.instagram}
            onPress={() => linkPress(userData?.instagram)}
            icon={require('../../assets/icons/instagram.png')}
          />
          <SocialIcon
            show={userData?.twitter}
            onPress={() => linkPress(userData?.twitter)}
            icon={require('../../assets/icons/twitter.png')}
          />
        </View>


      </View>
    </ScrollView>
  )
};


const SocialIcon = ({ show, onPress, icon }) => {

  if (!show)
    return null
  else
    return (
      <Pressable onPress={onPress}>
        <View style={{ width: 40, height: 40, backgroundColor: MyTheme.primary, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginHorizontal: '2%' }}>
          <Image source={icon}
            style={{ width: 25, height: 25, tintColor: MyTheme.accent }}
          />
        </View>
      </Pressable>
    )
}