import React from "react";

const Input = () => {
    const styleInput = 'text-3xl font-text_ale text-center ease-in-out focus:outline-none w-[500px] bg-gray-50 border-none rounded-full px-4 py-4 text-gray-800';

    return (
            <input
                type="text"
                className={styleInput}
                title="Sugestão: Use números, letras maiúsculas, letras minúsculas e símbolos!"
            />
    );
};

export default Input;
