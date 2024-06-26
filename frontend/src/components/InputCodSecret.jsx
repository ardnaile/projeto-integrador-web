import React from "react";

const InputCodSecret = ({onInputChange}) => {
    const styleInput = 'text-3xl font-text_ale font-extrabold text-center ease-in-out focus:outline-none w-[500px] bg-gray-50 border-none rounded-full px-4 py-4 text-gray-800';
    
    const handleChange = (event) => {
        onInputChange(event.target.value);
      };

    return (
            <input
                type="text"
                className={styleInput}
                placeholder=""
                value={handleChange}
                title="Sugestão: Use números, letras maiúsculas, letras minúsculas e símbolos!"
                readOnly
            />
    );
};

export default InputCodSecret;