import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

//========================================================
// descartavel

//=======================================================

const Enlist = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <form>
          <fieldset>
            <div className="text-2xl my-12">
              <legend>FORMULÁRIO DE ALISTAMENTO ALTERRA ARMS</legend>
            </div>
            <div className="flex justify-around items-center gap-16 mb-10">
              <div className="w-[15%]">
                <label>Name:</label>
              </div>
              <div className="w-full flex gap-5">
                <Input placeholder="Fist Name" />
                <Input placeholder="Second Name" />
              </div>
            </div>
            <div className="flex gap-16 items-center mb-10">
              <div className="w-[15%]">
                <label>E-mail:</label>
              </div>
              <div className="w-full">
                <Input placeholder="E-mail" />
              </div>
            </div>
            <div className="flex items-center mb-10">
              <div className="w-[30%]">
                <label>Genêro:</label>
              </div>
              <div className="w-full">
                <RadioGroup
                  defaultValue="comfortable"
                  className="flex items-center justify-evenly"
                >
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
            </div>
            <div className="mb-10">
              <div className="mb-2">
                <label htmlFor="">Áreas de formação:</label>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="engenharia_mecanica" />
                  <label
                    htmlFor="engenharia_mecanica"
                    className="text-sm font-medium"
                  >
                    Engenharia Mecânica
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="engenharia_de_sofwtare" />
                  <label
                    htmlFor="engenharia_de_sofwtare"
                    className="text-sm font-medium"
                  >
                    Engenharia de Software
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="engenharia_quantica" />
                  <label
                    htmlFor="engenharia_quantica"
                    className="text-sm font-medium"
                  >
                    Engenharia Quântica
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="engenharia_robotica" />
                  <label
                    htmlFor="engenharia_robotica"
                    className="text-sm font-medium"
                  >
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
            <div>
              <div className="mb-1">
                <label htmlFor="text-area">
                  Por qual motivo você deseja se juntar a Alterra Arms?
                </label>
              </div>
              <Textarea placeholder="Por que?" className="resize-none" />
            </div>
            <div className="flex items-center space-x-2 mt-5">
              <Checkbox id="terms"/>
              <Dialog>
                <DialogTrigger className="hover:text-blue-400 hover:underline">Eu aceito os termos e condições da Alterra Arms</DialogTrigger>
                <DialogContent className={"overflow-y-scroll max-h-screen"}>
                  <DialogHeader>
                    <DialogTitle className="p-2">Termos e Condições para Adesão ao Exército Privado da Alterra Corporation</DialogTitle>
                    <DialogDescription className="leading-7">
                      <div>
                        <h1 className="font-bold text-base p-1">1. Introdução</h1>
                        <p>Bem-vindo à Alterra Corporation. Antes de ingressar em nosso exército privado, pedimos que você leia atentamente os seguintes Termos e Condições. Ao aceitar estes termos, você concorda em cumprir todas as diretrizes, políticas e regulamentações estabelecidas pela Alterra Corporation.</p>
                      </div>
                      <div>
                        <h1 className="font-bold text-base p-1">2. Elegibilidade</h1>
                        <p>2.1. Idade Mínima: Os candidatos devem ter, no mínimo, 18 anos de idade.</p>
                        <p>2.2. Qualificações: Todos os candidatos devem passar por uma verificação de antecedentes, exame médico, e um processo de avaliação de aptidão física e mental.</p>
                        <p>2.3. Residência: Os candidatos devem possuir um status de residência ou cidadania válido no país onde a Alterra Corporation opera.</p>
                      </div>
                      <div>
                        <h1 className="font-bold text-base p-1">3. Compromissos e Responsabilidades</h1>
                        <p>3.1. Código de Conduta: Os membros do exército privado devem aderir estritamente ao código de conduta da Alterra Corporation, incluindo, mas não limitado a, comportamento ético, disciplina, e respeito às leis locais e internacionais.</p>
                        <p>3.2. Confidencialidade: Todos os membros são obrigados a manter a confidencialidade de todas as informações relacionadas às operações da Alterra Corporation.</p>
                        <p>3.3. Treinamento: Os membros devem participar e completar todos os treinamentos exigidos pela Alterra Corporation.</p>
                        <p>3.4. Equipamento: Os membros são responsáveis pelo uso e manutenção adequada de todo o equipamento fornecido pela Alterra Corporation.</p>
                      </div>
                      <div>
                        <h1 className="font-bold text-base p-1">4. Remuneração e Benefícios</h1>
                        <p>4.1. Salário: A Alterra Corporation oferecerá um salário competitivo, conforme detalhado no contrato individual de cada membro.</p>
                        <p>4.2. Benefícios: Os membros terão direito a benefícios, incluindo seguro de saúde, seguro de vida, e planos de aposentadoria, conforme detalhado no contrato individual.</p>
                        <p>4.3. Bônus: Os membros podem ser elegíveis para bônus de desempenho, conforme determinado pela Alterra Corporation.</p>
                      </div>
                      <div>
                        <h1 className="font-bold text-base p-1">5. Termos de Serviço</h1>
                        <p>5.1. Duração do Serviço: O termo de serviço inicial será conforme especificado no contrato individual, com possibilidades de renovação.</p>
                        <p>5.2. Rescisão: A Alterra Corporation reserva-se o direito de rescindir o contrato de qualquer membro a qualquer momento por violações dos termos ou por outras razões justificáveis.</p>
                        <p>5.3. Demissão Voluntária: Os membros podem solicitar a demissão com um aviso prévio de 30 dias.</p>
                      </div>
                      <div>
                        <h1 className="font-bold text-base p-1">6. Responsabilidade e Indenização</h1>
                        <p>6.1. Responsabilidade Pessoal: Os membros serão responsáveis por suas ações durante o serviço e poderão ser responsabilizados por qualquer má conduta ou negligência.</p>
                        <p>6.2. Indenização: A Alterra Corporation indenizará os membros por quaisquer danos, lesões ou perdas sofridas em serviço, conforme especificado nas políticas de indenização da empresa.</p>
                      </div>
                      <div>
                        <h1 className="font-bold text-base p-1">7. Disposições Gerais</h1>
                        <p>7.1. Alterações nos Termos: A Alterra Corporation reserva-se o direito de alterar estes Termos e Condições a qualquer momento. As mudanças serão comunicadas por escrito.</p>
                        <p>7.2. Aceitação dos Termos: A aceitação destes termos é uma condição obrigatória para a adesão ao exército privado da Alterra Corporation.</p>
                        <p>7.3. Lei Aplicável: Estes Termos e Condições serão regidos pelas leis do país onde a Alterra Corporation opera.</p>
                      </div>
                      <div>
                        <h1 className="font-bold text-base p-1">8. Contato</h1>
                        <p>8.1. Para mais informações ou esclarecimentos sobre estes Termos e Condições, entre em contato com o departamento de recursos humanos da Alterra Corporation.</p>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div>
              <Button type="submit" variant={"secondary"} className="w-full  my-10">Alistar-se</Button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Enlist;
