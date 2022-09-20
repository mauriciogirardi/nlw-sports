import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { THEME } from "../../theme";

export interface GameCardProps {
  bannerUrl: string;
  id: string;
  title: string;
  _count: { ads: number };
}

interface CardProps extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: CardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={{ uri: data?.bannerUrl }} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data?.title}</Text>
          <Text style={styles.ads}>{`${data?._count.ads} anúnci${
            data?._count.ads <= 1 ? "o" : "os"
          }`}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
