import Select from "react-select";

const options = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "uncompleted", label: "UnCompleted" },
];

const FilterTodos = ({ selectedOption, onChange }) => {
  return (
    <Select
      placeholder={"Select a filter..."}
      value={selectedOption}
      onChange={onChange}
      options={options}
      className={"mt-2"}
    />
  );
};

export default FilterTodos;
