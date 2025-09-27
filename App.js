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
    <View style={styles.container}>
      <View style={styles.app}>
        <Text style={styles.titulo}>Calcule seu IMC</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu peso" 
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua altura"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />

        <Button 
          title="CALCULAR" 
          color="#a03f5f" 
          onPress={calcularIMC} 
        />


        <View style={styles.apresentar}>
          <Text style={styles.textos}>Resultado: {resultado}</Text>
          <Text style={styles.textos}>Diagnóstico: {diag}</Text>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2e9e6',   
    padding: 10,
  },
  app: {
    width: '90%',
    backgroundColor: '#fffaf9',  
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#b76e79',       
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  titulo: {
    fontSize: 36,
    color: '#a03f5f',             
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 55,
    fontSize: 18,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#e0c7c7',     
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 2,
  },
  
  textos: {
    fontSize: 28,
    textAlign: 'center',
    color: '#a03f5f',               
    marginBottom: 15,
    fontWeight: '600',
  },
  apresentar: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#fff',   
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0c7c7',     
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 2,
  },
});