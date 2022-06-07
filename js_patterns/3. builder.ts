// 1.  分布构建复制对象

class bookBuilder {
  private name = "";
  private price = 0;
  private author = "";
  private category = "";

  // constructor(){
  //     this.name="",
  //     this.price=0,
  //     this.author="",
  //     this.category=""
  // }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setPrice(price: number) {
    this.price = price;
    return this;
  }

  setAuthor(author: string) {
    this.author = author;
    return this;
  }

  setCategoty(category: string) {
    this.category = category;
    return this;
  }

  public build() {
    return {
      name: this.name,
      author: this.author,
      price: this.price,
      category: this.category,
    };
    // return this
  }
}

const book = new bookBuilder()
  .setAuthor("dison")
  .setName("书名")
  .setPrice(10)
  .setCategoty("英语")
  .build();


  console.log(book);
  console.log(typeof(book));
  console.log(book.toString());
  
  
//   2. 
  
class BaseBuilder{

    init(){
        Object.keys(this).forEach((key:string)=>{
            const withNames=`with${key.substring(0,1).toUpperCase()}${key.substring(1)}`

            this[withNames]=(value:string)=>{
                this[key]=value;
                return this;
            }
        })
    }

    build(){
        const keysNoWithers=Object.keys(this).filter((key:string)=>{
                typeof(this[key]) !=="function"
        })
    }

}