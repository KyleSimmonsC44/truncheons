import {getTeams, useTeams} from "./teamDataProvider.js"

const eventHub = document.querySelector(".mainContainer")

// Targets the three areas we will populate the dropdown menus
const teamOneTarget = document.querySelector("#teamOneSelect")
const teamTwoTarget = document.querySelector("#teamTwoSelect")
const teamThreeTarget = document.querySelector("#teamThreeSelect")


// Creates the three drop downs and loads with the team names from the api as options
const render = teamArray => {
    teamOneTarget.innerHTML = `<select class="dropdown" id="teamOne">
    <option value="0">Select Team One</option>
    ${teamArray.map(teamObj => {
        return `<option value=${teamObj.id}>${teamObj.name}</option>`
    }).join("")}
    </select>
    `
    teamTwoTarget.innerHTML = `<select class="dropdown" id="teamTwo">
    <option value="0">Select Team Two</option>
    ${teamArray.map(teamObj => {
        return `<option value=${teamObj.id}>${teamObj.name}</option>`
    }).join("")}
    </select>
    `
    teamThreeTarget.innerHTML = `<select class="dropdown" id="teamThree">
    <option value="0">Select Team Three</option>
    ${teamArray.map(teamObj => {
        return `<option value=${teamObj.id}>${teamObj.name}</option>`
    }).join("")}
    </select>
    `
}

export const teamSelect = () => {
    getTeams()
    .then(() => {
        const teamArray = useTeams()
        render(teamArray)
    })
}

eventHub.addEventListener("change", event => {
    if (event.target.id === "teamOne" || event.target.id === "teamTwo" || event.target.id === "teamThree") {
        console.log(event.target.value)
    }
})