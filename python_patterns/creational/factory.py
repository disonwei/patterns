class EnglishLocalizer:
    def __init__(self):
        pass

    def localizer(self, text: str):
        print("EnglishLocalizer", text)


class GreekLocalizer:
    def __init__(self: str):
        pass

    def localizer(self, text: str):
        print("GreekLocalizer", text)


def get_localizer(language):

    localizers = {
        "English": EnglishLocalizer,
        "Greek": GreekLocalizer
    }

    return localizers[language]()


english, greek = get_localizer("English"), get_localizer("Greek")
english.localizer("123")
greek.localizer("123")
