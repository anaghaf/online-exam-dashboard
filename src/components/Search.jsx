import React, { useEffect, useState } from 'react';
import MovieGrid from './MovieGrid';
import { API_KEY } from '../../apikey';

function Search({ searchTerm }) {
    const [searchResults, setSearchResults] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const fetchSearchResults = () => {
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${searchTerm}`
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResults(res.results ?? []);
                setLoaded(true);
            });
    };

    useEffect(() => {
        if (searchTerm) {
            fetchSearchResults();
        }
    }, [searchTerm]);

    return (
        <section>
            {loaded ? (
                <MovieGrid results={searchResults} />
            ) : (
                <div className="loading">Loading...</div>
            )}
        </section>
    );
}

export default Search;
