import React from "react";

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps){

    return(
        <input className="text-[#00ffbb] border-0 p-4 w-34 h-10 mr-4  font-medium"
         type='search'
         placeholder="Pesquisar"
         value={value} 
         onChange={(e) => onChange(e.target.value)}/>
    )
}
