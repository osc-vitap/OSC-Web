# OSC Web

# Index
1. [Project structure](#project-structure)
2. [Development](#development)
	- [Project setup](#project-setup)
	- [Using technologies](#using-technologies)
3. [Contributing](#contributing)

---

# Project structure

1. Every code can be found in the `src` folder.
2. The `src/routes` folder contains all the routes
	- For example, the `src/routes/team` folder contains all the code for the page found on https://osc-web.pages.dev/team

3. `src/components` folder contains all the components
	- Components are resuable pieces of svelte code that can be used in multiple places just by importing them.
	- You can think of components as a function in any other programming language.

4. `src/data` contains the data of the team and the events in the form of JSON files
	- This data is used to dynamically populate the team and event pages

5. Svelte file naming terminologies
	- `+page.svelte`: It is a the landing page of the specific route. Lets say you visit https://osc-web.pages.dev/team, going to that page will load `src/routes/team/+page.svelte` file. You can think of it as the `index.html` file of the route. 

	- `+layout.svelte`: Without going into much details, you can think of the layout file as a blanket the page.svelte and all the child routes. For more information, you can visit [svelte docs](https://kit.svelte.dev/docs/routing#layout)

	- `+error.svelte`: This file is rendered when there an error occurs while rendering the page. For example, if the data is not fetched properly, and throws an error, this file will be rendered.

---

# Development
For development, make sure you have the following installed
1. Latest LTS release of Node JS. [download link](https://nodejs.org/en/download/)
2. Git. [download link](https://git-scm.com/downloads)

## Project setup
Click to expand the section.

<details>
<summary><b>Using terminal</b></summary>

Once you have the above installed, you can run the following commands to start the development server.

1. Clone the repository
```bash
git clone https://github.com/osc-vitap/OSC-Web.git
```

2. Change the directory to the cloned repository
```bash
cd OSC-Web
```

3. Install the dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

</details>

<details>
<summary><b>Using GUI</b></summary>

1. Click the green colored `Code` button on the right side of the repo
2. Download the ZIP file and extract the file
3. Open the extracted folder in your preferred code editor
4. Open the terminal in the code editor and follow the steps from step 3 from the above section. 

</details>


## Technologies
<details>
<summary><b>Using tailwind CSS</b></summary>

1. Tailwind CSS is a utility-first CSS framework, meaning, css classess are used to style the elements. For example, to add a padding of 4 to an element, you can use the class `p-4`.
2. Tailwind is mobile first. meaning, you go from styling mobile to desktop, instead of the traditional desktop to mobile approach.
3. This project is already set up with tailwind CSS. You can directly use the classes in the svelte files.
4. To learn more about tailwind CSS, you can visit the [official documentation](https://tailwindcss.com/docs)
</details>

---

# Contributing
1. Clone the repository
2. Create a new branch from the `dev` branch
	- Branch naming convention examples: `some-feature` or `team-optimization` (kebab case)
	- If you are working on an issue, you should suffix the issue number to the branch name. For example, if you are working on issue #1, the branch name should be `something-#1` or `bug-fix-#1`
3. Make the changes
4. Push the changes to the new branch
5. Create a pull request to the `dev` branch
6. Add the tech lead as the reviewer

<br>
<br>

If you have any questions, feel free to contact the tech lead over discord or whatsapp