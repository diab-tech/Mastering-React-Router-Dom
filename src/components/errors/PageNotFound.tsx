// src/components/PageNotFound.tsx
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // رجوع للـ HomePage
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>404 - الصفحة غير موجودة</h2>
      <p style={styles.message}>عذرًا، الصفحة اللي بتحاول تدخلها مش موجودة أو حصل خطأ!</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleGoHome}>
          الصفحة الرئيسية
        </button>
      </div>
    </div>
  );
};

// Styles بسيطة (ممكن تستبدلها بـ CSS خارجي أو Tailwind)
const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center" as const,
    backgroundColor: "#f8f8f8",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#ff4444",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "2rem",
  },
  buttonContainer: {
    display: "flex",
    gap: "1rem",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default PageNotFound;
