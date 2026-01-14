export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Left */}
          <div className="footer-left">
            <h3>Nice to see you here!</h3>

            <p className="footer-email">leonardo.sinon10@gmail.com</p>

            <p>Este site é melhor visualizado em um computador.</p>

            <p className="footer-copy">
              Made with love © 2026 Leonardo Moreno
            </p>
          </div>

          {/* Right */}
          <div className="footer-right">
            <a href="mailto:leonardo.sinon10@gmail.com">Email</a>
            <a href="https://github.com/sinonScripter" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            
            <a href="https://www.linkedin.com/in/leonardo-moreno-4b1465242/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <style >{`
        .footer {
        margin-top:30px;
          background: #1c1c1c;
          color: #ffffffff;
          padding: 56px 80px;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 80px;
        }

        /* LEFT */
        .footer-left h3 {
        background: linear-gradient(90deg, #ff4d6d, #7b2ff7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

          font-size: 2rem;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .footer-left p {
          color: #a9c7d4ff;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 6px 0;
          opacity: 0.8;
        }

        .footer-email {
          margin-top: 12px;
          font-size: 1rem;
          opacity: 1;
        }

        .footer-copy {
          margin-top: 24px;
          font-size: 0.85rem;
          opacity: 0.6;
        }

        /* RIGHT */
        .footer-right {
          display: flex;
          gap: 32px;
        }

        .footer-right a {
          color: #cfcfcf;
          text-decoration: none;
          font-size: 0.95rem;
          opacity: 0.85;
          transition: opacity 0.2s ease;
        }

        .footer-right a:hover {
          opacity: 1;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .footer {
            padding: 72px 24px;
          }

          .footer-container {
            flex-direction: column;
            gap: 48px;
          }

          .footer-right {
            gap: 24px;
          }
        }
      `}</style>
    </>
  );
}
