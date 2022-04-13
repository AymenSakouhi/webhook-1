"use strict";
var util = require("util");

// Deps
const Path = require("path");
const JWT = require(Path.join(__dirname, "..", "lib", "jwtDecoder.js"));
var util = require("util");
var http = require("https");

exports.logExecuteData = [];

function logData(req) {
  exports.logExecuteData.push({
    body: req.body,
    headers: req.headers,
    trailers: req.trailers,
    method: req.method,
    url: req.url,
    params: req.params,
    query: req.query,
    route: req.route,
    cookies: req.cookies,
    ip: req.ip,
    path: req.path,
    host: req.hostname,
    fresh: req.fresh,
    stale: req.stale,
    protocol: req.protocol,
    secure: req.secure,
    originalUrl: req.originalUrl,
  });
}

/*
 * POST Handler for / route of Activity (this is the edit route).
 */
exports.edit = function (req, res) {
  res.send(200, "Edit");
};

/*
 * POST Handler for /save/ route of Activity.
 */
exports.save = function (req, res) {
  logData(req);
  res.send(200, "Save");
};

/*
 * POST Handler for /execute/ route of Activity.
 */
exports.execute = function (req, res) {
  console.log("EXECUTE");

  // example on how to decode JWT
  JWT(req.body, process.env.jwtSecret, (err, decoded) => {
    if (err) {
      console.error(err);
      return res.status(401).end();
    }

    if (decoded && decoded.inArguments && decoded.inArguments.length > 0) {
      console.log("decoded in arguments: ", decoded.inArguments.length);

      for (var i = 0; i < decoded.inArguments.length; i++) {
        console.log("arg ", i, ":", decoded.inArguments[i]);
      }

      var webhookURL = decoded.inArguments[1].url;
      var contentJSON = decoded.inArguments[2].contentJSON;
      var email = decoded.inArguments[3].emailAddress;
      contentJSON = contentJSON.replace(/@email/g, email);


      var firstName = decoded.inArguments[5].firstName;
      contentJSON = contentJSON.replace(/@firstName/g, firstName);
      var phone = decoded.inArguments[6].phone;
      contentJSON = contentJSON.replace(/@phone/g, phone);
      var lastName = decoded.inArguments[7].lastName;
      contentJSON = contentJSON.replace(/@lastName/g, lastName);
      var opportunityId = decoded.inArguments[8].opportunityId;
      contentJSON = contentJSON.replace(/@opportunityId/g, opportunityId);
      var stageName = decoded.inArguments[9].stageName;
      contentJSON = contentJSON.replace(/@stageName/g, stageName);
      var programFamily = decoded.inArguments[10].programFamily;
      contentJSON = contentJSON.replace(/@programFamily/g, programFamily);
      var cpAccountId = decoded.inArguments[11].cpAccountId;
      contentJSON = contentJSON.replace(/@cpAccountId/g, cpAccountId);
      var salutation = decoded.inArguments[12].salutation;
      contentJSON = contentJSON.replace(/@salutation/g, salutation);
      var productName = decoded.inArguments[13].productName;
      contentJSON = contentJSON.replace(/@productName/g, productName);
      var productFamily = decoded.inArguments[14].productFamily;
      contentJSON = contentJSON.replace(/@productFamily/g, productFamily);
      var productId = decoded.inArguments[15].productId;
      contentJSON = contentJSON.replace(/@productId/g, productId);
      var degree = decoded.inArguments[16].degree;
      contentJSON = contentJSON.replace(/@degree/g, degree);
      var createdDate = decoded.inArguments[17].createdDate;
      contentJSON = contentJSON.replace(/@createdDate/g, createdDate);
      var optIn = decoded.inArguments[18].optIn;
      contentJSON = contentJSON.replace(/@optIn/g, optIn);
      var country = decoded.inArguments[19].country;
      contentJSON = contentJSON.replace(/@country/g, country);
      var voucher = decoded.inArguments[20].voucher;
      contentJSON = contentJSON.replace(/@voucher/g, voucher);
      var workExperience = decoded.inArguments[21].workExperience;
      contentJSON = contentJSON.replace(/@workExperience/g, workExperience);
      var budget = decoded.inArguments[22].budget;
      contentJSON = contentJSON.replace(/@budget/g, budget);
      var rate = decoded.inArguments[23].rate;
      contentJSON = contentJSON.replace(/@rate/g, rate);
      var studyAdvisor = decoded.inArguments[24].studyAdvisor;
      contentJSON = contentJSON.replace(/@studyAdvisor/g, studyAdvisor);
      var contactId = decoded.inArguments[25].contactId;
      contentJSON = contentJSON.replace(/@contactId/g, contactId);
      var domain = decoded.inArguments[26].domain;
      var journeyName = decoded.inArguments[27].journeyName;
      var obwKey = decoded.inArguments[31].obwKey;
      contentJSON = contentJSON.replace(/@obwKey/g, obwKey);

      var dataExtensionName = decoded.inArguments[28].edk;
      console.log("dataExtensionName: " + dataExtensionName);

      /* Webhook API Call */
      var axios = require("axios");

      // handle ssl
      const agent = new http.Agent({
        rejectUnauthorized: false,
      });
      
      var data = JSON.stringify(contentJSON);
      var config = {
        method: "post",
        url: `${domain}/${webhookURL}`,
        headers: {
          "Content-Type": "application/json",
        },
        httpsAgent: agent,
        data: data,
      };

      console.log(config.url);

      axios(config)
        .then(function (response) {
          console.info(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.error(error);
        });

      logData(req);
      res.send(200, "Execute");
    } else {
      console.error("inArguments invalid.");
      return res.status(400).end();
    }
  });
};

/*
 * POST Handler for /publish/ route of Activity.
 */
exports.publish = function (req, res) {
  logData(req);
  res.send(200, "Publish");
};

/*
 * POST Handler for /validate/ route of Activity.
 */
exports.validate = function (req, res) {
  console.log("VALIDATE");
  //todo
  //validate that all payload parameters are part of the inArguments
  res.send(200, "Validate");
};
