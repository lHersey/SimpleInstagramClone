import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon, Container, Content } from "native-base";
import Header from "../header";
import CounterInfo from "../profile/counterInfo";
import EditProfile from "../profile/editProfile";
import ProfilePhoto from "../profile/profilePhoto";
import data from "../../api/data.json";
import Info from "../profile/info";
import Tab from "../tab/tab";
import TabControl from "../tab/tabControl";

class profileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  };
  render() {
    const { profile } = data;

    return (
      <Container>
        <Header
          leftIcon="md-person-add"
          rightIconType="Entypo"
          rightIcon="back-in-time"
          center="Instagram"
        />
        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <ProfilePhoto photo={profile.profilePicture} />
              <View style={{ flex: 3 }}>
                <CounterInfo
                  post={profile.posts.length}
                  followers={profile.followers}
                  following={profile.following}
                />
                <EditProfile />
              </View>
            </View>
            <Info name={profile.name} info={profile.info} link={profile.link} />
          </View>
          <TabControl>
            <Tab icon="ios-apps-outline" content={() => <Text>Hola</Text>} />
            <Tab icon="ios-list-outline" content={() => <Text>Merce</Text>} />
            <Tab
              icon="ios-people-outline"
              content={() => <Text>Fonseca</Text>}
            />
            <Tab
              icon="ios-bookmark-outline"
              content={() => <Text>Soliscd ..</Text>}
            />
          </TabControl>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  editProfile: {
    flex: 3,
    marginLeft: 10,
    justifyContent: "center",
    height: 30
  }
});

export default profileTab;
