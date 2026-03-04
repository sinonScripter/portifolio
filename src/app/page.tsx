import "./home.css";
import RightClickLove from "../components/RightClickLove";
import Link from "next/link";

import Footer from "../components/Footer";

export default function Home() {

  return (
    <main className="home">

      {/* ===== home ===== */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Oi, eu sou o Leo, <span className="highlight">Desenvolvedor Front-end</span><br />
            apaixonado por animação e UX / UI
          </h1>


          <p>
            Eu projeto e construo interfaces focadas em clareza, desempenho e interação centrada no ser humano. </p>
        </div>

        <div className="hero-media">
          <img src="/hero.gif" alt="Visual motion" />
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="projects-section">
        <div className="projects-grid">

          {/* Vyver */}
          {/* Vyver */}

          <Link href="/cases/vyver" className="project-link">
            <div
              className="project-card"
              style={{ viewTransitionName: "vyver-card" }}
            >
              <div
                className="project-media"
                style={{ viewTransitionName: "vyver-image" }}
              >
                <img src="/assets/Screenshot_1.png" alt="Vyver App" />
              </div>

              <div className="project-content">
                <h3
                  className="project-title"
                  style={{ viewTransitionName: "vyver-title" }}
                >
                  Vyver
                </h3>



                <span className="project-meta">Vyver · Shipped · 2024</span>

                <p className="project-description">
                  Atuei no design e desenvolvimento de interfaces mobile, criando
                  fluxos e componentes focados na experiência do usuário.
                </p>
              </div>
            </div>
          </Link>

          {/* Porto APP */}
          <div className="project-card">
            <a
              href="https://toaki.cdf.net/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <div className="project-card">
                <div className="project-media">
                  <img src="/assets/Screenshot_4.png" alt="Porto App" />
                  <span className="lock-badge">🔒</span>
                </div>

                <div className="project-content">
                  <h3 className="project-title">Porto APP</h3>
                  <span className="project-meta">
                    Porto Seguro · Private · 2023
                  </span>
                  <p className="project-description">
                    Atuei no sistema interno Toaki Web, resolvendo chamados técnicos e
                    implementando melhorias e novas funcionalidades para suporte operacional.
                  </p>
                </div>
              </div>
            </a>
          </div>


          {/* ANB Club */}
          <Link
            href="https://www.anbclub.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-card">
              <div className="project-media">
                <img src="/assets/Screenshot_6.png" alt="ANB Club" />
              </div>

              <div className="project-content">
                <h3 className="project-title">ANB Club</h3>
                <span className="project-meta">ANB · Private · 2024</span>
                <p className="project-description">
                  Refatorei todo o frontend do site, reorganizando a base de código e
                  melhorando performance, manutenção e consistência visual da aplicação.
                </p>
              </div>
            </div>
          </Link>

          {/* Scooby Doo */}
          <Link href="/cases/scooby-cade-voce" className="project-link">
            <div className="project-card">
              <div className="project-media">
                <img src="/assets/Screenshot_13.png" alt="Scooby Doo Cadê Você" />
              </div>

              <div className="project-content">
                <h3 className="project-title">Scooby Doo Cadê Você</h3>
                <span className="project-meta">
                  Projeto Voluntário · Concept · 2024
                </span>
                <p className="project-description">
                  Projeto voluntário criado para ajudar vítimas do Rio Grande do Sul a
                  localizar e reencontrar seus animais perdidos após as enchentes.
                </p>
              </div>
            </div>
          </Link>


        </div>
      </section>
      <RightClickLove />

    </main>
  );
}
