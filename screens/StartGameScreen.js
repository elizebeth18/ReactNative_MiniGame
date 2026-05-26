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
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 16,
        borderRadius: 28,
        elevation: 8,  /* this is can be used only for android */ 
        shadowColor: 'black', /* this is can be used only for iOS */ 
        shadowOffset: {width: 0, height: 2}, /* this is can be used only for iOS */ 
        shadowRadius: 6, /* this is can be used only for iOS */ 
        shadowOpacity: 0.25, /* this is can be used only for iOS */ 
        backgroundColor: '#3b021f'
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
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
})

export default StartGameScreen;