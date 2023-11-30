const Numfield = ({ animes }) => {
  return (
    <div>
      <p className="search-results">
        Found <strong>{animes.length}</strong> results
      </p>
    </div>
  );
};

export default Numfield;
