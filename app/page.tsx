'use client';
import React, { useEffect, useState } from 'react';
import SearchInput from './components/SearchInput/component';
import './globals.css';

type Anime = {
  id: string;
  attributes: {
    canonicalTitle: string;
    posterImage?: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
    };
  };
};

type AnimeResponse = {
  data: Anime[];
};

export default function Page() {

  // State para armazenar a pesquisa
  const [search, setSearch] = useState('');
  // State para acessar os dados do anime (objetos)
  const [animeValue, setAnimeValue] = useState<AnimeResponse>({ data : [] });
  
  const [hasAnime, setHasAnime] = useState(false);

  const apiUrl = 'https://kitsu.io/api/edge/';

  useEffect(() => {
    if (search) {
      setHasAnime(true);
      fetch(`${apiUrl}anime?filter[text]=${search}`)
        .then((response) => response.json())
        .then((response) => {
          setAnimeValue(response);
        })
    }
    else if (search === '') {
      setHasAnime(false);
    }

  }, [search]);

  return (
    <div>
      {/* Header */}
      <div className="bg-[#051824] flex justify-between items-center h-28">
        <div><button className='cursor-pointer w-30'><h1 className="text-[#00ffbb] font-medium text-center">A N I M E S</h1></button></div>
        <div><SearchInput value={search} onChange={setSearch}/></div> 
      </div>

      {/* Main Content */}
        <div className='flex'>
        {!hasAnime ?
        <div className='pt-20 mr-auto ml-auto text-center'>
          <p className='text-[#00ffbb] text-7xl font-bold'>No Anime found</p>
          <p className='text-[#00ffbb] pt-5'>Pesquise um Anime para classificar.</p>
        </div>
         : 
        <div className='text-[#00ffbb] font-medium w-[100%]'>
          {animeValue.data && (
            <ul className='animes-list'>
              {animeValue.data.map((anime) => (
                <li key={anime.id}>
                  <img src={anime.attributes.posterImage?.small} alt="" />
                  {anime.attributes.canonicalTitle}
                </li>
              ))}
            </ul>
          )}
        </div>}
        </div>
    </div>
  );
}