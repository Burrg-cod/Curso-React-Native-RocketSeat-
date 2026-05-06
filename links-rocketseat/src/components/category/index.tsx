import { Text, View, Pressable } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/color";
export default function Category() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.container} onPress={() => {}}>
        <MaterialIcons name="code" size={16} color={colors.gray[400]} />
        <Text style={styles.name}>Projetos</Text>
      </Pressable>
    </View>
  );
}
