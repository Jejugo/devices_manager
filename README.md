# Device Types Listing App
This application is a simple React app that allows users to list and filter device types based on their names and types. The list is dynamic and can be sorted in ascending or descending order based on the device name, type or hdd capacity.

## Installation and Usage
To get started: 
- first clone the repository
- run `yarn` to install all necessary dependencies
- Then, `yarn start` to start the application in development mode. 
You can access the app at http://localhost:3000.

## Features
- Users can filter the list of device types based on the name or type of device.
- Users can sort the list in ascending or descending order based on the device name or type.
- The list is dynamic and updates in real-time as users type into the filter input.
- The app has been built with accessibility and component reusability in mind.

## Testing
To run tests for the application:

- Run `yarn test` to execute all tests.
- Run `yarn test:coverage` to check the project's test coverage.

## Technologies Used
 - React
 - React Hooks
 - Jest
 - React Testing Library
 - Styled Components
 - TypeScript

## Future Improvements

- Implement pagination or infinite scrolling for the list of devices to improve performance.
- Allow users to filter by multiple device types at once.
- Improve the accessibility of the sorting feature.

## Component tree structure
```
📦src
 ┣ 📂components 
 ┣ 📂features -
 ┃ ┣ 📂DeviceManager 
 ┃ ┗ 📂ErrorBoundary
 ┣ 📂layout
 ┃ ┣ 📂Layout
 ┃ ┗ 📂ListLayout
 ┣ 📂providers
 ┃ ┣ 📂DarkModeProvider
 ┃ ┣ 📂DeviceProvider
 ┃ ┣ 📂DevicesProvider
 ┃ ┗ 📂SnackbarProvider
 ┣ 📂service
 ┣ 📂styles
 ┣ 📂types
 ┣ 📜App.tsx
 ```


- **Components**: common components for the whole application
- **Features**: specific features for the system
  - **Device Manager**: Feature that orchestrates the list filtering and device management
  - **Error Boundary**: Feature that handles the errors thrown within the application
- **Providers**: ReactJS contexts to crontrol specific states within the application such as *Device being used*, *Snackbar*, *DarkMode*, etc
- **Services**: Layer to deal with API requests handling success and error states
- **Styles**: Common style helpers such as fonts sizes, colors, themes, etc