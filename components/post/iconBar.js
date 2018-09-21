import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon } from "native-base";

const iconBar = ({ onHeartPress, onCommentPress, onSendPress }) => {
  return (
    <View style={styles.iconBar}>
      <Button transparent>
        <Icon name="ios-heart-outline" style={{ color: "#000" }} />
      </Button>
      <Button transparent>
        <Icon name="ios-chatbubbles-outline" style={{ color: "#000" }} />
      </Button>
      <Button transparent>
        <Icon name="ios-send-outline" style={{ color: "#000" }} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  iconBar: {
    height: 40,
    width: "100%",
    flexDirection: "row"
  }
});

export default iconBar;
