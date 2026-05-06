import { Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/color";

import Category from "@/components/category";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity activeOpacity={0.5}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Category name="projetos" icon="code" onPress={() => {}} />
      <Category name="site" icon="language" onPress={() => {}} />
      <Category name="video" icon="movie" onPress={() => {}} />
    </View>
  );
}
