import { createRef, useRef, useState } from "react";
import Details from "./Details";

function MovieGrid({ results }) {
    const [isOpen, setIsOpen] = useState(false);
    const [movie, setMovie] = useState({});
    
    const showDetails = (index)=>{
        setMovie(results[index])
        setIsOpen(true)
    }


    return (
        <div className="grid grid-cols-4 gap-3">
            {results.length > 0 ? results.map(({ id,
                poster_path,
                original_title,
                release_date,
                overview },index) => (
                <div
                    className="bg-gray-600 p-2 rounded-lg movie-item"
                    key={id}>
                    <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title} />
                    <div className='font-bold text-white mt-2'>{original_title}</div>
                    <div className='text-gray-400  '>{release_date}</div>
                    <div className='text-gray-400  h-6 overflow-ellipsis overflow-clip truncate'>
                        {overview}
                    </div>
                    <button className="bg-green-400 p-2 rounded-lg text-center mt-2 w-full font-bold" onClick={() => showDetails(index)}>
                        Details
                    </button>

                </div>
            )
            ):<>

                <div>No result found</div>
            
            </>}
            {isOpen && <Details setOpenModal={setIsOpen} movie={movie}/>}
        </div>
    );
}

export default MovieGrid;