import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "56px", marginBottom: "12px" }}>404 Not Found</h1>
        <p style={{ marginBottom: "24px" }}>
          Your visited page was not found. You may go home page.
        </p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            background: "#db4444",
            color: "#fff",
            padding: "14px 24px",
            borderRadius: "4px",
          }}
        >
          Back to home page
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;