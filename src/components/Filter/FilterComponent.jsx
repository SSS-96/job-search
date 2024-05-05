import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function FilterComponent(props) {
    const {label, optionName} = props;
        
    
        return (
        <React.Fragment key={optionName}>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
                <InputLabel htmlFor="grouped-native-select">{props?.optionLabel}</InputLabel>
                <Select
                    labelId={`${props.optionName} label name`}
                    id={props.optionName}
                    multiple
                    value={[]}
                >

                    {props?.optionData?.map((option) => {
                        if(option?.options){
                            
                                return <optgroup label={option?.label}>
                                {option?.options?.map(_option=>{
                                    return   <option value={_option?.value}>{_option.label}</option>
                                })}
                                </optgroup>
                        
                        }else{
                        return   <MenuItem
                                value={option?.value}
                            >
                            {option?.label} 
                            </MenuItem>
                        }
                }) }
                </Select>
            </FormControl>
        </React.Fragment>
    )
}

export default FilterComponent