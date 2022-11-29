import React from 'react';
import { Stack,} from '@mui/system';
import  Icon from '../assets/icons/gym.png';
import { Typography } from '@mui/material';


const BodyPart = ({ item, bodyPart, setBodyPart,setExercises }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{ borderTop: bodyPart === item ? "4px solid #FF2625" : '' ,
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "200px",
              height: "282px",
              cursor: "pointer",
                
            }}
        onClick={() => {
          
                setBodyPart(item);
                window.scrollTo({top: 1800, left: 100, behaviour: 'smooth'})
            }}            
    >
      <img
        src={Icon}
        alt="dumbell"
        style={{ width: "40px", height: "40px" }}
            />
            <Typography fontSize='24px' fontWeight='bold' color='#3A1212' >{item}</Typography>
    </Stack>
  );
}

export default BodyPart