function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

img= document.querySelector('.random-image')

//fetch


const peticion = async()=>{
    randomNum=getRandomInt(151)
    const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
    const response = await res.json();
    console.log(response)
    img.src=(response.sprites.front_default)
    // printData(response)
    // setSelector()
};
peticion()