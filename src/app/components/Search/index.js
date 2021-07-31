import { Input } from 'antd';


const { Search } = Input;



const SearchInput = ({onSearch= ()=>{}})=>(
<Search
      placeholder="Are you looking for an amazing song?"
      onSearch={onSearch}
      enterButton
    />

)

export default SearchInput;