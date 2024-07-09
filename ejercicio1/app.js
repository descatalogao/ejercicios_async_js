const peticion = async()=>{
    const res= await fetch('https://thronesapi.com/api/v2/Characters');
    const response = await res.json();
    printData(response)
    setSelector()
};


const printData= (data)=>{
    console.log(data)
    nameList = document.querySelector('#character-list')
    objects = []
    for (object of data){
        charId= object.id
        charName = object.firstName + ' ' + object.lastName
        charImg = object.imageUrl

        charObj = {charId, charName, charImg}
        objects.push(charObj)

        nameList.insertAdjacentHTML( 'beforeend', `<option id=${charId}>${charName}</option>` )
    }
    console.log(objects)
}

const setSelector = ()=>{
    selector = document.querySelector('#character-list')
    selector.addEventListener('change',(event)=>{
        for (object of objects){
            if (selector.value == object.charName){
                showImage(object.charImg)
            }
        }
        
})}


const showImage= (tosearch)=>{
    image=document.querySelector('.character-image')
    image.src=tosearch
}

peticion()


