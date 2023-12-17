import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import {useNavigation} from '@react-navigation/native';

export default function Discover() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Discover")}>
            <ArrowLeft color={colors.black()} variant="Linear" size={25} />
        </TouchableWithoutFeedback>
      </View>
      <ListBlog />
          </View>
  );
}

const ListBlog = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.image}            
          source={{
            uri: 'https://i.pinimg.com/564x/73/80/44/7380448d1697cd3cdf3afc5506356084.jpg'
          }}/>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
            Ontbijtkoek
        </Text>
        <Text style={styles.des}>
        Ontbijtkoek atau "kue sarapan pagi", namun biasa disebut roti rempah dari Belanda. Gandum hitam merupakan bahan yang paling penting sebagai pewarna cokelat muda. Sering dibumbui dengan cengkih, kayu manis, jahe, dan pala. Beberapa bagian di Belanda memiliki resep lokal mereka sendiri, yang paling terkenal adalah "Oudewijvenkoek" yang sebagian besar dimakan di daerah utara, dan dibumbui dengan adas manis. Ontbijtkoek ini awalnya disajikan saat sarapan dengan lapisan tebal mentega di atasnya, sebagai pengganti roti. Karena manis, kue ini dapat juga dijadikan camilan. Ontbijtkoek tidak dipanggang di rumah secara tradisional, tetapi diproduksi secara komersial.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE0C9',
  }, 
  image: {
    width: '100%', 
    height: 150,
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
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  text: {
    fontSize: 25,
    marginTop:20,
    textAlign: 'justify',
    fontWeight: 'bold',
    color: colors.black(),
    marginLeft:10,
    marginRight: 10,
  },
  des: {
    fontSize: 20,
    textAlign: 'left',
    color: colors.grey(),
    marginLeft:10,
    marginTop:20,
  },
});