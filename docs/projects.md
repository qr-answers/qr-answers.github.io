---
title: Projects Tab
layout: home
nav_order: 4
has_children: true
---

# Projects Tab
{: .no_toc}

<div class="sticky-gotop">
<span class="inline-icon"><i class="fa-solid fa-arrow-up"></i></span>
</div>
<div class="sticky-right" style="overflow-y: scroll; max-height: 90%">
<details markdown="block">
  <summary>
    Quick Links
  </summary>
  {: .text-delta }
- Quick Links
{: toc}
</details>
</div>

![Projects](../assets/images/tabbar_projects.png)

The Projects tab is used to create or list your Projects.  This is the starting point for you to create your Projects.  For a good overview of the Project concept, read [this](../index#project-concept---important) from the Introduction.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="Projects tab, add projects" src="../../assets/images/projects_tab.png">
   </p>

The default Project list display shows "Active" Projects.  You may toggle between "Active" and "Archived" Projects be selecting the filter <span class="inline-icon"><i class="fa-solid fa-filter"></i></span> icon in the upper right.  See [Project Delete and Archive](#project-delete-and-archive) below.

## Add Project
You may choose the plus sign <span class="inline-icon"><i class="fa-solid fa-square-plus"></i></span> Add Project to create a new Project.  After clicking the plus sign, you enter the Project name you would like
to use in the empty text box.  Press tab or return to save the Project name.  

{: .note }
> If for some reason you get a blank line without a text box, <br><img class="image-border" alt="Contest details screen" src="../../assets/images/projects_blankline.png"><br> you may long press on the 'blank' line and a text box will appear, enter your Project name.  <br> <img class="image-border" alt="Contest details screen" src="../../assets/images/proj_longp.png"><br>Alternatively, click on the blank line to go to the details page (shown below) and then click on the edit pencil icon in the upper right to type in the Project name.  This 'disappearing text box' issue may happen occassionally, we are working to fix this for all browsers.

Next, click on the Project name to take you to the details of the Project.  

## Project Details
The default display of the Project Details page is to open the <span class="inline-accordion">Campaigns</span> accordion.  After the basics of adding <span class="inline-accordion">Locations</span>, <span class="inline-accordion">Questions and Answers</span> is complete, most of the work is done in the Campaigns section.  

   <p align="center" class="screen-shot">
   <img class="image-border" alt="Project details screen" src="../../assets/images/project_screen.png">
   </p>

### Edit Project
As you can see above, the Project Details screen has an edit pencil <span class="inline-icon"><i class="fa-solid fa-pen-to-square"></i></span> icon in the upper right. Clicking on that will bring up the Edit Project screen.  There are two sections related to Projects - Basic Properties and Notifications.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="Edit project basic attributes" src="../../assets/images/project_attributes.png">
   </p>

#### Basic Properties
You may edit the basic properties of the Project under this accordion - including Name, Abbreviation (shown under the Results tab), Tags, etc.

##### Tags
You may change the Project Name here.  You may also add an Abbreviation for the Project that will show up in the [Results](./results) overview.  In addition, you may add Tags to your Project.  In general Tags are used to associate things with each other - so that you can search for them later.  For example, if you added a tag named "leather", you might use that on a Location or Question or Project, etc. so that later, when you were trying to find items having to do with "leather", your search would show the items you tagged that way.  The tags are auto-completed after you use them.  So, if you add "leather", then later in a Question you type "lea" - it will autocomplete to leather.  You may also add a Description to your Project for your own use.

{: .important }
> Tags are currently available for all items, you may search for them in various areas of the product.

After updating any information, you should choose the <span class="inline-butotn">Update</span> button.  If you do not press Update, your changes will not be saved.  

##### Project Delete and Archive
This page also allows you to Delete or Archive this Project.  You will be prompted to confirm the deletion.  

There are 2 forms of deletion:  

1) Delete forever - where your project and all of its locations, questions, answers and results are deleted permanently.

2) Archive - where your Project and associated information is marked as Archived and can be viewed by selecting the filter <span class="inline-icon"><i class="fa-solid fa-filter"></i></span> icon on the [Projects](#project-details) list page and choosing Archive.  You may unarchive a Project by editing the Project from the Archived view.

#### Project Notifications
You may receive Notifications (email or webhook) when certain events happen at the Project level (See [Notifications](./notifications/notifications.html) for a full description).  You may add Project level Notifications here.  

   <p align="center" class="screen-shot">
   <img class="image-border" alt="project notifications" src="../../assets/images/project_notifications.png">
   </p>

As is described in the [Notifications](./notifications/notifications.html) section, the drop-down menu will show the available Notification types.  The above screenshot shows:

<ul>
   <li>Notify when (count) reaches limit</li>
   <li>Repeat notification every (count) votes</li>
   <li>Notify if (count) (units) since last vote has passed</li>
</ul>

##### Notify when (count) reaches limit - LIMIT

This 'LIMIT' notification will occur when a certain number of votes/scans has occured at the Project level.  Most of the time, you would use this at the Question or Specific Question at a Specific Location (Question Assignment) level to let you know when, for example, you've received 200 votes for "How was your service today?" at your restaurant.  The count value is the number of votes that will trigger the notification.  You can have the count apply to the Current count or the Accumulated account.  Current counts can be reset to 0 by pressing the recycle button.  Accumulated counts can not be reset and will continue to increase throughout the life of your Project.  To the right of the Current and Accumulated raido buttons are the values at the time you loaded this form.  Below, the Current value is 5 and the Accumulated value is 21.  So, at some point, someone reset the Current value to 0, otherwise, it would also show 21.  You may click the Reset on Notification checkbox if you want the Current count value to be automatically reset to 0 once the Notification is issued.  So, if you set the (count) value to 100, once 100 votes for this Project happen, the Current counter for the Project will be reset to 0 automatically.  So, the notification will trigger again after 100 new votes.  You may also reset the value from a link in the email notification you receive, or, if you are listed as a developer for this Project, you may call the [resetNotificationAggregate](./developer/api.html#reset-current-counter) API to reset the counter after you receive the webhook notification.  Note that you have to press the Save button to save the new notification.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="project notification limit" src="../../assets/images/project_notif_limit.png">
   </p>


##### Repeat notification every (count) votes - EVERY

The 'EVERY' notification will occur every time the (count) number of votes occur for this project.  This is effectively a way to be notified every (for example) 1,000 votes for this Project.  So, you would be notified at 1000, 2000, 3000, etc.  The Current and Accumulated counters are as describe in the Notifications section and above.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="project notification repeat" src="../../assets/images/project_notif_repeat.png">
   </p>

##### Notify if (count) (units) since last vote has passed - DELTATIME

The 'DELTATIME' notification will occur if the (count) number of (units) has passed since the last vote was received. For example, if you want to be notified if there has been 7 days since the last vote was received (prior to this vote), set the (count) value to 7 and the (units) value to days.  This notification will continue to occur every time (count) (units) have passed since the last vote.  Please note that you have to have a 'new' vote to trigger this.  This will not notify you if 7 days have passed since *any* vote has occured; it occurs when a new vote has occured, and you haven't had one for (count) (units) - e.g. 7 days.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="project notification delta time" src="../../assets/images/project_notif_deltatime.png">
   </p>


### Locations
<div class="accordion-bar">Locations</div>
Locations are used to attach questions to a place.  That may seem odd at first blush, but is is useful to organize your questions.  You must add at least 1 Location to each Project.  If you aren't posting Questions in multiple places, just name your default Location "Default".  If you are posting Questions at a conference, you might use the room number as the Location.  If you are a franchise owner or have multiple business locations, you might use the address or name of each business as the Location.  So, Locations are used as a place to post your Questions.  The Location name can be printed on the resulting PDF file so it is easy to put the Question and Answers in the right place.

Another way to use Locations is to treat a person as a Location.  So, if you have a trucking company and want to know how each of your drivers is driving, make the 'Location' actually be the driver's name and then you can attach Questions to that particular driver.  Keep in mind if you have a lot of drivers you can use the copy/paste functionality to add a long list.  Just add a new Location (below) by pressing the plus sign and then copy a list of names from an Excel column, then paste that list into the single Location box and it will create multiple Locations for you.

#### Add Location
You may add a new Location by pressing the plus sign Add button.  That will allow you to enter a Location name in the highlighted text box - see below:

   <p align="center" class="screen-shot">
   <img class="image-border" alt="add a location" src="../../assets/images/add_location.png">
   </p>

After you add your Location(s), you move on to adding Questions and Answers below.  For Questions, Answers and Locations you may [smart paste](#smart-paste-questions-and-answers-from-excel) a list as described elsewhere in this document.

#### Edit Location Details
To edit the details of the Location or add notifications, press the pencil icon to the left of the Location name.  That will bring up the <span class="inline-accordion">Basic Properties</span> and <span class="inline-accordion">Notifications</span> accordions.  

##### Location Basic Details
The Basic Properties section will show the name, any tags, description and allow to add a latitude and longitude for this location (assumign it s a Location vs. a person).  You may press the Location icon <span class="inline-icon"><i class="fa-solid fa-location-arrow"></i></span> to have the application automatically use your current location latitude/longitude value as the Location.  After you have assigned a latitude/longitude, you may map that location to verify the coordinates on a map - press the map icon <span class="inline-icon"><i class="fa-solid fa-map"></i></span>.  The latitude/longitude values may be used to help graph your results in the Dashboards or other analytics.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="edit location details" src="../../assets/images/location_edit.png">
   </p>

{: .important }
> If you are using a browser and press the Location icon, you may be asked to allow the app to use your current location.  If you allow the access, then the lat/lon values will be filled in automatically.  In some browsers, you may see an error after you approve the access, press the Location icon again and you should see the values.

##### Location Notifications

Please see the [Notifications](./notifications/notifications.html) section of this document for complete details on Notifications.  Like Projects, you may receive Notifications at the Location level by adding the Notification to the Location.  So, as you receive varying Question/Answer vote combinations at the chosen Location, the system will generate notifications based on the rules you choose.  Notifications can be received associated with the Project, Campaign, Location, Question, QuestionLocation (assigned question to a specific location) and Answers levels.  For example, if you attach a LIMIT of 200 Notification to the "Chevron station in San Juan" location, then you will be notified when there are 200 votes/answers to the Question(s) you posted at that Location.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="location notifications" src="../../assets/images/location_notif.png">
   </p>

The Notification types are the same for all levels (Project, Campaign, Question, etc.).  See the Notifications section or for additional examples, see the [Project Notifications](#project-notifications) section.

### Questions and Answers
<div class="accordion-bar">Questions and Answers</div>
Now that we have a Location, we can add Questions and Answers.

#### Questions
You may add as many Questions as you like.  Later in the [Campaigns](#campaigns) section, you assign each Question to a Location that you created above.

##### Add Question
Click on the <span class="inline-accordion">Questions and Answers</span> accordion  and press the plus sign <span class="inline-icon"><i class="fa-solid fa-square-plus"></i></span> Add Question button to enter a question - like <i>Which setting worked better for you today?</i>

   <p align="center" class="screen-shot">
   <img class="image-border" alt="Add question" src="../../assets/images/add_question.png">
   </p>

##### Delete Question
To delete a Question (and all of its Answers), click on the edit pencil <span class="inline-icon"><i class="fa-solid fa-pen-to-square"></i></span> icon and then choose the <span class="inline-button">Delete</span> button.  You will be prompted to make sure that is what you want to do.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="Delete question" src="../../assets/images/delete_question.png">
   </p>

##### Edit Question Details
You may edit the Question details like tags, description, etc. by clicking on the edit pencil <span class="inline-icon"><i class="fa-solid fa-pen-to-square"></i></span> icon.  You will see the below screen.  Keep in mind, you can edit the Question text by long pressing on the text in the list vs going to the Edit Question Details screen.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="Add question" src="../../assets/images/edit_question.png">
   </p>

All Projects, Questions, Answers and Campaigns have Tags and a Description field. See [Tags](#tags) for a complete description.

#### Answers
This section discusses how to manage your Answers.  There are several types of Answers (text, photo) as well as optional settings you can use to direct a user to your website, documents or other URLs when they vote.

##### Add Answer
The plus sign Add Answer option will show automatically after you enter your Question.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="Question add Answer" src="../../assets/images/question_add_answer.png">
   </p>

Now click the Add Answer button to add an Answer. After typing the text, be sure to press tab or enter. 

   <p align="center" class="screen-shot">
   <img class="image-border" alt="Open table answer" src="../../assets/images/hm_open_table.png">
   </p>

Below, we've added 6 Answers.  You may collapse the Answer list by pressing the up chevron <span class="inline-icon"><i class="fa-solid fa-chevron-up"></i></span> to the right of the question.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="List of answers" src="../../assets/images/hm_text_answers.png">
   </p>

##### Delete Answer
To delete an Answer, you may press on the trash can <span class="inline-icon"><i class="fa-solid fa-trash"></i></span> icon on the right of the Answer, or see the [Edit Answer Details](#edit-answer-details) below.

##### Edit Answer Details
There are several options that you may apply to each Answer.  To edit the Answer details (add photos, add Tags, Description or Link URLs), press on the pencil <span class="inline-icon"><i class="fa-solid fa-pencil"></i></span> icon just to the left of the Answer in the list.  You will get an Edit Answer screen like below:

   <p align="center" class="screen-shot">
   <img class="image-border" alt="Edit Answer" src="../../assets/images/edit_answer.png">
   </p>

The default type of Answer for any Question is a <span class="form-label">Text</span> answer. However, you may have <span class="form-label">Text</span> and/or <span class="form-label">Photo</span> answers (you can combine them if you like).  In the above screen shot, you will see that we have both a Text and Photo Answer combination.  Click the checkbox for which one(s) you would like.  When you check the box for Text, you will see the <span class="form-label">Text Answer</span> text box that you may edit.  When you check the <span class="form-label">Photo</span> checkbox, you may then assign a photo in 3 ways:

1) Enter URL - pressing the <span class="inline-button">Enter URL</span> button will display a <span class="form-label">Photo URL</span> text box.  You may type or paste a URL to the photo in that box; after you type or paste the URL, press tab or enter to accept the photo.  You will see the photo show up in the <span class="form-label">Image Preview</span> area.

2) Upload - pressing the <span class="inline-button">Upload</span> button will prompt you with an Upload dialog where you may pick a photo to upload.  Some browser require your permission to access the photos on your phone or desktop, so if you are prompted to allow uploads, choose yes.  Also, some browser have a Preference Setting that may enable or disable photo upload.  If you don't get an upload dialog, check your browser's settings.

3) Take Photo - pressing the <span class="inline-button">Take Photo</span> button will attempt to use the camera on your device to pick a previously recorded photo or take a new one. If you are on a desktop browser, it may act like you pressed Upload if you do not have a camera.

Once a photo shows in the <span class="form-label">Image Preview</span> area, you may rotate the image using the left <span class="inline-icon"><i class="fa-solid fa-rotate-left"></i></span> and right <span class="inline-icon"><i class="fa-solid fa-rotate-right"></i></span> rotate icons.  Once you press the <span class="inline-button">Update</span> button, you will not be able to rotate the photo again. You'll have to re-upload it.<a name="optional-answer-link"></a>

<div class="accordion-bar-qr">Optional Answer Link</div>
When someone chooses this Answer, there is an optional 'action' that can be implemented.  The <span class="form-label">Link Behavior</span> choice determines what the URL will do.  There are 2 choices:

1) Link - selecting this radio button will add the <span class="form-label">Link Text</span> to the results page (pie chart, etc.) that, when clicked, will go to the <span class="form-label">Link URL</span>.  For example, maybe you would like someone to sign up for your newsletter.  You could make the <span class="form-label">Link Text</span> say "Sign up for our newsletter" and the <span class="form-label">Link URL</span> go to your website newsletter signup form.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="Link text and Link URL" src="../../assets/images/link_text.png">
   </p>

Then, when the results are displayed after the person scans this Answer's QR code, it would show this:

   <p align="center" class="screen-shot">
   <img class="image-border" alt="Link text on results page" src="../../assets/images/link_text_results.jpeg">
   </p>

2) Automatic Redirect - selecting this radio button will disable the <span class="form-label">Link Text</span>.  You may put a URL in the <span class="form-label">Link URL</span>, so that when someone scans an Answer, instead of showing the results page of a pie chart, bar graph, etc. it will record the vote and automatically redirect to the entered <span class="form-label">Link URL</span>.  

For example, your question may be <i>"Which document would you like to download?"</i> and the Answers would be names of documents (like a Tesla Model S, X or Y pamphlet).  When the person scans the Answer <i>"Tesla Model S"</i>, then they would automatically be redirected to the Tesla Model S PDF document online.  The vote for the Answer will still be recorded - but the voter will not see the graphical results.

##### Reorder Answers
When you generate a PDF, list of PNG files or Avery® labels, the Answers will show up in the order that you have listed them in this list.  To reorder the list, long press on the up/down arrow <span class="inline-icon"><i class="fa-solid fa-up-down"></i></span> icon and drag the Answer to a new position.


### Previous Project Exists - Copy
   If you created a previous contest, when you first go to a new contest, you will see the below interface - which allows you to do two things: 1) Copy Questions and Answers from a prior Contest; 2) Paste Questions and Answers from a spreadsheet that has a specific format.

<p align="center" class="screen-shot">
   <img class="image-border" alt="copy or paste questions and answers" src="../../../assets/images/copy_previous.png">
</p>

#### Copy Question(s) from other Project
   If you have prior Project, and you are creating a brand new Project, the first (and only first) time you go to add Questions to your new Project, you will see a drop down with a list of your prior Projects.  You may copy those Questions (and Answers if you choose the Inlude Answers checkbox) into this Project by selecting the Project and choosing Copy.  You will see the Questions copied over to this Project as new Questions.

#### 'Smart Paste' Questions and Answers from Excel
  Sometimes, it is easier to enter your Questions and Answers into a spreadsheet (maybe you already have some there) and then copying those and pasting them into the app.  If you don't use column headers, you need to set up your spreadsheet exactly like the example above.  The format is a Question in column A on a single line and the Answers in column B on subsequent lines.  You can copy/paste multiple questions by repeating the above pattern.  Select the 2 columns from Excel and choose copy (CTRL+C or CMD+C), then go back to the app page and make sure the Question text edit box is active (see below, it will have a flashing cursor), press the Paste button (CTRL+V or CMD+V).  That will paste your Questions and Answers into the app.

<p align="center" class="screen-shot">
   <img class="image-border" alt="active text entry" src="../../assets/images/cp_text_active.gif">
</p>


  If you use column headers, you can copy/paste more information in varying formats.  Questions have 3 fields: text, tags and description.  Answers have 7 fields: text, tags, description, imageUrl, linkAction, linkDescription.  The explanation of these fields is below. You don't have to use all of the fields, but be sure to have a field named "text".  If you are only going to paste Questions with no Answers, you can use a spreadsheet with column headers of "text", "tags", "description" - like the below.  Copy the information from the spreadsheet, including the headers, then open a Question text edit box and paste the information.  The app will figure out where to put everything for you. The below will create 2 questions. Here is a sample spreadsheet:

<p align="center" class="screen-shot">
   <img class="image-border" alt="copy/paste questions only" src="../../assets/images/cp_q_only.png">
</p>


  Note that tags are pipe \| delimited (the vertical bar).  If you would like to just paste Answers, you may use any of the fields above (be sure to include a column named "text").  Copy the area of the spreadsheet and open a text edit area for a new Answer; then paste the values.  The below will create 5 answers. Here is a sample spreadsheet:

<p align="center" class="screen-shot">
   <img class="image-border" alt="copy/paste answers only" src="../../assets/images/cp_a_only.png">
</p>


  Perhaps the easiest way to paste both Questions and Answers is to use a more clearly formatted header row.  Just put 'question.' in front of the Question fields or 'answer.' in front of the Answer fields.  For example, you could have  'question.text', 'answers.text' as the 2 columns, when you paste them, you will get Questions with the associated Answers when you paste the values into a Question edit text box.  Leave blank values in the 'question.text' column where you have 'answers.text' values for the prior Question.  The below will create 2 questions.  The first question - "How are you today?" - will have 2 answers ("Fine" and "SoSo"); the second question - "What size?" - will have 3 answers ("Small", "Medium", "Large"). Here is a sample spreadsheet (right click it an open it in a new tab to be able to read it better):

<p align="center" class="screen-shot">
   <img class="image-border" alt="copy/paste full sample" src="../../assets/images/cp_full_spreadsheet.png">
</p>

In case you can't read them, the header fields listed above are:  "question.text", "question.tags", "question.description", "answer.text", "answer.tags", "answer.description", "answer.linkaction", "answer.link", "answer.linkdescription", "answer.imageurl".

##### Question Fields

**text** - This is the text that will display as the question.  Be sure to include the question mark if it is a question.  For example:  "How was your service today?"

**tags** - These are used to help organize things.  To apply multiple tags, separate them with a vertical bar \| character.

**description** - This can be used for you to keep any notes

##### Answer Fields

**text** - The text to display for the Answers.  If you leave this blank, then you **must** supply an imageUrl field.  Note that you can have **text** or **imageUrl** or both for your answer.  If you only supply an **imageUrl** then your answer will be displayed as the image.  If you supply only a **text** value, then your answer will only dispay the text.  If you supply both, your answer will display both the **text** and **imageUrl**

**tags** - These are used to help organize things.  To apply multiple tags, separate them with a vertical bar \| character.

**description** - To keep any notes

**linkaction** - This has to be either 'embed' or 'redirect'.  You can see a full description of these fields under the [Optional Answer Link](#optional-answer-link) section. Any other value will be ignored and dropped.  **embed** means to embed a hyperlink into the Answer results page.  So, after the user scans a QR code, they are presented a results page and on that page the embedded **link** will show up with the text of the link showing the **linkDesription** field below.  The hyperlink itself will be the **link** field as described below.  If you select **redirect**, then the linkDescription field is ignored and the user will not be taken to a results page, but will be automatically redirected to the **link** hyperlink.  The answer will be recorded, but the user will not see the aggregated results.

**link** - See linkaction above.  This is either the hyperlink embedded on the results page or the link that the user us automatically redirected to if **linkaction** is **redirect**.  For example, you could put a link on the results page that goes to your website, or you can use redirect to automatically redirect the user to a survey or other location.

**linkdescription** - This is the text of the hyperlinnk if **linkaction** is set to **embed**.  It is isgnored when **redirect** is chosen for **linkaction**.

**imageurl** - This is a URL of an image that can be displayed as or along with your answer's **text** field.  See **text** above.


### Campaigns
<div class="accordion-bar">Campaigns</div>
After selecting a Project, you may create a Campaign - read about the Projects and Campaigns concept [here](../index#project-concept---important).  A Campaign is like a timeframe for the Questions to be valid. So, a Campaign would have Locations and their assigned Questions within the Locations and have a period of time where someone can answer the questions. To get your Questions and Answers to be active so participants can vote, you have to create a Campaign.  Campaigns are either in a DRAFT, ACTIVE or INACTIVE state.  DRAFT campaigns are first created to aggregate the Locations, Questions, Answers from your Project into a Campaign.  After you have configured and tested your DRAFT Campaign, you may make it *live* by making the status ACTIVE.  After the Campaign is completed, the Campaign moves to the INACTIVE state.

First, choose CREATE DRAFT from the <span class="inline-accordion">Campaigns</span> accordion.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="create draft campaign" src="../../assets/images/create_draft.png">
   </p>

Then choose the plus sign <span class="inline-icon"><i class="fa-solid fa-square-plus"></i></span> Add and type in a campaign name, e.g. "Furniture Use - ACME Corp"

   <p align="center" class="screen-shot">
   <img class="image-border" alt="first campaign" src="../../assets/images/first_campaign.png">
   </p>

Then click on the name of the Campaign you just created to go to the Campaign Detail screen.  There are four sections to control your Campaign - <span class="inline-accordion">Campaign Setup</span>, <span class="inline-accordion">Campaign Customization</span>, <span class="inline-accordion">Campaign Bulk Print</span>, <span class="inline-accordion">Campaign Question Assignments</span>

#### Setup
<div class="accordion-bar">Setup</div>
The Campaign Setup section will allow you to edit a few Campaign properties (name, abbreviation, tags, description) as well as dictate the Schedule and Response Frequency of the Campaign.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="campaign setup" src="../../assets/images/campaign_setup.png">
   </p>

<div class="accordion-bar-qr">Schedule</div>
The Schedule section determines when your Campaign will be in what 'state'.  There are three (3) states to a campaign: "Draft" - where any votes registered are restricted and used just for testing; "Active" - this is the state where you are tallying real results and want to measure accurately the Responses; "Inactive" - this is really the period where the Campaign is finished and the Responses may or may not be counted.  You may move the state of the Campaign between these states by choosing either Manual or Automatic.  If you choose Manual, then you are responsible for moving the Campaign state from Draft to Active to Inactive under this section.  

If you choose Automatic, then you need to enter the Start date and End date of the Active period using the date picker.  Any Responses prior to the start date will be marked 'Draft' and any responses received after the End date will be marked 'Inactive'.  The Responses between the Start date and End date will be marked as the 'Active' Responses.  The Current Status will be displayed with the colored boxes.

Be sure to push the <span class="inline-button">Update</span> button to save your changes!

<div class="accordion-bar-qr">Response Frequency</div>
The Response Frequency section allows you to choose how many times/how often a person may register a vote.  Choosing <span class="inline-button">No Limit</span> allows the user to vote as many times and as often as they like for a single Question.  You might use this option if you want to monitor real-time results on how someone feels about something that may change over time, etc.  Choosing the <span class="inline-button">Once</span> button will restrict the voter to a single vote on a Question.  They will be allowed to change their vote, but the total of votes will only register their 'last' chosen answer. For example, if someone choose "Yes", but changed their mind to "No", then the "Yes" vote will be subtracted and the "No" vote will be registered.  The <span class="inline-button">Hourly</span> and <span class="inline-button">Daily</span> buttons will restrict the voter to once per Hour or Day.  For example, if you choose Day, and post a Question at a conference, the voter will only be able to vote one time per day on that Question.

#### Customization
<div class="accordion-bar">Customization</div>
The Campaign Customization section will allow you to setup some general defaults for your Campaign.  When you print PDFs of your Question and Answers, there can be some instructional text at the top of the page.  The default instructional text says "Use your phone's camera to vote. Scan, Click, Done."  You may customize this text by changing it here.  If you do not want the text to appear, just clear the <span class="form-label">Question Page Header</span> field.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="campaign customization" src="../../assets/images/campaign_customization.png">
   </p>

The <span class="inline-section">Question Page Appearance</span> section allows you to change 4 aspects of the generated graphics.  Setting these values will pre-populate the choices in the PDF, PNG or Avery® printing screens.

Section 1 allows you to change the QR code's internal shape and foreground and background colors.  There are several options for the internal shapes of the QR code.  The default value is a square - so the marks internal to the QR code will be squares (which is the most common shape in most QR codes).  You may choose a square, circle, triangle, hexagon, star, etc. (we add to these periodically).
Also, you may choose any colors you like, but beware that if the colors do not have enough contrast, a phone scanning them may not be able to recognize the code.  On some output formats (PDF, for example), you may choose to have a logo displayed in the lower left of the page.  This is a good place to add your own branding to the output.  You may upload or take a photo for this logo.  Be sure to press the <span class="inline-button">Update</span> button to save your changes

Section 2 has a single choice for the default layout for your Answer if it only has text - no photo.  Given you can manually change these when you print a PNG or Avery® label, there is no additional choice at this time.

Section 3 allows you to choose the default layout for your Answers on a PDF document if you have a photo as part of your Answer.  The squares show where the QR code is placed relative to the photo (which is shown in gray).  The default is for the QR code to display in the upper left corner overlapping the photo.

Section 4 allows you to choose how you would like photos to be displayed in their destination area.  Cover will have the photo fill the entire area and maintain its aspect ratio.  Contain will scale the photo to fit into the area and maintain its aspect ratio.  Click the radio buttons to see the difference.  You may also set a default opacity value for the image.  100 means that the photo is completely opaque and will not show any of the background through the photo.  Moving the slider to the left will decrease the opacity and allow whatever is behind the photo to show through.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="QR scan response chart style" src="../../assets/images/qrscan_response.png">
   </p>

The <span class="inline-section">QR Scan Response Chart Style</span> section allows you to choose 3 types of results charts that are displayed after the user scans a QR code.  The default is to display a pie chart of the aggregated results from all votes.  Choose the left "Thank You!" chart type if you do not want the user to be able to see the results.  Choose the gradient boxes on the right if you would like to show that chart style - it has a more solid color for the greater number of votes and decreases its intensity for fewer votes.

#### Bulk Print
<div class="accordion-bar">Bulk Print</div>
This section allows you to print all of your Campaign's Questions by Location.  You may check the boxes for those Locations you would like to print.  Choose <span class="inline-button">Generate Checked Documents</span> button to print all of the Questions assigned to the checked locations.  This is basically a short-cut you can use instead of printing one location at a time in the <span class="inline-accordion">Question Assignments</span> section.  After pressing the button, you will be prompted with the XXXX page to choose your output format.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="QR scan response chart style" src="../../assets/images/bulk_print.png">
   </p>

#### Question Assignments
<div class="accordion-bar">Question Assignments</div>
Since you now have some Locations and some Questions, you need to assign Question(s) to each Location.  See the [Project Concept](../index#project-concept---important) in the Introduction for information on how Locations and Questions interact.

You will see a list of the Locations you have created.  Clicking on each one will open their accordion to show a list of all available Questions in this Project.  Check the checkbox next to the Question(s) you would like to have assigned to each location.  Below, you can see that we are assigning the <i>Which setting worked better for you today?</i> Question to the <i>Showroom B</i> Location.

   <p align="center" class="screen-shot">
   <img class="image-border" alt="Question assignments to locations" src="../../assets/images/question_assignments.png">
   </p>

You may assign as many Questions as you like to each Location.

There are 2 ways to print your results:

1) Select the download <span class="inline-icon"><i class="fa-solid fa-download"></i></span> icon on the left of the Location name to download that Location's Questions/Answers.

2) Go to the Bulk Print section described [above](#bulk-print) and output all Location's Questions/Answers at once.

Either choice will send you to the DownloadDoc page where you can choose your output format (PDF, PNG, Avery®) and download or print your documents.


