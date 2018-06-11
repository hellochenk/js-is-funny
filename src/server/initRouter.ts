export default class Test{
  a:string;
  constructor(a:string){
    this.a = a;
  }
  getVal(){
    return this.a;
  }
  serVal(a:string){
    this.a = a;
  }
}