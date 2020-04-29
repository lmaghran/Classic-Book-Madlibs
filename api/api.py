from flask import Flask, render_template, json
import requests
from bs4 import BeautifulSoup as bs
from helper import get_books

app = Flask(__name__)

@app.route('/books')
def booklist_api():
    """API for Booklist"""
    book_array=[]
    book_list= get_books("https://www.gutenberg.org/browse/scores/top#books-last7")
    # removing the ul element from the list
    # book_list.pop(0)
    title_set = set()
    for li in book_list[:99]:
        book_dict={}
        book_title_auth= li.text.split(" by ", 1)
        book_title= book_title_auth[0]
        
        if book_title not in title_set:
            if len(book_title_auth)>1:
                book_auth= book_title_auth[1][:-7]
            else:
                book_auth= "No author"
            book_url=li.findAll('a')[0]['href']
            book_dict = {"title": book_title, "url":book_url, "author":book_auth}
            book_array.append(book_dict)


    book_array= json.dumps(book_array)
    return book_array

if __name__ == "__main__": 
    app.run(host="0.0.0.0")