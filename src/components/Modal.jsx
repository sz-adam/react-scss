import 'boxicons'
import '../styles/Modal.scss'
import { ImCross } from "react-icons/im"




export default function Modal({ open,selectedImage, onClose }) {

  if (!open) {
    return null;
  }
  return (
    <div className='Modal'>

        <div className='ModalContainer'>
        <button className="close-btn" onClick={onClose}><ImCross  className='modalImCross'/></button>
        <img src={selectedImage} alt="Selected" />
        </div>
    </div>
  );
}


