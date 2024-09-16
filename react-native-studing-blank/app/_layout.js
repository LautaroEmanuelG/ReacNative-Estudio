import { Slot } from "expo-router";

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      {/* <Slot name="header" /> */}
      <Text className="text-white">Hello, world!</Text>
    </View>
  );
}