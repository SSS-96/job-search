import React, {useEffect, useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, OutlinedInput } from '@mui/material';
import Chip from '@mui/material/Chip';
import './filter.css';

function FilterComponent(props) {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };
    const [filterValue, setFilterValue] = useState({name: props.optionName, filterData:[]})
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        const modifiedFilterData = filterValue?.filterData
        const index = modifiedFilterData.indexOf(event?.target?.value[event?.target?.value.length-1]);
        index === -1 ? modifiedFilterData.push(event?.target?.value[event?.target?.value.length-1]) : modifiedFilterData.splice(index, 1);
        setFilterValue({
            name:props.optionName,
            filterData: event?.target?.value.length === 0? []:modifiedFilterData,
        });
    };
    
    useEffect(()=>{
        props.setFilter(filterValue)
    },[filterValue])

    return (
        <React.Fragment key={props?.optionName}>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
                <InputLabel htmlFor="grouped-native-select">{props?.optionLabel}</InputLabel>
                <Select
                    labelId={`${props.optionName} label name`}
                    id={props.optionName}
                    multiple
                    value={filterValue?.filterData}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
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