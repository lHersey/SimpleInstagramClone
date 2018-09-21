import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "native-base";

class addMediaTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-add-circle" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>addMediaTab</Text>
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

export default addMediaTab;
