import React from "react";
import LoaderContainer from "./Container/LoaderContainer";
import { Typography } from "@mui/material";

const Loader = () => {
    return (
        <LoaderContainer>
            <Typography variant="h2" component="h2">
                Victor Ciolac
            </Typography>
        </LoaderContainer>
    );
};

export default Loader;
