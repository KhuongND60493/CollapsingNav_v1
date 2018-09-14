
import React, { Component } from 'react';
import {
  View, Text, Dimensions, RefreshControl, ScrollView
} from 'react-native';
const deviceWidth = Dimensions.get("window").width;
import ScrollableTabView, { DefaultTabBar, } from './src/components/collapNav';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      currentTab: 0,
    }
  }
  _onRefresh = () => {
    console.log('Refesh tab: ' + this.state.currentTab)
  }
  render() {
    const collapsableComponent = (
      <View style={{ height: 30, backgroundColor: 'green', width: deviceWidth }}>
        <Text>NavMenu</Text>
      </View>
    );
    return <ScrollableTabView
      onChangeTab={({ i, ref }) => {
        this.setState({ currentTab: i })
      }}
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />
      }
      scrollWithoutAnimation
      collapsableBar={collapsableComponent}
      initialPage={0}
      renderTabBar={() => <DefaultTabBar inactiveTextColor="white" activeTextColor="white" backgroundColor="green" />}>
      <View style={{ height: 2000, backgroundColor: "cyan" }} tabLabel='Tab #1'>
        <View style={{ flex: 1 }}>
          <Text >My</Text>
        </View>

      </View>
      <View style={{ height: 2000, backgroundColor: "orange" }} tabLabel='Tab #2'>
        <Text >Project</Text>
      </View>
      <View style={{ height: 2000, backgroundColor: "yellow" }} tabLabel='Tab #3'>
        <Text >aaaaaaaa</Text>
      </View>
    </ScrollableTabView>;
  }
}
