import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';
import { useState } from 'react';

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome.');
        }
        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover', `Remover o participante ${name} ?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participants => participants !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>
            <Text style={styles.eventDate}>
                Sexta, 17 de Junho de 2023
            </Text>
            <View style={styles.form}>
                <TextInput
                    value={participantName}
                    onChangeText={setParticipantName}
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor='#6B6B6B'
                    //keyboardType='numeric'
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguem chegou no evento ainda ? Adicione participants a sua lista de prensença.
                    </Text>
                )}
            />

        </View>
    )
}