import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";

interface DialogPasswordProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DialogPassword({ open, onOpenChange }: DialogPasswordProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [answer, setAnswer] = useState<string | null>(null);
  const [fredAnswer, setFredAnswer] = useState<string | null>(null);
  const isCorrectFredAnswer = fredAnswer === "fred-fluminense";

  const isCorrectAnswerRatio = answer === "cowboy-bebop";
  const isCorrectDate =
    date &&
    date.getFullYear() === 2007 &&
    date.getMonth() === 1 &&
    date.getDate() === 6;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[720px] w-full">
        <div className="flex flex-col gap-6">
          {/* ETAPA 1 — CALENDÁRIO */}
          {step === 1 && (
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col justify-between w-full md:w-1/2">
                <div>
                  <DialogTitle className="gochi text-3xl font-normal">
                    Bem-vinda
                  </DialogTitle>

                  <p className="text-sm text-muted-foreground mb-2">
                    Siga as etapas para receber seu presente.
                  </p>

                  <DialogTitle className="text-sm font-normal">
                    | Qual a data do meu nascimento?
                  </DialogTitle>
                </div>

                <div className="flex flex-col gap-2 mt-6">
                  <DialogClose asChild>
                    <Button variant="outline" className="w-full">
                      Cancelar
                    </Button>
                  </DialogClose>

                  <Button
                    disabled={!isCorrectDate}
                    className="w-full"
                    onClick={() => setStep(2)}
                  >
                    Próximo
                  </Button>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border w-full max-w-[320px] h-90"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-5 w-full">
              <DialogTitle className="gochi text-2xl font-normal text-center md:text-left">
                Me odeia mesmo...
              </DialogTitle>

              <p className="text-sm text-center md:text-left">
                Por que o nome do meu cachorro é <strong>Spike</strong>?
              </p>

              <RadioGroup
                value={answer ?? ""}
                onValueChange={setAnswer}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="bonito" id="bonito" />
                  <Label htmlFor="bonito" className="text-sm cursor-pointer">
                    Porque eu achei bonito
                  </Label>
                </div>

                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="tom-jerry" id="tom-jerry" />
                  <Label htmlFor="tom-jerry" className="text-sm cursor-pointer">
                    Por causa do personagem de Tom & Jerry
                  </Label>
                </div>

                <div className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value="cowboy-bebop" id="cowboy-bebop" />
                  <Label
                    htmlFor="cowboy-bebop"
                    className="text-sm cursor-pointer"
                  >
                    Por causa de um anime
                  </Label>
                </div>
              </RadioGroup>

              <div className="flex flex-col-reverse md:flex-row gap-2 mt-4">
                <Button
                  variant="outline"
                  className="w-full md:w-auto"
                  onClick={() => setStep(1)}
                >
                  Voltar
                </Button>

                <Button
                  className="w-full md:w-auto"
                  disabled={!isCorrectAnswerRatio}
                  onClick={() => setStep(3)}
                >
                  Próximo
                </Button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col gap-5 w-full">
              <DialogTitle className="gochi text-2xl font-normal text-center md:text-left">
                Última pergunta…
              </DialogTitle>

              <p className="text-sm text-center md:text-left">
                Por que o nome do meu cachorro é <strong>Fred</strong>?
              </p>

              <RadioGroup
                value={fredAnswer ?? ""}
                onValueChange={setFredAnswer}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-2 rounded-md border p-3">
                  <RadioGroupItem value="avo" id="avo" />
                  <Label htmlFor="avo" className="cursor-pointer text-sm">
                    Em homenagem ao meu avô
                  </Label>
                </div>

                <div className="flex items-center gap-2 rounded-md border p-3">
                  <RadioGroupItem
                    value="fred-flintstone"
                    id="fred-flintstone"
                  />
                  <Label
                    htmlFor="fred-flintstone"
                    className="cursor-pointer text-sm"
                  >
                    Por causa do Fred Flintstone
                  </Label>
                </div>

                <div className="flex items-center gap-2 rounded-md border p-3">
                  <RadioGroupItem
                    value="fred-fluminense"
                    id="fred-fluminense"
                  />
                  <Label
                    htmlFor="fred-fluminense"
                    className="cursor-pointer text-sm"
                  >
                    Por causa de um jogador
                  </Label>
                </div>
              </RadioGroup>

              <div className="flex flex-col-reverse md:flex-row gap-2 mt-4">
                <Button
                  variant="outline"
                  className="w-full md:w-auto"
                  onClick={() => setStep(2)}
                >
                  Voltar
                </Button>
                <Link to={"/main"}>
                  <Button
                    className="w-full md:w-auto"
                    disabled={!isCorrectFredAnswer}
                    onClick={() => {
                         localStorage.setItem("passed-tests", "true");
                        onOpenChange(false)}}
                  >
                    Finalizar
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
