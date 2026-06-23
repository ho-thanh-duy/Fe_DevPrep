import React from "react";
import "./LoginModal.css";
import Login from "../../pages/Login";

function LoginModal({ show, onClose }) {
  if (!show) return null;

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal-backdrop")) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <Login isModal />
      </div>
    </div>
  );
}

export default LoginModal;
