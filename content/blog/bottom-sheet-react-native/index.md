---
title: 'TIL: Playwright Configuration'
published: true
date: '2025-04-12'
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

Creating a Bottom Sheet route with Expo Router is quite easy nowadays. If you'd like a route to automatically open a bottom sheet without have to use a library, this snippet below will be your friend. (To close this programmatically, you can use `router.back();`). 

There are use cases for libraries like [react-native-bottom-sheet](https://github.com/gorhom/react-native-bottom-sheet) and I have used both in tandem in an app. Both are great tools to leverage the clever bottom sheet pattern that has become popular.

```javascript
<Stack.Screen
    name="<your-route-name>"
    options={{
        presentation: "formSheet",
        gestureDirection: "vertical",
        animation: "slide_from_bottom",
        headerShown: false,
        sheetGrabberVisible: true,
        sheetInitialDetentIndex: 0,
        sheetAllowedDetents: [0.33, 0.5, 1.0],
        contentStyle: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "flex-end",
        },
    }}
/>
```