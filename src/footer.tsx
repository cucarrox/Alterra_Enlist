import alterraStamp from "./assets/imgs/altrraStamp.png";
import alterraArms2 from "./assets/imgs/alterraArms2.png";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

const Footer = () => {
  return (
    <>
      <footer className="bg-black py-8 flex top-0">
        <div className="w-1/2 flex flex-col justify-center items-end">
          <div className="flex flex-col items-center mr-10">
            <img className="mb-5" src={alterraArms2} alt="" />
            <img src={alterraStamp} alt="" />
          </div>
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="text-white flex justify-center">
                <div className="flex flex-col leading-8 mx-3">
                    <h1 className="font-bold text-xl mb-2">Sobre</h1>
                    <a className="hover:underline" href="#">Altera</a>
                    <a className="hover:underline" href="">Exercito</a>
                    <a className="hover:underline" href="">Corporação</a>
                </div>
                <div className="flex flex-col leading-8 mx-3">
                    <h1 className="font-bold text-xl mb-2">Suporte</h1>
                    <a className="hover:underline" href="">Agências Alterra</a>
                    <a className="hover:underline" href="">Juntas Militares</a>
                    <a className="hover:underline" href="">Telefonemas</a>
                </div>
            </div>
            <div className="w-3/5 flex justify-center items-center">
                <Input className="w-full bg-gray-800 border-gray-800 hover:border-gray-600" placeholder="Mande sua dúvida" />
                <Button>Enviar</Button>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
