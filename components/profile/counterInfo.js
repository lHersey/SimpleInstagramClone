import React from "react";
import { StyleSheet, View, Text } from "react-native";

const counterInfo = ({ post, followers, following }) => {
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>{post}</Text>
        <Text style={styles.countDesc}>Post</Text>
      </View>
      <View style={styles.countContainer}>
        <Text>{followers}</Text>
        <Text style={styles.countDesc}>Followers</Text>
      </View>
      <View style={styles.countContainer}>
        <Text>{following}</Text>
        <Text style={styles.countDesc}>Following</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  countDesc: {
    fontSize: 10,
    color: "gray"
  },
  countContainer: {
    alignItems: "center"
  }
});

export default counterInfo;
