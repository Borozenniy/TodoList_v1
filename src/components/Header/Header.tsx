import React from "react";
import { Box, Typography } from "@mui/material";

export const Header: React.FC = () => {
   return (
      <Box textAlign="left">
         <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{ fontSize: 18 }}
         >
            Todo List
         </Typography>
      </Box>
   );
};
