1) Application created using `create-react-app`.
2) Use `npm start` to run the project. Url : `http://localhost:3000`.
3) Used redux for state management
4) Folder Structure
    src -> components -> 
                        a)Table.js
                            - Home page i.e the table with all the entries
                        b)CreateEntry.js
                            - Component which will be used to add the new entry to the table
                        c) Details.js
                            - Route to the details page of the particular entry in table.
        -> actions -> actions.js 
                        - actions which will be used to perform certain operation 
        -> reducers -> tableReducer.js
                        - Operation to be performed based on the action dispatched
        -> tableStore -> store.js
                        - Store which will be used to access all the state throughout the application
        -> utils -> mockData.js
        -> App.css [Contains CSS for application]
        