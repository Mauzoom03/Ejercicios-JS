let cardArray = [
    {
      id: 1,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 2,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 3,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 4,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 5,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 6,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
    {
      id: 7,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 8,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 9,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 10,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 11,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 12,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
  ];


  const container$$ = document.querySelector('.b-grid');
  for(const card of cardArray){
    const item$$ = document.createElement('div');
    item$$.classList.add('item');

    const img$$ = document.createElement('img');
    img$$.src=card.img;
    img$$.alt=card.name;
    img$$.classList.add('hidden');
    item$$.append(img$$);

    container$$.appendChild(item$$);
  }
let firstImg = null;
  function showImg () {
   const img$$ =  this.querySelector('img');
   img$$.classList.remove('hidden');
   if(firstImg === null){
    firstImg = img$$;
   } else {
    chekimg(firstImg,img$$);
   }
  }

  function chekimg (firstImg,secondimg$$){

  }