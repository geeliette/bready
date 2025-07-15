import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo style={styles.img} />

            <ThemedText style={styles.title}>
                The Number 1
            </ThemedText>

            <Spacer height={10} />
            <ThemedText>Reading List App</ThemedText>
            <Spacer />

            <Link href="/login" style={styles.link}>
                <ThemedText>Login</ThemedText>
            </Link>
            <Link href="/register" style={styles.link}>
                <ThemedText>Register</ThemedText>
            </Link>
            <Link href="/profile" style={styles.link}>
                <ThemedText>Profile</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    img: {
        width: 150,
        height: 150,
        resizeMode: 'center'
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})