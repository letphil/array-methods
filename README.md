# Array Methods and DOM Manipulation: Creating User Cards

## Lesson Overview

This 2-hour workshop will teach students how to use JavaScript array methods to manipulate data and display it in the DOM by creating a dynamic user card application. Students will learn to fetch, filter, map, and display user data while practicing DOM manipulation techniques.

## Learning Objectives

- Understand and use common array methods (map, filter, forEach, reduce, etc.)
- Apply array methods to transform data for display
- Create DOM elements programmatically
- Implement event listeners to make an interactive user interface
- Build a complete user card application

## Lesson Schedule

### Array Methods Review

- **forEach**: Iterating through arrays
- **map**: Transforming array elements
- **filter**: Creating subsets of arrays
- **find/findIndex**: Locating specific elements
- **sort**: Ordering array elements
- **reduce**: Combining array elements

### DOM Manipulation Review

- Creating elements (`createElement`)
- Setting attributes (`setAttribute`)
- Adding content (`textContent`, `innerHTML`)
- Appending elements (`appendChild`, `append`)
- Event listeners (`addEventListener`)

### Building User Cards - Part 1

- Creating a user card component function
- Using `map` to transform user data into card HTML
- Displaying basic user information (name, avatar, etc.)

### Building User Cards - Part 2

- Adding more details to cards
- Using `forEach` to append cards to the DOM

### Adding Interactivity (15 minutes)

- Creating filter controls for users
- Implementing sorting functionality
- Using `filter` and `sort` methods with DOM updates

### Guided Practice: Advanced Features

- Search functionality using array methods

## Code Snippets

### Sample User Data Structure

```javascript
const users = [
  {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    location: "New York",
    interests: ["coding", "design", "hiking"],
  },
  // More users...
];
```

### Sample Array Method Usage

```javascript
// Filter users by interest
const codingFans = users.filter((user) => user.interests.includes("coding"));

// Create user cards with map
const userCards = users.map((user) => createUserCard(user));

// Calculate statistics with reduce
const locationStats = users.reduce((stats, user) => {
  stats[user.location] = (stats[user.location] || 0) + 1;
  return stats;
}, {});
```

## Resources

- [MDN Array Methods Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript DOM Manipulation Guide](https://www.javascripttutorial.net/javascript-dom/)
- [CSS Grid Layout Tutorial](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Homework/Extension Activities

- Add additional features to the user card application
- Create a similar application with different data (products, movies, etc.)
- Implement more advanced filtering/sorting options
- Add data visualization using array methods and DOM manipulation
