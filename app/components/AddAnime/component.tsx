import React from "react";

export default function AddAnime() {
    // Função para fechar o modal (implemente conforme necessário)
    const closeModal = () => {
        
        // Exemplo: window.history.back();
        // Ou use um estado/contexto para controlar a exibição do modal
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Lógica para adicionar o anime
        
    };

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
                <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                    <h2 className="text-xl font-semibold mb-4">Adicionar Anime</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1" htmlFor="animeTitle">Título do Anime</label>
                            <input
                                id="animeTitle"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 w-full"
                                placeholder="Digite o título do anime"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1" htmlFor="animeDescription">Descrição</label>
                            <textarea
                                id="animeDescription"
                                className="border border-gray-300 rounded-md p-2 w-full"
                                placeholder="Digite uma descrição do anime"
                                rows={3}
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1" htmlFor="animeRating">Avaliação</label>
                            <input
                                id="animeRating"
                                type="number"
                                min={1}
                                max={10}
                                className="border border-gray-300 rounded-md p-2 w-full"
                                placeholder="Digite uma nota de 1 a 10"
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="bg-gray-300 text-black rounded-md px-4 py-2 mr-2 hover:cursor-pointer"
                                onClick={closeModal}
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="bg-black text-white rounded-md px-4 py-2 hover:cursor-pointer"
                            >
                                Adicionar Anime
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}