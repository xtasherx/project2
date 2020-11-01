/* eslint-disable indent */
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
    // looking for a local strategy for authentication
    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json(req.user);
    });

    //  signup route 
    app.post("/api/signup", (req, res) => {
        db.User.create({
                email: req.body.email,
                password: req.body.password,
                isBand: req.body.isBand
            })
            .then(() => {
                res.redirect(307, "/api/login");
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    //  signup route 
    app.post("/api/signup", (req, res) => {
        db.User.create({
                email: req.body.email,
                password: req.body.password,
                isBand: req.body.isBand,
                address: req.body.address,
                address2: req.body.address2,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip
            })
            .then(() => {
                res.redirect(307, "/api/login");
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", (req, res) => {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
};