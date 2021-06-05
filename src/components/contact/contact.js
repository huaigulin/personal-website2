import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Chip, Grid, IconButton, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
    background: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
    },
    chipIcon: {
        marginLeft: "-4px !important",
    },
    chipOutlined: {
        color: theme.palette.common.white,
        borderColor: theme.palette.common.white,
    },
}));

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.background}>
            <h1>Get in Touch</h1>
            <p>huaigu.lin@hotmail.com</p>
            <Grid container justify="center">
                <Chip
                    icon={
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <IconButton
                                aria-label="like"
                                color="secondary"
                                fontSize="large"
                            >
                                <FavoriteIcon />
                            </IconButton>
                        </motion.div>
                    }
                    label="Give a like"
                    variant="outlined"
                    classes={{
                        icon: classes.chipIcon,
                        outlined: classes.chipOutlined,
                    }}
                />
            </Grid>
        </div>
    );
};
