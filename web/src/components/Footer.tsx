import * as Dialog from "@radix-ui/react-dialog";

import { MagnifyingGlassPlus } from "phosphor-react";

import { Button } from "./form/Button";

export const Footer = () => {
  return (
    <footer className="pt-1 bg-custom-gradient self-stretch rounded-lg rounded-b-xl mt-8">
      <div className="bg-[#2a2634] px-8 py-6 rounded-lg flex md:text-start items-center justify-between md:flex-row sm:flex-col sm:text-center sm:gap-4">
        <div>
          <span className="text-2xl text-white font-black block">
            Não encontrou seu duo?
          </span>
          <span className="text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger asChild>
          <Button
            stylesButton="bg-violet-500 hover:bg-violet-700"
            icon={MagnifyingGlassPlus}
          >
            Publicar anúncio
          </Button>
        </Dialog.Trigger>
      </div>
    </footer>
  );
};
