import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        A Stellantis é uma empresa de entregas que oferece o melhor serviço de envio via Drone do jeito que você precisa. Ideal para lojas virtuais e empresas de todos os tamanhos. Envie quantos pacotes precisar — seja um só ou mais de mil.A gente busca o seu pacote, você acompanha o rastreamento e paga só no mês seguinte. Tudo isso sem sair do seu endereço e sem pesar no seu bolso. Você não precisa pegar filas ou enfrentar o trânsito, o serviço de envio é rápido, seguro, sem custo extra e sem mínimo de pacote. É inteligente e fácil de usar. Encontramos o veículo mais próximo do seu endereço para retirar o pacote e fazer a entrega. Simples assim!
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
    textAlign: 'left',
  },
  logo: {
    height: 22,
    width: 160,
  }
});