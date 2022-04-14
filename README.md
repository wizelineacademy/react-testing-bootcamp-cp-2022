# React Specialized Bootcamp - Testing Capstone Project

### Before you start

Follow these steps:
<ol>
  <li>Fork  <a href=
              https://github.com/wizelineacademy/URL-CAPSTONE-PROJECT">this repo</a> into your GitHub account.
  <li>Make sure that your new repo is publicly accessible.
  <li>Create a new branch with the name <b>“feat/deliverable”</b> derived from <b>main</b> on your forked repository.
  <li>Start working on the requirements specified below.
  <li>In github, invite your mentor as a contributor. </li>
  <li> When you finish all Acceptance Criteria (AC), create a PR and send it through this <a href=
              "https://forms.gle/3Ur985tUiEtgy2Xr7">form</a> </li>
</ol>

For this challenge, you will create an awesome React App which fetches the "Picture of the day" from the NASA open `APOD API` applying TDD (Test Driven Development).

Use TDD methodology to develop the challenge.
<br>
<img src="https://d2rh459eail1v8.cloudfront.net/test-driven-development-TDD.jpg" width="400"> 
<br>

**Requisites**
<br>
Your application must have the next components:

-  Header with the title of your project.
-  Main section.
-  Footer must containing the message "Project created during Wizeline Academy React Testing Bootcamp”
### Suggested UI
<br>
<img src="https://d2rh459eail1v8.cloudfront.net/NASA.jpg" width="500"> 
<br>
If you would like to improve the UI, go ahead 

# Requirements
## For testing

- Use the React Testing Library and Jest tools to add tests.

## For the app
- Generate API Key from [NASA APOD](https://api.nasa.gov/)
- Fetch API Calls from the [NASA APOD](https://api.nasa.gov/) using your API KEY.
- Use functional components and React Hooks as possible.
## Optional
- Publish your app using free services such as Github pages, Netlify, or Heroku.
- Share the URL on the PR.

## Resources.

- [NASA APIs](https://api.nasa.gov/)

## Acceptance Criteria (AC) and Score

| Acceptance Criteria | Description                                                                                                                               | Points for Completed ||
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------|----------------------|----------------------|
| 1               |  When the user enters the app, the app should show the Picture of the Day.                                                                 | 15                   ||
| 2              | When the user selects a specific date with the format YYYY-MM-DD, the app should show the picture of the day for the given date.          | 20                   ||
| 3              | When the app fetches the API, and there is an unexpected error, the app should show a message: "There was an error, please try again."    | 25                   | |
| 4               | When the user selects an invalid date value and clicks on the show button, the app should show a message from the API response (e.g., a day after the current date.) | 20                   |
| 5               | Render correctly the header, footer and main content in the app. | 20                   |

### Bonus

The bonus is a plus that helps us know you better and increments your final score.

- Create Mocks Service Worker: `20` points.

## Questions?

If you have any questions about this challenge, feel free to ask on the Slack channel ASAP.
