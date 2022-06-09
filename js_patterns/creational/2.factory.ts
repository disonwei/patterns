// 1.simple factory

class User {
  private role;
  private viewPage;

  constructor(role: string, viewPage: string) {
    this.role = role;
    this.viewPage = viewPage;
  }

  public static getInstance(role: string) {
    switch (role) {
      case "superAdmin":
        return new User("superAdmin", "1");
      case "admin":
        return new User("admin", "2");
      case "user":
        return new User("user", "3");
    }
  }
}

const admin = User.getInstance("admin");

// 2. factory method

abstract class User2 {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class UserFactory extends User2 {
  constructor(name: string, age: number) {
    super(name, age);
  }

  public static create(role: string) {
    switch (role) {
      case "superAdmin":
        return new UserFactory("superAdmin", 1);
      case "admin":
        return new UserFactory("admin", 2);
      case "user":
        return new UserFactory("user", 3);
    }
  }
}

const admin2 = UserFactory.create("admin");

// 3 abstract factory
