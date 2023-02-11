import {View, StyleSheet, Text} from 'react-native'

const Home = () => {
    return (
        <View style={styles.homeContainer}>
            <View style={styles.contact}>
                <Text>Hello, Home </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
    },
    home: {
        flex: 1,
        padding: 5
    }
});

export default Home;