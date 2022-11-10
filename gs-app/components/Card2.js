import { View, Image, Text, StyleSheet} from
'react-native'

export default function Cardd(){
  const posterr = {uri: 'https://img.freepik.com/psd-premium/drone-de-entrega-com-o-cartao_35913-1511.jpg?w=2000'}
  
  return (
    <View style={styles.cardd}>
      <Image style={styles.posterr} source={posterr} />
      <Text style={styles.votee}>R$600,00</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
  
  cardd: {
    width: 100,
    height: 180,
    backgroundColor: '#2e343f',
    borderRadius: 5,
    margin: 8,
    alignItems: 'center',
  },

  posterr: {
    width: 100,
    height: 150,
    borderRadius: 5
  },
  votee: {
    padding: 4,
    color: '#FFF',
    opacity: 0.8
  }
})