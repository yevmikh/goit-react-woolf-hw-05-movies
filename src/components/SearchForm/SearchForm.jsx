import React from 'react';
import { useSearchParams } from 'react-router-dom';
import moduleCss from './searchForm.module.css';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

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
        defaultValue={query}
      />
      <button type="submit" className={moduleCss.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
