---
layout: home
title: Every
parent: Notifications
nav_order: 2
---

<div class="sticky-gotop">
<span class="inline-icon"><i class="fa-solid fa-arrow-up"></i></span>
</div>

# Every
{: .no_toc }

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

The EVERY notification will be triggered repeatedly once the Current or Accumulated counter reaches a number you choose and each time it reaches a multiple of that number.  For example, if you have a question *"Which special should move to the regular menu?"* and you want to be notified every 100 QR codes that are scanned no matter what Answer is chosen, then use the EVERY notification rule at the Question level and choose the Accumulated counter.  So, at Accumulated value of 100, 200, 300, 400, etc. you will get a Notification.

  <p align="center" class="screen-shot">
   <img class="image-border" alt="notification for answer limit" src="../../assets/images/notification_every_question.png">
    </p>

The Current counter is a variable counter that you control by resetting it when you wish to zero (0).  The Accumulated counter is a running-total of the number of scans/votes that have been reigstered for this item.  When you first launch a Campaign, all counts (Current and Aggregated) are set to 0.  As QR codes Answers are scanned, those counts start to increase. 

The values shown to the right of the Current and Accumulated radio buttons are the counts (if any) of those items when the form was loaded. To reset the Current count to 0, press the recycle button. You may select to be notified via email or webhook or both.  Be sure to press Save when you are done. You may delete the Notification by pressing the trash can icon <span class="inline-icon"><i class="fa-solid fa-trash">.
