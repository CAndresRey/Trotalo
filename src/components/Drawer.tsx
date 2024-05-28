import Modal, { Styles } from "react-modal";

Modal.setAppElement("#root"); // replace '#root' with the id of your app's root element

const Drawer = ({
  isOpen,
  onRequestClose,
}: {
  isOpen: boolean;
  onRequestClose: () => void;
}) => {
  const customStyles: Styles = {
    content: {
      top: "0",
      left: "auto",
      right: "0",
      bottom: "0",
      width: "300px",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px",
      zIndex: "99",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Drawer"
    >
      <div className="pt-10">
        <h2>Drawer</h2>
        <button onClick={onRequestClose}>close</button>
      </div>
    </Modal>
  );
};

export default Drawer;
