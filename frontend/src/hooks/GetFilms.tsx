import React, {FC, useContext, useEffect, useState} from 'react';
import {getSaveFavourites} from "../services/http/movies";

    export const GET_SAVE_MOVIES = async (offset:number) => {
        const response = await getSaveFavourites(offset)
            .catch((err) => {
                return(err)
            });
        return response;
};

