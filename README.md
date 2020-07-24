# Applitools UltraFastGrid
## Cross-browser and cross-device Automation tests for AppliFashion
* Traditional approach using Cypress
* Modern apprach using Appitools Visual AI
***
Those tests are made in Traditional and Modern way (using Applitools). 
“Traditional approach”, means without using Applitools Visual AI.
The tests are made for (3) main tasks across seven (7) different combinations of browsers and screen resolutions (viewports):
- Task 1: Cross-Device Elements Test (Elements visibility on different viewports)
- Task 2: Shopping Experience Test (Filtering black items)
- Task 3: Product Details Test (Elements visibility and correctness)
 
on (2) versions of the app:
-  bug-free [1st version of the app (V1)](https://demo.applitools.com/gridHackathonV1.html "1st version of the app (V1)")
-  full of bugs [2nd version of the app (V2)](https://demo.applitools.com/gridHackathonV2.html "2nd version of the app (V2)")

Tested viewports and browsers combinations:
* laptop: [1200, 700] + Chrome, Edge, Firefix
* tablet: [768, 700] + Chrome, Edge, Firefox
* mobile: [500, 700] + Chrome (mobile simulation)

Tests for ModernTestsV1, ModernTestsV2, TraditionalTestsV1, TraditionalTestV2 are in ```<../cypress/integration>```

Results form Traditional approach are available in:
- Traditional-V1-TestResults.txt for V1 Application
- Traditional-V2-TestResults.txt for V2 Application

Results form Modern approach are available on [Applitools Dashboard](https://eyes.applitools.com/app/test-results/00000251809124741691)

### Prerequisites
In order to run these tests:
  - **node.js**, **npm** and **cypress**
  - **Chrome**, **Edge** and **Firefix** browsers are needed

### Run project
Get clone from this repo
Open cmd
Run commands:
```
cd <"the_repo_folder_path">
```
and then
```
npm ci
```

### Run tests
There are some predefined scripts to run these tests

:heavy_exclamation_mark: **CYPRESS FIREFOX ISSUE**: There is a Firefox issue when run cypress script for Firefox in Traditional approach, so I have ran them one-by-one interacively with cypress (cypress interacitve mode available after running command ```cypress open```) to grab the results

* ```npm run test:chrome``` - runs test on Chrome in traditional way on V1 of the App
* ```npm run test:edge``` - runs test on Edge in traditional way on V1 of the App
* ```npm run test:firefox``` - runs test on Firefox in traditional way on V1 of the App
* ```npm run test:chrome:v2``` - runs test on Chrome in traditional way on V2 of the App
* ```npm run test:edge:v2``` - runs test on Edge in traditional way on V2 of the App
* ```npm run test:firefox:v2``` - runs test on Firefox in traditional way on V2 of the App
* ```npm run test:modern``` - runs test using Applitools on V1 of the App
* ```npm run test:modern:v2``` - - runs test using Applitools on V2 of the App

