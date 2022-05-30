// class SingleTon {

// private static instance:SingleTon;

//   constructor() {
//     if (!SingleTon.instance) {
//         SingleTon.instance=this;
//     }
//     return SingleTon.instance;

//   }
// }

// const s1=new SingleTon()
// const s2=new SingleTon()
// console.log(s1===s2);

class SingleTon {
  private static instance: SingleTon;

  constructor() {}

  public static getInstance() {
    if (!this.instance) {
      this.instance = new SingleTon();
    }
    return this.instance;
  }
}


const sing=SingleTon.getInstance()
console.log(sing);
