import React from "react";
import { Box, Typography } from "@mui/material";

interface HeaderProps {
   todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => {
   return (
      <Box textAlign="left">
         <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{ fontSize: 18 }}
         >
            Todo List. Amount: {todoCount}
         </Typography>
      </Box>
   );
};
