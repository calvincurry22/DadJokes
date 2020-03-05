const JOKE = (jokeObject) => {
return `
<section class="joke__Card">
<h4>Joke ${jokeObject.id}</h4>
<p class="joke--question">${jokeObject.question}</p>
<p class="joke--answer">"${jokeObject.answer}"</p>
</section>
`
}


export default JOKE 