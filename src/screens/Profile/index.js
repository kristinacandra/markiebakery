import React, {useState, useEffect, useCallback} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator, RefreshControl
} from 'react-native';
import {
  Receipt1,
  DiscountShape,
  Wallet,
  Save2,
  Notification,
  Star,
  Additem,
} from 'iconsax-react-native';
import {fontType, colors} from '../../theme';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import firestore from '@react-native-firebase/firestore';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>PROFILE</Text>
      </View>
      <ListBlog />
    </View>
  );
}

const ListBlog = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const subscriber = firestore()
      .collection('blog')
      .onSnapshot(querySnapshot => {
        const blogs = [];
        querySnapshot.forEach(documentSnapshot => {
          blogs.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setBlogData(blogs);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('blog')
        .onSnapshot(querySnapshot => {
          const blogs = [];
          querySnapshot.forEach(documentSnapshot => {
            blogs.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setBlogData(blogs);
        });
      setRefreshing(false);
    }, 1500);
  }, []);
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>      
      <View style={styles.container}>
        <View style={styles.konten}>
          <View style={styles.profil}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/42/83/e1/4283e1f74e013db4fb3af9688386635d.jpg',
              }}
              style={styles.Image}></Image>
          </View>
          <View style={styles.kolom}>
            <Text style={styles.title2}>Ckristina Candra</Text>
            <Text style={[styles.teks, {color: 'black'}, {fontSize: 18}]}>
              @inicandra
            </Text>
            <Text style={[styles.teks, {color: 'black'}, {fontSize: 18}]}>
              085672118023
            </Text>
          </View>
        </View>
        <View style={styles.konten2}>
          <View>
            <Text style={[styles.title2, {paddingTop: 15}]}>My Account</Text>
            <View style={styles.searchButton}>
              <Receipt1 color={colors.black()} variant="Bold" size={20} />
              <Text
                style={[styles.teks, {color: 'black'}, {paddingBottom: 10}]}>
                {' '}
                My Orders
              </Text>
            </View>
            <View style={[styles.Line, {height: 1, opacity: 0.2}]}></View>
            <View style={styles.searchButton}>
              <Star color={colors.black()} variant="Bold" size={20} />
              <Text
                style={[styles.teks, {color: 'black'}, {paddingBottom: 10}]}>
                {' '}
                MaClub
              </Text>
            </View>
            <View style={[styles.Line, {height: 1, opacity: 0.2}]}></View>
            <View style={styles.searchButton}>
              <DiscountShape color={colors.black()} variant="Bold" size={20} />
              <Text
                style={[styles.teks, {color: 'black'}, {paddingBottom: 10}]}>
                {' '}
                Promos
              </Text>
            </View>
            <View style={[styles.Line, {height: 1, opacity: 0.2}]}></View>
            <View style={styles.searchButton}>
              <Wallet color={colors.black()} variant="Bold" size={20} />
              <Text
                style={[styles.teks, {color: 'black'}, {paddingBottom: 10}]}>
                {' '}
                Payment Method
              </Text>
            </View>
            <View style={[styles.Line, {height: 1, opacity: 0.2}]}></View>
            <View style={styles.searchButton}>
              <Save2 color={colors.black()} variant="Bold" size={20} />
              <Text
                style={[styles.teks, {color: 'black'}, {paddingBottom: 10}]}>
                {' '}
                Saved Address
              </Text>
            </View>
            {/* <Text style={[styles.title2, {paddingTop:30}]}>My Account</Text> */}
            <View style={[styles.Line, {height: 1, opacity: 0.2}]}></View>
            <View style={styles.searchButton}>
              <Notification color={colors.black()} variant="Bold" size={20} />
              <Text
                style={[styles.teks, {color: 'black'}, {paddingBottom: 10}]}>
                {' '}
                Notification
              </Text>
            </View>
            <View style={[styles.Line, {height: 1, opacity: 0.2}]}></View>
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => navigation.navigate('AddBlog')}>
              <Additem color={colors.black()} variant="Bold" size={20} />
              <Text
                style={[styles.teks, {color: 'black'}, {paddingBottom: 10}]}>
                {' '}
                Add New Menu
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 10, gap: 10}}>
            {loading ? (
              <ActivityIndicator size={'large'} color={colors.blue()} />
            ) : (
              blogData.map((item, index) => (
                <ItemSmall item={item} key={index} />
              ))
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const ItemSmall = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => navigation.navigate('EditBlog', {blogId: item.id})}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item?.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'row',
            gap: 30,
          }}>
          <View style={{gap: 5, flex: 1}}>
            <Text style={styles.cardTitle}>{item?.title}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE0C9',
  },
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    elevation: 0,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: '#F1F0E8',
  },
  header2: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 0,
    paddingTop: 8,
    paddingBottom: 4,
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
    paddingTop: 10,
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
    paddingHorizontal: 20,
    paddingTop: 10,
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
    paddingBottom: 20,
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
