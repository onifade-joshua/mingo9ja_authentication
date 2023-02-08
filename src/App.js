import React from 'react';
import Login from "../src/components/Login/Login";
import Topfeed from '../src/components/Login/Topfeed';
import Signup from "../src/components/Signup/Signup";
import "./App.css";
import AuthProvider from '../src/contexts/AuthStateListener';
import { useAuth } from '../src/contexts/AuthStateListener';
import Dashboard from "../src/components/Dashboard/Dashboard";
import { Routes, Route } from 'react-router-dom';



const App = () => {
    return (
        <AuthProvider>
            <div className='App'>
                <Topfeed />

                <Routes>
                <Route exact path="/dashboard" element={<Dashboard />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </div>
        </AuthProvider>

    );
};

export default App;