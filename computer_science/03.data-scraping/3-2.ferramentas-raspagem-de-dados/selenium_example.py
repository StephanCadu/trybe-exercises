# # importação do webdriver, que é o que possibilita a implementação para todos
# # os principais navegadores da web
# # from time import sleep
# from selenium import webdriver

# # criação de uma instância de navegador utilizando o Firefox
# firefox = webdriver.Firefox()

# # requisições para essa instância criada utilizando o método `get`
# response = firefox.get("https://www.python.org/")

################

from selenium import webdriver

# Importa teclas comuns
from selenium.webdriver.common.keys import Keys

firefox = webdriver.Firefox()

response = firefox.get("https://www.google.com.br/")

# pesquisa na instância aberta do navegador pela primeira ocorrência
# do nome 'q'
search_input = firefox.find_element("name", "q")

# escreve selenium dentro do campo de pesquisa
search_input.send_keys("selenium")

# pressiona enter para realizar a busca
search_input.send_keys(Keys.ENTER)
