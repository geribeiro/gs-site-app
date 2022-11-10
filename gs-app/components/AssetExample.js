import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Nossa malha logística chega no Brasil inteiro, onde você e seus clientes estiverem. Sem fronteiras para expandir suas vendas com o nosso serviço de entregas. Envie o seu pacote com agilidade e segurança e aumente a presença dos seus produtos em todo o país. Confira como é simples.
      </Text>
      <Image style={styles.logo} source={require('../assets/logo.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    textAlign: 'center',
  },
  logo: {
    height: 22,
    width: 160,
  }
});