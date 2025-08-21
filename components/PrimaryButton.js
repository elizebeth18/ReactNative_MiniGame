import { View, Text, Pressable } from 'react-native';

const PrimaryButton = ({ children }) => {

    const pressHandler = () => {
        console.log('pressed')
    }
    return (
        <Pressable onPress={pressHandler}>
            <View>
                <Text>{children}</Text>
            </View>
        </Pressable>);
}

export default PrimaryButton;