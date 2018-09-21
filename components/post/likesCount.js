import React from "react";
import { View, StyleSheet, Text } from "react-native";

const likesCount = ({ likes }) => {
  return (
    <View style={styles.commentBar}>
      <Text style={styles.likesText}>{likes} likes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentBar: {
    width: "100%",
    paddingBottom: 8,
    flexDirection: "column"
  },
  likesText: {
    marginLeft: 15,
    color: "#000",
    fontWeight: "bold"
  },
  commentProfile: {
    fontWeight: "900"
  }
});

export default likesCount;
