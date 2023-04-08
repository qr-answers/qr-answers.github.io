---
layout: home
title: Configure Options
parent: Contests Tab
nav_order: 3
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

<div class="accordion-bar">Configure Options</div>
## Configure Options
  This section allows you to choose many different options for your contest - from frequency of voting to how to display the output PDF or PNG files.  We'll look at each section by section.  Be sure to press the <span class="inline-button">Update</span> button at the bottom to save your changes.

### General Options
<p align="center" class="screen-shot">
<img class="image-border" alt="contest general options" src="../../../assets/images/contest_genopt.png">
</p>

  <span class="form-label">Limit Responses (per user)</span> - This determines how many times a voter (someone who scans the QR code) can vote.  The default is **Once**.  This will allow a person to have just one vote that counts.  They can change votes by scanning another one, but that will cancel their first vote.  You may also choose:

Hourly - can vote one time per hour

Daily - can vote one time per day

Once - (default) can vote one time only

No Limit - can vote as many times as they want

  <span class="form-label">Question Page Header (2 lines maximum)</span> - This text will appear at the top of the generated PDF file.  It will not show on a PNG image if you choose that output option later. The text should help the voter understand what they are supposed to do.  The default of *Use your phone's camera to vote. Scan, Click, Done.* is an example. You may put anything you like there - but it has a maximum of  2 lines.


<p align="center" class="screen-shot">
<img class="image-border" alt="page header" src="../../../assets/images/page_header.png">
</p>

### Question Page Appearance
<p align="center" class="screen-shot">
<img class="image-border" alt="question page appearance" src="../../../assets/images/contest_qpageappear.png">
</p>

<span class="form-label">1. QR Code</span> - You may choose the internal Code Shape and foreground and background colors of the QR code that is generated for your answers.  The default internal Code Shape is a square, but there are many options.  Press the left <span class="inline-icon-black"><i class="fa-solid fa-caret-left"></i></span> and right <span class="inline-icon-black"><i class="fa-solid fa-caret-right"></i></span> arrow buttons to choose your code. You should be sure to try your choice out at the size you print so you can verify the code will scan.  You can choose the colors of the QR code by clicking on the foreground (left box) and background (right box) color boxes.

<p align="center" class="screen-shot">
<img class="image-border" alt="QR code foreground color" src="../../../assets/images/contest_qrfg.png">
</p>

<span class="form-label">Logo</span> - Optionally, you may add a logo that gets printed on the lower left of the generated PDF - it will not show up if you choose PNG output.  You may <span class="inline-button">Upload</span> an image from your device, or you can <span class="inline-button">Take Photo</span> if your device supports it.

{: .note }
> Make sure if you alter any values in this section, you need to scroll down and press the <span class="inline-button">Update</span> button.

<span class="form-label">2. Default QR Layout for Text Answers</span> - Currently, there is no choice here. If your answers are text-only (vs photo or photo + text), then they will print with the QR code above the text of the answer.

<span class="form-label">3. Default QR Layout for Photo Answers </span> - The images show the layout of the QR code (shown in color) vs. the image (shown in grey).  For example, the first one shows the QR code in the upper left (default) and the image behind and to the right of it.  You may choose the position of the QR code by selecting one of the 6 choices.  The below image shows how this is printed when you have image answers with answer text in a PDF.

<p align="center" class="screen-shot">
<img class="image-border" alt="QR code in the upper left with image on the lower right" src="../../../assets/images/qr_upperleft.png">
</p>

<span class="form-label">4. Fit and Opacity for Photo Answers </span> - You may choose how photos are scaled into the viewable area by selecting <span class="inline-icon"><i class="fa-regular fa-circle-dot"></i></span> Cover or <span class="inline-icon"><i class="fa-regular fa-circle-dot"></i></span> Contain.  Cover means that the photo will comletely fill the static rectangle area of the destination (like the image above).  Contain will scale the photo proportionately keeping its aspect ratio into the destination rectangle - so that you see the whole photo (below).

<p align="center" class="screen-shot">
<img class="image-border" alt="photo fully visible with contain setting" src="../../../assets/images/contain.png">
</p>

*Opacity* can be controlled by moving the slider left or right.  By default, the photo will completely overwrite whatever is under it.  For example, on PNG files, it is possible to make the background of the screen a color (say blue) and then change the opacity of the photo so that the background 'bleeds through' the photo.  You can play with this to see the effects it has in the varying output formats.

### QR Scan Response Chart Style
<p align="center" class="screen-shot">
<img class="image-border" alt="response chart style" src="../../../assets/images/response_chartstyle.png">
</p>

<span class="form-label">Select chart style</span> - After the user scans an answer, they are redirected to a page that will show them a "Thank You" page, a pie chart or a gradient chart.  The "Thank You" page will not display any results. Both of the other chart types will display the results of prior votes and the current user's vote.  You may pick which type of page is displayed here (pie or gradient).

