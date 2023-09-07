import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

export const ProfilePicture = ({id, token, imageStyle, containerStyle}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Image
                source={{
                    uri: "https://masurao.fr/api/employees/" + id + "/image",
                    method: "GET",
                    headers: {
                        "X-Group-Authorization": "Xqkwp3zjCVdV0fBhfzMASBwnK9DcE4xW",
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    }
                }}
                style={[styles.image, imageStyle]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: '5%',
        marginTop: '10%',
        margin: '62%',
        marginBottom: '2%',
        zIndex: 1,
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 400,
    },
});