import { Text, View, Pressable, PressableProps } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/color";
import { resetToDefaults } from "expo-router/testing-library";

type Props = PressableProps & {
  name: string;
  icon: React.ComponentProps<typeof MaterialIcons>["name"];
  isSelected?: boolean;
};

export default function Category({ name, icon, isSelected, ...rest }: Props) {
  const color = isSelected ? colors.green[300] : colors.gray[400];
  return (
    <View style={styles.container}>
      <Pressable style={styles.container} {...rest}>
        <MaterialIcons name={icon} size={18} color={color} />
        <Text style={[styles.name, { color }]}>{name}</Text>
      </Pressable>
    </View>
  );
}
