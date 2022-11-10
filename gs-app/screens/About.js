import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import Title from '../components/Title'

// You can import from local files
import AssetExamplea from '../components/AssetExamplea';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
            
    <View style={styles.container}>
    <Image style={styles.heroimage} 
        source={{uri: 'https://ictplus.gr/wp-content/uploads/2022/05/drone-delivery-3.jpeg'}} />

      <Text style={styles.paragraph}>
        
      </Text>

      <Card>
      <Title text="Sobre" />
        <AssetExamplea />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    heroimage:{
    width: '100%',
    height: 150,
    zIndex: -1
    }
});