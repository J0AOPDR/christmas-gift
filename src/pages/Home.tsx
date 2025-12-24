import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { DialogPassword } from "@/components/DialogPassword";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const loucura = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 80;

    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;

    setPosition({ x: randomX, y: randomY });

    const navigate = useNavigate();

    useEffect(() => {
      const alreadyPassed = localStorage.getItem("passed-tests");

      if (alreadyPassed === "true") {
        navigate("/main");
      }
    }, [navigate]);
  };

  return (
    <div className="flex justify-center items-center h-screen gochi flex-col">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl">Olá, Giovanna</h1>
        <p className="poppins w-72 text-sm text-center">
          Como você está? Preparei um presente para você. Gostaria de aceitá-lo?
        </p>

        <div className="flex gap-2 mt-5">
          <Button
            className="poppins h-7 w-20 text-xs"
            onClick={() => setIsModalOpen(true)}
          >
            Aceitar
          </Button>

          <motion.button
            ref={buttonRef}
            onMouseEnter={loucura}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="poppins h-7 w-20 text-xs bg-red-800 text-white rounded-lg hover:bg-red-900"
          >
            Recusar
          </motion.button>
        </div>
      </div>

      <DialogPassword open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Home;
