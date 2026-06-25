"use strict";

/* =======================
   DEFAULT DATABASE
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

    let data = localStorage.getItem("readstreakData");

    if (!data) {
        localStorage.setItem(
            "readstreakData",
            JSON.stringify(DEFAULT_DATA)
        );

        return structuredClone(DEFAULT_DATA);
    }

    return JSON.parse(data);
}

/* =======================
   SAVE DATA
======================= */

function saveData(data) {
    localStorage.setItem(
        "readstreakData",
        JSON.stringify(data)
    );
}