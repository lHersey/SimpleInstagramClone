import React from "react";
import { View, Text, StyleSheet } from "react-native";

const info = ({ name, info, link }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text>{info}</Text>
      <Text>{link}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, paddingVertical: 10 },
  name: { fontWeight: "bold" }
});

export default info;
