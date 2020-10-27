let teams = []

// creates a copy of the teams array
export const useTeams = () => {
    return teams.slice()
}


// pulls data from the api, then parses it and stores it in the teams array
export const getTeams = () => {
    return fetch("http://localhost:8088/Teams")
    .then(response => response.json())
    .then(parsedTeams => teams =parsedTeams)
}