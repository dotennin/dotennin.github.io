const scrape = require('website-scraper')
const options = {
  urls: ['https://aws.koiwaclub.com/aws-exam2/aws-exam01/'],
  directory: 'C:\\Users\\wenhu\\Desktop\\Koiwaclib',
  recursive: true,
  maxRecursiveDepth: 1,
  ignoreErrors: true,
  request: {
    cookie:
      '_ga=GA1.2.727160589.1552213366; swpm_session=de6658ac965f01e51e0b434770fe6bec; _gid=GA1.2.1674831505.1558851888; swpm_in_use=swpm_in_use',
    headers: {
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
      'upgrade-insecure-requests': '1',
      referer: 'https://aws.koiwaclub.com/',
      pragma: 'no-cache',
      cookie:
        '_ga=GA1.2.727160589.1552213366; swpm_session=de6658ac965f01e51e0b434770fe6bec; _gid=GA1.2.1674831505.1558851888; swpm_in_use=swpm_in_use; simple_wp_membership_sec_7a5d4f8c1544e2eeb63baff5e95a4223=nochi0105%7C1559148300%7C1cc679ee3b1039e09e026a338852ce7c; wordpress_logged_in_7a5d4f8c1544e2eeb63baff5e95a4223=nochi0105%7C1559061900%7CDxuEjsuL6rkj7oXKlBPWbbFySWkn2PYRczoHJSJh7gU%7C9d91a6403656e2c989d9c6c49146a5386c1f7c0f0c697c03e41a1475cb060d98; _gat=1',
      'cache-control': 'no-cache',
      // 'accept-language': 'ja,zh-CN;q=0.9,zh;q=0.8,zh-TW;q=0.7,en;q=0.6',
      // 'accept-encoding': 'gzip, deflate, br',
      // accept:
      //   'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
      // ':scheme': 'https',
      // ':path': '/aws-exam2/aws-exam01/',
      // ':method': 'GET',
      // ':authority': 'aws.koiwaclub.com',
    },
  },
}

scrape(options)
