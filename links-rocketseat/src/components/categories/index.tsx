import { FlatList } from "react-native";

import { styles } from "./style";
import { categories } from "@/utils/categories";

import Category from "@/components/category";
type Props = {
  selected: string;
  onChange: (category: string) => void;
};

export default function Categories({ selected, onChange }: Props) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  );
}
