import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Title, Image, TouchableOpacity, Button } from 'react-native';
import { DisplayAnImage } from '../../Components/Image.tsx'
import { ProfilePicture } from '../../Components/ProfilePicture.tsx'
import { useNavigation } from '@react-navigation/native';

export function Profile(token) {
    const navigation = useNavigation();
    const [id, setId] = React.useState(null);
    useEffect(() => {
        async function fetchData(token) {
            const response = await fetch('https://masurao.fr/api/employees/me', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-Group-Authorization": "Xqkwp3zjCVdV0fBhfzMASBwnK9DcE4xW",
                    Authorization: "Bearer " + token.route.params.token,
                }
            })
            const json = await response.json();
            const userId = json.id;
            setId(userId);
        }
        fetchData(token);
    }, []);
    return (
        <View style={{flex: 1}}>
            <Image
                 source={require('../../Assets/background2.png')}
                 style={styles.backgroundImage}
                 resizeMode="cover"
            />
            <ProfilePicture id={String(id)} token={token.route.params.token} imageStyle={styles.image} containerStyle={styles.container} />
            <View style={styles.logoutView}>
                <TouchableOpacity
                    onPress={() => {
                        console.log("logout");
                        navigation.navigate('Login');
                        navigation.reset({
                           index: 0,
                           routes: [{ name: 'Login' }],
                        });
                    }}
                >
                    <Image
                        style={styles.logout}
                        source={require("../../Assets/logout.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.trombiView}>
                <Button onPress={() => navigation.navigate('Trombi', { token: token.route.params.token })}
                    title="Trombi"
                >
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: '5%',
        marginTop: '10%',
        margin: '62%',
        zIndex: 0,
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 400,
    },
    logoutView: {
    },
    logout: {
        width: 20,
        height: 20,
        marginLeft: '87%',
        marginTop: '-32%',
        zIndex: 2,
    },
    trombiView: {
        marginTop: '130%',
        marginLeft: '25%',
        width: '50%',
        zIndex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
});
