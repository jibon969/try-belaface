import {View, StyleSheet, Text} from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.home}>
                <Text>Hello, Home </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    home: {
        flex: 1,
        padding: 5
    }
});

export default Home;