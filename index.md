---
title: Introduction
layout: home
nav_order: 1
description: Introduction to using QR-Answers and QR-Contest
permalink: /
---
<div class="sticky-gotop">
<span class="inline-icon"><i class="fa-solid fa-arrow-up"></i></span>
</div>

# QR-Answers.com and QR-Contest.com
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

QR-Answers and QR-Contest are survey-like applications that allow you to publish a question where the answers are marked with QR codes.  Most QR code survey apps take you to a web page where you have to fill out a lengthy survey or set of forms.  Those survey types lose 90% of thier participants in the first few questions.

QR-Answers and QR-Contest are different because the **answer** *is* the QR code.  The voter only has to scan the code on their phone and click the displayed link. Done!  That action alone registers the answer that they have chosen - no surveys, no extra stuff to fill out.

 **QR-Answers** is for enterprise customers wishing to survey multiple projects and locations and is fully multi-user and collaborative.  **QR-Contest** is more consumer focused to allow you to have a fun way for people to vote for their favorite chilli in a cookoff, artwork on a wall, whether they were naughty or nice, etc.

## Quick Start
Here is a video with a brief walkthrough. 
<p align="center" class="screen-shot">
<video width="268" height="640" controls>s
  <source src="">
</video>
</p>

To get started go to the [Quick Start](docs/quickstart)

## Project Concept - Important
The basic structure of QR-answers is Project based.  A Project is a central organized space where you may add Locations, Questions and Campaigns.  A Location is where a Question is posted.  So, if you are running a conference, maybe the Project is the conference name and the Locations are rooms where there are sessions.  You may want to ask the same Question in multiple rooms to see how people react based on the configuration of the room or the speaker.  You will have mutiple Locations and you may assign as many Questions to each Location as you like.  That way, you can reuse Questions by just assigning them to more than one Location - then measure their performance.  

Below we have a Project named "Herman Miller".
It has 2 Locations: "Showroom B" and "Lobby"
There are 2 Questions:  "Which computer did you use today?", "Which setting worked better for you today?"
The solid lines with arrows show that each Question was attached to a Location.  The dotted line indicates that you can also assign any Question to multiple locations.  So, if you assigned "Which computer did you use?" to "Showroom B", then you would have 2 Questions you can post in Showroom B.  When the Questions are printed, you have a choice to also print the Location name in small type at the bottom of the PDF so that whoever is disributing the PDFs knows where they go.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="Project Location and Question assignment" src="../../assets/images/proj_show_lobby.png">
   </p>


A Campaign is like a timeframe for the Questions to be valid.  So, a Campaign would have Locations and their assigned Questions within the Locations and have a period of time where someone can answer the questions.  Statistics are aggregated based on Campaigns - which means you can get an overview of how people are responding to your Questions for a given Campaign.  For our conference example, perhaps you would provide snacks on one day - call the Campaign "Snacks Available"; then on another day, don't provide snacks and call the Campaign "No Snacks".  You could set the timeframe up for "Snacks Availble" to be from Monday 8am through Monday 5pm and the timeframe for "No Snacks" to be from Tuesday 8am to Tuesday 5pm.  You would run both Campaigns and compare the Question responses between them.

Here are some more examples:

Franchise Owner - owns 3 In-N-Out Burger locations (San Juan Capistrano, San Clemente, Laguna Beach).  They want to take a quick survey of customer service.  So, they set up a new Project called "Customer Service", then they add 3 Locations; then they add a single Question "How was your service today?" that has 3 answers "Loved it", "OK", "Not good".  They want to see if the responses are different based on the day of the week, so they setup 7 campaigns (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday).  For each Campaign, they assign the same Question to each Location and set the timeframe to the particular day.  They can invite the manager of each store to also edit or view the campaigns restricted to the store they manage.

Wine tasting room.  There are white and red flights of wine.  Set up a "Wine Tasting" Project.  Add a single Location (Wine Room), then add 2 questions:  "Which white wine did you prefer?", "Which red wine did you prefer?".   Add the wines as Answers under each Question, then create a Campaign called "City Council Tasting", assign the Questions to the Wine Room Location and set a timeframe and make the Campaign ACTIVE.

Airport maintenance manager.  Create a Project for the Main Terminal.  Create Locations for each of the bathrooms (ticket counter area, Gate 2, Gate 7, Gate 33, etc.).  Create a single Question with a single Answer.  "Scan the code below if the bathroom needs serviced".  Create a Campaign, assign the Question to the Locations and make the Campaign ACTIVE. Now, the maintenance manager can monitor in real-time the responses to see when they need to send someone out to service the bathroom.

Simplest example would be to create a Project called "AdHoc Question", then create a fake Location called "Default" and then a single Question "How are you today?" with 2 answers - "Good", "Not Good".  Assign the Question to the "Default" Location and create a Campaign with a response limit of "Once" (meaning the voter can vote once - if they vote again, their vote is changed) and make the Campaign ACTIVE so people can scan to vote.


As the creator of the Project, you (or those you have given access) are able to log into https://app.qr-answers.com and view the results for the most recently active Project on the home page or see all the results under the [Results](docs/results) bottom tab.
