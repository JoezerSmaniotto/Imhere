import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export default function Home() {
  const [participants, setParticipants]=useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  
  function handleParticipantAdd() {
    if(participantName === ''){
      return Alert.alert("Informe Participante","Informe um nome para o participante!")
    }
    if(participants.includes(participantName)){
       return Alert.alert("Participante existe","Já existe  um participante na lista com este nome.")
    }else{
      setParticipants(prevState =>[...prevState, participantName])
      setParticipantName('')
    }

  }
  
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover",`Remover o participante ${name} ?`,[
        {
            text: 'Sim',
            onPress: ()=> setParticipants(prevState => prevState.filter(participant => participant !== name))
        },
        {
            text: 'Não',
            style: 'cancel'
        }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 30 de Junho de 2023.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participantes"
          placeholderTextColor="#6B6B6B"
          //onChangeText={text => setParticipantName(text)}
          onChangeText={setParticipantName} //onChangeText da linha acima e desta funcionam da mesma forma.
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item})=>(
            <Participant
                key={item}
                name={item} 
                onRemove={()=> handleParticipantRemove(item)}
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
            <Text style={styles.listEmptyText}>
                Ninguém chegou a no evento ainda ? Adicione participantes a lista de presença.
            </Text>
        )}
      />
      
    </View>
  );
}
