import React from 'react';
import {ScrollView, StyleSheet,  TouchableOpacity, Text, SearchNormal, View, Image, ImageBackground, TextInput, Button} from 'react-native';
import {SearchNormal1, ProfileCircle, Home, Bag, Receipt1, DiscountShape, Wallet, Save2, Notification, Star} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>PROFILE</Text>
      </View>
      <ListBlog />
      <View style={styles.footer}>
          <TouchableOpacity style={styles.searchButton}>
            <Home color={colors.black()} variant="Bold" size={28} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <SearchNormal1 color={colors.black()} variant="Linear" size={28} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <Bag color={colors.black()} variant="Bold" size={28} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <ProfileCircle color={colors.black()} variant="Bold" size={28} />
          </TouchableOpacity>
      </View>
    </View>
  );
}

const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.konten}>
          <View style={styles.profil}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/42/83/e1/4283e1f74e013db4fb3af9688386635d.jpg',
              }}
              style={styles.Image}>
              </Image>
          </View>
          <View style={styles.kolom}>
            <Text style={styles.title2}>Ckristina Candra</Text> 
            <Text style={[styles.teks,{color:'black'}, {fontSize:18}]}>@inicandra</Text>
            <Text style={[styles.teks,{color:'black'}, {fontSize:18}]}>085672118023</Text>  
          </View>            
        </View>
        <View style={styles.konten2}>
          <View>
              <Text style={[styles.title2, {paddingTop:15}]}>My Account</Text>
              <View style={styles.searchButton}>
                <Receipt1 color={colors.black()} variant="Bold" size={20} /> 
                <Text style={[styles.teks, {color:'black'}, {paddingBottom:10}]}> My Orders</Text>
              </View>
              <View style={[styles.Line, {height: 1, opacity: 0.2 }]}></View>
              <View style={styles.searchButton}>
                <Star color={colors.black()} variant="Bold" size={20} /> 
                <Text style={[styles.teks, {color:'black'}, {paddingBottom:10}]}> MaClub</Text>
              </View> 
              <View style={[styles.Line, {height: 1, opacity: 0.2 }]}></View>
              <View style={styles.searchButton}>
                <DiscountShape color={colors.black()} variant="Bold" size={20} /> 
                <Text style={[styles.teks, {color:'black'}, {paddingBottom:10}]}> Promos</Text>
              </View> 
              <View style={[styles.Line, {height: 1, opacity: 0.2 }]}></View>
              <View style={styles.searchButton}>
                <Wallet color={colors.black()} variant="Bold" size={20} /> 
                <Text style={[styles.teks, {color:'black'}, {paddingBottom:10}]}> Paymen Method</Text>
              </View> 
              <View style={[styles.Line, {height: 1, opacity: 0.2 }]}></View>
              <View style={styles.searchButton}>
                <Save2 color={colors.black()} variant="Bold" size={20} /> 
                <Text style={[styles.teks, {color:'black'}, {paddingBottom:10}]}> Saved Address</Text>
              </View> 
              {/* <Text style={[styles.title2, {paddingTop:30}]}>My Account</Text> */}
              <View style={[styles.Line, {height: 1, opacity: 0.2 }]}></View>
              <View style={styles.searchButton}>
                <Notification color={colors.black()} variant="Bold" size={20} /> 
                <Text style={[styles.teks, {color:'black'}, {paddingBottom:10}]}> Notification</Text>
              </View> 
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE0C9',
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height:52,
    elevation: 0,
    paddingTop:8,
    paddingBottom:4,
    backgroundColor: '#F1F0E8',
  },
  header2: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 0,
    paddingTop:8,
    paddingBottom:4,
  },
  footer: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:48,
    elevation: 0,
    paddingTop:4,
    paddingBottom:8,
    borderRadius: 0,
    backgroundColor: '#F1F0E8',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.black(),
  },
  title2: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colors.black(),
    justifyContent: 'center',
  },
  searchButton: {
    flexDirection: 'row',
    paddingTop : 10,
    // justifyContent: 'center',
  },
  profil: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  kolom: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal : 20,
    paddingTop : 10,
  },
  konten: {
    paddingTop: 10,
    margin: 10,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    flexDirection: 'coloumn',
  },
  konten2: {
    paddingTop: 10,
    margin: 10,
    paddingHorizontal: 5,
    paddingBottom:20,
    justifyContent: 'space-between',
    flexDirection: 'coloumn',
  },
  teks: {
    fontSize: 20,
    fontFamily: fontType['Pjs-SemiBold'],
    justifyContent: 'space-between',
    color: 'brown',
  },
  Line: {
    width: '98%',
    height: 1,
    backgroundColor: 'grey',
  },  
  Image: {
    width: 120,
    height: 120,
    borderRadius: 75,
    resizeMode: 'cover',
    borderWidth: 1,
  },
});