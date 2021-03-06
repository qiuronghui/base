// 声明父类   
function Animal(color) {    
    this.name = 'animal';    
    this.type = ['pig','cat'];    
    this.color = color;   
  }     
  // 添加共有方法  
  Animal.prototype.greet = function(sound) {    
    console.log(sound);   
  }     
  // 声明子类   
  function Dog(color) { 
    // 构造函数继承    
    Animal.apply(this, arguments);   
  }   
  // 类式继承
  Dog.prototype = new Animal();   
  var dog = new Dog('白色');   
  var dog2 = new Dog('黑色');     
  dog.type.push('dog');   
  console.log(dog.color); // "白色"
  console.log(dog.type);  // ["pig", "cat", "dog"]
  console.log(dog2.type); // ["pig", "cat"]
  console.log(dog2.color);  // "黑色"
  dog.greet('汪汪');  // "汪汪"
  