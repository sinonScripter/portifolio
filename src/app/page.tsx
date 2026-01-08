import "./home.css";


export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>
            Frontend Engineer<br />
            crafting digital experiences
          </h1>

          <p>
            I design and build interfaces focused on clarity, performance and
            human-centered interaction.
             
          </p>
        </div>
        <div className="hero-media">
          <img src="/hero.gif" alt="Visual motion" />
        </div>
      </section>

      {/* ===== QUADRADOS ===== */}
      <section className="squares-section">
        <div className="squares-container">


        <div className="square-item">
            <div className="square">
            <img src="/assets/Screenshot_1.png" alt="Design de interfaces" />
            </div>
            <h3 className="projetc-title">Vyver</h3>
            <button>Estudo do Caso</button>
            </div>

            <div className="square-item">
            <div className="square">
            <img src="/assets/Screenshot_4.png" alt="Design de interfaces" />
            </div>
            <h3 className="projetc-title">Porto APP</h3>

            <p>Design de interfaces</p>
            </div>

            <div className="square-item">
            <div className="square">
            <img src="/assets/Screenshot_6.png" alt="Design de interfaces" />
            </div>
            <h3 className="projetc-title">ANB CLUB</h3>
            
            <p>Design de interfaces</p>
            </div>

                    
            <div className="square-item">
            <div className="square">
            <img src="/assets/Screenshot_7.png" alt="Design de interfaces" />
            </div>
            <h3 className="projetc-title">Scooby Doo Cade Voce</h3>

            <p>Design de interfaces</p>
            </div>

        </div>
      </section>
    </main>
  );
}
