"use strict";

/* =======================
   READSTREAK STORAGE
======================= */

const DEFAULT_DATA = {
    profile: {
        name: localStorage.getItem("name") || "Reader",
        email: localStorage.getItem("email") || "reader@email.com"
    },

    stats: {
        booksRead: 0,
        pagesRead: 0,
        hoursRead: 0
    },

    streak: {
        current: 0,
        longest: 0,
        lastActive: null
    },

    books: []
};

/* =======================
   LOAD DATA
======================= */

function getData() {

    const savedData =
        localStorage.getItem("readstreakData");

    if (!savedData) {

        localStorage.setItem(
            "readstreakData",
            JSON.stringify(DEFAULT_DATA)
        );

        return JSON.parse(
            JSON.stringify(DEFAULT_DATA)
        );
    }

    try {

        const data = JSON.parse(savedData);

        // Ensure all required sections exist

        if (!data.profile)
            data.profile = DEFAULT_DATA.profile;

        if (!data.stats)
            data.stats = DEFAULT_DATA.stats;

        if (!data.streak)
            data.streak = DEFAULT_DATA.streak;

        if (!data.books)
            data.books = [];

        return data;

    } catch (error) {

        console.error(
            "Corrupted storage detected. Resetting...",
            error
        );

        localStorage.setItem(
            "readstreakData",
            JSON.stringify(DEFAULT_DATA)
        );

        return JSON.parse(
            JSON.stringify(DEFAULT_DATA)
        );
    }
}

/* =======================
   SAVE DATA
======================= */

function saveData(data) {

    try {

        localStorage.setItem(
            "readstreakData",
            JSON.stringify(data)
        );

    } catch (error) {

        console.error(
            "Error saving data:",
            error
        );
    }
}

/* =======================
   RESET DATABASE
======================= */

function resetData() {

    localStorage.removeItem("readstreakData");

    localStorage.setItem(
        "readstreakData",
        JSON.stringify(DEFAULT_DATA)
    );

    location.reload();
}