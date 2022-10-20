# SuperUnnatural

[Live Site](http://ec2-54-183-154-39.us-west-1.compute.amazonaws.com)

## Table of contents

- [General info](#general-info)
- [Usage](#usage)
- [Features](#features)
- [Status](#status)
- [Credits](#credits)

## App Snapshot

<img src="./media/v1.png" height=50%>
<img src="./media/iter2.png" height=50%>
<img src="./media/iter1.png" height=50%>
<img src="./media/proof-of-concept.png" height=50%>

## General Info

### Backstory:

Supernatural is a VR game that promotes exercise through music. Each workout is a playlist of today's modern and yesterday's classical songs that are not only an enjoyable experience to "flow" or "box" to, but also serve to expose users to new or once-familiar music. The Supernatural app provides a feed of the user's workout history, along with access to the Spotify Playlist. However, navigating the Supernatural app for each song that you enjoy is a lenghty process, especially when having to navigate back and forth between Spotify and Supernatural to preview each song. I decided to build this app to expidite this process so that I can preview the songs to help me recall which songs I enjoyed, and save them onto a Spotify playlist for enjoying at a later time, likely during car rides.

SuperUnnatural is a single-page application that allows users to save, play, and preview workout songs that were recently played on Supernatural onto their Spotify "Liked" playlist.

## Tech

### Front-end [source](https://github.com/JoffreyCodes/superUnnatural-app)

- Spotify api
- React
- Axios
- Javascript
- AWS
- Docker

### Back-end [source](https://github.com/JoffreyCodes/superUnnatural-api)

- Python
- Flask
- AWS
- Docker

## Features

**List of features:**

Bells & Whistles:

- Matching album Spotify color for Spotify panel and Heart Save
- Spotify Panel color brightened by appending an `alpha value` to the retrieved hex color.

Proof of Concept:

- Displays 20 recent supernatural workouts (partial and completed) and the playlist tracks that were used.
- Users are able to select and unselect tracks to save to their playlist
- Current saved tracks persist across separate user sessions

**Future Works:**

- Spotify Player Integration - Completed
  - Integrated Spotify Player - Completed
  - Track Preview Selector - Completed
  - Access to artist Spotify page - TBD
- Workout Data Analytics and Visualizations - In Progress
  - Fitbit data integration - In Progress

## Project Status

- Proof of concept - Completed
- V1 Completed - Proof of concept and aesthetic vision
- V2 - User data analytics, Workout rankings and Fitbit data - In development

## Credits

Joffrey Inocencio
