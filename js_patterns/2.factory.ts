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

const admin =  User.getInstance("admin");




2. 


