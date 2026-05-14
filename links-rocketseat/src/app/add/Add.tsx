import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/color";
import { LinkStorage } from "@/storage/link-storage";
import { router } from "expo-router";
import Input from "@/components/input";
import Categories from "@/components/categories";
import { Button } from "@/components/button";
import { useState } from "react";
export default function Add() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  async function handleAdd() {
    try {
      if (!category) {
        return Alert.alert(
          " Categoria",
          "Selecione uma categoria para adicionar um novo link",
        );
      }
      if (!name.trim()) {
        return Alert.alert("Nome", "Escreva um nome");
      }
      if (!url.trim()) {
        return Alert.alert("URL", "Escreva uma URL");
      }
      await LinkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category,
      });

      Alert.alert("Sucesso", "Novo link adicionado", [
        {
          text: "OK",
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o link");
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            router.canGoBack() ? router.back() : router.replace("/index")
          }
          activeOpacity={0.5}
        >
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
      </View>
      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories onChange={setCategory} selected={category} />
      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
        <Input
          placeholder="URL"
          onChangeText={setUrl}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
