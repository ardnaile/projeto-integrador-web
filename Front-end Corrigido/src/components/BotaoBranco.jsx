import React from "react";

const BotaoBranco = ({children, onClick}) => {
    return(
        <button onClick={onClick} className="bg-white text-black rounded-full px-4 py-2 w-48 h-12 focus:outline-none">
            {children}
        </button>
    )
}
export default BotaoBranco;