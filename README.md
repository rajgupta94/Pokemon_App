Project Title: Pokémon Search and Filter App

Objective:
This project is a React.js-based web application that fetches data from the PokeAPI and allows users to search and filter through the first 150 Pokémon. The application displays each Pokémon’s details, such as its name, image, type(s), and ID number. It also offers real-time search functionality and a filter dropdown to search Pokémon by type.

Key Features:
Data Fetching:

The app fetches data from PokeAPI and retrieves details of the first 150 Pokémon.

Each Pokémon’s name, image (sprite), type(s), and ID number are displayed in a user-friendly card format.

Search and Filter Functionality:

Search Bar: A real-time search input allows users to filter Pokémon by name.

Filter Dropdown: A filter dropdown lets users narrow down Pokémon by their type (e.g., Fire, Water, Grass, etc.).

Users can type in any Pokémon’s name, and the list will automatically update with matching results.

Loading State:

A custom CSS spinner is shown during data fetching, providing a professional and smooth user experience while the app loads the Pokémon data.

Responsive Design:

The app is fully responsive, ensuring that it works well on both desktop and mobile devices.

UI/UX:

The app has a clean, modern layout, making it easy for users to search, filter, and view Pokémon information.

The user interface is simple and intuitive, with easy navigation and visually appealing Pokémon cards.

Error Handling:

The app handles errors gracefully by displaying a loading message or an error message if there is an issue fetching data from the API.

Technologies Used:
Frontend: React.js

State Management: React hooks (useState, useEffect)

API: PokeAPI (https://pokeapi.co/)

Styling: CSS (for custom spinner and responsive design)

Version Control: Git and GitHub 

Challenges Faced:
One of the main challenges was managing the pagination of Pokémon data from PokeAPI. Initially, I only fetched a limited set of Pokémon, but I had to modify the code to fetch all 150 Pokémon and their full details (name, type, and sprite) using multiple requests.

I also needed to ensure the app remained responsive on mobile and tablet devices, which required adjustments to the layout and some custom CSS.

Outcome:
The app is fully functional and allows users to easily search and filter Pokémon. It demonstrates key React concepts like data fetching, state management, and conditional rendering. It is a clean, easy-to-use app that can be extended to include more advanced features like Pokémon abilities or stats.

Advanced Filters: Add additional filters like Pokémon abilities, weight, height, etc.

Project Repository (GitHub Link):
GitHub: [Your GitHub link here]
