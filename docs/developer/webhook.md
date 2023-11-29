---
layout: home
title: Webhook
parent: Developer
nav_order: 2
---

<div class="sticky-gotop">
<span class="inline-icon"><i class="fa-solid fa-arrow-up"></i></span>
</div>

# Webhook
{: .no_toc }

<div class="sticky-gotop">
<span class="inline-icon"><i class="fa-solid fa-arrow-up"></i></span>
</div>
<div class="sticky-right">
<details markdown="block">
  <summary>
    Quick Links
  </summary>
  {: .text-delta }
- Quick Links
{: toc}
</details>
</div>

## Webhooks
A webhook is used to receive events from the qr-answers backend.  You may select which events you receive by going to the [Developer](../menu/home_menu.html#developer) accordion and selecting the events you would like.  You also need to setup a URL where the qr-answers API backend can post events to.  This is called the Webhook URL.

  <p align="center" class="screen-shot">
  <img class="image-border-qr" alt="Webhook settings" src="../../assets/images/webhook_settings.png">
  </p>

You need to have a Secret Key as well.  Keep this Secret Key guarded so no one else can access it.  It is used to package the data that is sent to your webhook so you can verify that the sender is really qr-answers.com.   If your Secret Key is compromised, generate a new one by choosing the <span class="inline-button">Roll Secret Key</span> button.

An easy configuraiton to create a webhook is to use Express.  You can setup a simple post route that will receive the messages from qr-answers.com.  You also need to install the qranswers module from npm.  This will allow you to verify the payload sent to you by calling the ```constructEvent``` method - which verifies the integrity of the package by utilizing your Secret Key.

Here is a simple setup using Amplify and an AWS Lambda for the webhook:

```

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const crypto = require('crypto');

// Be sure to: npm install qranswers
const qranswers = require("qranswers")(process.env.QRANSWERS_API_KEY);      // Your regular API key
const endpointSecret = process.env.QRANSWERS_ENDPOINT_SECRET;               // Your Secret Key


// declare a new express app
const app = express()
app.use(
  bodyParser.json({
    verify: function(req, res, buf) {
      req.rawBody = buf;
    }
  })
);

app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.post('/qrhook', function(req, res) {

  const sig = req.headers['x-qr-signature'];
  let event
  try {
    event = qranswers.webhooks.constructEvent(req.rawBody, sig, endpointSecret)
  } catch (err) {
    console.log('Error', err);
    res.json({error: `Webhook Error: ${err.message}`});
    return;
  }

  switch (event.type) {
    case 'vote.evResponseVote':
      const data = event.data.object;
      console.log('Received event:', event);
      break;
  }

  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app

```