const models = require("../models");

exports.get_landing = function (req, res, next) {
  res.render("landing", { title: "Express" });
};

exports.submit_lead = function (req, res, next) {
  console.log("lead email:", req.body.lead_email);
  return models.Lead.create({
    email: req.body.lead_email,
  })
    .then((lead) => {
      res.redirect("/leads");
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

exports.show_leads = function (req, res, next) {
  return models.Lead.findAll()
    .then((leads) => {
      // console.log(leads);
      res.render("landing", { title: "Express", leads: leads });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};
