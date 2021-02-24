import React, { useState } from 'react';
import { 
StyleSheet,
View,
Text,
Button,
TouchableOpacity,
} from 'react-native';
import Torch from 'react-native-torch';

export default function lanterna() {

  const [check, setCheck] = useState(false)
  const [texto, setTexto] = useState("ligar lanterna")
  const [color, setColor] = useState('green')

  function ligar(){
    setCheck(prevCheck => !prevCheck);
    if (check == true){
      setTexto("ligar lanterna")
      setColor('green')
      Torch.switchState(false)
    } else {
      setTexto("desligar lanterna")
      setColor('red')
      Torch.switchState(true)
    }
    
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ligar} style={[styles.botao, {backgroundColor: color}]}>
        <Text style={styles.botaoText}>{texto}</Text>
      </TouchableOpacity>
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
  botao: {
    padding: 15,
    borderRadius: 7,
  },
  botaoText: {
    color: 'white',
    fontSize: 30
  }
});


