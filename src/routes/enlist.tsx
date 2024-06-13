import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

//========================================================
// descartavel


//=======================================================

const Enlist = () => {
  return (
    <>
      <div className="w-3/5 h-full ">
        <form>
          <fieldset>
            <legend>FORMULÁRIO DE ALISTAMENTO ALTERRA ARMS</legend>
            <div>
              <div>
                <label>Name:</label>
              </div>
              <Input placeholder="Fist Name" />
              <Input placeholder="Second Name" />
            </div>
            <div>
              <div>
                <label>E-mail</label>
              </div>
              <Input placeholder="E-mail" />
            </div>
            <div>
              <div>
                <label>Genêro</label>
              </div>
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <label htmlFor="r1">Homem</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <label htmlFor="r2">Mulher</label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <div>
                <label htmlFor="">Áreas de formação</label>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="engenharia_mecanica" />
                  <label htmlFor="engenharia_mecanica" className="text-sm font-medium">
                    Engenharia Mecânica
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="engenharia_de_sofwtare" />
                  <label htmlFor="engenharia_de_sofwtare" className="text-sm font-medium">
                    Engenharia de Software
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="engenharia_quantica" />
                  <label htmlFor="engenharia_quantica" className="text-sm font-medium">
                    Engenharia Quântica
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="engenharia_robotica" />
                  <label htmlFor="engenharia_robotica" className="text-sm font-medium">
                    Engenharia Robótica
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="medicina" />
                  <label htmlFor="medicina" className="text-sm font-medium">
                    Médicina
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="enfermagem" />
                  <label htmlFor="enfermagem" className="text-sm font-medium">
                    Enfermagem
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="psicologia" />
                  <label htmlFor="psicologia" className="text-sm font-medium">
                    Psicologia
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="psiquiatria" />
                  <label htmlFor="psiquiatria" className="text-sm font-medium">
                    Psiquiatria
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="outros" />
                  <label htmlFor="outros" className="text-sm font-medium">
                    Outros
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Enlist;
