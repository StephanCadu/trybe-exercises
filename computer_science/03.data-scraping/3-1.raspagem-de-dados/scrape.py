# from parsel import Selector
# import requests


# response = requests.get("http://books.toscrape.com/")
# selector = Selector(text=response.text)

# # O título está no atributo title em um elemento âncora (<a>)
# # Dentro de um h3 em elementos que possuem classe product_pod
# titles = selector.css(".product_pod h3 a::attr(title)").getall()
# # Estamos utilizando a::attr(title) para capturar
# # somente o valor contido no texto do seletor

# # Os preços estão no texto de uma classe price_color
# # Que se encontra dentro da classe .product_price
# prices = selector.css(".product_price .price_color::text").getall()

# # Combinando tudo podemos buscar os produtos
# # e em seguida buscar os valores individualmente
# for product in selector.css(".product_pod"):
#     title = product.css("h3 a::attr(title)").get()
#     price = product.css(".price_color::text").get()
#     print(title, price)

# # Existe uma classe next, que podemos recuperar a url
# # através do seu elemento âncora
# next_page_url = selector.css(".next a::attr(href)").get()
# print(next_page_url)

from parsel import Selector
import requests


# Define a primeira página como próxima a ter seu conteúdo recuperado
URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"
while next_page_url:
    # Busca o conteúdo da próxima página
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    for product in selector.css(".product_pod"):
        # Busca e extrai o título e  o preço
        # title = product.css("h3 a::attr(title)").get()
        # price = product.css(".price_color::text").get()
        # print(title, price)
        regex = r"£\d+\.\d{2}"
        price = product.css(".product_price .price_color::text").re(regex)

        # Busca o detalhe de um produto
        detail_href = product.css("h3 a::attr(href)").get()
        detail_page_url = URL_BASE + detail_href

        # Baixa o conteúdo da página de detalhes
        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        # Extrai a descrição do produto
        descript = detail_selector.css("#product_description ~ p::text").get()
        suffix = "...more"
        if descript.endswith(suffix):
            descript = descript[: -len(suffix)]
        print(descript)
    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()
