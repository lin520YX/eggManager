module.exports = {
    foo(params){
        // 这里的this指代上下文
        // {
        //     request: {
        //       method: 'GET',
        //       url: '/news',
        //       header: {
        //         host: '127.0.0.1:7001',
        //         connection: 'keep-alive',
        //         'cache-control': 'max-age=0',
        //         'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        //         'sec-ch-ua-mobile': '?0',
        //         'upgrade-insecure-requests': '1',
        //         'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
        //         accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        //         'sec-fetch-site': 'none',
        //         'sec-fetch-mode': 'navigate',
        //         'sec-fetch-user': '?1',
        //         'sec-fetch-dest': 'document',
        //         'accept-encoding': 'gzip, deflate, br',
        //         'accept-language': 'zh-CN,zh;q=0.9',
        //         cookie: 'csrfToken=Ha8Grv0-JoSwXdd7fpCbiJ6R; key.sig=enV5Ka3rq2Hh6_m5IpKohbN6OBHrAtDcoS68cUmxsY0; key=O3DkCBOb8_piZFI5n9M3mw=='
        //       }
        //     },
        //     response: {
        //       status: 404,
        //       message: 'Not Found',
        //       header: [Object: null prototype] {}
        //     },
        //     app: {
        //       env: 'local',
        //       name: 'store',
        //       baseDir: '/Users/lyf/Documents/eggManager/egg-store',
        //       subdomainOffset: 2,
        //       config: '<egg config>',
        //       controller: '<egg controller>',
        //       httpclient: '<egg httpclient>',
        //       loggers: '<egg loggers>',
        //       middlewares: '<egg middlewares>',
        //       router: '<egg router>',
        //       serviceClasses: '<egg serviceClasses>'
        //     },
        //     originalUrl: '/news',
        //     req: '<original node req>',
        //     res: '<original node res>',
        //     socket: '<original node socket>'
        //   }
        return this.request.host
        // return this.request.ip
    }
}