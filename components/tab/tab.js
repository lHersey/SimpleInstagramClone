import React, { Component } from "react";
import { Text } from "react-native";
import { Button, Icon } from "native-base";

class tab extends Component {
  _onPress = () => this.props.onPress(this.props.index);

  render() {
    const { activeIndex, index, icon, label } = this.props;

    console.log(activeIndex);
    return (
      <Button
        transparent
        onPress={this._onPress}
        active={activeIndex === index}
      >
        <Text>{label}</Text>
        <Icon
          style={[
            activeIndex === index ? { color: "blue" } : { color: "grey" }
          ]}
          name={icon}
        />
      </Button>
    );
  }
}

export default tab;
