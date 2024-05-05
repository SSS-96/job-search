import React from 'react';
import { optionsList } from '../../optionsList';
import FilterComponent from './FilterComponent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FilterContainer(props) {
  return (
    <div className='filterComponent'>
      {Object.keys(optionsList).map( option => {
        return <FilterComponent optionName={option} optionLabel={optionsList[option]?.label} optionData= {optionsList[option]?.options} setFilter={props?.setFilter}/>
      })}
      <TextField id="standard-basic" label="Search By company" variant="outlined" />
    </div>
  )
}

export default FilterContainer