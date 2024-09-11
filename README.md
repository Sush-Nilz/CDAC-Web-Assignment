# Responsive Login Form
 
This project implements a responsive login form with client-side validation, API integration, and additional features for enhanced user experience.
 
## Features
 
- Responsive design that works well on both desktop and mobile devices

- Client-side form validation for email and password fields

- Integration with a mock API for authentication

- Show/hide password functionality

- "Remember me" option using local storage

- Loading spinner during API calls
 
## File Structure
 
```

login-form/

│

├── index.html

├── styles.css

├── script.js

└── README.md

```
 
## Setup and Usage
 
1. Clone this repository or download the files.

2. Open `index.html` in a web browser to view the login form.
 
## HTML Structure
 
The `index.html` file contains the structure of the login form, including:
 
- Email input field

- Password input field with toggle visibility button

- "Remember me" checkbox

- Login button

- Sign up link
 
## CSS Styles
 
The `styles.css` file includes:
 
- Responsive layout using flexbox

- Styling for form elements, buttons, and error messages

- Media queries for mobile responsiveness
 
## JavaScript Functionality
 
The `script.js` file implements:
 
- Form validation for email and password

- API integration for login (using JSONPlaceholder as a mock API)

- Show/hide password toggle

- "Remember me" functionality using localStorage

- Loading spinner during API calls
 
## API Integration
 
The form uses a mock API for demonstration purposes:
 
```

POST https://jsonplaceholder.typicode.com/posts

```
 
In a real-world scenario, replace this with your actual authentication API.
 
## Browser Compatibility
 
This login form is designed to work on modern browsers including:
 
- Chrome (latest)

- Firefox (latest)

- Safari (latest)

- Edge (latest)
 
## Future Improvements
 
- Implement actual backend integration

- Add social login options

- Enhance accessibility features

- Implement password strength meter
 
## Contributing
 
Contributions to improve the login form are welcome. Please feel free to submit a Pull Request.
 
## License
 
This project is open source and available under the [MIT License](LICENSE).
 