import { View, Image, Text, StyleSheet} from
'react-native'

export default function Cardd(){
  const poster = {uri: 'https://cdn.assinebem.com.br/media/noticias/2022/04/13/388/drones-para-delivery-trazem-inovacao-nas-entregas-400x600.png'}
  
  return (
    <View style={styles.card}>
      <Image style={styles.poster} source={poster} />
      <Text style={styles.vote}>R$60,00</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
  
  card: {
    width: 100,
    height: 180,
    backgroundColor: '#2e343f',
    borderRadius: 5,
    margin: 8,
    alignItems: 'center',
  },

  poster: {
    width: 100,
    height: 150,
    borderRadius: 5
  },
  vote: {
    padding: 4,
    color: '#FFF',
    opacity: 0.8
  }
})