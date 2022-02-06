import Modal from "react-modal";
import NetworkImage from "../NetworkImages";
import "./NetworkModal.css";

Modal.setAppElement("#root");

function NetworkModal({ isOpen, toggleModal, url }: any) {
  const modalStyle = {
    content: {
      margin: 0,
      padding: 8,
      background:
        document.documentElement.style.getPropertyValue("--primaryColor"),
    },

    overlay: {
      backgroundColor: "transparent",
    },
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          toggleModal(false);
        }}
        style={modalStyle}
      >
        <div
          onClick={() => {
            toggleModal(false);
          }}
        >
          <NetworkImage url={url} />
        </div>
      </Modal>
    </div>
  );
}

export default NetworkModal;
