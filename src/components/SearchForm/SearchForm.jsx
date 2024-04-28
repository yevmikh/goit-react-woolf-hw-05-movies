import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import moduleCss from './searchForm.module.css';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  useEffect(() => {
    setQuery('');
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value;
    setSearchParams({ query: value.trim() });
  };

  return (
    <form onSubmit={handleSubmit} className={moduleCss.searchForm}>
      <input
        className={moduleCss.searchInput}
        type="text"
        name="query"
        placeholder="Enter movie name"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit" className={moduleCss.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
