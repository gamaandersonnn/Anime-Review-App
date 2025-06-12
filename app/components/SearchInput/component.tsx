import React from "react";

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps){

    return(
        <input className="text-[#00ffbb] border-0 p-2 w-40 h-10 mr-18 font-medium"
         type='search'
         placeholder="Pesquisar anime"
         value={value} 
         onChange={(e) => onChange(e.target.value)}/>
    )
}
