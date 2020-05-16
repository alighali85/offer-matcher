
#  Welcome to Offers matcher!

  

Hi there,

as a code challenge I created this app, it is a simple offers matcher for job salary,

booth the employer and the employee can enter the desired values,

any one of them can start first, that make no difference.

- after entering the values, a pop up will open and show the result and the entered values.

  

#  How to run the app

- clone the app repository from [HERE](https://github.com/alighali85/offers-matcher/)

- cd the app directory

- run `yarn` to install the dependencies

  

In the project directory, run:

  

###  `yarn start`

  

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

###  `yarn test`

  

Launches the test runner in the interactive watch mode.<br />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

#  App TechStack

**this app built using:**

-  [React](https://reactjs.org/) as a JS framework.

-  [Material-ui]() as a components library.

-  [JSS](https://cssinjs.org/?v=v10.1.1) for editing css styles.

-  [Jest](https://jestjs.io/) as a test runner.

-  [React testing library](https://testing-library.com/docs/react-testing-library/intro) as a test framework.

-  [Eslint](https://eslint.org/) as code linter

  
  

#  App components and functions

  

-  **Main app header**:

	- has at left the app title and logo

	- has on the right side, weather widget shows 'London' weather

	- clicking on 'London' will open openweather website to show more weather updates about 'London'

	- you might see instead of weather information 'Loading ...' this appers while fetching the weather information.

-  **Main offers form**:

	- has two tabs at the top (Employer, Employee)

	- has dynamically changed input form (its label and title change based on active tab)

	- clicking on any tab will show the input form, just if the user didn't enter a value and save it; it will show the saved value if it is exist.

	- clicking on 'Submit' button will save the input value, and will rum the matcher login, if booth parties have entered the values.

	-after both users have entered the values and submit it, a pop up window will show the result;

the result is 'Success' if the employer willing to pay the same amount or more to the employee.

	-clicking on 'Reset' button will reset the form, as well as clicking outside the pop up window.