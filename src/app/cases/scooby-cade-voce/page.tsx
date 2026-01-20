import "./scooby.css";
import RightClickLove from "../../../components/RightClickLove";

export default function ScoobyCase() {
  return (
    <main className="case">

      {/* INTRO */}
      <section className="case-intro">
        <h1>Scooby Cadê Você</h1>

        <p className="case-description">
          Site criado durante as enchentes no Rio Grande do Sul com o objetivo de
          ajudar pessoas a reencontrarem seus animais perdidos em um momento de
          extrema urgência.
        </p>

        <ul className="case-meta">
          <li>Frontend Engineering</li>
          <li>Projeto Voluntário</li>
          <li>React · TypeScript</li>
          <li>2024</li>
        </ul>
      </section>


      {/* HERO IMAGE */}
      <section className="case-image">
        <img
          src="/assets/Screenshot_13.png"
          alt="Scooby Cadê Você interface"
        />
      </section>
      <section className="case-intro">


  <div className="case-info-grid">
    <div className="case-info">
      <span className="case-info-title">Contexto</span>
      <p>Enchentes no RS</p>
      <p>Projeto voluntário</p>
    </div>

    <div className="case-info">
      <span className="case-info-title">Público</span>
      <p>Vítimas das enchentes</p>
      <p>Protetores e abrigos</p>
    </div>

    <div className="case-info">
      <span className="case-info-title">Meu papel</span>
      <p>Frontend Engineer</p>
      <p>Responsável por 100% do front-end</p>
    </div>

    <div className="case-info">
      <span className="case-info-title">Impacto</span>
      <p>+100 mil usuários</p>
      <p>+76 mil animais encontrados</p>
    </div>
  </div>
</section>

      {/* CONTEXTO */}
      <section className="case-text">
        <h2>Contexto</h2>
        <p>
          Durante as enchentes no Rio Grande do Sul, milhares de famílias foram
          afetadas e muitos animais acabaram se perdendo. As informações sobre
          animais desaparecidos estavam espalhadas em redes sociais, imagens e
          mensagens sem padrão, dificultando qualquer tentativa de reencontro.
        </p>

        <p>
          O Scooby Cadê Você surgiu como uma iniciativa voluntária de um grupo de
          desenvolvedores com o objetivo de criar uma solução simples, rápida e
          acessível para centralizar essas informações.
        </p>
      </section>

      {/* PROBLEMA */}
      <section className="case-text">
        <h2>O problema</h2>
        <p>
          O principal desafio era criar uma plataforma que pudesse ser utilizada
          por pessoas em situação emocional delicada, muitas delas com pouca ou
          nenhuma familiaridade com tecnologia.
        </p>

        <p>
          Além disso, o fator tempo era crítico. Cada segundo importava para que
          animais fossem reencontrados o mais rápido possível.
        </p>
      </section>

      {/* SOLUÇÃO */}
      <section className="case-text">
        <h2>A solução</h2>
        <p>
          A plataforma permitia que usuários cadastrassem animais perdidos ou
          encontrados, inserindo informações detalhadas como nome, idade, cor,
          raça, peso e características visuais, além do upload de imagens.
        </p>

        <p>
          O sistema realizava uma varredura no banco de dados para identificar se
          aquele animal já havia sido registrado anteriormente, facilitando o
          processo de identificação e reencontro.
        </p>
      </section>

   

      {/* PAPEL */}
      <section className="case-text">
        <h2>Meu papel</h2>
        <p>
          Trabalhei em uma equipe de 9 desenvolvedores e fui responsável por 100%
          do frontend da aplicação, desenvolvendo todas as interfaces e fluxos do
          sistema.
        </p>

        <p>
          Meu foco foi garantir uma experiência simples, clara e acessível,
          priorizando a usabilidade em um momento de alta pressão emocional.
        </p>
      </section>

      {/* DESAFIOS */}
      <section className="case-text">
        <h2>Desafios</h2>
        <p>
          O maior desafio foi pensar uma UX extremamente simples para pessoas que
          nunca haviam utilizado um sistema digital, garantindo que qualquer
          pessoa conseguisse cadastrar ou buscar um animal sem dificuldades.
        </p>

        <p>
          Outro ponto crítico foi a tomada de decisões rápidas, já que o sistema
          estava sendo utilizado enquanto ainda evoluía.
        </p>
      </section>

      {/* TECNOLOGIAS */}
      <section className="case-text">
        <h2>Tecnologias</h2>
        <p>
          React, TypeScript, Radix Primitives, shadcn/ui, TanStack React Query,
          Axios, React Hook Form, Zod, Lucide React, Tailwind CSS e React Router
          DOM.
        </p>
      </section>

      {/* RESULTADO */}
      <section className="case-text">
        <h2>Resultado</h2>
        <p>
          O projeto teve um impacto real e significativo. Aproximadamente 100 mil
          pessoas utilizaram a plataforma e mais de 76 mil animais foram
          reencontrados.
        </p>
      </section>

      {/* APRENDIZADO */}
      <section className="case-text">
        <h2>Aprendizados</h2>
        <p>
          Esse projeto reforçou a importância da empatia, responsabilidade,
          simplicidade e impacto real do código. Aprendi que, em situações
          críticas, decisões rápidas e foco no problema certo fazem toda a
          diferença.
        </p>
      </section>
      <RightClickLove />
     
    </main>
  );
}
