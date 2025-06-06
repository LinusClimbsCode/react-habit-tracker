# react-habit-tracker
WBS Coding School Project (React Mini Project Habit Tracker// Lesson 48 - Topic 7)

## 📝 Project Requirements

| ID    | Functional Requirement           | Description                                                                                                                           |
|-------|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| FR001 | Public GitHub Repository         | Store all code in a single public repo; do not add instructors as collaborators.                                                      |
| FR002 | Incremental Development with PRs | Merge every change into main via Pull Requests.                                                                                       |
| FR003 | Setup a New React Application    | Build a new React application from scratch using Vite.                                                                                |
| FR004 | Habit Creation                   | Allow users to create new habits with custom names and set target goals for completion frequency. (e.g., drink water 8 times per day) |
| FR005 | Habit Progress Counter           | Implement increment/decrement counter for each habit to track daily progress.                                                         |
| FR006 | Total Progress Tracking          | Display overall progress across all habits, showing the completed habits and total habits for the day.                                |
| FR007 | Completion Tracking              | Mark habits as complete by conditionally changing the style when the counter equals the set goal.                                     |
| FR008 | State Management                 | Implement proper React state management using hooks for habits and goals                                                              |
| FR009 | Local Storage Integration        | Persist habit data using browser’s local storage.                                                                                     |
| FR010 | Responsive Design                | Ensure the application works well on both desktop and mobile devices.                                                                 |

## 📂 Project File Structure
To keep things organized and easy to manage, your project follows a simple, modular file structure. All your reusable `components` live inside of the components folder.

You can find bellow a recommended file structure to follow:
```
1    habit-tracker/
2    ├── src/
3    │   ├── components/
4    │   │   ├── HabitForm.jsx
5    │   │   ├── HabitList.jsx
6    │   │   ├── HabitListItem.jsx
7    │   │   ├── Header.jsx
8    │   │   └── ProgressActions.jsx
9    │   ├── App.jsx
10   │   ├── index.css
11   │   └── main.jsx
```

## Project Resources
A [React Documentation](https://react.dev/reference/react).
