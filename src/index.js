export const paintCards = () => {
    let cards = document.querySelectorAll('.item');
    for (let item = 0; item < cards.length; item++) {
      if (item % 2 === 0) {
             cards[item].style.backgroundColor = 'red';
           }
        }
   };


export const findElement = () => {
    let cards = document.querySelectorAll('li');
//let card = .classList.contains("class")
    for (let item = 0; item < cards.length; item++) {
        if (cards[item].classList.contains("likedItem")) {
            cards[item].style.backgroundColor = 'blue';
        }
    }
};
