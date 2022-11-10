import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import Title from '../components/Title'

// You can import from local files
import AssetExample from '../components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
            
    <View style={styles.container}>
    <Image style={styles.heroimage} 
        source={{uri: 'https://t4.ftcdn.net/jpg/03/49/84/65/360_F_349846565_FgITHB4DUyUX19vOAOuUv5WM6RZCXB6c.jpg'}} />

      <Text style={styles.paragraph}>
        
      </Text>

      <Card>
      <Title text="Locais de entregas" />
        <AssetExample />
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