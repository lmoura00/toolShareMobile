import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

export function Login() {
    const [dados, setDados] = useState(null);

    const data = async () => {
        try {
            const response = await axios.get('http://localhost:3333/user');
            console.log('RESPONSE:', response.data);
            setDados(response.data[0]); 
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    useEffect(() => {
        data();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            {dados ? (
                <View style={styles.userInfo}>
                    <Image source={{ uri: dados.image }} style={styles.image} />
                    <Text>Nome: {dados.name}</Text>
                    <Text>Email: {dados.email}</Text>
                    <Text>Telefone: {dados.phone}</Text>
                    <Text>Endereço: {dados.address}</Text>
                    <Text>Latitude: {dados.latitude}</Text>
                    <Text>Longitude: {dados.longitude}</Text>
                    <Text>Tipo: {dados.type}</Text>
                </View>
            ) : (
                <Text>Carregando...</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        marginBottom: 20,
    },
    userInfo: {
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
});