document.getElementById('jokeBtn').addEventListener('click',generateJoke);

async function generateJoke()
{
    const res=await fetch('https://official-joke-api.appspot.com/random_joke');

    const info=await res.json();

    console.log(info);

    document.getElementById('joke').innerHTML=`${info.setup}-${info.punchline}`;

    document.getElementById('joke').style.backgroundColor="black";
}