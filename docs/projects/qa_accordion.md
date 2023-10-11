---
layout: home
title: Questions and Answers
parent: Contests Tab
nav_order: 2
---

{: .no_toc}

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

<div class="accordion-bar">Questions and Answers</div>
## Questions and Answers
  Selecting this section will display the list of Questions that you have created.  When you go to the Contest Detail screen, the first accordion (section) to open up is this one.  To add a new Question, you click on the plus sign <span class="inline-icon"><i class="fa-solid fa-square-plus"></i></span> Add Question.  An empty text box will appear where you enter the Question. You may add multiple Questions per contest *prior* to paying for and launching your contest. See the NOTE below.

<p align="center" class="screen-shot">
   <img class="image-border" alt="add question, enter value" src="../../../assets/images/add_question2.png">
</p>

### First Contest
  If this is your first Contest, you will see the plus sign <span class="inline-icon"><i class="fa-solid fa-square-plus"></i></span> Add Question item.  Click it to add your first question.

{: .note}
> If you return to this screen and the plus sign <span class="inline-icon"><i class="fa-solid fa-square-plus"></i></span> Add Question does not appear, it is because you have already purchased this Contest and Question.  If this is the case, a small help icon will appear to the right of the paid for question reminding you that you cannot add or change this quesiton.  You may not add new Questions to an already launched contest.  However, it is possible to add new Answers to an already paid for Question.  Click the question and you will see the paid for answers with a lock next to them, but the plus sign <span class="inline-icon"><i class="fa-solid fa-square-plus"></i></span> Add Answer will be available.  You may add the new Answers and then go to the Pay and Launch accordion to pay for them. To add a new Question, create a new contest and add the question there.

<p align="center" class="screen-shot">
  <img class="image-border" alt="locked answers" src="../../../assets/images/locked_answer.png">
</p>

### Previous Contest Exists - Copy
   If you created a previous contest, when you first go to a new contest, you will see the below interface - which allows you to do two things: 1) Copy Questions and Answers from a prior Contest; 2) Paste Questions and Answers from a spreadsheet that has a specific format.

<p align="center" class="screen-shot">
   <img class="image-border" alt="copy or paste questions and answers" src="../../../assets/images/copy_previous.png">
</p>

#### Copy Question(s) from other Contest
   If you have prior Contests, and you are creating a brand new Contest, the first (and only first) time you go to add Questions to your new Contest, you will see a drop down with a list of your prior Contests.  You may copy those Questions (and Answers if you choose the Inlude Answers checkbox) into this Contest by selecting the Contest and choosing Copy.  You will see the Questions copied over to this Contest as new Questions.

#### Paste Questions and Answers from Excel
  Sometimes, it is easier to enter your Questions and Answers into a spreadsheet (maybe you already have some there) and then copying those and pasting them into the app.  If you don't use column headers, you need to set up your spreadsheet exactly like the example above.  The format is a Question in column A on a single line and the Answers in column B on subsequent lines.  You can copy/paste multiple questions by repeating the above pattern.  Select the 2 columns from Excel and choose copy (CTRL+C or CMD+C), then go back to the app page and make sure the Question text edit box is active, press the Paste button (<strong>not</strong> CTRL+V or CMD+V).  That will paste your Questions and Answers into the app.

  If you use column headers, you can copy/paste more information in varying formats.  Questions have 3 fields: text, tags and description.  Answers have 7 fields: text, tags, description, imageUrl, linkAction, linkDescription.  The explanation of these fields is below. You don't have to use all of the fields, but be sure to have a field named "text".  If you are only going to paste Questions with no Answers, you can use a spreadsheet with column headers of "text", "tags", "description" - like the below.  Copy the information from the spreadsheet, including the headers, then open a question text edit box and paste the information.  The app will figure out where to put everything for you. The below will create 2 questions. Here is a sample spreadsheet:

<p align="center" class="screen-shot">
   <img class="image-border" alt="copy/paste questions only" src="../../assets/images/cp_q_only.png">
</p>


  Note that tags are pipe \| delimited (the vertical bar).  If you would like to just paste Answers, you may use any of the fields above (be sure to include a column named "text").  Copy the area of the spreadsheet and open a text edit area for a new Answer; then paste the values.  The below will create 5 answers. Here is a sample spreadsheet:

<p align="center" class="screen-shot">
   <img class="image-border" alt="copy/paste answers only" src="../../assets/images/cp_a_only.png">
</p>


  Perhaps the easiest way to paste both Questions and Answers is to use a more clearly formatted header row.  Just put 'question.' in front of the Question fields or 'answer.' in front of the Answer fields.  For example, you could have  'question.text', 'answers.text' as the 2 columns, when you paste them, you will get Questions with the associated Answers when you paste the values into a question edit text box.  Leave blank values in the 'question.text' column where you have 'answers.text' values.  The below will create 2 questions.  The first question - "How are you today?" - will have 2 answers ("Fine" and "SoSo"); the second question - "What size?" - will have 3 answers ("Small", "Medium", "Large"). Here is a sample spreadsheet (right click it an open it in a new tab to be able to read it better):

<p align="center" class="screen-shot">
   <img class="image-border" alt="copy/paste full sample" src="../../assets/images/cp_full_spreadsheet.png">
</p>

The header fields listed above are:  "question.text", "question.tags", "question.description", "answer.text", "answer.tags", "answer.description", "answer.linkaction", "answer.link", "answer.linkdescription", "answer.imageurl".

#### Question Fields

**text** - This is the text that will display as the question.  Be sure to include the question mark if it is a question.  For example:  "How was your service today?"

**tags** - These are used to help organize things.  To apply multiple tags, separate them with a vertical bar \| character.

**description** - This can be used for you to keep any notes

#### Answer Fields

**text** - The text to display for the Answers.  If you leave this blank, then you **must** supply an imageUrl field.  Note that you can have **text** or **imageUrl** or both for your answer.  If you only supply an **imageUrl** then your answer will be displayed as the image.  If you supply only a **text** value, then your answer will only dispay the text.  If you supply both, your answer will display both the **text** and **imageUrl**

**tags** - These are used to help organize things.  To apply multiple tags, separate them with a vertical bar \| character.

**description** - To keep any notes

**linkaction** - This has to be either 'embed' or 'redirect'.  Any other value will be ignored and dropped.  **embed** means to embed a hyperlink into the Answer results page.  So, after the user scans a QR code, they are presented a results page and on that page the embedded **link** will show up with the text of the link showing the **linkDesription** field below.  The hyperlink itself will be the **link** field as described below.  If you select **redirect**, then the linkDescription field is ignored and the user will not be taken to a results page, but will be automatically redirected to the **link** hyperlink.  The answer will be recorded, but the user will not see the aggregated results.

**link** - See linkaction above.  This is either the hyperlink embedded on the results page or the link that the user us automatically redirected to if **linkaction** is **redirect**.  For example, you could put a link on the results page that goes to your website, or you can use redirect to automatically redirect the user to a survey or other location.

**linkdescription** - This is the text of the hyperlinnk if **linkaction** is set to **embed**.  It is isgnored when **redirect** is chosen for **linkaction**.

**imageurl** - This is a URL of an image that can be displayed as or along with your answer's **text** field.  See **text** above.


### Questions
When you click the plus sign <span class="inline-icon"><i class="fa-solid fa-square-plus"></i></span> Add Question, a text box should appear for you to start typing into.  

<p align="center" class="screen-shot">
   <img class="image-border" alt="Contest name" src="../../assets/images/chicken_contest.png">
</p>

If it does not, you may also edit the Question text by pressing the Edit <span class="inline-icon"><i class="fa-solid fa-pen-to-square"></i></span> icon to the left of the text.  You will get the Edit Question form shown below.  Alternatively, long pressing the empty text area will also edit inline without the form.

<p align="center" class="screen-shot">
   <img class="image-border" alt="Edit question form" src="../../assets/images/edit_question.png">
</p>

If you do not want to edit anything, you may press the back chevron <span class="inline-icon-white"><i class="fa-solid fa-chevron-left"></i></span> in the upper left.  You may delete this question by presing the <span class="inline-button">Delete</span> button.  If you make any changes, be sure to press the <span class="inline-button">Update</span> button.

You may add Tags that may be used in any Contest.  You add a tag by typing the tag value, in the case below, 'chicken' was typed.  That will add the tag to your global tags.  If you have other tags, they will auto-complete as you start to type them. So, if you add 'chicken' here and later in an Answer you type 'ch' - it should auto-complete to 'chicken'.   The tags are to assist you in organizing your information.  They will show up in the user interface on a later update to the application.

<p align="center" class="screen-shot">
   <img class="image-border" alt="Chicken tag" src="../../assets/images/chicken_tag.png">
</p>

### Answers
To add answers, you need to click on the Question (you'll see a up/down chevron on the right of the question).

When you click the plus sign <span class="inline-icon"><i class="fa-solid fa-square-plus"></i></span> Add Answer, a text box should appear for you to start typing into (just like Questions).  Below you'll see we added 3 Answers.

<p align="center" class="screen-shot">
   <img class="image-border" alt="Add answers" src="../../assets/images/chicken_answers.png">
</p>

{: .new }
> Any time you have text in a list, you may long-press on it to edit the text inline.  This saves you steps from pressing the pencil and editing the text in a form.

#### Reorder Answers
The up/down arrows icon on the left of each Answer allows you to reorder the Answers.  Long press on the up/down arrows and then drag the Answer to the position you would like.  The Answers will show up in your PDF or PNG files in the order you have them here.


#### Edit Answer
You may edit the Answer details by pressing the pencil <span class="inline-icon"><i class="fa-solid fa-pen"></i></span> icon to the left of the text.  You will get the Edit Answer form shown below.

<p align="center" class="screen-shot">
   <img class="image-border" alt="edit answer details" src="../../assets/images/edit_answer.png">
</p>

Answers may be either <span class="form-label">Text</span>, <span class="form-label">Photo</span> or both.  The default type is a <span class="form-label">Text</span> answer.  You would enter the Answer in the <span class="form-label">Text Answer</span> box.  If you would like to add a Photo to your Answer, check the <span class="form-label">Photo</span> checkbox and then choose either <span class="inline-button">Enter URL</span>, <span class="inline-button">Upload</span> or <span class="inline-button">Take Photo</span>.  After completing your choice, the image will show up in the <span class="form-label">Image Preview</span> area.  You may rotate your image by using the left <span class="inline-icon-black"><i class="fa-solid fa-rotate-left"></i></span> and right <span class="inline-icon-black"><i class="fa-solid fa-rotate-right"></i></span> rotate icons.  After you press the <span class="inline-button">Update</span> button, you will not be able to rotate the image, you will have to re-enter it to rotate it.

You may add <span class="form-label">Tags</span> that may be used in any Contest.  You add a tag by typing the tag value.  That will add the tag to your global tags.  If you have other tags, they will auto-complete as you start to type them.

The <span class="form-label">Description</span> area is for your own use.

#### Optional Answer Link
<div class="inline-section">Optional Answer Link</div>

This option is very powerful.  You specify a link that will either show up on the Results page (after the user scans a QR code answer), or will automatically redirect the user to the Link.

<span class="inline-icon"><i class="fa-regular fa-circle"></i></span> Link - Selecting this option will show a Link on the Results page.  The Text of the link (the highlighted text the user may click on) can be entered in the <span class="form-label">Link Text</span> box.  

For example, if you would like to collect some demographic information, or have someone sign up for your newsletter after then scan the Answer, put "SignUp for Newsletter" as the <span class="form-label">Link Text</span> and enter the URL for your SignUp form in the <span class="form-label">Link URL</span>.  

Below we show a sample where a voter scanned the QR code for the Model S and the <span class="form-label">Link Text</span> was "Model S" and the <span class="form-label">Link URL</span> was https://www.tesla.com/sites/default/files/tesla-model-s.pdf

Results after scanning

<p align="center" class="screen-shot">
   <img class="image-border" alt="Tesla Model S Brochure" src="../../assets/images/tesla_s_text.png">
</p>


<span class="inline-icon"><i class="fa-regular fa-circle"></i></span> Automatic Redirect - instead of showing the Results page, the user will be automatically redirected to the <span class="form-label">Link URL</span>.  The <span class="form-label">Link Text</span> is not used.  So, when the voter selects the QR code answer, the vote will be recorded and they will be redirected to the URL you put in the <span class="form-label">Link URL</span>. Clicking on the underlined Model S will take the voter to the Model S PDF file.

This can be used in many ways; for example, let's say you wanted to distribute some documents.  Perhaps your "Question" would be:  **Download a spec sheet for?**   Then the answers would say *"Model S"*, *"Model X"*, *"Model Y"*.  Then, for each answer, you would select <span class="form-label">Automatic Redirect</span> and have the <span class="form-label">Link URL</span> go to https://www.tesla.com/sites/default/files/tesla-model-s.pdf for the Model S, etc.

<p align="center" class="screen-shot">
   <img class="image-border" alt="Tesla Model S" src="../../assets/images/model_s.png">
</p>

PDF

<p align="center" class="screen-shot">
  <img width="80%" src="../../assets/images/tesla_pdf.png">
</p>

Results after scanning

<p align="center" class="screen-shot">
   <img class="image-border" alt="Tesla Model S Brochure" src="../../assets/images/tesla_s_man.png">
</p>

