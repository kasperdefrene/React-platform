import { Form, useLoaderData } from "react-router-dom";
import {getArts} from "../js/arts"
import { NavLink, Outlet } from "react-router-dom";
import React from 'react'

export const loader = async () => {
    const result = await getArts();
    return result;
}


export const action = () => ({})

export default function Root() {
    const artworks = useLoaderData();
   
    return (
    <div> 
                      
        <nav>
            <NavLink to="/">
            Home
            </NavLink>
            <img id="logo" src="../public/vite.svg" alt="" />
            <NavLink to="Arts">
            Arts Gallery
            </NavLink>
        </nav>
    <Outlet />
    </div>
    );
    
}

