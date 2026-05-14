import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/color";

import { Link } from "@/components/link";
import { Option } from "@/components/options";
import Categories from "@/components/categories";
import React from "react";
import { categories } from "@/utils/categories";
import { linkStorage, LinkStorage } from "@/storage/link-storage";

export default function Index() {
  const [links, setLinks] = useState<linkStorage[]>([]);
  const [category, setCategory] = useState(categories[0].name);

  async function getLinks() {
    try {
      const response = await LinkStorage.get();
      const filteredLinks = response.filter(
        (link) => link.category === category,
      );
      setLinks(filteredLinks);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os links");
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category]),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => router.navigate("/add/Add")}
        >
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Categories onChange={setCategory} selected={category} />

      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => console.log("Detalhes do link")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
      <Modal transparent visible={false}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}>GitHub</Text>

            <Text style={styles.modalUrl}>https://github.com/Burrg-cod</Text>
            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
