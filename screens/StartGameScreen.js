import { StyleSheet, View, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Cancel</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        //flex:1,
        padding: 16,
        marginTop: 100,
        marginHorizontal: 16,
        borderRadius: 8,
        elevation: 8,
        backgroundColor: '#72063c'
    },
    numberInput: {
        height: 60,
        width: 60,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default StartGameScreen;