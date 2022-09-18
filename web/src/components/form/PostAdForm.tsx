import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";

export const PostAdForm = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2a2634] shadow-lg shadow-black/25 py-8 px-10 w-[510px] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
        <Dialog.Title className="text-3xl font-black mb-8">
          Publique um anúncio
        </Dialog.Title>

        <form className="flex flex-col gap-4">
          <Input
            id="game"
            htmlFor="game"
            type="text"
            placeholder="Selecione o game que deseja jogar"
            label="Qual o game?"
          />

          <Input
            id="name"
            htmlFor="name"
            type="text"
            placeholder="Selecione o game que deseja jogar"
            label="Como te chamam dentro do game?"
          />

          <div className="flex items-center gap-6">
            <Input
              id="yearsPlaying"
              htmlFor="yearsPlaying"
              type="number"
              placeholder="Tudo bem ser ZERO"
              label="Joga há quantos anos"
              min={0}
            />
            <Input
              id="discord"
              htmlFor="discord"
              type="text"
              placeholder="Usuario#0000"
              label="Qual seu Discord?"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="weekDays" className="font-semibold">
              Quando costuma jogar?
            </label>
            <div className="flex items-center gap-2 ">
              <Button
                type="button"
                title="Domingo"
                stylesButton="bg-zinc-900 hover:bg-violet-500 text-xs"
              >
                Dom
              </Button>
              <Button
                type="button"
                title="Segunda"
                stylesButton="bg-zinc-900 hover:bg-violet-500 text-xs"
              >
                Seg
              </Button>
              <Button
                type="button"
                title="Terça"
                stylesButton="bg-zinc-900 hover:bg-violet-500 text-xs"
              >
                Ter
              </Button>
              <Button
                type="button"
                title="Quarta"
                stylesButton="bg-zinc-900 hover:bg-violet-500 text-xs"
              >
                Qua
              </Button>
              <Button
                type="button"
                title="Qinta"
                stylesButton="bg-zinc-900 hover:bg-violet-500 text-xs"
              >
                Qui
              </Button>
              <Button
                type="button"
                title="Sexta"
                stylesButton="bg-zinc-900 hover:bg-violet-500 text-xs"
              >
                Sex
              </Button>
              <Button
                type="button"
                title="Sábado"
                stylesButton="bg-zinc-900 hover:bg-violet-500 text-xs"
              >
                Sáb
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="hoursStart" className="font-semibold">
              Qual horário do dia?
            </label>
            <div className="flex gap-2 w-full">
              <Input
                id="hoursStart"
                htmlFor="hoursStart"
                type="time"
                placeholder="De"
              />
              <Input id="hoursEnd" type="time" placeholder="Até" />
            </div>
          </div>

          <Checkbox name="Costumo me conectar ao chat de voz" styles="mt-6" />

          <footer className="flex gap-2 mt-8 justify-end">
            <Dialog.Close asChild>
              <Button stylesButton="bg-zinc-500 hover:bg-zinc-600">
                Cancelar
              </Button>
            </Dialog.Close>
            <Button
              type="submit"
              stylesButton="bg-violet-500 hover:bg-violet-700"
              icon={GameController}
            >
              Encontrar duo
            </Button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
