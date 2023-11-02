import React from 'react';
import {ScrollView, StyleSheet,  TouchableOpacity, Text, SearchNormal, View, Image, ImageBackground, TextInput, Button} from 'react-native';
import {Notification, Receipt21, Clock, Message, SearchNormal1, HomeTrendUp, ProfileCircle, People, MenuBoard, Stickynote, Setting, Setting2, Home, Home2, Home3, HomeHashtag, HomeWifi, SafeHome, SmartHome, SearchFavorite, Bag2, Bag} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.notifContainer}>
          <TouchableOpacity style={styles.searchButton}>
            <Notification color={colors.black()} variant="Linear" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <Clock color={colors.black()} variant="Linear" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <Setting2 color={colors.black()} variant="Linear" size={25} />
          </TouchableOpacity>          
        </View>        
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
        <View style={styles.header2}>
          <Text style={styles.title2}>Markie Bakery</Text>
        </View>
      </View>
      <View style={styles.cardItem}>
        <ImageBackground
          style={styles.cardImage}
          resizeMode="cover"
          imageStyle={{borderRadius: 20}}
            source={{
            uri: 'https://i.pinimg.com/564x/05/b1/2f/05b12f24ebca6cd9b145a2644210fe91.jpg',
          }}>              
        </ImageBackground>
      </View>
      <View style={styles.container}>
        <View style={styles.header2}>
          <Text style={styles.title2}>New Menu</Text>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>        
        <View style={styles.category1}>
          <Image
            style={styles.imageSec}            
            source={{
              uri: 'https://i.pinimg.com/564x/7d/07/ae/7d07ae8d5d25660da0eeb9140748f905.jpg'
            }}
          />
          <Text style={styles.text}>
            Sauge Bread
          </Text>
          <Text style={styles.des}>
            Rp25.000
          </Text>
        </View>
        <View style={styles.category1}>
          <Image
            style={styles.imageSec}
            source={{
              uri: 'https://i.pinimg.com/564x/35/91/47/359147c5df347e99219f2ab7ad229a7d.jpg'
            }}
          />
          <Text style={styles.text}>
            Blueberry Dessert
          </Text>
          <Text style={styles.des}>
            Rp33.000
          </Text>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <View style={styles.header2}>
          <Text style={styles.title2}>Recommended Menu</Text>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>        
        <View style={styles.category1}>
          <Image
            style={styles.imageSec}
            source={{
              uri: 'https://i.pinimg.com/564x/f9/3b/b9/f93bb98a5debaae2c9a0ccbd55bbce92.jpg'
            }}
          />
          <Text style={styles.text}>
            Chupa Chups Cake
          </Text>
          <Text style={styles.des}>
            Rp127.000
          </Text>
        </View>
        <View style={styles.category1}>
          <Image
            style={styles.imageSec}
            source={{
              uri: 'https://i.pinimg.com/564x/d0/29/ab/d029abff547c029961022fabf8b673a9.jpg'
            }}
          />
          <Text style={styles.text}>
            Mini Cake Decor
          </Text>
          <Text style={styles.des}>
            Rp60.000
          </Text>
        </View>
        <View style={styles.category1}>
          <Image
            style={styles.imageSec}
            source={{
              uri: 'https://i.pinimg.com/564x/a2/00/6f/a2006f630c54a9357e3a9dc6df4db5cd.jpg'
            }}
          />
          <Text style={styles.text}>
            Challah Bread
          </Text>
          <Text style={styles.des}>
            Rp76.000
          </Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE0C9',
  },
  category1: {
    backgroundColor:'#EEE0C9',
    // marginTop:5,
    // marginLeft:10,
    // marginRight:5,
    height:230,
    width:180,
    padding:15,
  },  
  image: {
    width: 50, 
    height: 250,
    borderRadius:30
  },
  imageSec: {
    width: '100%', 
    height: 150,
  },
  notifContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },
  searchButton: {},
  icon: {
    margin: 8,
    // marginRight: 8,
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 0,
    paddingTop:8,
    paddingBottom:4,
    backgroundColor: '#F1F0E8',
  },
  header2: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 0,
    paddingTop:8,
    paddingBottom:4,
    backgroundColor: '#EEE0C9',
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
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  text: {
    fontSize: 18,
    marginTop:5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.black(),
  },
  des: {
    fontSize: 15,
    textAlign: 'center',
    color: colors.black(),
  },
  title2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.black(),
  },
  cardItem: {
    margin: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});