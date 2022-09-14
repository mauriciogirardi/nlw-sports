export const CardGames = () => {
  return (
    <div className="grid grid-cols-6 gap-6 mt-16">
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="games/game01.png" alt="" />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
          <strong className="font-bold text-white block">
            League of Legends
          </strong>
          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>

      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="games/game02.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
          <strong className="font-bold text-white block">Dota 2</strong>
          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="games/game03.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
          <strong className="font-bold text-white block">Counter Strike</strong>
          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="games/game04.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
          <strong className="font-bold text-white block">Apex Legends</strong>
          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="games/game05.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
          <strong className="font-bold text-white block">Fortnite</strong>
          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="games/game06.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
          <strong className="font-bold text-white block">Warcraft</strong>
          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>
    </div>
  );
};
