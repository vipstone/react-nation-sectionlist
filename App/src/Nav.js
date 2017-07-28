import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, ListView, Alert, Text, SectionList } from 'react-native';
import { Tabs, Tab, Icon, Badge } from 'react-native-elements';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: "" };
    }

    changeTab(selectedTab) {
        this.setState({ selectedTab })
    }

    render() {
        const { selectedTab } = this.state
        return (
            <Tabs tabBarStyle={{ height: 50 }}>
                <Tab
                    titleStyle={{ fontWeight: 'bold', fontSize: 10, marginTop: -2 }}
                    selectedTitleStyle={{ marginTop: -1 }}
                    selected={selectedTab === 'feed'}
                    title={"首页"}
                    renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='whatshot' size={30} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
                    onPress={() => this.changeTab('feed')}>

                    <HomeScreen />
                </Tab>
                <Tab
                    titleStyle={{ fontSize: 10, marginTop: -2, alignItems: 'center' }}
                    selected={selectedTab === 'profile'}
                    title={'我的11'}
                    badgeText="99"
                    renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='person' size={30} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
                    onPress={() => this.changeTab('profile')}>
                    <ChatScreen />
                </Tab>
            </Tabs>
        )
    }

}