import {View, StyleSheet, Text} from 'react-native'

const About = () => {
    return (
        <View style={styles.container}>
            <View style={styles.about}>
                <Text>Hello, About </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    about: {
        flex: 1,
        padding: 5
    }
});

export default About;