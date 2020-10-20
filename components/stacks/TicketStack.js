import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TicketStack = () => {
    return (
        <View style={styles.container}>
            <Text> Tekticket</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TicketStack ;
