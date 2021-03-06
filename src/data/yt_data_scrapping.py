import re
import json
import pytz
import pandas as pd
from bs4 import BeautifulSoup as soup
from urllib.request import urlopen as uReq
from datetime import datetime, timezone, timedelta

def getBSHtml(url):
    uClient = uReq(url)
    page_html = uClient.read()
    uClient.close()
    page_soup = soup(page_html, 'html.parser')
    return page_soup

def getDate(link):
    #get the date and done status
    page_soup = getBSHtml(link)
    date = re.findall(r'meta content="(.+?)".+?startDate"', page_soup.prettify())[0]
    date = re.split('[T+]', date)
    date = date[0] + ' ' + date[1]
    date = datetime.strptime(date, '%Y-%m-%d %H:%M:%S')
    localtimezone = pytz.timezone('UTC')
    date = localtimezone.localize(date, is_dst=None)
    diff = timedelta(0,0,0,0,0,-3)
    fuse = timezone(diff)
    date = date.astimezone(fuse)
    now = localtimezone.localize(datetime.now(), is_dst=None)
    done = now > date
    return date, done
    
def getDict(url):
    #return a dictonary with the links, image links, date, titles of the videos and done status of the videos
    data_frame = pd.DataFrame(columns=['img','date','title','link', 'done'])
    page_soup = getBSHtml(url)
    
    #find video id
    after_id = ',"playlistId":"PLa_Eeh4hhoGc_yIrmXWaWhnv5yLc9Ttab","index":'
    video_ids = re.findall(r'"videoId":"(.{,20})"'+after_id, page_soup.prettify())

    #find video title 
    titles = re.findall(r'"title":.+?":"(.+?) Love Bits', page_soup.prettify())
    
    #find video image link
    imgs = re.findall(r'138},{"url":"(.+?)\?sqp.+?', page_soup.prettify())
        
    #find link and date, and create dictonary
    for count, video_id in enumerate(video_ids):
        link = 'https://www.youtube.com/watch?v='+video_id
        date, done = getDate(link)
        data_frame.loc[count] = [imgs[count], date, titles[count], link, done] 
    
    #order data frame by date
    data_frame.sort_values(by='date', ascending=False, inplace=True)
    
    #convert date to DD/MM/AAAA às hh:mm horas
    data_frame['date'] = data_frame['date'].apply(lambda date : re.split('[ :-]',str(date)))
    data_frame['date'] = data_frame['date'].apply(lambda date : date[2]+'/'+date[1]+'/'+date[0]+' às '+date[3]+':'+date[4]+' horas')
    data_list = data_frame.to_dict('records')
    return {'meetings':data_list}


url = 'https://www.youtube.com/playlist?list=PLa_Eeh4hhoGc_yIrmXWaWhnv5yLc9Ttab'
data_dict = getDict(url)

with open('./src/data/meetings.json', 'w') as fp:
    json.dump(data_dict, fp)