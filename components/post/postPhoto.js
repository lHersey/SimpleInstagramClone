import React, { Component } from "react";
import { Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

class postPhoto extends Component {
  DOUBLE_PRESS_DELAY = 300;

  state = {
    screenWidth: 0
  };

  componentDidMount() {
    this.setState({
      screenWidth: Dimensions.get("window").width
    });
  }

  handlePhotoDoublePress = e => {
    const now = new Date().getTime();

    if (
      this.lastImagePress &&
      now - this.lastImagePress < this.DOUBLE_PRESS_DELAY
    ) {
      delete this.lastImagePress;
      this.props.handleLike(e);
    } else {
      this.lastImagePress = now;
    }
  };

  render() {
    const dynamic = StyleSheet.create({
      cardPhoto: {
        height: this.state.screenWidth,
        width: this.state.screenWidth
      }
    });

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={this.handlePhotoDoublePress}
      >
        <Image
          style={dynamic.cardPhoto}
          source={{ uri: this.props.postPhoto }}
        />
      </TouchableOpacity>
    );
  }
}

export default postPhoto;
