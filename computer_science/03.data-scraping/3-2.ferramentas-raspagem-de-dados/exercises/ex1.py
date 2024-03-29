from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By

sleep(3)

options = webdriver.FirefoxOptions()
options.add_argument("--ignore-certificate-errors")
options.add_argument("--ignore-ssl-errors=yes")
options.add_argument("--start-maximized")

firefox = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub", options=options
)

firefox.get("https://quotes.toscrape.com/")

first_quote = firefox.find_element(By.CLASS_NAME, "text").text

print(first_quote)

sleep(3)

firefox.quit()
