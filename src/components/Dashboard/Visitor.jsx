"use client";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import app from "@/firebase/firebase.config";

const getToday = () => new Date().toISOString().split("T")[0];


const logVisitor = () => {
    const today = getToday();
    const alreadyVisited = localStorage.getItem("visited_date");

    if (alreadyVisited === today) return;

    const db = getDatabase(app);
    const visitorId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const newRef = ref(db, `visits/${today}/${visitorId}`);

    set(newRef, {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
    });

    localStorage.setItem("visited_date", today);
};

const subscribeToTodayVisitorCount = (callback) => {
    const db = getDatabase(app);
    const today = getToday();
    const todayRef = ref(db, `visits/${today}`);

    onValue(todayRef, (snapshot) => {
        if (snapshot.exists()) {
            callback(Object.keys(snapshot.val()).length);
        } else {
            callback(0);
        }
    });
};


const Visitor = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        logVisitor();
        subscribeToTodayVisitorCount(setCount);
    }, []);

    return (
        <div className="p-4 rounded-lg text-center  ">
            <p className="text-lg font-semibold text-black  min-h-screen flex items-center justify-center">
                👥 Today's Visitors: {count}
            </p>
        </div>
    );
};

export default Visitor;
