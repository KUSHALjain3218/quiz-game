class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Name please");
    this.input2 = createInput("option please");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MY QUIZZZZZZZZZZ");
    this.title.position(300,160);

    this.question.html("Question:- Who is Uncle Barry");
    this.question.position(350,0);
    this.option1.html("1: Jailer " );
    this.option1.position(25,5);
    this.option2.html("2: Barber" );
    this.option2.position(25, 330);
    this.option3.html("3: Detective " );
    this.option3.position(760, 5);
    this.option4.html("4: Prisoner" );
    this.option4.position(760,330);

    this.input1.position(390, 130);
    this.input2.position(390, 250);
    this.button.position(390, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
