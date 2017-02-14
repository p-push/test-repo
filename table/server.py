import json
import markupsafe
import selenium, bottle
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from bottle import route, run, template

@route('/search')
def index():
    q = bottle.request.query.q
    
    driver = webdriver.Firefox()
    #driver.implicitly_wait(10)
    
    try:

        # escape q in real code
        driver.get('https://www.yelp.com/search?find_desc=' + q + '&find_loc=San+Francisco%2C+CA&ns=1')
        
        elements = driver.find_elements_by_xpath('//a[@data-analytics-label="biz-name"]')
        # take the first one for simplicity
        e = elements[0]
        title = e.text
        
        e.click()
        
        # wait for the page to load
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, '//a[@class="biz-map-directions"]'))
        )
        #driver.find_element_by_xpath('//h1[@class="biz-page-title embossed-text-white"]')
        
        reviews = driver.find_elements_by_xpath('//div[@class="review-content"]')
        data = []
        for review in reviews:
            review_text = review.text
            review_markup = markupsafe.Markup(review_text).replace("\n", "<br/>\n")
            data.append(review_markup)
        
        return json.dumps(dict(reviews=data))
    
    finally:
        driver.quit()
        
    import pdb;pdb.set_trace()
    
    assert "Python" in driver.title
    elem = driver.find_element_by_name("q")
    elem.clear()
    elem.send_keys("pycon")
    elem.send_keys(Keys.RETURN)
    assert "No results found." not in driver.page_source
    driver.close()

    import pdb;pdb.set_trace()
    return template('<b>Hello {{name}}</b>!', name=name)

run(host='localhost', port=8080, reloader=True)
