import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// IMGAGENS 
import alterraSpin1 from "../assets/imgs/alterraSpin1.png";
import alterraSpin2 from "../assets/imgs/alterraSpin2.png";
import alterraArms from "../assets/imgs/alterraArms.png"

const Home = () => {
  return (
    <>
      <div className="w-full h-full">
        <main className="w-full h-full flex flex-col justify-center items-center">
          <section className="w-1/2 h-full flex flex-col justify-center items-center">
            <div className="w-1/2 h-1/5 flex justify-center items-center m-4">
              <div className="AlterraSpinLogo relative w-2/5 h-full flex justify-center items-center mr-5">
                <img className="spinLogo2" src={alterraSpin2} alt="Alterra Logo Spin" />
                <img className="spinLogo1" src={alterraSpin1} alt="Alterra Logo Spin" />
              </div>
              <div className="w-3/5">
                <img className="alterra-arms-logo" src={alterraArms} alt="" />
              </div>
            </div>
            <div className="m-5 text-justify text-xl">
              <p>Bem-vindo à <strong>Alterra Corporation</strong>, uma pioneira no campo da exploração e mineração espacial. À medida que a humanidade avança em direção à fronteira final, a Alterra está na vanguarda, desbravando novos mundos e extraindo recursos preciosos que impulsionarão o futuro da nossa civilização. Mas esta jornada épica requer mais do que tecnologia de ponta e inovação científica; ela demanda coragem, disciplina e uma equipe dedicada de profissionais altamente qualificados.</p>
              <p className="my-5">Ingressar no exército privado da <strong>Alterra Corporation</strong> é uma oportunidade única para aqueles que buscam fazer parte de algo maior do que eles mesmos. Aqui estão algumas razões pelas quais unir-se a nós é a melhor decisão que você pode tomar:</p>
            </div>
            <Link to="/enlist"><Button variant="secondary" className="px-24 text-lg">Alistar-se</Button></Link>
          </section>
          <div className="w-full">
            <div className="w-full bg-gray-800 flex">
              <div>
                p
              </div>
              <div>
                p
              </div>
            </div>
          </div>
        </main>
        <footer>

        </footer>
      </div>
    </>
  );
};

export default Home