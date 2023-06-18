import { Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export default function Home() {

    const participantes = ['Rodrigo', 'Marcos', 'Lucas', 'David', 'Rosinha', 'Hobbs', 'Reaves', 'Matheus', 'Thallys', 'Douglas', 'Figma'];

    function handleParticipantAdd() {
        console.log('você clicou para add')
    }

    function handleParticipantRemove(name: string) {
        console.log(`Você clicou em remover o participante ${name}`);
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
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor='#6B6B6B'
                    keyboardType='numeric'
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participantes.map(participant => (
                        <Participant
                            key={participant}
                            name={participant}
                            onRemove={() => handleParticipantRemove('Lucas Souza')} />
                    ))
                }
            </ScrollView>

        </View>
    )
}