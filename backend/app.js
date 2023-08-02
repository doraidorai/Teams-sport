/* --------------------IMPORT------------------------------------ */
// import express Module
const express = require('express');

// import body-parser Module
const bodyParser = require('body-parser');
//import bcrypt Module
const bcrypt = require('bcrypt');
//import mongoose module
const mongoose = require("mongoose");
// import multer module
const multer = require("multer");
// import path module
const path = require("path");
// import axios module
const axios = require("axios");
//mongodb://127.0.0.1:27017=>adresse de base du serveur MongoDB(port27017)
//marsDB=>DB name
mongoose.connect("mongodb://127.0.0.1:27017/marsDB");


/* -------------------------------------------------------- */
//create express application
const app = express();

//app Configuration
app.use(bodyParser.json());    //send JSON Response
app.use(bodyParser.urlencoded({ extended: true }));   //Get Object from Request


// Security configuration

//Models Importation
const Match = require("./models/match");
const Player = require("./models/player");
const Team = require("./models/team");
const User = require("./models/user");


function genrateId(T) {
    let max;
    if (T.length == 0) {
        max = 0;
    } else {
        max = T[0].id
        for (let i = 0; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id
            }

        }
    }
    return max;
}

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader(

        'Access-Control-Allow-Headers',

        'Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn'

    );

    res.setHeader(

        'Access-Control-Allow-Methods',

        'GET, POST, DELETE, OPTIONS, PATCH, PUT'

    );

    next();

})
// ShortCut
app.use("/myFiles", express.static(path.join("backend/images")));
// Media Types
const MIME_TYPE = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
};


const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, "backend/images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(" ").join("-");
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
        cb(null, imgName);
    },
});





/*------------DataBase Simulation (not used in real life)-------------------------------*/
// let matchesTab = [
//     { id: 1, teamOne: 'FCB', teamTwo: 'RMA', scoreOne: 1, scoreTwo: 0 },
//     { id: 2, teamOne: 'ACM', teamTwo: 'INT', scoreOne: 5, scoreTwo: 10 },
//     { id: 3, teamOne: 'AAA', teamTwo: 'BBB', scoreOne: 0, scoreTwo: 0 },
// ];
// let TeamsTab = [
//     { id: 1, name: 'RMD', owner: 'Florantino', foundation: 1907, stadium: 'san siro' },
//     { id: 2, name: 'ACM', owner: 'mlanisto', foundation: 2010, stadium: 'man city' },
//     { id: 3, name: 'ManCity', owner: 'Na', foundation: 1700, stadium: 'street Stadium' },

// ]
// let PlayersTab = [
//     { id: 1, name: 'Alice', age: 12, nbr: 1907, position: 'attaque' },
//     { id: 2, name: 'soma', age: 11, nbr: 2010, position: 'defense' },
//     { id: 3, name: 'alice2', age: 5, nbr: 1700, position: 'pivo' },

// ]



/* -----------------Business Logic (traitement Logic) --------------------------  */

//BL Matches

//Get All Matches 
app.get('/matches', (req, res) => {
    //traitement
    console.log('here into Business Loading all matches');   // display in terminal SERVER BACKEND (runwith command: node server.js)
    Match.find().then((doc) => {
        res.json({ matches: doc });
    }
    );
    // res.json({matches:matchesTab});
});

//Get get Match By ID
app.get('/matches/:id', (req, res) => {
    console.log('here into BL get matche by ID');
    let id = req.params.id;
    Match.findOne({ _id: req.params.id }).then((doc) => {
        res.json({ match: doc })
    });
    // let id = req.params.id;    //récuperer ID 
    // findedMatch= matchesTab.find((obj) => {return obj.id == id});
    // res.json({findedMatch });   //response
});

//Delete Match By ID
app.delete('/matches/:id', (req, res) => {
    let id = req.params.id;

    Match.deleteOne({ _id: id }).then((response) => {
        console.log("Here response ater delete", response);
        if (response.deletedCount == 1) {
            res.json({ message: "Deleted With success" })
        } else {
            res.json({ message: "Error" });
        }
    }

    )
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id == id) {
    //         matchesTab.splice(i, 1);
    //         break;
    //     }

    // } 
    // res.json({message:'Deleted with Success'}) 
});

//ADD Match
app.post('/matches', (req, res) => {

    let matchObj = new Match(req.body);
    matchObj.save();
    res.json({ msg: "Added with sucess" });

});
//EDIT Match
app.put('/matches', (req, res) => {
    let match = req.body;
    Match.updateOne({ _id: req.body._id }, match).then((response) => {
        console.log("Here response after update", response);
        if (response.nModified == 1) {
            res.json({ message: "Updated with success" });
        } else {
            res.json({ message: "error" });
        }
    });
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id==match.id) {
    //         matchesTab[i]=match
    //         break;
    //     }

    // }
    // res.json({message:"Edited With Sucess"})
});

app.get('/api/matches/search/:s1/:s2', (req, res) => {
    console.log("Here into search");
    let x = req.params.s1;
    let y = req.params.s2;
    Match.find({ scoreOne: x, scoreTwo: y }).then((docs) => {
        console.log("Here finded matches", docs)
        res.json({ findedMatches: docs })
    }
    )


});
app.post('api/matches/search/', (req, res) => {
    console.log("Here into search");
    let x = req.body.s1;
    let y = req.body.s2;
    Match.find({ scoreOne: x, scoreTwo: y }).then((docs) => {
        console.log("Here finded matches", docs),
            res.json({ findedMatches: docs })
    }

    )
})

//BL Playes

//Get All Players 
app.get('/api/players', (req, res) => {
    //traitement
    console.log('here into Business Loading all players');   // display in terminal SERVER BACKEND (runwith command: node server.js)
    Player.find().then((docs) => {
        res.json({ players: docs })
    }
    );

});
// Add Players
app.post('/api/players', (req, res) => {
    let playerhObj = new Player(req.body);
    playerhObj.save();
    res.json({ msg: "Added with sucess" });
});

//Get Player By ID
app.get('/players/:id', (req, res) => {
    console.log('here into BL get player by ID');
    let id = req.params.id;
    Player.findOne().then((doc) => {
        res.json({ player: doc })
    });

});
//Delete Player By ID
app.delete('/players/:id', (req, res) => {
    let id = req.params.id;

    Player.deleteOne({ _id: id }).then((response) => {
        console.log("Here response ater delete", response);
        if (response.deletedCount == 1) {
            res.json({ message: "Deleted With success" })
        } else {
            res.json({ message: "Error" });
        }
    }

    )

});

//EDIT Player
app.put('/players', (req, res) => {
    let player = req.body;
    Player.updateOne({ _id: req.body._id }, player).then((response) => {
        console.log("Here response after update", response);
        if (response.nModified == 1) {
            res.json({ message: "Updated with success" });
        } else {
            res.json({ message: "error" });
        }
    });

});

//BL Teams

//Get All Teams 
app.get('/teams', (req, res) => {
    //traitement
    console.log('here into Business Loading all teams');   // display in terminal SERVER BACKEND (runwith command: node server.js)
    Team.find().then((docs) => {
        res.json({ teams: docs })
    }
    );

});

// Add Teams
console.log("Added with sucess");
app.post('/api/teams/', (req, res) => {
    let teamObj = new Team(req.body);
    teamObj.save();
    res.json({ msg: "Added with sucess" });
});
//Get get Team By ID
app.get('/api/teams/:id', (req, res) => {
    console.log('here into BL get team by ID');
    let id = req.params.id;
    Team.findOne().then((doc) => {
        res.json({ team: doc })
    });

});
//Delete Team By ID
app.delete('/teams/:id', (req, res) => {
    let id = req.params.id;

    Team.deleteOne({ _id: id }).then((response) => {
        console.log("Here response ater delete", response);
        if (response.deletedCount == 1) {
            res.json({ message: "Deleted With success" })
        } else {
            res.json({ message: "Error" });
        }
    }

    )

});
//EDIT Team
app.put('/teams', (req, res) => {
    let team = req.body;
    Team.updateOne({ _id: req.body._id }, team).then((response) => {
        console.log("Here response after update", response);
        if (response.nModified == 1) {
            res.json({ message: "Updated with success" });
        } else {
            res.json({ message: "error" });
        }
    });

});

// BL : signup
app.post("/api/users/signup", multer({ storage: storageConfig }).single("img"),
    (req, res) => {
        console.log("here into bl : signup", req.body);
        bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
            console.log("crypted pwd", cryptedPwd);
            req.body.pwd = cryptedPwd;
            req.body.avatar = "http://localhost:3000/myFiles/" + req.file.filename;
            let user = new User(req.body);
            user.save(
                (err, doc) => {
                    if (err) {
                        res.json({ msg: "Error with signup" });
                    } else {
                        res.json({ msg: "Error with signup" });
                    }
                }
            );

        })

    });
// Bl : login
app.post("/api/users/login", (req, res) => {
    console.log("here into bl : login", req.body);
    let user;
    User.findOne({ email: req.body.email }).then((doc) => {
        user = doc;
        console.log("Here doc", doc);
        if (!doc) {
            res.json({ msg: "0" })
        } else {
            return bcrypt.compare(req.body.password, doc.pwd);
        }

    }).then((checkPwd) => {
        console.log("Here checkpwd", checkPwd);
        if (!checkPwd) {
            res.json({ msg: "1" });
        } else {
            let userTosend = {
                id: user._id,
                fName: user.firstName,
                lName: user.lastName,
                role: user.role,
            };
            res.json({ msg: "2", connectedUser: userTosend });
        }
    });

});


// Bl : search Weather
app.post("/api/weather/", (req, res) => {
    console.log("here city", req.body);
    let key = "62ee756a34835483299877a61961cafb";
    let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${req.body.city}&appid=${key}`;
    axios.get(apiURL).then((response) => {
        let data = response.data;
        console.log("Here response from axios", data);
        let result = {
            temperature: data.main.temp,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            icon: data.weather[0].icon
        };
        res.json({ result: result });
    });

});
/* -----------------------EXPORT----------------------------------- */
//make app exportable
module.exports = app;

