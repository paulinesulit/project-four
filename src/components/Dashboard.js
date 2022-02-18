import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebaseSetup.js";
import { query, collection, getDocs, where } from "firebase/firestore";

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [ name, setName ] = useState("");
    const navigate = useNavigate();
    
    useEffect(()=>{
        if (loading) return;
        if (!user) return navigate("/");
        const fetchUserName = async () => {
            try {
                const q = query(collection(db, "users"), where("uid", "==", user?.uid));
                const doc = await getDocs(q);
                const data = await doc.docs[0].data();
                setName(data.name);
                console.log(name);
            } catch (error) {
                console.log(error);
                alert("An error has occured grabbing user information");
            }
        };
        fetchUserName();
    }, [name, loading, user, navigate]);

    return (
        <div className="dashboard">
            <div className="dashboard__container">
                Logged in as
                <div>{user?.displayName}</div>
                <div>{user?.email}</div>
                <button className="dashboard__btn" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Dashboard;
