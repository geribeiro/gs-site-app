import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import Title from '../components/Title'
import Card from '../components/Card'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'

import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.heroimage} 
        source={{uri: 'https://www.trendsce.com.br/wp-content/uploads/2022/02/Kim-Drone-site.jpg'}} />

    <View style={styles.containerr}>
    <Title text="Serviços de entregas" />
          <Text style={styles.paragraph}>
        Envie para endereços próximos em poucos minutos, sem burocracia e com o melhor serviço de entrega. Precisa enviar um pacote, um presente, um documento ou mandar alguém buscar algo que esqueceu? A gente também te ajuda. Envie com a Stellantis e acompanhe tudo em tempo real.
      </Text>

      </View>      <TouchableOpacity onPress={() => navigation.navigate('Detalhes')}>
        <Text style={styles.button}>detalhes</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.containerr}>
      <Title text="Escolha seu plano:" />
      </View>
      <View style={styles.section}>
        <Card />
        <Card1 />
        <Card2 />

    </View>
    <View style={styles.containerr}>
    <Title text="Entrega para todo o Brasil" />
          <Text style={styles.paragraph}>
        Envie e receba pacotes com um serviço de entrega rápido e seguro!
      </Text>

  </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#dbdbdb',
    padding: 8,
  },
  containerr: {
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 3,
  },
  section: {
    flexDirection: 'row',
  },
  heroimage:{
    width: '100%',
    height: 150,
    zIndex: -1,
    marginBottom: 8
  },
  button: {
    width: 100,
    marginTop: 6,
    marginBottom: 6,
    backgroundColor: '#2e343f',
    padding: 5,
    color: '#FFF',
    textAlign: 'center',
    borderRadius: 5,
    alignSelf: 'center'
  }
});
