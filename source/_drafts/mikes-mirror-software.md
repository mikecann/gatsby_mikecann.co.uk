---
title: Mikes Mirror - My Smart Mirror Project (Software)
categories:
  - Projects
coverImage: header.jpg
coverMeta: out
tags:
  - Mirror
  - Electron
  - React
  - Typescript
  - Woodworking
  - Hardware
  - Linux
date: 2018-04-25 14:51:40
---

SOFTWARE

<!-- more -->

# Parts

This is a 3 part series, find the other parts here:

1) [Mikes Mirror - Overview](/projects/mikes-mirror-overview/)
2) [Mikes Mirror - Hardware](/projects/mikes-mirror-hardware/)
3) [Mikes Mirror - Software](/projects/mikes-mirror-software/)

# Software

So I started off by doing a lot of reading and research on what software to use on my mirror. There is a vary popular out-of-the box solution called [MagicMirror<sup>2</sup>](https://magicmirror.builders/) which is a cool project that gets you up and running with a functioning mirror in no time. There is also a huge number of [Third Party Modules](https://github.com/MichMich/MagicMirror/wiki/3rd-Party-Modules) that you can use to add all sorts of functionality.

I started off using MagicMirror<sup>2</sup> but quickly found myself getting frustrated at the way the code was structured and developing my own modules as going to be a pain so I decided I could probably save some time in the long run by rolling my own solution so thats exactly what I did.

![Mikes Mirror on GH](./githubss.png)

Its built using React, Typescript and Electron with Python and Dlib for the Facial Recognition part and Sonus (snowboy, Google Cloud) for the speech recognition part.

# Profiles

I developed the software with the idea that multiple people could use the mirror and get different content displayed for them. I call this user-specific content a "Profile" and is simply another react component that contains a collection of "Widgets" and lays then out however you want. So for example here is my Profile:

```typescript
import * as React from 'react';
import Particles from '../widgets/particles/Particles';
import Clock from '../widgets/clock/Clock';
import WeatherChart from '../widgets/weather-chart/WeatherChart';
import ProfilePicture from '../widgets/profile-picture/ProfilePicture';
import SystemInfo from '../widgets/system-info/SystemInfo';
import css from "./styles";

export default class MikesProfile extends React.Component<any, any> {

  componentDidMount() {
    // Play a sound when showing the profile
    new Howl({ src: ["./bell.wav"] }).play();
  }

  render() {
    return <div className={css.profile}>

      <Particles />

      <div className={css.rootContainer}>

        <div className={css.hozContainer}>
          <Clock />
          <div className={css.flex} />
          <ProfilePicture url="../facial_recognition/faces/mike.jpg" />
        </div>

        <div className={css.flex} />

        <div className={css.hozContainer}>
          <WeatherChart />
          <div className={css.flex} />
          <div className={css.vertContainer}>
            <div className={css.flex} />
            <SystemInfo />
          </div>

        </div>

      </div>

    </div>
  }
}

```

# Plugins

The whole thing is built using modular components I have called "Plugins". 

![Plugins](./pluginsss.png)

For now I have only written a few widgets which I have hard-coded into the project but they could quite easily be extracted out into separate repos much like MagicMirror<sup>2</sup> does it. Unlike MagicMirror<sup>2</sup> however my widgets are much much simpler to develop as they are just React components. IMO this is a perfect usecase for the component based, only-update-when-needed nature of React. [Checkout some of the widgets in the repo](https://github.com/mikecann/mikes-mirror/tree/master/src/widgets) for examples of how simple and intuitive they are to develop.

A couple of examples of plugins are:

* clock - displays a clock and date
* display-deactivator - when the widget is mounted it waits for a set amount of time before turning off the display, when it is unmounted it turns the display back on again. This is great for saving power when no one is stood infront of the mirror.
* face-profile-switcher - will change profile when it detects that person infront of it
* system-info - reports some system stats like CPU and MEM load
* weather-chart - shows a chart of the Perth weather

# Facial Recognition

I had spent quite a bit of time trying to get Facial Recognition working how I wanted. In the end I ended up using the awesome [facial_recognition](https://github.com/ageitgey/face_recognition) library on github. Behind the scenes it uses Dlib which means that its a bit of a pain to install (LOTS of dependencies) but I did eventually get it working with reasonable performance on my target hardware (more on that below).

# Speech Recognition

# Text to Speech

# Future Plugins

# More Reading

This is a 3 part series, find the other parts here:

1) [Mikes Mirror - Overview](/projects/mikes-mirror-overview/)
2) [Mikes Mirror - Hardware](/projects/mikes-mirror-hardware/)
3) [Mikes Mirror - Software](/projects/mikes-mirror-software/)