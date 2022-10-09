import React from "react";
import { Signup } from "./signup"
import {Login} from "./Login"
import { Routes, Route} from 'react-router-dom';
import { AuthProvider } from "../context";
import { FalsePath } from "./falsepath";
import PrivateRoute from "./privateroute";
import { Hero } from "./hero";
import YumYum from "./YumYum"
import JuicyFruits from "./JuicyFruits";
import FunkMaster from "./FunkMaster";
export  function Register(){
    return (
        <AuthProvider>
            <Routes>
           <Route
            path="/"
            element={
                     <PrivateRoute>
                         <Hero/>
                      </PrivateRoute>
                    }/>
                <Route path="Login" element={<Login/>}/>
                <Route path="signup" element={<Signup/>}/>
                <Route  path="*" element={<FalsePath/>}/>
                <Route  path="yumyum" element={<YumYum/>}/>
                <Route path="juicyfruits" element={<JuicyFruits/>}/>
                <Route path="funkmaster" element={<FunkMaster/>}/>

            </Routes>
        </AuthProvider>
    )
}