import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View } from "react-native";

const TabIcon = ({ icon, name, focused }: any) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-1 flex-row items-center justify-center w-full min-w-[112px] min-h-16 overflow-hidden mt-4 rounded-full"
            >
                <Image source={icon} className="size-5" tintColor="#151312" />


                <Text className="text-secondary text-base font-semibold ml-2">
                    {name}
                </Text>
            </ImageBackground>
        );
    }


    return (
        <View className="size-full justify-center items-center mt-4 rounded-full">
            <Image source={icon} className="size-5" tintColor="#A8B5DB" />
        </View>
    );
};

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                headerShadowVisible: false,
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    backgroundColor: "#0f0D23",
                    marginHorizontal: 20,
                    marginBottom: 36,
                    borderWidth: 1,
                    borderRadius: 50,
                    height: 55,
                    position: "absolute",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.home} name="Home" focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.search} name="Search" focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: "Saved",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.save} name="Saved" focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.person} name="Profile" focused={focused} />
                    ),
                }}
            />
        </Tabs>
    );
}
