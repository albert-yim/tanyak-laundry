# Tanyak Laundry

### Inspiration

- There are four washing machines and four dryers in our resident hall in the military. When someone wants to use a single machine, they have to send a message to a group chat to let everybody know who is using which one.
- However, the problem happens when the last user doesn’t take their laundry out. In order to find the person out, we always have to enter the app and check the group chat which is cumbersome.

### What it does

- Tanyak Laundry is a combination of a Korean word “탄약” meaning ammunition(Air force specialty) and an English word “Laundry”.
- This app provides the users a direct user interface so that they can check the necessary information at a glance.
- When the laundry is done, the app automatically send a notification

### Challenges we ran into

- Applying design feedbacks from target users to provide suitable interfaces
- Implementing components from the scratch without relying on libraries
- Creating appropriate prop types for each React component

### Resolution

- We discussed the data flow and algorithms to make the code organized
- We found the calculation for LaunDrybutton is repetitive
    - Used useMemo from react so that the previous calculated value can be stored if the repetitive calculation is required.
- We had to make Mode Option responsive
    - Position is originally defined as “lef/right-top/center/bottom so that we can use classnames to app scss
    - utilized cn from “classnames”
- Project Schedule

[1주차 탄약 세탁기 스프린트 (24.08.07~24.08.14)](https://www.notion.so/164282c8196e8085b921e8891172c6b7?pvs=21)

[2주차 탄약 세탁기 스프린트(24.08.14 ~ 24.08.05)](https://www.notion.so/164282c8196e8016833bfd1d2d9aadc2?pvs=21)

[3주차 탄약 세탁기 스프린트 (24.09.05~ 24.09.12)](https://www.notion.so/164282c8196e80768a28c9794d4555b2?pvs=21)

[4주차 탄약 세탁기 스프린트 (24.09.22~ 24.09.30)](https://www.notion.so/164282c8196e804a8f02eaf2167135bb?pvs=21)

[5주차 탄약 세탁기 스프린트 (24.10.01 ~ 24.10.09)](https://www.notion.so/164282c8196e80eda5f0d9e9c5fbad34?pvs=21)

### Improvements

- Fixed css issues that happens in iOS devices only
- Added Refresh feature in order to load the page without quitting the app
- Implemented Frequently Asked Question page so that people can easily download the web-app and fix notification settings without any oral explanation

### Accomplishments

- Successfully launched an MVP, enabling users to integrate the app into their daily lives.
- The app is currently active and being used by all 60 members of the residence hall.

### What we learned

- Typescript has clear advantages in terms of stability
- It is important to try creating from scratch instead of relying on libraries
- Github pull request function became useful in group projects
