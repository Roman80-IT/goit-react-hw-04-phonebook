import { Input, Wrapper } from './Filter.styled';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <form>
      <Wrapper>
        <p>Find contacts by name</p>
        <Input
          type="text"
          name="filter"
          placeholder="Find contact"
          value={filter}
          onChange={onFilterChange}
        />
      </Wrapper>
    </form>
  );
};
