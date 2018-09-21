import React from "react";
import { createStackNavigator } from "react-navigation";
import AddMediaTab from "./components/appTabNavitagor/addMediaTab";
import HomeTab from "./components/appTabNavitagor/homeTab";
import ProfileTab from "./components/appTabNavitagor/profileTab";
import LikesTab from "./components/appTabNavitagor/likesTab";
import SearchTab from "./components/appTabNavitagor/searchTab";
import { createTabNavigator, TabBarBottom } from "react-navigation";
import { Platform } from "react-native";

export default class App extends React.Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = createStackNavigator(
  {
    Main: {
      screen: createTabNavigator(
        {
          HomeTab: {
            screen: HomeTab
          },
          SearchTab: {
            screen: SearchTab
          },
          AddMediaTab: {
            screen: AddMediaTab
          },
          LikesTab: {
            screen: LikesTab
          },
          ProfileTab: {
            screen: ProfileTab
          }
        },
        {
          animationEnabled: true,
          swipeEnabled: true,
          tabBarComponent: TabBarBottom,
          tabBarPosition: "bottom",
          tabBarOptions: {
            showLabel: false,
            activeTintColor: "#000",
            inactiveTintColor: "#d1cece",
            animationEnabled: true,

            style: {
              ...Platform.select({
                android: {
                  backgroundColor: "#fff"
                }
              })
            }
          }
        }
      )
    }
  },
  {
    headerMode: "none"
  }
);

//Remove warning (Use a deprecated version for animation)
console.ignoredYellowBox = [
  "createTabNavigator is deprecated",
  "TabBarBottom is deprecated",
  "Method `jumpToIndex` is deprecated"
];
