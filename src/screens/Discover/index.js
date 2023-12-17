import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {SearchNormal1} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import {useNavigation} from '@react-navigation/native';

export default function Discover() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback style={styles.searchButton} onPress={() => navigation.navigate("Discover")}>
            <SearchNormal1 color={colors.black()} variant="Linear" size={25} />
        </TouchableWithoutFeedback>
        <View style={styles.searchbox}></View>
      </View>
      <ListBlog />
    </View>
  );
}

const ListBlog = () => {
  const navigation = useNavigation()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
          <Text style={styles.text} onPress={() => navigation.navigate("Detail")}>
            Ontbijtkoek
          </Text>
          <Text style={styles.des}>
            Rp35.000
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
            Cookies
          </Text>
          <Text style={styles.des}>
            Rp23.000
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
            Mini Blueberry Dessert
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
            Cat Cookies
          </Text>
          <Text style={styles.des}>
            Rp14.000
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
            Croissant
          </Text>
          <Text style={styles.des}>
            Rp41.000
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
            Choco Cake
          </Text>
          <Text style={styles.des}>
            Rp27.000
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
              uri: 'https://i.pinimg.com/564x/05/9f/2f/059f2f570464889d15e46b6c7d6545cb.jpg'
            }}
          />
          <Text style={styles.text}>
            Cheesecake
          </Text>
          <Text style={styles.des}>
            Rp29.000
          </Text>
        </View>
        <View style={styles.category1}>
          <Image
            style={styles.imageSec}
            source={{
              uri: 'https://i.pinimg.com/564x/6b/dc/a1/6bdca103c8544e7e926a8193dc631187.jpg'
            }}
          />
          <Text style={styles.text}>
            Bear Birthday Cake
          </Text>
          <Text style={styles.des}>
            Rp127.000
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