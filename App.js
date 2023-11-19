import React, {useState} from 'react';
import {ScrollView, StyleSheet,  TouchableOpacity, Text, SearchNormal, View, Image, ImageBackground, TextInput, Button} from 'react-native';
import {Notification, Clock, SearchNormal1, ProfileCircle, Setting2, Home, Bag} from 'iconsax-react-native';
import {BlogHeader,listCategory1, listCategory2} from './data';
import { fontType, colors } from './src/theme';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#EEE0C9',}}>
      <View style={styles.header}>
         <Text style={styles.title}>Welcome</Text>
          <View style={styles.notifContainer}>
            <TouchableOpacity style={styles.searchButton}>
              <Notification color={colors.black()} variant="Linear" size={25} />
            </TouchableOpacity>         
         </View>        
      </View>
      <BlogHead />
      <View style={styles.header2}>
        <Text style={styles.title2}>New Menu</Text>
      </View>
      <BlogCategory1 blogItems={listCategory1} />
      <View style={styles.header2}>
        <Text style={styles.title2}>Recommended Menu</Text>
      </View>
      <BlogCategory2 blogItems={listCategory2} />
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
// penerapan state
const BlogHead = () => {
  const [selectedCategory, setSelectedCategory] = useState('MARKIE BAKERY');
  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };
  return (    
    <ScrollView >
    <View style={styles.container}>
        <View style={styles.cardItem}>
          <ScrollView >
            {BlogHeader.map(categoryData => (
              <TouchableOpacity key={categoryData.id} 
                onPress={() => handleCategoryChange(categoryData.categoryName)}>
                <View
                  style={{
                    ...head.categoryItem,
                    borderColor:
                      selectedCategory === categoryData.categoryName
                        ? 'transparent'
                        : 'white',
                    borderWidth:
                      selectedCategory === categoryData.categoryName ? 1 : 0,
                  }}>
                  <Text
                    style={{
                      ...head.categoryText,
                      color:
                        selectedCategory === categoryData.categoryName
                          ? 'black'
                          : 'brown',
                    }}>
                    {categoryData.categoryName}
                  </Text>
                  <ImageBackground
                    style={styles.cardImage}
                    imageStyle={{borderRadius: 10}}
                    source={{
                      uri: categoryData.uri,
                    }}>              
                  </ImageBackground>              
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
    </View>
    </ScrollView>
  );
};
const head = StyleSheet.create({
  categoryItem: {},
  image: {
    width: 60,
    height: 70,
    borderRadius: 30,
  },
  categoryText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.black(),
    paddingBottom:10,
  },
});
// penerapan props
const BlogCategory1 = props => {
  return (        
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>   
      {props.blogItems.map(item => (
        <View style={styles.category1} key={item.id}>
          <Image
            style={styles.imageSec}
            source={{
              uri: item.image,
            }}
          />
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.des}>{item.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
const BlogCategory2 = props => {
  return (
    <ScrollView horizontal style={styles.horizontalUtama} showsHorizontalScrollIndicator={false}>        
      {props.blogItems.map(item => (
        <View style={styles.category1} key={item.id}>
          <Image
            style={styles.imageSec}
            source={{
              uri: item.image,
            }}
          />
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.des}>{item.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE0C9',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
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
  notifContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },
  searchButton: {},
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
  header2: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:35,
    elevation: 0,
    paddingTop:4,
    paddingBottom:4,
    backgroundColor: '#EEE0C9',
  },
  title2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.black(),
  },
  cardItem: {
    margin: 10,
    flexDirection: 'row',
    borderRadius: 0,
  }, 
  category1: {
    backgroundColor:'#EEE0C9',
    height:230,
    width:180,
    padding:20,
  }, 
  imageSec: {
    width: '100%', 
    height: 120,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.black(),
  },
  des: {
    fontSize: 15,
    textAlign: 'center',
    color: colors.black(),
  },
  horizontalUtama: {},
});