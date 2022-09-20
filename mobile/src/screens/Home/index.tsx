import { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/Background";
import { GameCard } from "../../components/GameCard";
import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { api } from "../../services/api";

import logoImg from "../../assets/logo-nlw-esports.png";

interface Games {
  bannerUrl: string;
  id: string;
  title: string;
  _count: { ads: number };
}

export function Home() {
  const navigation = useNavigation();
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const { data } = await api.get("/games");

        setGames(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchGames();
  }, []);

  function handleOpenGame({ bannerUrl, id, title }: Games) {
    navigation.navigate("game", { bannerUrl, id, title });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} resizeMode="cover" />
        <Header
          title="Encontre seu duo!"
          subTitle="Selecione o game que deseja jogar..."
        />
        {!games.length ? (
          <Loading />
        ) : (
          <FlatList
            contentContainerStyle={styles.contentList}
            data={games}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GameCard data={item} onPress={() => handleOpenGame(item)} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
    </Background>
  );
}
