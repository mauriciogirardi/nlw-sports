import React from "react";
import { FlatList, Image, Text, View } from "react-native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/GameCard";
import { Header } from "../../components/Header";
import { styles } from "./styles";

import { GAMES } from "../../utils/games";
import { Loading } from "../../components/Loading";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Header
        title="Encontre seu duo!"
        subTitle="Selecione o game que deseja jogar..."
      />
      {!GAMES.length ? (
        <Loading />
      ) : (
        <FlatList
          contentContainerStyle={styles.contentList}
          data={GAMES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <GameCard data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}
