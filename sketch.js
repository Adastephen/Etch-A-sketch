// functions that declare the grid and its colour of the coursor
function scale(size){
    let board = document.querySelector(".board");

    // setting the grid temlate
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let marg = size * size;

    //setting the element on the board
    for (let i = 0; i <marg ; i++) {
        let square = document.createElement("div");

        //automatically reset of the board after appply
        // let squares = document.querySelectorAll('.square');
        // squares.forEach((div) => div.remove());
        // square.classList.add("square");
        square.addEventListener('mousemove', () => {
        square.style.cssText = 'background-color: black;';
        });

        // the board default bacground
        square.style.cssText = "background-color: white";
        board.appendChild(square);
    }
};
scale(16);
//size changes in respect to the inut in the field
function changeSize(){
    // let size = document.getElementById('size').value; 
    scale(size);
    // scale.resetsketch();
}
function resetsketch(){
   let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    })
};









// changeSize.reset();

// function gridcolor(item) {
//     item.addEventListener('mouseover', function(){
//         this.style.cssText = 'border:1px solid red;';
//     });
// };
// board.forEach(function(el) {
//     gridcolor(el);
// });
















// square.addEventListener('mousedown', () => {
        // //     square.style.cssText = "background-color: black";
        // //     isDrawing = true;
        // // });
        // square.addEventListener('mousemove', movement)
        //     //     square.style.cssText = "background-color: black";
        //     //     isDrawing = true;
        //     // });
        // square.addEventListener('mouseup', movement)
        // //     square.style.cssText = "background-color: black";
        // //     isDrawing = true;
        // // });
        // let callcolor = square.style.cssText = "background-color: black";
        // function movement(e){
        //     if (e.type === 'mousedown' && 'mousemove'){
        //         return callcolor;
        //     };
        // };
       
//=================  our own =======================================

//  // // square.addEventListener('mouseover', () => {
        // //     square.style.cssText = "background-color: black";
        // // })
        //     square.style.cssText = "background-color: white";
        //     board.insertAdjacentElement('beforeend', square); 

    
    
   
//=============chatgbt =======================================

// square.addEventListener("onclick", function(i) {
//     clearTimeout(t);
//     t = setTimeout(function(){
//         square.style.cssText = 'border: 1px solid red;';
//     }, 500);
//     //  background-color: yellow;';
// }); 


// ===================Emannuel solutions===================================>>>>>>>


// let gridSetter = (length = 16) => {
//     while (root.firstElementChild) {
//       root.removeChild(root.lastElementChild);
//     }
//     for (let width = 0; width < length; width++) {
//       let div = document.createElement("div");
//       div.style.cssText = "display: flex; width: 100%; flex: 1;";
//       root.appendChild(div);
//       for (let height = 0; height < length; height++) {
//         let div2 = document.createElement("div");
//         div2.style.cssText = "height: 100%; border: 1px solid red; flex: 1;";
//         div2.addEventListener("mouseover", () => {
//         div2.style.backgroundColor = "black";
//     });
// for (let height = 0; height < length; height++) {
//     let div2 = document.createElement("div");
//     div2.style.cssText = "height: 100%; border: 1px solid red; flex: 1;";
//     div2.addEventListener("mouseover", () => {
//       div2.style.backgroundColor = "black";
//     });
//     root.lastElementChild.appendChild(div2);
//   }
// }
// };

// gridSetter();

    // square.addEventlistener("mouseover", function(){
    //     let runs = document.createElement('div');
    //     runs.style.cssText = 'border:2px solid red;';
    //         square.style.cssText = 'background-color: yellow;';
    //     })