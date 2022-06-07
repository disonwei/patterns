from typing import List, Type


class Pet:
    def __init__(self, name: str) -> None:
        self.name = name

    def speak(self) -> None:
        raise NotImplementedError

    def __str__(self) -> str:
        raise NotImplementedError


class Dog(Pet):
    def __init__(self, name) -> None:
        self.name = name

    def speak(self):
        print("Dog", self.name)


class Cat(Pet):
    def __init__(self, name) -> None:
        self.name = name

    def speak(self):
        print("Cat", self.name)


class PetShop():
    def __init__(self, pet_class: Type[Pet]) -> None:
        self.pet = pet_class

    def buy_pet(self, name: str) -> None:
        return self.pet(name)


pet_factory = PetShop(Dog)
pet=pet_factory.buy_pet("wwww")
pet.speak()
