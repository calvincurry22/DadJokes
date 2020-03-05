import JOKE from './Joke.js'
import useDadJokes from './JokesDataProvider.js'

const contentTarget = document.querySelector(".mainJokesContainer")

const JokeList = () => {

    const jokesArrayOfObjects = useDadJokes()

    for (const jokeObject of jokesArrayOfObjects) {
        const jokeHTMLRepresentation = JOKE(jokeObject) 
        contentTarget.innerHTML += jokeHTMLRepresentation
    }
}


export default JokeList