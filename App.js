import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button} from 'react-native';

export default function App() {
  const[peso, setPeso] = useState('');
  const[altura, setAltura] = useState('');
  const[resultado, setResultado] = useState(null);
  const[diag, setDiag] = useState('');

  const calcularIMC = () =>{
    if(peso && altura !== ""){
      console.log("peso");
      let imc = peso.replace(',', '.') /(altura.replace(',', '.') * altura.replace(',', '.'));
      setResultado(imc.toFixed(2));
      if(imc < 18.50){
        setDiag("Magreza");
        console.log("imc");
      }else if(imc >= 18.50 && imc <= 24.99){
        setDiag("Normal");
      }else if(imc >= 25.00 && imc <= 29.90){
        setDiag("Sobrepeso");
      }else if(imc >= 30.00 && imc <= 39.99){
        setDiag("Obesidade");
      }else{
        setDiag("Obesidade Grave")
      }
     
    }else{
      alert("Por favor, digite o peso e altura corretamente");
    }
  }

  return (
    <View style={styles.app}>
      <Text style={styles.titulo}>Calcule seu IMC</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite seu peso" 
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite sua altura"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />
      </View>

      <Button style={styles.btn} title='CALCULAR' onPress={calcularIMC}> </Button>
      <View style={styles.apresentar}>
        <Text style={styles.textos}>Resultado: {resultado}</Text>
        <Text style={styles.textos}>Diagnóstico: {diag}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    
  
  },
  titulo: {
    fontSize: 34,
    color: '#f7a29e',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 300,
    borderColor: 'black',
    borderWidth: 2,
    height: 50,
    fontSize: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7a29e',
    height: 50,
    width: 140,
    borderRadius: 8,
    marginTop: 20,
  },
  textos:{
    fontSize: 30,
    textAlign: 'center',


  },
  apresentar:{
    Margin: 20,
  }
});

