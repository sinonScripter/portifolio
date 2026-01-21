import "./vyver.css";
import Image from "next/image";
import RightClickLove from "../../../components/RightClickLove";


export default function VyverCase() {
  return (
    <main className="case">

      {/* HEADER */}
      <Image
  src="/assets/Screenshot_9.png"
  alt="Vyver interface"
  width={1200}
  height={800}
  style={{ width: "100%", height: "auto" }}
/>
      <section className="case-header">
        <h1>Vyver</h1>
        

        <img src="public/assets/Screenshot_8.png" alt="" />

        

        <p className="case-lead">
          Plataforma mobile criada para facilitar a experiência de pessoas em
          baladas, permitindo compra de ingressos, bebidas e interações sociais
          diretamente pelo aplicativo.
        </p>

        <div className="case-info">
          <div>
            <h4>Entregáveis</h4>
            <p>Frontend Mobile</p>
            <p>Interfaces</p>
          </div>

          <div>
            <h4>Ferramentas</h4>
            <p>React Native</p>
            <p>TypeScript</p>
          </div>

          <div>
            <h4>Status</h4>
            <p>Em produção</p>
            <p>App Store & Play Store</p>
          </div>

          <div>
            <h4>Equipe</h4>
            <p>1 Dev Frontend</p>
            <p>1 Dev Sênior</p>
          </div>
        </div>
      </section>

      {/* SECTION */}
      <section className="case-section">
        <h2>Desafio</h2>

        <p>
          Antes da Vyver, pedidos de bebidas e controle de acesso em baladas
          geravam filas intermináveis e tumulto. O desafio era criar uma
          experiência clara, rápida e acessível, mesmo para usuários com pouca
          familiaridade com tecnologia.
        </p>
      </section>

      {/* SECTION */}
      <section className="case-section">
        <h2>Contexto do projeto</h2>

        <p>
          A Vyver é uma plataforma mobile voltada ao público jovem, permitindo a
          compra e transferência de ingressos, pedidos de bebidas pelo app e um
          sistema de conexão social baseado em popularidade dentro das baladas.
        </p>
      </section>

      {/* SECTION */}
      <section className="case-section">
        <h2>Meu papel</h2>

        <p>
          Atuei como desenvolvedor responsável por 100% do frontend da aplicação.
          Minha atuação foi focada na implementação fiel das interfaces, criação
          de fluxos claros e atenção à experiência do usuário.
        </p>
      </section>

      {/* SECTION */}
      <section className="case-section">
        <h2>Aprendizados</h2>

        <p>
          Este foi um dos meus primeiros projetos reais em uma empresa. Aprendi
          que entender o problema e planejar o desenvolvimento é tão importante
          quanto o código. Mesmo com o projeto atrasado, ficou claro que sair
          codando sem estratégia compromete a experiência, a escalabilidade e o
          foco da equipe.
        </p>
      </section>
      RightClickLove
    </main>
  );
}