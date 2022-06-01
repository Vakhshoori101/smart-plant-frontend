import React from "react";
import WarningIcon from '@mui/icons-material/Warning';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { yellow, red, green } from "@mui/material/colors";

const iconArray = [
  <ThumbUpAltIcon sx={{ color: green[500] }} />,
  <WarningIcon sx={{ color: yellow[500] }} />,
  <WarningIcon sx={{ color: red[500] }} />
]

const Status = ({message}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
      {iconArray[message.status]}
      <h4 style={{margin: 0}}>{message.message}</h4>
    </div>
  );
}

export default Status;