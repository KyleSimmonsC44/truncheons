// Creates an html rendering for each team
export const teamHtml = (teamObj) => {
    return `
    <div class="teamOne">
        <h2>${teamObj.name}</h2>
        <div class="scoreButtons">
        <button class="plusOne">Score Plus One</button> 
        <button class="minusOne">Score Minus One</button>
        </div>
        <p>Score:</p> 
    </div>
    `
}