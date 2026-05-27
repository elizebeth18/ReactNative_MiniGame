import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children}) => {
    return (
        <View style={styles.card}>{children}</View>
    );
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 38,
        marginHorizontal: 16,
        borderRadius: 28,
        elevation: 8,  /* this is can be used only for android */
        shadowColor: 'black', /* this is can be used only for iOS */
        shadowOffset: { width: 0, height: 2 }, /* this is can be used only for iOS */
        shadowRadius: 6, /* this is can be used only for iOS */
        shadowOpacity: 0.25, /* this is can be used only for iOS */
        backgroundColor: Colors.primary800
    }
})

export default Card;