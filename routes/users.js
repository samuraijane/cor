const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../models");

// sign-in route

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await db.Users.findOne({ where: { email } });
    if (user) {
      console.log("User found", user);
      let passCompare = bcrypt.compareSync(password, user.password);
      if (passCompare) {
        console.log("Passwords Match!");
        res.status(202).json({
          userID: user.userID,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          description: user.description,
          role: user.role,
          mediaURL: user.mediaURL,
          linkedinURL: user.linkedinURL,
          gender: user.gender,
          active: user.active,
        });
      } else {
        res.status(404).json({
          code: 404,
          message: "Incorrect password",
        });
        console.log("Incorrect password");
      }
    } else {
      res.status(404).json({
        code: 404,
        message: "No User Found with that email.",
      });
      console.log("No User Found");
    }
  } catch (err) {
    console.log(err);
    res.status(502).json({
      code: 502,
      message: "No response from the servers.  Please try again later.",
      error: err,
    });
  }
});

// registration route

router.post("/register", async (req, res) => {
  let {
    firstName,
    lastName,
    email,
    password,
    description,
    linkedinURL,
    gender,
  } = req.body;

  try {
    let user = await db.Users.findOne({ where: { email } });
    if (!user) {
      hashedPass = bcrypt.hashSync(password, 10);
      const user = await db.Users.create({
        firstName,
        lastName,
        email,
        password: hashedPass,
        description,
        linkedinURL,
        gender,
      });
      return res.json({
        userID: user.userID,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        description: user.description,
        role: user.role,
        mediaURL: user.mediaURL,
        linkedinURL: user.linkedinURL,
        gender: user.gender,
        active: user.active,
      });
    } else {
      return res.status(409).json({
        code: 409,
        message: "Email already exists",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(502).json({
      code: 502,
      message: "No response from the servers.  Please try again later.",
      error: err,
    });
  }
});

/* Admin GET route */
router.get("/admins", async (req, res) => {
  try {
    let admins = await db.Users.findAll({
      where: { role: "admin" },
    });
    res.json(admins);
  } catch (err) {
    console.log(err);
    return res.status(502).json({
      code: 502,
      message: "No response from the servers.  Please try again later.",
      error: err,
    });
  }
});

// staff GET route
router.get("/staff", async (req, res) => {
  try {
    let users = await db.Users.findAll({
      where: { role: "staff" },
    });
    res.json(users);
  } catch (err) {
    return res.status(502).json({
      code: 502,
      message: "No response from the servers.  Please try again later.",
      error: err,
    });
  }
});

// get a list of all mentees
router.get("/mentee", async (req, res) => {
  try {
    let user = await db.Users.findAll({
      where: { role: "mentee"},
    });
    res.json({
      userID: user.userID,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      description: user.description,
      role: user.role,
      mediaURL: user.mediaURL,
      linkedinURL: user.linkedinURL,
      gender: user.gender,
      active: user.active,
    });
  } catch (err) {
    return res.status(502).json({
      code: 502,
      message: "No response from the servers.  Please try again later.",
      error: err,
    });
  }
});

// get a list of all mentors
router.get("/mentor", async (req, res) => {
  try {
    let user = await db.Users.findAll({
      where: { role: "mentor", deletedAt: null },
    });
    res.json({
      userID: user.userID,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      description: user.description,
      role: user.role,
      mediaURL: user.mediaURL,
      linkedinURL: user.linkedinURL,
      gender: user.gender,
      active: user.active,
    });
  } catch (err) {
    return res.status(502).json({
      code: 502,
      message: "No response from the servers.  Please try again later.",
      error: err,
    });
  }
});

//get all users in db, not deleted
router.get("/", async (req, res) => {
  try {
    let users = await db.Users.findAll();
    console.log("all users", users);
    res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(502).json({
      code: 502,
      message: "No response from the servers.  Please try again later.",
      error: err,
    });
  }
});

// update a user info
router.post("/updateUser", async (req, res) => {
  let {
    id,
    firstName,
    lastName,
    email,
    password,
    description,
    mediaURL,
    linkedinURL,
    gender,
  } = req.body;

  if (password) {
    try {
      hashedPass = bcrypt.hashSync(password, 10);
      //update
      await db.Users.update(
        {
          firstName,
          lastName,
          email,
          password: hashedPass,
          description,
          mediaURL,
          linkedinURL,
          gender,
        },
        { where: { id: id } }
      );
      //pull same user again
      const user = await db.Users.findOne({ where: { id: id } });

      res.json({
        message: `User ${user.id} ${user.firstName} ${user.lastName} has been updated`,
        user: {
          userID: user.userID,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          description: user.description,
          mediaURL: user.mediaURL,
          linkedinURL: user.linkedinURL,
          gender: user.gender,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(502).json({
        code: 502,
        message: "No response from the servers.  Please try again later.",
        error: err,
      });
    }
  } else {
    try {
      //update
      await db.Users.update(
        {
          firstName,
          lastName,
          email,
          description,
          mediaURL,
          linkedinURL,
          gender,
        },
        { where: { id: id } }
      );
      //pull same user again
      const user = await db.Users.findOne({ where: { id: id } });

      res.json({
        message: `User ${user.id} ${user.firstName} ${user.lastName} has been updated`,
        user: {
          userID: user.userID,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          description: user.description,
          mediaURL: user.mediaURL,
          linkedinURL: user.linkedinURL,
          gender: user.gender,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(502).json({
        code: 502,
        message: "No response from the servers.  Please try again later.",
        error: err,
      });
    }
  }
});

//admins update route
router.post("/admin/updateUser", async (req, res) => {
  let {
    id,
    firstName,
    lastName,
    email,
    password,
    description,
    mediaURL,
    linkedinURL,
    gender,
    role,
    active,
  } = req.body;

  if (password) {
    try {
      hashedPass = bcrypt.hashSync(password, 10);
      //update
      const updateResult = await db.Users.update(
        {
          firstName,
          lastName,
          email,
          password: hashedPass,
          description,
          mediaURL,
          linkedinURL,
          gender,
          role,
          active,
        },
        { where: { id: id } }
      );

      console.log("user updated with password", updateResult);
      //pull same user again
      const user = await db.Users.findOne({ where: { id: id } });

      res.json({
        message: `User ${user.id} ${user.firstName} ${user.lastName} & the password has been updated`,
        user: {
          userID: user.userID,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          description: user.description,
          mediaURL: user.mediaURL,
          linkedinURL: user.linkedinURL,
          gender: user.gender,
          role: user.role,
          active: user.active,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(502).json({
        code: 502,
        message: "No response from the servers.  Please try again later.",
        error: err,
      });
    }
  } else {
    try {
      //update
      const updateResult = await db.Users.update(
        {
          firstName,
          lastName,
          email,
          description,
          mediaURL,
          linkedinURL,
          gender,
          role,
          active,
        },
        { where: { id: id } }
      );
      console.log("user updated", updateResult);
      //pull same user again
      const user = await db.Users.findOne({ where: { id: id } });

      res.json({
        message: `User ${user.id} ${user.firstName} ${user.lastName} has been updated`,
        user: {
          userID: user.userID,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          description: user.description,
          mediaURL: user.mediaURL,
          linkedinURL: user.linkedinURL,
          gender: user.gender,
          role: user.role,
          active: user.active,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(502).json({
        code: 502,
        message: "No response from the servers.  Please try again later.",
        error: err,
      });
    }
  }
});

// delete user (soft delete)  user record still exists, just added a deletedAt column.  Can be restored.
router.post("/delete", async (req, res) => {
  let { id } = req.body;
  try {
    await db.Users.update({ active: false }, { where: { id: id } });
    await db.Users.destroy({ where: { id: id } });
    res.json({
      message: "User was deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(502).json({
      code: 502,
      message: "No response from the servers.  Please try again later.",
      error: err,
    });
  }
});

module.exports = router;
