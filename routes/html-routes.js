/* eslint-disable indent */
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    app.get("/", (req, res) => {
        // If the user already has an account send them to correct page
        if (req.user) {
            res.redirect("/api/user_data");
        }
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });

    app.get("/login", (req, res) => {
        // If the user already has an account send them to correct page
        if (req.user) {
            res.redirect("/login");
        }
       
        res.sendFile(path.join(__dirname, "../public/html/login.html"));
    });

    app.get("/signup", (req, res) => {
        // If the user already has an account send them to correct page
        if (req.user) {
            res.redirect("/login");
        }
        res.sendFile(path.join(__dirname, "../public/html/signup.html"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/index", isAuthenticated, (_req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/venue.html"));
    });

    app.get("/venue", isAuthenticated, (_req, res) => {
        
        res.sendFile(path.join(__dirname, "../public/html/venue.html"));
    });

    app.get("/band", isAuthenticated, (_req, res) => {
        
        res.sendFile(path.join(__dirname, "../public/html/band.html"));
    });

    app.get("/allVenue", isAuthenticated, (_req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/allVenue.html"));
    });

    app.get("/allBand", isAuthenticated, (_req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/allBand.html"));
    });

    app.get("/bandCal", isAuthenticated, (_req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/bandCal.html"));
    });
    
    app.get("/venCal", isAuthenticated, (_req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/venCal.html"));
    });

    app.get("/bandEdit", isAuthenticated, (_req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/bandEdit.html"));
    });

    app.get("/venueEdit", isAuthenticated, (_req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/venueEdit.html"));
    });

};