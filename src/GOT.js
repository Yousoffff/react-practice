import './GOT.css';

const url ="https://api.tvmaze.com/shows/82/episodes";

function GOT(){

    fetch(url)
  .then((res) => res.json())
  .then((data) => {
      showImage(data);
      console.log(data);
      console.log(data[0].name)

});


const showImage = (data) => {

  for (const movie of data) {
    const div = document.createElement("div");
    const divContainer = document.querySelector(".episodeContainer");
    div.id="divmmd";

    const img = document.createElement("img");
    img.id="imgmmd";
    img.src = movie.image.medium;

    const p = document.createElement("p");
    p.id='pmmd';
    p.textContent=movie.name;

    div.append(img,p);
    divContainer.append(div);
    
  }
}



return <div className='fixContainer'>
  <div className='episodeContainer'></div>
  </div>


}


export default GOT;