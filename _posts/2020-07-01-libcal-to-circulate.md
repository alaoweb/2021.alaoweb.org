---
layout: poster
title: "Making the Most of a Scarce Resource: Leveraging LibCal to Circulate Adobe Software Licenses"
description: "Adobe (Photoshop, Illustrator, Creative Cloud, etc.) licenses are expensive and many institutions have to ration access to them. But many users are eager for access to their powerful software, and often need access only for a short time. Using open-source software that we will share with you, we use the Adobe User Management API to turn Adobe licenses on and off for users who reserve access to the software using LibCal’s “Equipment Checkout” feature. If a license is available (not checked out), users can get short-term access to the software almost instantaneously and without direct intervention by library staff. This lets us maintain an affordable number of licenses and legally and efficiently share them among students, faculty, and staff. This open source solution can also be used with other licenses that can be managed by an API."
date: 2020-07-01 08:00:00
speaker-data: [41, 14]
presenters:
  - {
      name: Ken Irwin,
      bio: "Ken Irwin is a Web Services Librarian at Miami University. He is interested in developing open-source solutions to solve challenging library issues and to make the most of our resources.",
      institution: "Miami University"
    }
  - {
      name: Michael Bomholt,
      bio: "Mike Bomholt is a Technology Development Manager at Miami University. He specializes in endpoint device and software management.",
      institution: "Miami University",
    }
video: "//www.youtube.com/embed/{video-id}"
session-contents:
 - type: video
   url: //www.youtube.com/embed/HdbQgiJMIGM
   title: Intro Video
 - type: image
   url: /img/posters/software-checkout.png
   title: Software Checkout Workflow
   alt: 
   text-description: "<ol><li>User checks software in/out in LibCal</li><li>The app fetches current LibCal checkouts</li><li>The app fetches current permissions from Adobe</li><li>The app compares list</li><li>The app pushes changes to the Adobe API</li><li>Adobe allows access to user</li></ol>"
supplemental-docs:
 - type: word
   url: /handouts/handout.docx
   title: My great worksheet
 - type: pdf
   url: /handouts/my-handout.pdf
   title: Sample Handout
 - type: website
   url: https://example.com/nifty-widget
   title: NiftyWidget we used to make it better!
isStaticPost: false
published: true
---