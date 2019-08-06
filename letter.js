var Letter = function () {
    this.word = "_";
    this.guessLetter = false;
    this.returnLetter = function (){
       if (this.guessLetter == true) {
           return this.guessLetter;
       } else if (this.guessLetter == false) {
           return "_";
       }
    }
    this.check = function () {
        if("" == this.word) {
            this.guessLetter = true;
        }
    }


}