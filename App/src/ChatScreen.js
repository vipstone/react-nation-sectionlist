
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, ListView, Alert, Text,Button } from 'react-native';

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: '你好',
        headerRight: <Button title="Info" style={{ marginRight:10 }} />
    };
    render() {
        return (
            <View>
                <Text>11111</Text>
            </View>
        );
    }
}

export default ChatScreen;