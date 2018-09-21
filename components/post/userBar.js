import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Thumbnail } from "native-base";

const userBar = ({ profilePhoto, name }) => {
  return (
    <View style={styles.userBar}>
      <View style={styles.userInfo}>
        <Thumbnail small source={{ uri: profilePhoto }} />
        <View style={{ marginLeft: 10 }}>
          <Text>{name}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.userOptions}>...</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  userBar: {
    width: "100%",
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  photoProfile: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  userOptions: {
    fontSize: 30
  }
});

export default userBar;
