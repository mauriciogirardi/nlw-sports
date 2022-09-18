import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { DefaultLayout } from "../layout/DefaultLayout";
import { CardGames } from "../components/CarGames";
import { Footer } from "../components/Footer";
import { Title } from "../components/Title";
import { Logo } from "../components/Logo";
import { api } from "../services/api";
import { PostAdForm } from "../components/form/PostAdForm";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export const Home = () => {
  const [games, setGames] = useState<Game[]>([]);

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

  return (
    <DefaultLayout>
      <Logo />
      <Title />
      <CardGames games={games} />

      <Dialog.Root>
        <Footer />
        <PostAdForm />
      </Dialog.Root>
    </DefaultLayout>
  );
};
