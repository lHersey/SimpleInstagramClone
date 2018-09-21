import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import TabHeader from "./tab";

class tabControl extends Component {
  state = {
    activeIndex: 0
  };

  onIndexChange = index => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    const { activeIndex } = this.state;
    const activeChild = this.props.children[this.state.activeIndex];
    return (
      <View>
        <View style={styles.container}>
          {this.props.children.map((child, index) =>
            React.cloneElement(child, {
              ...child.props,
              key: index,
              index,
              activeIndex,
              onPress: this.onIndexChange
            })
          )}
        </View>
        {React.cloneElement(activeChild.props.content())}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#eae5e5"
  }
});

export default tabControl;
