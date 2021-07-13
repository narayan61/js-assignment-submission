cards = [
    {
        image:"https://images.indianexpress.com/2018/04/avengers-iron-man.jpg?w=350",
        value:1,
        status:"closed"
    },

    {
        image:"https://images.indianexpress.com/2018/04/avengers-iron-man.jpg?w=350",
        value:1,
        status:"closed"
    },

    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgyZneLybH9TIP3c7dTiOy8Ytag9S-que8Kw&usqp=CAU",
        value:2,
        status:"closed"
    },

    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgyZneLybH9TIP3c7dTiOy8Ytag9S-que8Kw&usqp=CAU",
        value:2,
        status:"closed"
    },

    {
        image:"https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg",
        value:3,
        status:"closed"
    },

    {
        image:"https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg",
        value:3,
        status:"closed"
    },

    {
        image:"https://imgix.bustle.com/uploads/image/2020/10/7/53a97945-8758-4c3e-a800-0a6ddc0c8ab9-535069688d2c97266a5749dfd7986c58dbb7916d.webp?w=350&h=298&fit=crop&crop=faces&auto=format%2Ccompress",
        value:4,
        status:"closed"
    },

    {
        image:"https://imgix.bustle.com/uploads/image/2020/10/7/53a97945-8758-4c3e-a800-0a6ddc0c8ab9-535069688d2c97266a5749dfd7986c58dbb7916d.webp?w=350&h=298&fit=crop&crop=faces&auto=format%2Ccompress",
        value:4,
        status:"closed"
    },

]


 let cardCopy = "cards"


 //------shuffling-------

 let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}



function displayCards(data){

    let cardsString="";

    

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML=cardsString;

}


displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reste after one guess 
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            alert("game over");
            location.reload();

        }

        
    }

    displayCards(cards);

}