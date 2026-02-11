function SearchBar({ search, setSearch }) {
  return (
    <input
      className="input search"
      type="text"
      placeholder="🔎 Rechercher une tâche..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
