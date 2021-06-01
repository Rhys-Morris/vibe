# Vibe
## Spotify extension that makes you playlists based on your mood

Live site: <https://its-a-vibe.netlify.app/>

![screenshot of Vibe landing page](./app/img/readme-img.jpg)

* [1.Info](#1-info)<br>
   * [tech stack](#tech-stack)
   * [purpose](#purpose)
* [2.Usage](#3-usage)<br>
   * [permissions](#permissions)
   * [features](#features)

___

## 1. Info

Vibe is a mixture of a playlist wizard, a psychologist and that one friend that DJs at all your parties.

You tell it how you feel and what you fancy and it makes you a perfect playlist to Vibe to!
### tech stack

Vibe was built with HTML/SCSS and vanilla JavaScript. It uses Spotify API and is deployed and hosted on Netlify using CI/CD.
### purpose

The app was built during a 48-hour hackathon at a Coder Academy, Melbourne in May 2021. It's purpose was to teach us collaborative development, version control and solidify our JavaScript skills.

## 2. Usage

You will need a Spotify account to use the app. This is where Vibe creates and saves your playlist, so that you can get back to it anytime you like.

To start using the app do this: 
1. head to <https://its-a-vibe.netlify.app/>;
2. click on "Get Vibin'";
3. give Spotify necessary permissions for the app to work;
4. input your mood and energy levels using sliders on the page;
5. select some of your favourite music genres;
6. enjoy the playlist Vibe made you!

The playlist will be called "It's a Vibe" and can be found in the Playlists section of your Spotify library.
### permissions

When you start using the app, Spotify will ask you to login and authorize it to do some things. These things include reading and modifying playlists in your account. It is needed so that Vibe could create you a playlist and fill it with tracks. It will not do anything with your other playlists, data, or anything else.
### features

Some of Vibe's features are:
- usage of Spotify REST API;
- single-page functionality to collect user input and output the playlist;
- user's mood and energy levels collection implemented via gauges with the input values mapped to Spotify API song features, such as danceability, valence and energy, that is sent as a query to the API along with selected favourite genres;
- the playlist page displays track recommendations in a custom manner, in the general style of the App;
- responsive design throughout the app;
- error handling.

___

 &#169; Rhys Morris, Chinonso John Nkpolukwu and Ana Lastoviria