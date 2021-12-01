function Search(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search food"
        onChange={props.btnSearch}
      ></input>
    </div>
  );
}

export default Search;
