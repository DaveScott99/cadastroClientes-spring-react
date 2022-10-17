import "./styles.css";

const Modal = ({ id = "modal", onClose = () => {}, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id == id) {
      onClose();
    }
  };

  return (
    <div id="modal" className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose}>
          Fechar
        </button>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
