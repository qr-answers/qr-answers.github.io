---
layout: home
title: Print/Download
parent: Contests Tab
nav_order: 4
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

<div class="accordion-bar">Print/Download</div>
## Print/Download
This section allows you to choose whether to output PDF(s) for your Question(s) and Answers or to output PNG files (individual images per file).  You are allowed to print your contest so that you may test the voting.  Until you launch your contest by paying for it, the results will only show the last vote scanned.  So, if you have a quesiton with 3 answers and you print a PDF out, you can test your campaign by scanning them one at a time and seeing the results.  Each time you scan (no matter who scan), the prior result will be removed.  You can think of this as a 'draft' mode where you are just testing your contest, but not really aggregating results.  After testing and your're ready to launch/publish your contest, go to [Pay and Launch](#pay-and-launch)

<p align="center" class="screen-shot">
<img class="image-border" alt="print and download options" src="../../../assets/images/print_download.png">
</p>

### PDF
<span class="inline-icon"><i class="fa-regular fa-circle-dot"></i></span> PDF - this will output one PDF per Question.  The Answers will be arranged automatically on the page.  You should not put more than 6 answers on a Question if you want them to layout correctly on a single PDF.  You may choose Lanscape (the default) or Portrait orientation for the PDF.

The other settings are explained in the <span class="inline-accordion">Configure Options</span> section above.  Setting them here will override the <span class="inline-accordion">Configure Options</span> values.

{: .note }
> If you have Adobe Acrobat or the new free Microsoft Edge PDF Editor, you may edit the generated PDF and place things wherever you like.  Just be sure to not modify the QR codes in the document.

### Automatic PNG
<span class="inline-icon"><i class="fa-regular fa-circle-dot"></i></span> Automatic PNG - selecting this will bring up the below interface.  The layout engine tries to figure out the best way to layout your PNG files based on some internal algorithm.  If you don't like the way it turns out, you can manually layout your PNG files by choosing <span class="inline-icon"><i class="fa-regular fa-circle-dot"></i></span> Manual PNG.

<p align="center" class="screen-shot">
<img class="image-border" alt="automatic PNG generation" src="../../../assets/images/automatic_png.png">
</p>

You may choose the resulting size of the PNG files by changing the Size (width x height). Or, you may choose a pre-defined size (like for your Canon Ivy Printer, so you can print stickers!).  We update this list often.  You may also change the QR Code colors, Text style and photo transparency (if you have photo answers).

Click on an object in the preview to set the properties.  For example, the QR code is selected by default when you first get to this screen.  You can change the foreground and background colors of the QR code as well as the shape of the little internal 'rectangles'.  

#### QR Code
To change the colors, click on the left color box for foreground or the right color box for background.  Then, select a color from the color picker.  You'll see the preview update with your changes. To make the color picker go away, click outside of it.

<p align="center" class="screen-shot">
<img class="image-border" alt="QR code color picker" src="../../../assets/images/qr_color_picker.png">
</p>

To change the shape of the internal 'rectangles', use the left <span class="inline-icon-black"><i class="fa-solid fa-caret-left"></i></span> and right <span class="inline-icon-black"><i class="fa-solid fa-caret-right"></i></span> arrow buttons.

<p align="center" class="screen-shot">
<img class="image-border" alt="QR code internal shapes" src="../../../assets/images/qr_shape_picker.png">
</p>

#### Text
Click on the **Text Here** at the top of the preview.  That will display a row of attributes you can change for the text.  You may change the font color, bold, underline and italic.

<p align="center" class="screen-shot">
<img class="image-border" alt="text attributes, color, bold, underline, italic" src="../../../assets/images/text_attributes.png">
</p>

#### Photo
Click on the picture of the flowers and you may change the opacity of the image.  The default is 100 - meaning completely opaque so nothing under the photo shows through.  You can change the opacity so that the image background (see below) shows through or blends with the photo. The below sample shows the opacity at 50% on a white background, so it make the photo 'lighter'.

<p align="center" class="screen-shot">
<img class="image-border" alt="photo attributes" src="../../../assets/images/photo_attributes.png">
</p>

#### Background
Click on the empty space of the background and you may change the color.  The default is white, so the color box above the preview is a little tricky to see.  We've changed it to light yellow below:

<p align="center" class="screen-shot">
<img class="image-border" alt="light yellow background" src="../../../assets/images/light_yellow_bg.png">
</p>

#### Hot Tip
In the above image, you can see that the background of the QR code is white.  We'll change the background of the QR code to light blue with a 50% transparency (in the color picker).  See below.  The QR code background becomes light green because the light blue combined with the yellow of the overall Background will give you light green (blue + yellow = green).

<p align="center" class="screen-shot">
<img class="image-border" alt="light blue QR background plus light yellow image background gives light green QR background" src="../../../assets/images/qr_blend.png">
</p>

#### Make PNGs
When you are finished altering the properties, click <span class="inline-button">Make PNGs</span> to generate your PNG files.  You will get a message saying "Generating document(s)...", then a short animation with a message that says "Open your document(s) here:".  See below:

<p align="center" class="screen-shot">
<img class="image-border" alt="open your docuemnts" src="../../../assets/images/auto_png_download.png">
</p>

You have 3 options here:
1. Clicking the far left icon <img height="1em" src="../../../assets/images/view_in_browser.png"> will open the PNG files in a new tab in your browser and show you them in a list.  This can be helpful if you want to individually print them or just access them without unzipping them.
2. Clicking the underlined text in the middle (a link to the .zip file) will download the resulting .zip file to your device. 
3. Clicking the far right icon <span class="inline-icon"><i class="fa-regular fa-clone"></i></span> will copy the URL for the .zip file to your copy/paste buffer.


{: .note }
> If you get a message saying "No questions picked for this location" - you need to go back to the <span class="inline-accordion">Questions and Answers</span> section and make sure you have both at least one Question and at least one Answer per question.

{: .note }
> To show the Print/Download options again, close, then open the <span class="inline-accordion">Print/Download</span> accordion.

### PNG Zip Files
The .zip files generated when you create PNG images instead of PDF contains several files.
* **directory.json** - this file is a directory listing of all questions and answers in the .zip file.  The json file (a file for a programmer) contains information about each question and answer - including the file names corresponding to each Question and Answer.  If you open it in a text editor, it is readable.  Here is an example of the PNG files generated from our Chicken example:
```
{
  "location": "QR-vote location",
  "questions": [
    {
      "id": "q_0",
      "question": "Which chicken do you like better?",
      "answers": [
        {
          "id": "q_0_a_0",
          "text": "Lady Feathers",
          "image": "q_0_a_0.png",
          "size": {
            "width": 1024,
            "height": 1024
          }
        },
        {
          "id": "q_0_a_1",
          "text": "Yellow Fella",
          "image": "q_0_a_1.png",
          "size": {
            "width": 1024,
            "height": 1024
          }
        },
        {
          "id": "q_0_a_2",
          "text": "Joker",
          "image": "q_0_a_2.png",
          "size": {
            "width": 1024,
            "height": 1024
          }
        }
      ],
      "image": "q_0.png"
    }
  ]
}
```
For QR-Contest, the "location" will always show up as "QR-vote location" (this has more meaning in QR-Answers).  The Questions each have an index (the order they were entered in the <span class="inline-accordion">Questions and Answers</span> section).  Each Answer also has an index.  Both of these indeces start at 0 (sorry, a computer thing...).  A Question is noted by the letter "q"; an Answers is noted by the letter "a".  Given the file names would be crazy long if we used the text of the question and answers, we thought it better to use numbers.  So, if you want to find out what the 3rd answer in your first question looks like, you come up with it like this:  Start with "q" (Question), then the index (0 since the first one starts at 0, not 1), add "a" for Answer, then the answer index, which for the 3rd one is 2; then put underscores (_) between each item.  So, the file name of the first Question's 3rd answer is:  "q_0_a_2.png".  We also print out the Question text - the file name is constructed the same way:  q_0.png  is the first Question.  The json file also has the size of each image.  

{: .note }
> You can read up on json (why would you?), but a quick summary is this:  each 'object' starts and ends with matched curly brackets { }; each array (list) starts and ends with square brackets [ ].

* Question files (see above), for example **q_0.png**
* The Answer files for each question, for example  **q_0_a_0.png** is the first answer to the first question

### Manual PNG
<span class="inline-icon"><i class="fa-regular fa-circle-dot"></i></span> Manual PNG - Selecting this option will allow you to control every visual aspect of each of your questions and answers. 

<p align="center" class="screen-shot">
<img class="image-border" alt="manually layout PNG images" src="../../../assets/images/manual_png.png">
</p>

See [Auto PNG](#automatic-png) above to see how to change [QR Code colors](#qr-code), [Text attributes](#text), [Photo attributes](#photo), and the [Background](#background).  You may change these for **every** Answer, or you can modify the 1st Answer to be the layout you would like to use for all of the Answers and choose <span class="inline-button">Apply current layout to all</span>.  In addition, if you are on an Answer past the first one, you can use the <span class="inline-button">Match Previous</span> button to match the layout of the Answer you are on to the previous Answer.

The Manual PNG layout also allows you to modify the Photo to be Contain or Cover.  See the section [Question Page Appearance](#question-page-appearance) for a description.  Click on the Photo and above the Opacity setting will be a checkbox.  The default setting is the aspect correct the image and size the containing box around it so that if you resize the box, the image will aspect fill the box.  However, if you uncheck the box, you will have two choices.  The left is Cover and the right is Contain.  You may play with these to see what they do.

<p align="center" class="screen-shot">
<img class="image-border" alt="aspect correct or contain or cover" src="../../../assets/images/manpng_contcover.png">
</p>

In addition to colors, fonts, etc. you may also manually locate any of the object in the preview area.  Select an object (text, QR code, photo) and you will see gripper handles on the 4 corners of the object (the image above has them around the QR code).  You may change the size of the object by dragging the gripper handles, or you may click and drag the middle of the object to relocate it.  The stacking order of the objects is: QR Code on top, then the Text answer (if any), then the Photo (if any), then the background.

{: .note }
> Changing the size of the Text box will increase or decrease the font size to fit your Answer into the box.

You may traverse through the Question(s) and Answers using the left <span class="inline-icon"><i class="fa-solid fa-caret-left"></i></span> and right <span class="inline-icon"><i class="fa-solid fa-caret-right"></i></span> arrows.

When you are done laying out the PNG files, you should press <span class="inline-button">Make PNGs</span>.  The PNG files will be generated [see here](#make-pngs).  If you do not traverse through all the questions or answers, the ones you have not visited will use the auto-layout algorithm.

