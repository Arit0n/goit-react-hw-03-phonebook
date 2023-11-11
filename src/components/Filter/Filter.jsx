export const Filter = ({ filter, updateFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={evt => updateFilter(evt.target.value)}
        placeholder=""
      ></input>
    </div>
  );
};
