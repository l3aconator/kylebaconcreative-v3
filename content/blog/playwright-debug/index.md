---
title: 'TIL: Playwright Configuration'
published: true
date: '2025-04-05'
metadata:
    description: ''
taxonomy:
    tag:
        - TIL
summary:
    enabled: '1'
    format: short
journalhero: header.jpg
journalherocircle: ''
journalherocirclealt: ''
---

Today I learned that [Playwright](https://playwright.dev/) has some pretty excellent tools and simple configuration for attaching to your own instance of chrome (hint hint, accessing sites that need a captcha and you've already completed it and have been cookied)

Fire up this in your terminal: 

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --remote-debugging-port=9222
```

And configure your code with the following:

```
const browser = await chromium.connectOverCDP("http://localhost:9222");
```