# Vanilla JS Momentum

This is a clone project that clones Momentum which is productivity app registered on Google Chrome Extensions.
It is built with vanilla JavaScript.

## Demo

[[Netlify] https://vanilla-js-momentum.netlify.app/](https://vanilla-js-momentum.netlify.app/)

~~[[Github Pages] https://thilllon.github.io/vanilla-js-momentum/](https://thilllon.github.io/vanilla-js-momentum/)~~

- Should add repository name(hereby **_/vanilla-js-momentum_**) in front of resource address dynamically

## Features

- Time with day
- Name
- To-do list
- Weather based on user location

## Main points

- No functional; Good chance to feel how irritate mutable to control
- Commonjs
- Used Parcel as a bundler
- Data saved in localstorage

## Installation

- Preinstall

  - WEATHER_API_KEY is issued from [Open Weather Map](https://home.openweathermap.org/WEATHER_API_KEYs)
  - Update at **_./src/weather.js_**

  ```javascript
  const WEATHER_API_KEY = ''; // enter issued API key
  ```

- Install

  ```bash
  yarn install
  yarn start
  yarn deploy
  ```

## Reference

- [JS Basics by Nomad Coder](https://www.youtube.com/playlist?list=PL7jH19IHhOLM8YwJMTa3UkXZN-LldYnyK)
- [Momentum](https://momentumdash.com)
