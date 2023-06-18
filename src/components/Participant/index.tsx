import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type PropsParticipant = {
    name: string;
    onRemove: () => void;
}

export function Participant({ name, onRemove }: PropsParticipant) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={onRemove}>-</Text>
            </TouchableOpacity>
        </View>
    )
};
