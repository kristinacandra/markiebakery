import React from 'react';
import {ScrollView, StyleSheet,  TouchableOpacity, Text, SearchNormal, View, Image} from 'react-native';
import {SearchNormal1, ProfileCircle, Home, Bag} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';

export default function Discover() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.searchButton}>
            <SearchNormal1 color={colors.black()} variant="Linear" size={25} />
        </TouchableOpacity>
        <View style={styles.searchbox}></View>
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
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header2}>
          <Text style={styles.title2}>Markie Bakery</Text>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>        
        <View style={styles.category1}>
          <Image
            style={styles.imageSec}            
            source={{
              uri: 'https://i.pinimg.com/564x/73/80/44/7380448d1697cd3cdf3afc5506356084.jpg'
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
              uri: 'https://i.pinimg.com/564x/e7/4a/93/e74a9302d4a4a65a72ed75222ca73dee.jpg'
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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>        
        <View style={styles.category1}>
          <Image
            style={styles.imageSec}            
            source={{
              uri: 'https://i.pinimg.com/564x/72/ee/b7/72eeb7185c06f0b577e52eb6fbadf0f6.jpg'
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
              uri: 'https://i.pinimg.com/564x/de/19/ba/de19bada39e734a812ecc14561762921.jpg'
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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>        
        <View style={styles.category1}>
          <Image
            style={styles.imageSec}            
            source={{
              uri: 'https://i.pinimg.com/564x/ed/e5/8b/ede58bcb25f0c7a950ba98984e23e2c8.jpg'
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
              uri: 'https://i.pinimg.com/564x/28/bc/e0/28bce0d36b26785bbe602e833e28d797.jpg'
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE0C9',
  },
  searchbox:{
    height:40,
    width:300,
    backgroundColor: '#EBE5DC',
    margin: 3,
    borderRadius: 20,
    borderColor: 'black',
  },
  category1: {
    backgroundColor:'#EEE0C9',
    marginLeft:10,
    height:210,
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