interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

interface CardGamesProps {
  games: Game[];
}

export const CardGames = ({ games }: CardGamesProps) => {
  return (
    <>
      {games.length ? (
        <div className="grid grid-cols-6 gap-6 mt-16">
          {games.map((game) => (
            <a
              href=""
              key={game.id}
              className="relative rounded-lg overflow-hidden w-[180px] h-[240px] "
            >
              <img src={game.bannerUrl} className="w-full object-cover " />

              <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
                <strong className="font-bold text-white block">
                  {game.title}
                </strong>
                <span className="text-zinc-300 text-sm block">
                  {`${game._count.ads} anúnci${
                    game._count.ads <= 1 ? "o" : "os"
                  }`}
                </span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <h2 className="bg-custom-gradient bg-clip-text text-transparent mt-28 mb-28">
          Carregando os cards....
        </h2>
      )}
    </>
  );
};
