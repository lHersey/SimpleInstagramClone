import React from "react";
import { Thumbnail } from "native-base";
import { View, StyleSheet } from "react-native";

const profilePhoto = ({ photo }) => {
  return (
    <View style={styles.container}>
      <Thumbnail
        large
        size={100}
        source={{
          uri: photo
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" }
});

export default profilePhoto;
