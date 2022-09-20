import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { GameParams } from "../../@types/navigation";
import { THEME } from "../../theme";
import logoImg from "../../assets/logo-nlw-esports.png";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { DuoCard } from "../../components/DuoCard";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Loading } from "../../components/Loading";

interface Games {
  id: string;
  name: string;
  HourEnd: string;
  hourStart: string;
  yearsPlaying: number;
  useVoiceChannel: boolean;
  weekDays: string[];
}

export function Game() {
  const [ads, setAds] = useState<Games[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchGames() {
      try {
        if (!game.id) return;
        setLoading(true);

        const { data } = await api.get(`games/${game.id}/ads`);

        setAds(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, [game.id]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Header title={game.title} subTitle="Conecte-se e comece a jogar!" />

        {loading ? (
          <Loading />
        ) : (
          <FlatList
            style={styles.containerList}
            contentContainerStyle={[
              styles.contentList,
              { marginLeft: ads.length <= 1 ? 0 : 32 },
            ]}
            data={ads}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <DuoCard data={item} onConnect={() => {}} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
    </Background>
  );
}
