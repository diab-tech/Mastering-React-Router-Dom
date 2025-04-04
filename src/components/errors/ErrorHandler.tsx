// src/components/ErrorHandler.tsx
import { useNavigate } from "react-router-dom";

interface IProps {
  message?: string; // رسالة الـ error اختيارية
}

const ErrorHandler = ({ message = "حدث خطأ ما، حاول مرة أخرى!" }: IProps) => {
  const navigate = useNavigate();

  const handleReload = () => {
    window.location.reload(); // إعادة تحميل الصفحة
  };

  const handleGoHome = () => {
    navigate("/"); // رجوع للـ HomePage
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Oops!</h2>
      <p style={styles.message}>{message}</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleReload}>
          إعادة تحميل
        </button>
        <button style={styles.button} onClick={handleGoHome}>
          الصفحة الرئيسية
        </button>
      </div>
    </div>
  );
};

// Styles بسيطة للشكل (ممكن تستبدلها بـ CSS خارجي أو Tailwind لو بتستخدمه)
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
    fontSize: "2rem",
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

export default ErrorHandler;
