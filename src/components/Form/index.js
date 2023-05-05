import React, {useState} from "react";
import { StyleSheet, Button, View, Text, TextInput } from "react-native";
import ResultImc from "./Resultimc";
export default function Form() {
    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("CALCULAR")

    function imcCalculator() {
        return setImc((peso / (altura * altura)).toFixed(2))
    }
    function validarImc() {
        if (peso != null && altura != null) {
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e a altura")
    }
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.label}>Altura</Text>
                <TextInput
                style={styles.input}
                    placeholder="Ex: 1.75"
                    onChangeText={setAltura} 
                    value={altura}
                    keyboardType="numeric"
                />
                <Text style={styles.label}>Peso</Text>
                <TextInput
                style={styles.input}
                    placeholder="Ex: 70.750"
                    onChangeText={setPeso}
                    value={peso}
                    keyboardType="numeric"
                />
                <View style={styles.botao}>
                <Button
                                style={styles.botao}

                    onPress={() => validarImc()}    
                    title=
                    "CALCULAR IMC"
                />
                </View>
                <ResultImc style={styles.result} messageResultImc={messageImc} ResultImc={imc} />


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'salmon',
        padding:20,
        borderRadius:10,
        width:'90%'
    },
    label:{
        textAlign:'center'

    },
    input:{
        backgroundColor:'lightpink',
        padding:10,
        borderRadius:25,
    },
    botao:{
        marginTop:12,
        marginBottom:12,
    },
    result:{
        fontSize:14,
    }

});
