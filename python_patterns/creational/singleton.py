class Singleton:
    _instance = None
    def __init__(self):
        pass

    def __new__(cls):
        if not cls._instance:
            cls._instance=super().__new__(cls)
        return cls._instance

a=Singleton()
b=Singleton()

print(a==b)
print(id(a)==id(b))