import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export default function Home() {

    const participants = ['Rodrigo', 'Marcos', 'Lucas', 'David', 'Rosinha', 'Hobbs', 'Reaves', 'Matheus', 'Thallys', 'Douglas', 'Figma'];

    function handleParticipantAdd() {
        if (participants.includes('Rodrigo')) {
            return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome.')
        }
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover', `Remover o participante ${name} ?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado", 'Usuario deletado com sucesso!')
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
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor='#6B6B6B'
                    keyboardType='numeric'
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