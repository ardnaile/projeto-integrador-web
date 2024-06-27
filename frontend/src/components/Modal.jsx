import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg relative">
                <button onClick={onClose} className="absolute top-2 right-2 bg-transparent border-none text-2xl cursor-pointer">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
