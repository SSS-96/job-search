import React, { useEffect } from 'react';
import { optionsList } from '../../optionsList';
import FilterComponent from './FilterComponent';
import TextField from '@mui/material/TextField';

function FilterContainer(props) {

  const [searchByCompany, setSearchByCompany] = React.useState('');
  const handleChange = (event) => {
    setSearchByCompany(event.target.value);
  };

  useEffect(()=>{
    props.setFilter({
      name: 'searchByCompany',
      filterData: {
        "value": searchByCompany
      }
    });
},[searchByCompany])
  return (
    <div className='filterComponent'>
      {Object.keys(optionsList).map( option => {
        return <FilterComponent optionName={option} optionLabel={optionsList[option]?.label} optionData= {optionsList[option]?.options} setFilter={props?.setFilter}/>
      })}
      <TextField id="standard-basic" label="Search By company" value={searchByCompany} onChange={handleChange} variant="outlined" />
    </div>
  )
}

export default FilterContainer