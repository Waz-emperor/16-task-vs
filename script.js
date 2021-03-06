let car1 = {

   color:"red",
   speed:2000,
    model: "moskvich",

    toString: function() {
        return `color: ${this.color}; speed: ${this.speed}; model: ${this.model};`;
     
     }
};

let car2 = {

    color:"red",
    speed:2000,
     model: "moskvich",
 
     toString: function() {
         return `color: ${this.color}; speed: ${this.speed}; model: ${this.model};`;
      
      }
    };
    console.log(car1.color);
    console.log(car1.speed);
    console.log(car1.model);
    console.log(car1.toString());
    console.log("-----------------")
    console.log( JSON.stringify(car1) === JSON.stringify(car2));
