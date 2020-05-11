import requests
from bs4 import BeautifulSoup as bs 


def get_books(url):
    text = requests.get(url)
    soup= bs(text.content, 'html.parser')
    last_30 = soup.h2
    siblings = list(last_30.findNextSiblings())
    book_list= []
    for ul in siblings:
        # ul_text =ul.get_text()
        # if "EBooks" in ul.text():
        for li in ul.findAll('li'):
            book_list.append(li)

    return book_list