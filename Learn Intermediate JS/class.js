// class - a blueprint for creating objects
// a new object creating  from a class is an instance - new.

//constructor
//inheritance
//instance
//method
//static
//Why OOP


// Contructor - a method that is called when the object is created
// use to set the initial values for the objects
class Mammal {
    constructor(name, age, gender, type) {
        this._name = name;       
        this._age = age;         
        this._gender = gender;   
        this._type = type;   
  }

    introduce() {
      return `
        <h2>Mammal Introduction</h2>
        <p>Name: ${this._name}</p>
        <p>Age: ${this._age}</p>
        <p>Gender: ${this._gender}</p>
        <p>Type: ${this._type}</p>
      `;
    }

    static category() {
      return 'Mammals are warm-blooded animals.';
    }
  }

class Human extends Mammal {
    constructor(name, age, gender, country) {
      super(name, age, gender, 'Human');
      this._country = country;
    }

    introduce() {
      return `
        <h2>Human Introduction</h2>
        <p>Name: ${this._name}</p>
        <p>Age: ${this._age}</p>
        <p>Gender: ${this._gender}</p>
        <p>Type: ${this._type}</p>
        <p>Country: ${this._country}</p>
        <p>This class is a subclass of Mammal.</p>
      `;
    }

    static category() {
      return 'Humans are intelligent mammals.';
    }
}

const tiger = new Mammal('Tiger', 5, "F", 'Cat');
const ching = new Human('Ching', 25, "F", 'Canada');


document.body.innerHTML = `
    ${tiger.introduce()}
    <p>Static: ${Mammal.category()}</p>
    ${ching.introduce()}
    <p>Static: ${Human.category()}</p>
  `;

//OOP - Object Oriented Programming 
// modularity and code reusability
// Encapsulation
// inheritance
// polymorphism

//*以下是 OOP（物件導向程式設計，Object-Oriented Programming） 的快速介紹：
// 1️⃣ OOP 是什麼？
// 物件導向程式設計是一種以「物件（Object）」為核心的程式設計方式，透過把資料與行為封裝在一起，讓程式更模組化、好維護、可重複使用。
// 2️⃣ Modularity & Code Reusability（模組化與程式碼重用）
// 模組化（Modularity）：
// 將系統拆成多個獨立的類別（Class），每個類別負責單一功能。
// 程式碼重用（Reusability）：
// 已寫好的類別可以在不同專案或地方重複使用，減少重複撰寫。
// 3️⃣ Encapsulation（封裝）
// 將 資料（屬性） 與 方法（行為） 包在同一個類別中
// 隱藏內部細節，只開放必要的介面
// 提升安全性與可維護性
// 👉 例：使用 private / public 控制存取
// 4️⃣ Inheritance（繼承）
// 子類別（Subclass）可以繼承父類別（Superclass）的屬性與方法
// 避免重複程式碼
// 建立「is-a」關係
// 👉 例：Car 繼承 Vehicle
// 5️⃣ Polymorphism（多型）
// 同一個方法名稱，根據不同物件有不同的行為
// 提高程式彈性與擴充性
// 👉 例：draw() 在 Circle 與 Rectangle 有不同實作
// 🔑 總結
// OOP 透過 封裝、繼承、多型
// 讓程式具備 高可讀性、可維護性與擴充性，是現代軟體開發的核心概念之一。 */