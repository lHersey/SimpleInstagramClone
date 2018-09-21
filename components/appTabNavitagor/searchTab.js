import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "native-base";

class searchTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>searchTab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default searchTab;
