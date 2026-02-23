# Countries Explorer 🌍

A React app that lets you search and filter countries using the REST Countries API.

## How to Run

1. Clone the repository:
   git clone https://github.com/your-username/countries-explorer.git

2. Go into the project folder:
   cd countries-explorer

3. Install dependencies:
   npm install

4. Start the app:
   npm run dev

5. Open your browser at:
   http://localhost:5173

## API Endpoints Used

All data comes from the REST Countries API (no key needed):

- All countries:
  https://restcountries.com/v3.1/all

- Search by name:
  https://restcountries.com/v3.1/name/{name}

- Filter by region:
  https://restcountries.com/v3.1/region/{region}

## Screenshots

### Home Page
<img width="1903" height="999" alt="HomePage" src="https://github.com/user-attachments/assets/a21268a8-e41b-491a-9929-1fd713e0eb49" />


### Search Results
<img width="1911" height="987" alt="SearchResults" src="https://github.com/user-attachments/assets/842900b8-a2ca-49da-929c-8d20922af717" />

## Features

- Search countries by name
- Filter by region
- Sort by population
- Loading and error handling
- No results found UI
- Clear filters button
- Responsive design
```

---

**Step 3 — Add screenshots**

1. Create a folder called `screenshots` in your project root
2. Take a screenshot of your app on the home page → save as `home.png`
3. Take a screenshot after searching something → save as `results.png`
4. Put both in the `screenshots` folder
```
countries-explorer/
  screenshots/
    home.png
    results.png
  src/
  README.md
