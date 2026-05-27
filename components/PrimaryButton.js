import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/colors.js';

const PrimaryButton = ({ children, onJPress }) => {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={onJPress}
                 android_ripple={{ color: Colors.primary600 }}>
                <Text style={styles.butonText}>{children}</Text>
            </Pressable>
        </View>);
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    butonText: {
        textAlign: 'center',
        color: 'white'
    },
    pressed: {
        opacity: 0.75
    }
})
export default PrimaryButton;