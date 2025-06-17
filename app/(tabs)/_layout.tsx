import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const TabBarIcon = ({ Icon, iconName, color, focused }) => {
  return (
    <View style={[
      styles.iconContainer,
      focused && styles.activeIconContainer
    ]}>
      <Icon 
        name={iconName} 
        size={28} 
        color={focused ? '#fff' : '#666'} 
      />
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e6e6e6',
          height: 70,
          paddingTop: 0,
          paddingBottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarItemStyle: {
          height: 70,
          paddingTop: 15,
          paddingBottom: 5,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={Ionicons} iconName="home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="carnet"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={MaterialCommunityIcons} iconName="card-account-details-outline" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={Entypo} iconName="menu" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={Ionicons} iconName="person-circle-outline" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="bot"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={MaterialCommunityIcons} iconName="robot-outline" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIconContainer: {
    backgroundColor: '#006AAA',
  },
});
