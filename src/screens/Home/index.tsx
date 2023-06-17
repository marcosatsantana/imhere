import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
    return (
        <View style={styles.eventName}>
            <Text style={styles.eventDate}>
                Nome do evento
            </Text>
            <Text style={styles.eventDate}>
                Sexta, 17 de Junho de 2022
            </Text>
        </View>
    )
}