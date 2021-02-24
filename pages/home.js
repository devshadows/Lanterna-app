import React from 'react';
import { 
StyleSheet,
Text,
View,
Button
} from 'react-native';

export default function home(props) {
  return (
    <View style={styles.container}>
        <Button 
        title="Ir para o app"
        onPress = { () => {props.navigation.navigate('Lanterna')}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

