import React, { useRef, useState, useContext } from 'react';
import ReactDOM from 'react-dom'
//import './Modal.css

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
    const modalRef = useRef();
    const [modalContent, setModalContent] = useState(null);
    const [onModalClose, setOnModalClose] = useState(null);

    const closeModal = () => {
        setModalContent(null);

        if (typeof onModalClose === 'function') {
            setOnModalClose(null);
            onModalClose()
        }
    }

    const contextValue = {
        modalRef,
        modalContent,
        setModalContent,
        setOnModalClose,
        closeModal
    }

    return (
        <>
            <ModalContext.Provider value={contextValue}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef}/>
        </>
    )
}

export function Modal() {
    const { modalRef, modalContent, closeModal } = useContext(ModalContext);

    if (!modalRef || !modalRef.current || !modalContent) return null;

    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={closeModal}></div>
            <div className="relative bg-transparent p-8 rounded shadow-lg z-50">
                {modalContent}
            </div>
        </div>,
        modalRef.current
    );
}

export const useModal = () => useContext(ModalContext);
