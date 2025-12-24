import { useState } from "react";
import gallery from "@/data/gallery.json";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const Main = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const note = {
    title: "Querida Vacilona,",
    content: `Primeiramente, gostaria de me desculpar pelos dias recentes, acredito que não sabemos lidar muito com esse tipo de situação, logo, me desculpe, não sou bom com conflitos e como você sabe muito bem, uma das coisas que eu faço melhor é fugir. Dito isso, gostaria de agradecer pela compreensão e paciência (às vezes), sou uma pessoa bem complicada e pelo que te conheço você também é,  mas não leve isso como uma ofensa, é um bom sinal para falar a verdade, imagina que estranho seria se fossemos réplicas um do outro, bem bizarro mesmo. Bom, esse é um recado rápido que eu queria te deixar, espero que esteja tendo um bom natal e também espero que tenha gostado da sua galeria, deu um pequeno trabalho trocar os nomes das imagens na mão. Enfim, um bom natal para você, até breve. Espero que esse não seja o meu último presente.

    
    ASS.: Vacilão                             

`,
  };

  return (
    <div>
      <Header></Header>
      <div className="min-h-screen p-6">
        <h1 className="gochi text-4xl text-center mb-8">Galeria 🐾</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition bg-background"
            >
              <img
                src={item.image}
                alt={item.dogName}
                className="w-full h-60 object-cover"
              />

              <div className="p-4 flex flex-col gap-3">
                <div>
                  <h2 className="gochi text-xl">{item.dogName}</h2>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedImage(item)}
                    >
                      Ver imagem
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl  overflow-hidden">
                    {selectedImage && (
                      <>
                        <DialogHeader className="p-4">
                          <DialogTitle className="gochi text-2xl font-medium">
                            {selectedImage.dogName}
                          </DialogTitle>
                        </DialogHeader>

                        <img
                          src={selectedImage.image}
                          alt={selectedImage.dogName}
                          className="w-full max-h-[60vh] object-contain "
                        />

                        <div className="p-4 text-sm text-muted-foreground">
                          {selectedImage.description}
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
          <div className=" flex justify-center">
            <Card className="w-full max-w-3xl">
              <CardHeader>
                <CardTitle className="gochi text-2xl">Recadito</CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {note.content}
                </p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-fit">
                      Ver recado
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="gochi text-2xl">
                        {note.title}
                      </DialogTitle>
                    </DialogHeader>

                    <ScrollArea className="max-h-[60vh] pr-4">
                      <p className="whitespace-pre-line text-sm text-muted-foreground">
                        {note.content}
                      </p>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
