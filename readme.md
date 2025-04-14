## 🌤️ Weather App - Project Documentation

---

### 📁 Project Structure

```
weather-app/
│
├── index.html
├── css/
│   └── style.css
├── javascript/
│   └── script.js
├── image/
│   ├── clear.svg
│   ├── cloud.svg
│   ├── rain.svg
│   ├── snow.svg
│   ├── drizzle.svg
│   └── storm.svg
```

---

## 📄 `index.html` - Main HTML File

### Purpose:
Provides the structure for the Weather App UI, including:
- City input
- Weather result card
- Bootstrap-based responsive layout

### Key Sections:
- **Bootstrap and Icons:** Included via CDN for layout and UI components.
- **Weather Input Card:** Contains a text field and a search button.
- **Weather Result Card:** Displays weather info, icon, temperature, location, etc.

### Notes:
- `weather-card`: Shows input form.
- `weather-data`: Shows fetched weather data (initially hidden).
- Both sections toggle visibility using the `.active` class.

---

## 🎨 `style.css` - Custom Styling

### Purpose:
Defines custom styles to enhance layout, theme, and card design.

### Key Styles:
- **Body Background:** Gradient from purple to pink.
- **Cards:** White background, rounded corners, shadow.
- **Typography:** Font sizes and spacing for readability.
- **Icons & Elements:** Styled with spacing and Bootstrap Icons.
- `.active`: Custom class to toggle visibility (`display: none`).

---

## ⚙️ `script.js` - JavaScript Logic

### Purpose:
Handles user interaction, API fetch, data processing, and dynamic UI updates.

---

### ✅ Step-by-step Breakdown:

#### 1. **Set up Variables**
```js
const apiKey = '67ac3361a81823463669ff6f146ab856';
```

#### 2. **On Search Button Click:**
- Get user input
- Fetch weather data using OpenWeatherMap API
- If valid, display temperature, location, humidity, etc.
- Swap input and data cards using `.active`

#### 3. **Weather Icon Handling:**
`getWeatherIcon(condition)` maps weather types (like "Clear", "Rain") to appropriate `.svg` icons.

#### 4. **Back Button Logic:**
Allows user to return and search again.

---

## 🔑 API Reference

**OpenWeatherMap API**
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Params:
  - `q`: City name
  - `appid`: Your API key
  - `units`: `"metric"` for Celsius

---

## 📌 Summary

| Feature              | Description                                      |
|----------------------|--------------------------------------------------|
| Responsive UI        | Built with Bootstrap 5                          |
| Live Weather Fetch   | Uses OpenWeatherMap API                         |
| Icon Display         | Shows relevant weather icons                    |
| UX Enhancements      | Back button, keyboard enter, error alert        |
| Code Separation      | Cleanly separated into HTML, CSS, and JS files  |

