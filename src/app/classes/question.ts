export class QuestionClass{
  constructor(private author:string, private content:string, private answers:number, private votes:number, private visitCount:number){}

  get Author():string{
    return this.author;
  }
  set Author(authorOfQuestion:string){
    this.author = authorOfQuestion;
  }

  get Content():string{
    return this.content;
  }
  set Content(contentOfQuestion:string){
    this.content = contentOfQuestion;
  }

  get Answers():number{
    return this.answers;
  }
  set Answers(answersOfQuestion:number){
    this.answers = answersOfQuestion;
  }

  get Votes():number{
    return this.votes;
  }
  set Votes(votesOfQuestion:number){
    this.votes = votesOfQuestion;
  }

  get VisitCount():number{
    return this.visitCount;
  }
  set VisitCount(visitCountOfQuestion:number){
    this.visitCount = visitCountOfQuestion;
  }
}
