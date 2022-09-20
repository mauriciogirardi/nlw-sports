import { Text, TouchableOpacity, View } from "react-native";
import { GameController } from "phosphor-react-native";

import { THEME } from "../../theme";
import { DuoInfo } from "../DuoInfo";

import { styles } from "./styles";

interface Games {
  id: string;
  name: string;
  HourEnd: string;
  hourStart: string;
  yearsPlaying: number;
  useVoiceChannel: boolean;
  weekDays: string[];
}

interface DuoCardProps {
  data: Games;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: DuoCardProps) {
  const yearsPlaying = `${data.yearsPlaying} an${
    data.yearsPlaying <= 1 ? "o" : "os"
  }`;

  const weekDays = `${data.weekDays.length} di${
    data.weekDays.length <= 1 ? "a" : "as"
  }`;

  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo label="Tempo de jogo" value={yearsPlaying} />
      <DuoInfo
        label="Disponibilidade"
        value={`${weekDays} \u2022 ${data.hourStart}h - ${data.HourEnd}h`}
      />
      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.textButton}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
