# SuperUnnatural

[SuperUnnatural Live Page](https://joffreycodes.github.io/superUnnatural-app/)

## Table of contents

- [General info](#general-info)
- [Get sessionId](#get-sessionid)
- [Features](#features)
- [Status](#status)
- [Current Works](current-works)
- [Project Challenges](#project-challenges)
- [Credits](#credits)

## App Snapshot

  <img src="./media/crud-operations.gif" width=100%>
<details>
  <summary> Version 1</summary>
  <img src="./media/login-to-main.gif" width=100%>
  <img src="./media/heart-to-spotify.gif" width=100%>
</details>
<details>
  <summary>Proof of Concept</summary>
  <img src="./media/proof-of-concept.png" height=50%>
  <img src="./media/iter2.png" height=50%>
  <img src="./media/iter1.png" height=50%>
</details>

## General Info

### Backstory:

Supernatural is a VR game that promotes exercise through music. Each workout is a playlist of today's modern and yesterday's classical songs that are not only an enjoyable experience to "flow" or "box" to, but also serve to expose users to new or once-familiar music. The Supernatural app provides a feed of the user's workout history, along with access to the Spotify Playlist. However, navigating the Supernatural app for each song that you enjoy is a lenghty process, especially when having to navigate back and forth between Spotify and Supernatural to preview each song. I decided to build this app to expidite this process so that I can preview the songs to help me recall which songs I enjoyed, and save them onto a Spotify playlist for enjoying at a later time, likely during car rides.

SuperUnnatural is a single-page application that allows users to save, play, and preview workout songs that were recently played on Supernatural onto their Spotify "Liked" playlist.

## Get SessionId

<img src="./media/get-session-id.gif" height=50%>
<br/ >

In order to link your Supernatural history to this spotify companion app, you must input your session id. Follow the steps below to find your session id.

- Make sure you are logged into your account at [www.getsupernatural.com/](https://www.getsupernatural.com/).
- Right click anywhere on the page and select your web browsers inspector.
- Navigate the inspector's panel to the application tab.
- Under Cookies, find the "session_id" cookie and copy its value.
- Paste the value into the supernatural spotify companion login page and proceed to connect your spotify account.

## Tech

### Front-end

[[code]](https://github.com/JoffreyCodes/superUnnatural-app)
[[deployed]](https://github.com/JoffreyCodes/superUnnatural-app)

- Spotify api
- React
- Axios
- Javascript

### Back-end

[[code]](https://github.com/JoffreyCodes/superUnnatural-api)

- Python
- Flask

### Database

- MySQL

### DevOps

- AWS EC2
- AWS Route52
- Docker
- NGINX
- SSL Certbot

## Features

Bells & Whistles:

- Matching album Spotify color for Spotify panel and Heart Save
- Spotify Panel color brightened by appending an `alpha value` to the retrieved hex color.

Proof of Concept:

- Displays 20 recent supernatural workouts (partial and completed) and the playlist tracks that were used.
- Users are able to select and unselect tracks to save to their playlist
- Current saved tracks persist across separate user sessions

## Project Milestones

- Proof of concept, design, and hosting - Completed
  - Initial Web Hosting - Back end on AWS EC2; Front-end on github pages
  - MySQL integration

## Current works

CMS for [SN Airtable](https://airtable.com/shrcuUWyR76gcdbqw/tblMuteBHqIjaYplx/viwLtKByxy8UB2JG2)
<img src="./media/SN_CMS_UML.png" width=100%>

## Future Works:

- AWS Hosting
  - Full-stack app that is functional using the Docker network
    - Back-end - Completed
    - Front-end - In Progress
- Spotify Player Integration - Completed
  - Integrated Spotify Player - Completed
  - Track Preview Selector - Completed
  - Access to artist Spotify page - TBD
- Workout Data Analytics and Visualizations - TBD
  - Fitbit data integration - TBD
- SQL Database Integration - In progress
  - Allow user to save comment on tracks - Completed
  - CMS for [SN Airtable](https://airtable.com/shrcuUWyR76gcdbqw/tblMuteBHqIjaYplx/viwLtKByxy8UB2JG2)

## Project Challenges

- Spotify iFrames for full access to music track.
  - In order to prevent preview mode in Spotify Iframes tracks, the hosting web server must be held in an Ipv6 environment (HTTPS). This initially prevented my launch directly to an AWS server. Instead, I choose to host the front-end on GitHub pages to see if tthe preview mode Spotify Iframe issue resolves.
  - After successfully hosting on a Github pages environment, I learned that an IPv6 host will fail to communicate with an IPv4 host.
- HTTP (IPv4), HTTPS (IPv6), SSL and Domain Name System (DNS)
  - When intially hosting my front-end on Github pages, I learned that communication between my frontend server IPv6 will not communicate to my AWS backend server using IPv4.
  - Upgrading AWS IPv4 to IPv6 via SSL Certbot and registering a domain name.

## Credits

Joffrey Inocencio
