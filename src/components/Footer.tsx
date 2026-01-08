export default function Footer() {
  return (
    <footer
      style={{
        padding: "60px 80px",
        borderTop: "1px solid #eee",
        marginTop: 120,
      }}
    >
      <p style={{ color: "#666" }}>
        Made with care © {new Date().getFullYear()} Leonardo Moreno
      </p>
    </footer>
  );
}
