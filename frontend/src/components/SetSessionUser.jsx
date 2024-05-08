import React, { useState, useEffect } from "react";

function SetSessionUser({ setUser, setAdmin }) {
    useEffect(() => {
        fetchSessionUser();
    }, []);

    const fetchSessionUser = async () => {
        try {
            const response = await fetch('/api/set_session_user');
            const data = await response.json();
            setUser(data.user);
            if (data.user && data.user.is_admin === 1) {
                console.log(data.user);
                setAdmin(true);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return null; 
}

export default SetSessionUser;
