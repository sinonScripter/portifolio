import "./about.css";

export default function About() {
  return (
    <main className="about">

      {/* INTRO */}
      <section className="about-hero">
        <div className="about-text">
          <span className="about-eyebrow">Sobre mim</span>

          <h1 className="about-title">
            Conheça mais <span>sobre Leonardo</span>
          </h1>

          <p>
            Sou Frontend Engineer com foco em construir interfaces claras,
            performáticas e centradas no usuário. Atuo há alguns anos
            desenvolvendo produtos digitais para empresas e projetos de impacto
            real, sempre buscando equilíbrio entre qualidade técnica e
            experiência.
          </p>

          <p>
            Ao longo da minha trajetória, trabalhei em projetos mobile e web,
            desde sistemas internos até aplicações usadas por milhares de
            pessoas. Acredito que escrever código é também resolver problemas
            humanos — entender o contexto, simplificar fluxos e tomar decisões
            conscientes.
          </p>

          <p>
            Gosto de ambientes colaborativos, aprendizado contínuo e desafios
            que exigem pensamento crítico. Curiosidade e responsabilidade são o
            que guiam meu trabalho diariamente.
          </p>
        </div>

        <div className="about-media">
          <img
            src="/assets/aboutme.png"
            alt="Leonardo trabalhando"
          />
        </div>
      </section>

      {/* HOBBIES / EXTRAS */}
      <section className="about-gallery">

        <div className="about-grid">
          <img src="/assets/about-1.png" alt="" />
          <img src="/assets/about-2.png" alt="" />
          <img src="/assets/about-3.png" alt="" />
        </div>
      </section>

    </main>
  );
}
