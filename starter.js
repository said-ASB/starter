const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
  "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

// get the ids for every html element we need
const btn = document.getElementById("btn")
const imge1 = document.getElementById("imge1")
const name1 = document.getElementById("name1")
const job1 = document.getElementById("job1")
const desc1 = document.getElementById("desc1")

previous = document.getElementById("previous")
next = document.getElementById("next")



let objectindex = 0

function randomdeails(){
  const persone = reviews[objectindex]
  imge1.src = persone.img
  name1.textContent = persone.name
  job1.textContent = persone.job
  desc1.textContent = persone.text
}


next.addEventListener('click',function(){
  objectindex+=1
  if(objectindex > reviews.length-1){
    objectindex = 0
  }
  randomdeails()
})
previous.addEventListener('click',function(){
  objectindex-=1
  if(objectindex < 0){
    objectindex = reviews.length-1
  }
  randomdeails()
})











btn.addEventListener('click',function(){
   objectindex = Math.floor(Math.random()*reviews.length)

  randomdeails()
})



//   surpse me its random function https://vanilla-js-basic-project-3-reviews.netlify.app/