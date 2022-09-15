import { Text, View, ViewProps } from "react-native";

import { styles } from "./styles";

interface HeaderProps extends ViewProps {
  title: string;
  subTitle: string;
}

export function Header({ subTitle, title, ...rest }: HeaderProps) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}
