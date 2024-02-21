__path = process.cwd()
//var favicon = require('serve-favicon');
var express = require('express');
var db = require(__path + '/database/db');
try {
  var zahirr = db.get("zahirr");
} catch (e) {
  console.log('')
}
const { tmpdir } = require('os'); /* add this module to your package.json */
const Crypto = require("crypto") /* add this module to your package.json */
const path = require('path') /* add this module to your package.json */

var tiktok = require(__path + '/database/index.js');

var pin = require(__path + '/database/pinterest.js');


const listkey = ["clover"];




const temp = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0,6).toString(36)}`)

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

var creator = "CM"
var neoxr = "yntkts"
var zeks = "administrator"
var zeks2 = "apivinz"
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var zrapi = require("zrapi");
//var dotenv = require("dotenv").config()
var fs = require('fs');
//var TikTokScraper = require('tiktok-scraper');
//var { EmojiAPI } = require("emoji-api");
//var emoji = new EmojiAPI();
var router = express.Router();
var { TiktokDownloader } = require('../lib/tiktokdl.js')
//var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js');
var options = require(__path + '/lib/options.js');
var {
  Searchnabi,
  Gempa
} = require('./../lib');

var {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly
} = require("./../lib/utils/photooxy");

var {
  ttdownloader,
  pinterest,
  fbdown,
  igstory,
  igdl,
  linkwa,
  igDownloader
} = require("./../lib/anjay");

var {
  igDownloader
} = require("./../lib/utils/igdown");

var {
  igstalk
} = require("./../lib/utils/igstalk")

var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./../lib/utils/yt");

var { ythd } = require("./../lib/utils/insta")


var {
  Cuaca,
  Lirik
} = require('./../lib/utils/information');

var {
  Base,
  WPUser
} = require('./../lib/utils/tools');

var { play } = require('./../lib/utils/wilmo');

var { wallpaperhd } = require('./../lib/utils/wallhd');

var { stickers } = require('./../lib/utils/stickers');

var {
  fbDownloader,
  fbdown2
} = require('./../lib/utils/fbdl');

//var TiktokDownloader = require('./../lib/tiktokdl');

var tebakGambar = require('./../lib/utils/tebakGambar');

var cookie = process.env.COOCKIE
/*
* @Pesan Error
*/
loghandler = {
  notparam: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: Apikey'
  },
  noturl: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: url'
  },

  notgcname: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: Nome do Grupo'
  },
  notgcicon: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: Foto do Grupo'
  },
  notpp: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: Foto de Perfil'
  },
  notbg: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: Background.'
  },
  notmemberCount: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: Número de Participantes'
  },
  notquery: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: Pesquisa.'
  },
  notkata: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: kata'
  },
  nottext: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: texto'
  },
  nottext2: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: texto2'
  },
  notnabi: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: nabi'
  },
  nottext3: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: texto3'
  },
  nottheme: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: tema'
  },
  notusername: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: username'
  },
  notvalue: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'Está faltando o seguinte parâmetro: valor'
  },
  invalidKey: {
    status: false,
    criador: `${creator}`,
    codigo: 406,
    mensagem: 'apikey invalida!!'
  },
  invalidlink: {
    status: false,
    criador: `${creator}`,
    mensagem: 'erro, talvez seu link seja inválido.'
  },
  invalidkata: {
    status: false,
    criador: `${creator}`,
    mensagem: 'erro '
  },
  error: {
    status: false,
    criador: `${creator}`,
    mensagem: '404 ERROR'
  }
}

/*
Akhir Pesan Error
*/

//router.use(favicon(__path + "/views/favicon.ico"));



router.post("/apikey", async (req, res, next) => {
  const key = req.query.key;
  if (listkey.includes(key)) {
    res.json({
      mensagem: 'Apikey válida!'
    });
  } else {
    listkey.push(key);
    res.json({
      mensagem: `Apikey registrada com sucesso: ${key}`
    });
  }
});

// delete apikey

router.delete("/apikey", async (req, res, next) => {
  const key = req.query.delete;
  if (listkey.includes(key)) {
    res.json({
      mensagem: 'apikey não encontrada'
    })
  } else {
    listkey.splice(key, 1)
    res.json({
      mensagem: 'apikey excluída com sucesso'
    });
  }
});


router.get('/game/adivinheabandeira', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    var bandeira = JSON.parse(
      fs.readFileSync(__path + '/data/adivinheabandeira.json')
    )
    res
      .status(200)
      .json({
        codigo: 200,
        successo: true,
        ...bandeira[~~(Math.random() * bandeira.length)]
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/game/adivipersonagem', async (req, res, next) => {
  var Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    var personagem = JSON.parse(fs.readFileSync(__path + '/data/adivinheopersonagem.json'))

    res
      .status(200)
      .json({
        codigo: 200,
        successo: true,
        ...personagem[~~(Math.random() * personagem.length)]
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/amv', async (req, res, next) => {
  var Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    var amv = JSON.parse(fs.readFileSync(__path + '/data/amv.json'))
    res
      .status(200)
      .json({
        codigo: 200,
        successo: true,
        ...amv[~~(Math.random() * amv.length)]
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/download/ytmp3', async (req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    ytDonlodMp3(url)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        console.log(error)
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/download/ythd', async (req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    ythd(url)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        console.log(error)
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/download/ytmp4', async (req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;

  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    ytDonlodMp4(url)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/yt/playmp3", async (req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;

  if (!query) return res.json(loghandler.notquery)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    ytPlayMp3(query)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/download/pinterest", async (req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;
  if (!query) return res.json(loghandler.notquery)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    pin.pinterest(query)
        .then(result => {
         res.json(result)
    }).catch((error) => {
        res.json(error);
      });
     } else {
        res.json(loghandler.invalidKey)
     }
   });
   
   router.get("/download/wallpaper", async (req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;
  if (!query) return res.json(loghandler.notquery)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    wallpaperhd(query)
        .then(result => {
         res.json(result)
    }).catch((error) => {
        res.json(error);
      });
     } else {
        res.json(loghandler.invalidKey)
     }
   });

router.get("/yt/playmp4", async (req, res, next) => {

  const query = req.query.query;

  const apikey = req.query.apikey;

  if (!query) return res.json(loghandler.notquery)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    ytPlayMp4(query)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});


router.get('/yt/search', async (req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;

  if (!query) return res.json(loghandler.notquery)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    ytSearch(query)
      .then((result) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado
        })
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/palavra/conselho', async (req, res, next) => {
  var Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
const palavras = require(__path + '/database/conselhos.json');
const randPalavras = palavras[Math.floor(Math.random() * palavras.length)];

    res.json({
      conselho: `${randPalavras}`
    })

  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/download/tiktok', async (req, res, next) => {
  var Apikey = req.query.apikey,
    url = req.query.url

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!url) return res.json(loghandler.noturl)
    const slider_url = 'https://vt.tiktok.com/ZS8e1HeEs/'
    tiktok.tiklydown(url)
        .then(result => {
          res.json(
             result
          )
    }).catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/download/ig', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://api.brizaloka-api.tk/sociais/instagram?apikey=brizaloka&url=${url}`))
      .then(response => response.json())
      .then(hasil => {
        var resultado = hasil
        res.json(
          resultado
        )
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/download/ig2', async (req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    igdl(url)
      .then((result) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          result
        })
      })
      .catch((error) => {
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/download/igstalk', async (req, res, next) => {
  const username = req.query.username;
  const apikey = req.query.apikey;
  if (!username) return res.json(loghandler.notusername)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    igstalk(username)
      .then((result) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          result
        });
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});



router.get('/downloader/twittervid', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;

  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/twvid?url=${url}`))
      .then(response => response.json())
      .then(hasil => {

        var resultado = hasil.getVideo;
        res.json({
          status: true,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get("/yt/play", async (req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;

  if (!query) return res.json(loghandler.notquery)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    play(query)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/download/sticker", async (req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;

  if (!query) return res.json(loghandler.notquery)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    stickers(query)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/downloader/twitterimg', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;

  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/twimg?url=${url}`))
      .then(response => response.json())
      .then(hasil => {

        var resultado = hasil.images;
        res.json({
          status: true,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/downloader/xvideo', async (req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;

  if (!query) return res.json(loghandler.notquery)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/xvideo/search?query=${query}`))
      .then(response => response.json())
      .then(hasil => {

        var resultado = hasil.result;
        res.json({
          status: true,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/downloader/pornhub', async (req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;

  if (!query) return res.json(loghandler.notquery)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/pornhub/search?query=${query}`))
      .then(response => response.json())
      .then(hasil => {

        var resultado = hasil.res;
        res.json({
          status: true,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/downloader/pinterest', async (req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;

  if (!q) return res.json(loghandler.notquery)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://aqulzz.herokuapp.com/pinterest?q=${q}`))
      .then(response => response.json())
      .then(hasil => {

        var resultado = hasil.result;
        res.json({
          status: true,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/downloader/igtv', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;

  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://aqulzz.herokuapp.com/igtv?url=${url}`))
      .then(response => response.json())
      .then(hasil => {

        var resultado = hasil.result;
        res.json({
          status: true,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/download/tiktok3', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;

  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://tiktokd.herokuapp.com/tiktok?url=${url}`))
      .then(response => response.json())
      .then(hasil => {

        var resultado = hasil.link;
        res.json({
          status: true,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/download/tiktok2', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;

  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://aqulzz.herokuapp.com/tiktok?url=${url}`))
      .then(response => response.json())
      .then(hasil => {

        var resultado = hasil.result;
        res.json({
          status: true,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/downloader/facebook2', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;

  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://api-xcoders.xyz/api/download/fb?url=${url}&apikey=UW8wc3KPy0`))
      .then(response => response.json())
      .then(hasil => {

        var resultado = hasil.data;
        res.json({
          status: true,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/downloader/facebook', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;

  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://api-xcoders.xyz/api/download/fb?url=${url}&apikey=UW8wc3KPy0`))
      .then(response => response.json())
      .then(hasil => {

        var resultado = hasil.data.url;
        res.json({
          status: true,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/downloader/fb2', async (req, res, next) => {

  var Apikey = req.query.apikey,
    url = req.query.url

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!url) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: url" })

    FB(url)
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          titulo: data.title,
          desc: data.deskripsi,
          duracao: data.duracao,
          thumb: data.thumbnail,
          resultado: data.hd
        })
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/downloader/fb', async (req, res, next) => {

  const url = req.query.url;
  const apikey = req.query.apikey;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    fbDownloader(`${url}`)
      .then((result) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          result
        })
      })
      .catch((error) => {
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});




router.get('/stalk/npm', async (req, res, next) => {
  var Apikey = req.query.apikey,
    query = req.query.query

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!query) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: query" })

    fetch(encodeURI(`https://registry.npmjs.org/${query}`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          status: true,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/jadwal-bioskop', async (req, res, next) => {
  var Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const { default: Axios } = require('axios')
    const cheerio = require('cheerio')

    Axios.get('https://jadwalnonton.com/now-playing')
      .then(({ data }) => {
        const $ = cheerio.load(data)
        let title = []
        let url = []
        let img = []
        $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
          url.push($(rest).attr('href'))
        })
        $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
          title.push($(rest).attr('alt'))
        })
        $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
          img.push($(rest).attr('src'))
        })
        let resultado = []
        for (let i = 0; i < url.length; i++) {
          result.push({
            url: url[i],
            titulo: title[i],
            img: img[i]
          })
        }
        res.json({
          criador: `${creator}`,
          status: true,
          resultado: result
        })
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/short/tinyurl', async (req, res, next) => {
  var Apikey = req.query.apikey,
    url = req.query.url

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!url) return res.json(loghandler.noturl)
    request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
      try {
        res.json({
          status: true,
          criador: `${creator}`,
          resultado: `${body}`
        })
      } catch (e) {

        res.json(loghandler.invalidlink)
      }
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/base', async (req, res, next) => {
  var type = req.query.type,
    encode = req.query.encode,
    decode = req.query.decode,
    Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!type) return res.json({ status: false, creator, codigo: 404, mensagem: 'Está faltando o seguinte parâmetro: type, type yang tersedia : base64 , base32' })
    if (type == 'base64' && encode) {
      Base("b64enc", encode)
        .then(resultado => {
          res.json({
            status: true,
            criador: `${creator}`,
            result
          })
        })
    } else if (type == 'base64' && decode) {
      Base("b64dec", decode)
        .then(resultado => {
          res.json({
            status: true,
            criador: `${creator}`,
            result
          })
        })
    } else if (type == 'base32' && encode) {
      Base('b32enc', encode)
        .then(resultado => {
          res.json({
            status: true,
            criador: `${creator}`,
            result
          })
        })
    } else if (type == 'base32' && decode) {
      Base('b32dec', decode)
        .then(resultado => {
          res.json({
            status: true,
            criador: `${creator}`,
            result
          })
        })
    } else if (!(encode || decode)) {
      res.json({
        status: false,
        criador: `${creator}`,
        mensagem: "tambahkan parameter encode/decode"
      })
    } else {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/tools/wpuser', async (req, res, next) => {
  const link = req.query.url;
  const apikey = req.query.apikey;

  if (!link) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    WPUser(link)
      .then((data) => {
        res.json(data)
      })
  } else {
    res.json(loghandler.invalidKey)
  };
});

router.get('/info/cuaca', async (req, res, next) => {
  const apikey = req.query.apikey;
  const kota = req.query.kota;

  if (!apikey) return res.json(loghandler.notparam)
  if (!kota) return res.json({ status: false, codigo: 406, mensagem: 'Está faltando o seguinte parâmetro: kota' })
  if (listkey.includes(apikey)) {
    Cuaca(kota)
      .then((data) => {
        res.json(data)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/info/gempa', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    Gempa()
      .then(resultado => {
        res.json({
          criador: creator,
          result
        })
      })
      .catch(e => {


        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
  var nabi = req.query.nabi,
    Apikey = req.query.apikey;

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    Searchnabi(nabi)
      .then(resultado => {
        res.json({
          criador: creator,
          result
        })
      })
      .catch(e => {
 
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/hadits', async (req, res, next) => {
  var Apikey = req.query.apikey,
    kitab = req.query.kitab,
    nomor = req.query.nomor
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!kitab) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: kitab" })
    if (!nomor) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: nomor" })

    fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
      .then(response => response.json())
      .then(data => {
        res.json(
          data
        )
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/quran', async (req, res, next) => {
  var Apikey = req.query.apikey,
    surah = req.query.surah,
    ayat = req.query.ayat

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!surah) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: surah" })
    if (!ayat) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: ayat" })

    fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/muslim/tahlil', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/wirid', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/doaharian', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/niatshalat', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    asmaul = JSON.parse(fs.readFileSync(__path + '/data/AsmaulHusna.json'));
    res.json(asmaul)
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/niatisya', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/niatashar', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/muslim/jadwalshalat', async (req, res, next) => {
  var Apikey = req.query.apikey,
    kota = req.query.kota

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!kota) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: kota" })

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/search/image', async (req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;

  if (!query) return res.json(loghandler.notquery)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    try {
      var options = {
        url: `http://results.dogpile.com/serp?qc=images&q=${query}`,
        method: "GET",
        headers: {
          "Accept": "text/html",
          "User-Agent": "Chrome"
        }
      }
      request(options, function (error, response, responseBody) {
        if (error) return

        $ = cheerio.load(responseBody)
        var links = $(".image a.link")
        var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
        if (!cari.length) return
        var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: hasil
        })
      })
    } catch (e) { }
  } else {
    res.json(loghandler.invalidKey)
  }
})



router.get('/nsfw/ahegao', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const ahegao = JSON.parse(fs.readFileSync(__path + '/data/ahegao.json'));
    const randahegao = ahegao[Math.floor(Math.random() * ahegao.length)];

    res.json({
      url: `${randahegao}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/ass', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const ass = JSON.parse(fs.readFileSync(__path + '/data/ass.json'));
    const randass = ass[Math.floor(Math.random() * ass.length)];

    res.json({
      url: `${randass}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/bdsm', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const bdsm = JSON.parse(fs.readFileSync(__path + '/data/bdsm.json'));
    const randbdsm = bdsm[Math.floor(Math.random() * bdsm.length)];

    res.json({
      url: `${randbdsm}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/blowjob', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const blowjob = JSON.parse(fs.readFileSync(__path + '/data/blowjob.json'));
    const randblowjob = blowjob[Math.floor(Math.random() * blowjob.length)];

    res.json({
      url: `${randblowjob}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/cuckold', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const cuckold = JSON.parse(fs.readFileSync(__path + '/data/cuckold.json'));
    const randcuckold = cuckold[Math.floor(Math.random() * cuckold.length)];

    res.json({
      url: `${randcuckold}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/cum', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const cum = JSON.parse(fs.readFileSync(__path + '/data/cum.json'));
    const randcum = cum[Math.floor(Math.random() * cum.length)];

    res.json({
      url: `${randcum}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/ero', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const ero = JSON.parse(fs.readFileSync(__path + '/data/ero.json'));
    const randero = ero[Math.floor(Math.random() * ero.length)];

    res.json({
      url: `${randero}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/femdom', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const femdom = JSON.parse(fs.readFileSync(__path + '/data/femdom.json'));
    const randfemdom = femdom[Math.floor(Math.random() * femdom.length)];

    res.json({
      url: `${randfemdom}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/foot', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const foot = JSON.parse(fs.readFileSync(__path + '/data/foot.json'));
    const randfoot = foot[Math.floor(Math.random() * foot.length)];

    res.json({
      url: `${randfoot}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/gangbang', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const gangbang = JSON.parse(fs.readFileSync(__path + '/data/gangbang.json'));
    const randgangbang = gangbang[Math.floor(Math.random() * gangbang.length)];

    res.json({
      url: `${randgangbang}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/glasses', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const glasses = JSON.parse(fs.readFileSync(__path + '/data/glasses.json'));
    const randglasses = glasses[Math.floor(Math.random() * glasses.length)];

    res.json({
      url: `${randglasses}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/hentai', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const hentai = JSON.parse(fs.readFileSync(__path + '/data/hentai.json'));
    const randhentai = hentai[Math.floor(Math.random() * hentai.length)];

    res.json({
      url: `${randhentai}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/gifs', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const gifs = JSON.parse(fs.readFileSync(__path + '/data/gifs.json'));
    const randgifs = gifs[Math.floor(Math.random() * gifs.length)];

    res.json({
      url: `${randgifs}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/jahy', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const jahy = JSON.parse(fs.readFileSync(__path + '/data/jahy.json'));
    const randjahy = jahy[Math.floor(Math.random() * jahy.length)];

    res.json({
      url: `${randjahy}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/manga', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const manga = JSON.parse(fs.readFileSync(__path + '/data/manga.json'));
    const randmanga = manga[Math.floor(Math.random() * manga.length)];

    res.json({
      url: `${randmanga}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/masturbation', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const masturbation = JSON.parse(fs.readFileSync(__path + '/data/masturbation.json'));
    const randmasturbation = masturbation[Math.floor(Math.random() * masturbation.length)];

    res.json({
      url: `${randmasturbation}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/neko', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const neko = JSON.parse(fs.readFileSync(__path + '/data/neko.json'));
    const randneko = neko[Math.floor(Math.random() * neko.length)];

    res.json({
      url: `${randneko}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/orgy', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const orgy = JSON.parse(fs.readFileSync(__path + '/data/orgy.json'));
    const randorgy = orgy[Math.floor(Math.random() * orgy.length)];

    res.json({
      url: `${randorgy}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/panties', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const panties = JSON.parse(fs.readFileSync(__path + '/data/panties.json'));
    const randpanties = panties[Math.floor(Math.random() * panties.length)];

    res.json({
      url: `${randpanties}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/pussy', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const pussy = JSON.parse(fs.readFileSync(__path + '/data/pussy.json'));
    const randpussy = pussy[Math.floor(Math.random() * pussy.length)];

    res.json({
      url: `${randpussy}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/neko2', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const neko2 = JSON.parse(fs.readFileSync(__path + '/data/neko2.json'));
    const randneko2 = neko2[Math.floor(Math.random() * neko2.length)];

    res.json({
      url: `${randneko2}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/tentacles', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const tentacles = JSON.parse(fs.readFileSync(__path + '/data/tentacles.json'));
    const randtentacles = tentacles[Math.floor(Math.random() * tentacles.length)];

    res.json({
      url: `${randtentacles}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/thighs', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const thighs = JSON.parse(fs.readFileSync(__path + '/data/thighs.json'));
    const randthighs = thighs[Math.floor(Math.random() * thighs.length)];

    res.json({
      url: `${randthighs}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/yuri', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const yuri = JSON.parse(fs.readFileSync(__path + '/data/yuri.json'));
    const randyuri = yuri[Math.floor(Math.random() * yuri.length)];

    res.json({
      url: `${randyuri}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/zettai', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const zettai = JSON.parse(fs.readFileSync(__path + '/data/zettai.json'));
    const randzettai = zettai[Math.floor(Math.random() * zettai.length)];

    res.json({
      url: `${randzettai}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/keneki', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const keneki = JSON.parse(fs.readFileSync(__path + '/data/keneki.json'));
    const randkeneki = keneki[Math.floor(Math.random() * keneki.length)];

    res.json({
      url: `${randkeneki}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/megumin', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const megumin = JSON.parse(fs.readFileSync(__path + '/data/megumin.json'));
    const randmegumin = megumin[Math.floor(Math.random() * megumin.length)];

    res.json({
      url: `${randmegumin}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/yotsuba', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const yotsuba = JSON.parse(fs.readFileSync(__path + '/data/yotsuba.json'));
    const randyotsuba = yotsuba[Math.floor(Math.random() * yotsuba.length)];

    res.json({
      url: `${randyotsuba}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/shinomiya', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const shinomiya = JSON.parse(fs.readFileSync(__path + '/data/shinomiya.json'));
    const randshinomiya = shinomiya[Math.floor(Math.random() * shinomiya.length)];

    res.json({
      url: `${randshinomiya}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/yumeko', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const yumeko = JSON.parse(fs.readFileSync(__path + '/data/yumeko.json'));
    const randyumeko = yumeko[Math.floor(Math.random() * yumeko.length)];

    res.json({
      url: `${randyumeko}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/tejina', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const tejina = JSON.parse(fs.readFileSync(__path + '/data/tejina.json'));
    const randtejina = tejina[Math.floor(Math.random() * tejina.length)];

    res.json({
      url: `${randtejina}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/chiho', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const chiho = JSON.parse(fs.readFileSync(__path + '/data/chiho.json'));
    const randchiho = chiho[Math.floor(Math.random() * chiho.length)];

    res.json({
      url: `${randchiho}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/wallpaper/cyberspace', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const cyberspace = JSON.parse(fs.readFileSync(__path + '/data/CyberSpace.json'));
    const randcyberspace = cyberspace[Math.floor(Math.random() * cyberspace.length)];

    res.json({
      url: `${randcyberspace}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/wallpaper/gaming', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const gaming = JSON.parse(fs.readFileSync(__path + '/data/GameWallp.json'));
    const randgaming = gaming[Math.floor(Math.random() * gaming.length)];

    res.json({
      url: `${randgaming}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/wallpaper/programing', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const programing = JSON.parse(fs.readFileSync(__path + '/data/Programming.json'));
    const randprograming = programing[Math.floor(Math.random() * programing.length)];

    res.json({
      url: `${randprograming}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/wallpaper/wallpapertec', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const teknologi = JSON.parse(fs.readFileSync(__path + '/data/Technology.json'));
    const randteknologi = teknologi[Math.floor(Math.random() * teknologi.length)];

    res.json({
      url: `${randteknologi}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/wallpaper/mountain', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const mountain = JSON.parse(fs.readFileSync(__path + '/data/Mountain.json'));
    const randmountain = mountain[Math.floor(Math.random() * mountain.length)];

    res.json({
      url: `${randmountain}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})



router.get('/anime/toukachan', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const toukachan = JSON.parse(fs.readFileSync(__path + '/data/toukachan.json'));
    const randtoukachan = toukachan[Math.floor(Math.random() * toukachan.length)];

    res.json({
      url: `${randtoukachan}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/akira', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const akira = JSON.parse(fs.readFileSync(__path + '/data/akira.json'));
    const randakira = akira[Math.floor(Math.random() * akira.length)];

    res.json({
      url: `${randakira}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/itori', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const itori = JSON.parse(fs.readFileSync(__path + '/data/itori.json'));
    const randitori = itori[Math.floor(Math.random() * itori.length)];

    res.json({
      url: `${randitori}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/kurumi', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const kurumi = JSON.parse(fs.readFileSync(__path + '/data/kurumi.json'));
    const randkurumi = kurumi[Math.floor(Math.random() * kurumi.length)];

    res.json({
      url: `${randkurumi}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/miku', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const miku = JSON.parse(fs.readFileSync(__path + '/data/miku.json'));
    const randmiku = miku[Math.floor(Math.random() * miku.length)];

    res.json({
      url: `${randmiku}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/pokemon', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const pokemon = JSON.parse(fs.readFileSync(__path + '/data/pokemon.json'));
    const randpokemon = pokemon[Math.floor(Math.random() * pokemon.length)];

    res.json({
      url: `${randpokemon}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/ryujin', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const ryujin = JSON.parse(fs.readFileSync(__path + '/data/ryujin.json'));
    const randryujin = ryujin[Math.floor(Math.random() * ryujin.length)];

    res.json({
      url: `${randryujin}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/rose', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const rose = JSON.parse(fs.readFileSync(__path + '/data/rose.json'));
    const randrose = rose[Math.floor(Math.random() * rose.length)];

    res.json({
      url: `${randrose}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/kaori', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const kaori = JSON.parse(fs.readFileSync(__path + '/data/kaori.json'));
    const randkaori = kaori[Math.floor(Math.random() * kaori.length)];

    res.json({
      url: `${randkaori}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/shizuka', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const shizuka = JSON.parse(fs.readFileSync(__path + '/data/shizuka.json'));
    const randshizuka = shizuka[Math.floor(Math.random() * shizuka.length)];

    res.json({
      url: `${randshizuka}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/kaga', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const kaga = JSON.parse(fs.readFileSync(__path + '/data/kaga.json'));
    const randkaga = kaga[Math.floor(Math.random() * kaga.length)];

    res.json({
      url: `${randkaga}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/kotori', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const kotori = JSON.parse(fs.readFileSync(__path + '/data/kotori.json'));
    const randkotori = kotori[Math.floor(Math.random() * kotori.length)];
    
    res.json({
      url: `${randkotori}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/mikasa', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const mikasa = JSON.parse(fs.readFileSync(__path + '/data/mikasa.json'));
    const randmikasa = mikasa[Math.floor(Math.random() * mikasa.length)];

    res.json({
      url: `${randmikasa}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/akiyama', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const akiyama = JSON.parse(fs.readFileSync(__path + '/data/akiyama.json'));
    const randakiyama = akiyama[Math.floor(Math.random() * akiyama.length)];

    res.json({
      url: `${randakiyama}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/gremory', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const gremory = JSON.parse(fs.readFileSync(__path + '/data/gremory.json'));
    const randgremory = gremory[Math.floor(Math.random() * gremory.length)];
    
    res.json({
      url: `${randgremory}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/isuzu', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const isuzu = JSON.parse(fs.readFileSync(__path + '/data/isuzu.json'));
    const randisuzu = isuzu[Math.floor(Math.random() * isuzu.length)];

    res.json({
      url: `${randisuzu}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/cosplay', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const cosplay = JSON.parse(fs.readFileSync(__path + '/data/cosplay.json'));
    const randcosplay = cosplay[Math.floor(Math.random() * cosplay.length)];

    res.json({
      url: `${randcosplay}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/shina', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const shina = JSON.parse(fs.readFileSync(__path + '/data/shina.json'));
    const randshina = shina[Math.floor(Math.random() * shina.length)];

    res.json({
      url: `${randshina}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/kagura', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const kagura = JSON.parse(fs.readFileSync(__path + '/data/kagura.json'));
    const randkagura = kagura[Math.floor(Math.random() * kagura.length)];

    res.json({
      url: `${randkagura}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/shinka', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const shinka = JSON.parse(fs.readFileSync(__path + '/data/shinka.json'));
    const randshinka = shinka[Math.floor(Math.random() * shinka.length)];

    res.json({
      url: `${randshinka}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/eba', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const eba = JSON.parse(fs.readFileSync(__path + '/data/eba.json'));
    const randeba = eba[Math.floor(Math.random() * eba.length)];

    res.json({
      url: `${randeba}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/deidara', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Deidara = JSON.parse(fs.readFileSync(__path + '/data/deidara.json'));
    const randDeidara = Deidara[Math.floor(Math.random() * Deidara.length)];

    res.json({
      url: `${randDeidara}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})



router.get('/anime/jeni', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const jeni = JSON.parse(fs.readFileSync(__path + '/data/jeni.json'));
    const randjeni = jeni[Math.floor(Math.random() * jeni.length)];

    res.json({
      url: `${randjeni}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/random/meme', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const meme = JSON.parse(fs.readFileSync(__path + '/data/meme.json'));
    const randmeme = meme[Math.floor(Math.random() * meme.length)];

    res.json({
      url: `${randmeme}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/wallpaper/satanic', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const satanic = JSON.parse(fs.readFileSync(__path + '/data/satanic.json'));
    const randsatanic = satanic[Math.floor(Math.random() * satanic.length)];

    res.json({
      url: `${randsatanic}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})



router.get('/anime/itachi', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Itachi = JSON.parse(fs.readFileSync(__path + '/data/itachi.json'));
    const randItachi = Itachi[Math.floor(Math.random() * Itachi.length)];

    res.json({
      url: `${randItachi}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/madara', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Madara = JSON.parse(fs.readFileSync(__path + '/data/madara.json'));
    const randMadara = Madara[Math.floor(Math.random() * Madara.length)];

    res.json({
      url: `${randMadara}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/yuki', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Yuki = JSON.parse(fs.readFileSync(__path + '/data/yuki.json'));
    const randYuki = Yuki[Math.floor(Math.random() * Yuki.length)];

    res.json({
      url: `${randYuki}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/wallpaper/asuna', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const asuna = JSON.parse(fs.readFileSync(__path + '/data/asuna.json'));
    const randasuna = asuna[Math.floor(Math.random() * asuna.length)];

    res.json({
      url: `${randasuna}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/ayuzawa', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const ayuzawa = JSON.parse(fs.readFileSync(__path + '/data/ayuzawa.json'));
    const randayuzawa = ayuzawa[Math.floor(Math.random() * ayuzawa.length)];

    res.json({
      url: `${randayuzawa}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/chitoge', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const chitoge = JSON.parse(fs.readFileSync(__path + '/data/chitoge.json'));
    const randchitoge = chitoge[Math.floor(Math.random() * chitoge.length)];

    res.json({
      url: `${randchitoge}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/emilia', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const emilia = JSON.parse(fs.readFileSync(__path + '/data/emilia.json'));
    const randemilia = emilia[Math.floor(Math.random() * emilia.length)];

    res.json({
      url: `${randemilia}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/hestia', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const hestia = JSON.parse(fs.readFileSync(__path + '/data/hestia.json'));
    const randhestia = hestia[Math.floor(Math.random() * hestia.length)];

    res.json({
      url: `${randhestia}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/inori', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const inori = JSON.parse(fs.readFileSync(__path + '/data/inori.json'));
    const randinori = inori[Math.floor(Math.random() * inori.length)];

    res.json({
      url: `${randinori}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/ana', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const ana = JSON.parse(fs.readFileSync(__path + '/data/ana.json'));
    const randana = ana[Math.floor(Math.random() * ana.length)];

    res.json({
      url: `${randana}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/boruto', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Boruto = JSON.parse(fs.readFileSync(__path + '/data/boruto.json'));
    const randBoruto = Boruto[Math.floor(Math.random() * Boruto.length)];

    res.json({
      url: `${randBoruto}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/erza', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Erza = JSON.parse(fs.readFileSync(__path + '/data/erza.json'));
    const randErza = Erza[Math.floor(Math.random() * Erza.length)];

    res.json({
      url: `${randErza}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/kakasih', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Kakasih = JSON.parse(fs.readFileSync(__path + '/data/kakasih.json'));
    const randKakasih = Kakasih[Math.floor(Math.random() * Kakasih.length)];

    res.json({
      url: `${randKakasih}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/sagiri', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Sagiri = JSON.parse(fs.readFileSync(__path + '/data/sagiri.json'));
    const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];

    res.json({
      url: `${randSagiri}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/minato', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Minato = JSON.parse(fs.readFileSync(__path + '/data/minato.json'));
    const randMinato = Minato[Math.floor(Math.random() * Minato.length)];

    res.json({
      url: `${randMinato}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/naruto', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Naruto = JSON.parse(fs.readFileSync(__path + '/data/naruto.json'));
    const randNaruto = Naruto[Math.floor(Math.random() * Naruto.length)];

    res.json({
      url: `${randNaruto}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/nezuko', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Nezuko = JSON.parse(fs.readFileSync(__path + '/data/nezuko.json'));
    const randNezuko = Nezuko[Math.floor(Math.random() * Nezuko.length)];

    res.json({
      url: `${randNezuko}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/onepiece', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Pic = JSON.parse(fs.readFileSync(__path + '/data/onepiece.json'));
    const randPic = Pic[Math.floor(Math.random() * Pic.length)];

    res.json({
      url: `${randPic}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/rize', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Rize = JSON.parse(fs.readFileSync(__path + '/data/rize.json'));
    const randRize = Rize[Math.floor(Math.random() * Rize.length)];

    res.json({
      url: `${randRize}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/sakura', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Sakura = JSON.parse(fs.readFileSync(__path + '/data/sakura.json'));
    const randSakura = Sakura[Math.floor(Math.random() * Sakura.length)];

    res.json({
      url: `${randSakura}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/sasuke', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Sasuke = JSON.parse(fs.readFileSync(__path + '/data/sasuke.json'));
    const randSasuke = Sasuke[Math.floor(Math.random() * Sasuke.length)];

    res.json({
      url: `${randSasuke}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/tsunade', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Su = JSON.parse(fs.readFileSync(__path + '/data/tsunade.json'));
    const randSu = Su[Math.floor(Math.random() * Su.length)];

    res.json({
      url: `${randSu}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/montor', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Mon = JSON.parse(fs.readFileSync(__path + '/data/montor.json'));
    const randMon = Mon[Math.floor(Math.random() * Mon.length)];

    res.json({
      url: `${randMon}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})
// ain
router.get('/anime/mobil', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Mob = JSON.parse(fs.readFileSync(__path + '/data/mobil.json'));
    const randMob = Mob[Math.floor(Math.random() * Mob.length)];

    res.json({
      url: `${randMob}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/anime/anime', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Wai23 = JSON.parse(fs.readFileSync(__path + '/data/wallhp2.json'));
    const randWai23 = Wai23[Math.floor(Math.random() * Wai23.length)];

    res.json({
      url: `${randWai23}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/anime/wallhp', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Wai22 = JSON.parse(fs.readFileSync(__path + '/data/wallhp.json'));
    const randWai22 = Wai22[Math.floor(Math.random() * Wai22.length)];

    res.json({
      url: `${randWai22}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/waifu2', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Wai2 = JSON.parse(fs.readFileSync(__path + '/data/waifu2.json'));
    const randWai2 = Wai2[Math.floor(Math.random() * Wai2.length)];

    res.json({
      url: `${randWai2}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/waifu', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Wai = JSON.parse(fs.readFileSync(__path + '/data/waifu.json'));
    const randWai = Wai[Math.floor(Math.random() * Wai.length)];
    
    res.json({
      url: `${randWai}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/anime/hekel', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    Hekel = JSON.parse(fs.readFileSync(__path + '/data/hekel.json'));
    const randHekel = Hekel[Math.floor(Math.random() * Hekel.length)]

    res.json({
      url: `${randHekel}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/kucing', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    Kucing = JSON.parse(fs.readFileSync(__path + '/data/kucing.json'));
    const randKucing = Kucing[Math.floor(Math.random() * Kucing.length)]

    res.json({
      url: `${randKucing}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/wallpaper/pubg', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    Pubg = JSON.parse(fs.readFileSync(__path + '/data/pubg.json'));
    const randPubg = Pubg[Math.floor(Math.random() * Pubg.length)]

    res.json({
      url: `${randPubg}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/wallpaper/ppcouple', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    Pp = JSON.parse(fs.readFileSync(__path + '/data/profil.json'));
    const randPp = Pp[Math.floor(Math.random() * Pp.length)]

    res.json({
      url: `${randPp}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/wallpaper/anjing', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    Anjing = JSON.parse(fs.readFileSync(__path + '/data/anjing.json'));
    const randAnjing = Anjing[Math.floor(Math.random() * Anjing.length)]

    res.json({
      url: `${randAnjing}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/doraemon', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    Dora = JSON.parse(fs.readFileSync(__path + '/data/doraemon.json'));
    const randDora = Dora[Math.floor(Math.random() * Dora.length)]

    res.json({
      url: `${randDora}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/anime/elaina', async (req, res, next) => {
  const Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Elaina = JSON.parse(fs.readFileSync(__path + '/data/elaina.json'))
    const randElaina = Elaina[Math.floor(Math.random() * Elaina.length)]
    //tansole.log(randLoli)

    res.json({
      url: `${randElaina}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/anime/loli', async (req, res, next) => {
  const Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Loli = JSON.parse(fs.readFileSync(__path + '/data/loli.json'))
    const randLoli = Loli[Math.floor(Math.random() * Loli.length)]
    //tansole.log(randLoli)

    res.json({
      url: `${randLoli}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/anime/yuri', async (req, res, next) => {
  const Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Yuri = JSON.parse(fs.readFileSync(__path + '/data/yuri.json'))
    const randYuri = Yuri[Math.floor(Math.random() * Yuri.length)]
    //tansole.log(randTech))
    res.json({
      url: `${randYuri}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/anime/cecan', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const cecan = JSON.parse(fs.readFileSync(__path + '/data/cecan.json'));
    const randCecan = cecan[Math.floor(Math.random() * cecan.length)];
    data = await fetch(randCecan).then(v => v.buffer());
    await fs.writeFileSync(__path + '/tmp/cecan.jpeg', data)
    res.json({
      url: `${randCecan}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/wallpaper/aesthetic', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Aesthetic = JSON.parse(fs.readFileSync(__path + '/data/aesthetic.json'));
    const randAesthetic = Aesthetic[Math.floor(Math.random() * Aesthetic.length)];
    data = await fetch(randAesthetic).then(v => v.buffer());
    await fs.writeFileSync(__path + '/tmp/aesthetic.jpeg', data)
    res.json({
      url: `${randAesthetic}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})



router.get('/anime/sagiri', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Sagiri = JSON.parse(fs.readFileSync(__path + '/data/sagiri.json'));
    const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
    data = await fetch(randSagiri).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/sagiri.jpeg', data)
    res.json({
      url: `${randSagiri}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/shota', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Shota = JSON.parse(fs.readFileSync(__path + '/data/shota.json'));
    const randShota = Shota[Math.floor(Math.random() * Shota.length)];
    data = await fetch(randShota).then(v => v.buffer());
    await fs.writeFileSync(__path + '/tmp/shota.jpeg', data)
    res.json({
      url: `${randShota}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/nsfwloli', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    const Lol = JSON.parse(fs.readFileSync(__path + '/data/nsfwloli.json'));
    const randLol = Lol[Math.floor(Math.random() * Lol.length)];
    data = await fetch(randLol).then(v => v.buffer());
    await fs.writeFileSync(__path + '/tmp/lol.jpeg', data)
    res.json({
      url: `${randLol}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/hinata', async (req, res, next) => {
  var Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const Hinata = JSON.parse(fs.readFileSync(__path + '/data/hinata.json'));
    const randHin = Hinata[Math.floor(Math.random() * Hinata.length)];
    data = await fetch(randHin).then(v => v.buffer());
    await fs.writeFileSync(__path + '/tmp/Hinata.jpeg', data)
    res.json({
      url: `${randHin}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/random/quotes2', async (req, res, next) => {
  var Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    fetch(encodeURI(`https://kocakz.herokuapp.com/api/random/text/quotes`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/fun/simisimi-ar2', async (req, res, next) => {
  var Apikey = req.query.apikey
  text = req.query.text

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!text) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: text" })

    fetch(encodeURI(`https://simsumi.herokuapp.com/api?text=${text}&lang=ar`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          status: true,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/fun/simisimi-en2', async (req, res, next) => {
  var Apikey = req.query.apikey
  text = req.query.text

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!text) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: text" })

    fetch(encodeURI(`https://simsumi.herokuapp.com/api?text=${text}&lang=eng`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          status: true,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/random/asmaulhusna', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/info/wikipedia', async (req, res, next) => {
  var Apikey = req.query.apikey,
    search = req.query.search

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!search) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: search" })

    fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/info/drakorasia', async (req, res, next) => {
  var Apikey = req.query.apikey,
    search = req.query.search

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!search) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: search" })

    fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/fakedata', async (req, res, next) => {
  var Apikey = req.query.apikey,
    country = req.query.country

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!country) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: country" })

    fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/hilih', async (req, res, next) => {
  var Apikey = req.query.apikey,
    kata = req.query.kata

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!kata) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: kata" })

    fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/musica/liriklagu', async (req, res, next) => {
  var Apikey = req.query.apikey,
    lagu = req.query.query;

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!lagu) return res.json(loghandler.notquery)
    Lirik(lagu)
      .then((lirik) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: lirik.data
        })
      });
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/musica/chordlagu', async (req, res, next) => {
  var Apikey = req.query.apikey,
    lagu = req.query.lagu

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!lagu) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: kata" })

    fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/info/kbbi', async (req, res, next) => {
  var Apikey = req.query.apikey,
    kata = req.query.kata

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!kata) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: kata" })

    fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/info/covidindo', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/info/covidworld', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/random/meme', async (req, res, next) => {
  var Apikey = req.query.apikey

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {

    fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/info/kodepos', async (req, res, next) => {
  var Apikey = req.query.apikey,
    kota = req.query.kota

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!kota) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: kota" })

    fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/translate', async (req, res, next) => {
  var Apikey = req.query.apikey,
    kata = req.query.kata

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!kata) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: kata" })
    fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/anime/kusonime', async (req, res, next) => {
  var Apikey = req.query.apikey,
    search = req.query.search

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!search) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: search" })
    fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/loli', async (req, res, next) => {
  var apikey = req.query.apikey
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    try {
      var options = {
        url: "http://results.dogpile.com/serp?qc=images&q= " + "Loli",
        method: "GET",
        headers: {
          "Accept": "text/html",
          "User-Agent": "Chrome"
        }
      }
      request(options, function (error, response, responseBody) {
        if (error) return

        $ = cheerio.load(responseBody)
        var links = $(".image a.link")
        var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
        if (!cari.length) return
        var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: hasil
        })
      })
    } catch (e) { }
  } else {
    res.json(loghandler.invalidKey)
  }
});


router.get('/anime/manga', async (req, res, next) => {
  var Apikey = req.query.apikey,
    search = req.query.search

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!search) return res.json({ status: false, criador: `${creator}`, mensagem: "Está faltando o seguinte parâmetro: search" })
    fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/kuis/caklontong', async (req, res, next) => {
  var Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/kuis/tebakGambar', async (req, res, next) => {
  var apikey = req.query.apikey;

  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let resultado = await tebakGambar()
    if (result) {
      const hasil = {
        status: true,
        codigo: 200,
        criador: `${creator}`,
        imagem: result.img,
        resposta: result.jawaban,
        dica: result.petunjuk
      }
      res.json(hasil)
    } else {
      return res.status(408).json({
        status: res.statusCode,
        error: 'Emror'
      })
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})

/**
* @Maker
**/



router.get("/photooxy/shadow", async (req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if (!text1) return res.json(loghandler.nottext1)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    pShadow(text1)
      .then((data) => {
        const resultado = {
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data.url
        }
        res.json(result)
      })
      .catch((error) => {
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/photooxy/romantic", async (req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if (!text1) return res.json(loghandler.nottext1)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    pRomantic(text1)
      .then((data) => {
        const resultado = {
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data.url
        }
        res.json(result)
      })
      .catch((error) => {
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

// @PHOTOOXY

router.get("/photooxy/smoke", async (req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if (!text1) return res.json(loghandler.nottext1)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    pSmoke(text1)
      .then((data) => {
        const resultado = {
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data.url
        }
        res.json(result)
      })
      .catch((error) => {
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/photooxy/burn-papper", async (req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if (!text1) return res.json(loghandler.nottext1)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    pBurnPapper(text1)
      .then((data) => {
        const resultado = {
          status: true,
          codigo: 200,
          criador: `${creator}`,
          url: data.url
        }
        res.json(result)
      })
      .catch((error) => {
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/photooxy/naruto", async (req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if (!text1) return res.json(loghandler.nottext1)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    pNaruto(text1)
      .then((data) => {
        const resultado = {
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data.url
        }
        res.json(result)
      })
      .catch((error) => {
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/photooxy/love-message", async (req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if (!text1) return res.json(loghandler.nottext1)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    pLoveMsg(text1)
      .then((data) => {
        const resultado = {
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data.url
        }
        res.json(result)
      })
      .catch((error) => {
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/photooxy/message-under-grass", async (req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if (!text1) return res.json(loghandler.nottext1)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    pMsgGrass(text1)
      .then((data) => {
        const resultado = {
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data.url
        }
        res.json(result)
      })
      .catch((error) => {
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/photooxy/glitch", async (req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  if (!text1) return res.json(loghandler.nottext1)
  if (!text2) return res.json(loghandler.nottext2)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    pGlitch(text1, text2)
      .then((data) => {
        const resultado = {
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data.url
        }
        res.json(result)
      })
      .catch((error) => {
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/photooxy/double-heart", async (req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if (!text1) return res.json(loghandler.nottext1)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    pDoubleHeart(text1)
      .then((data) => {
        const resultado = {
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data.url
        }
        res.json(result)
      })
      .catch((error) => {
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/photooxy/coffe-cup", async (req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if (!text1) return res.json(loghandler.nottext1)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    pCoffeCup(text1)
      .then((data) => {
        const resultado = {
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data.url
        }
        res.json(result)
      })
      .catch((error) => {
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/photooxy/love-text", async (req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if (!text1) return res.json(loghandler.nottext1)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    pLoveText(text1)
      .then((data) => {
        const resultado = {
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data.url
        }
        res.json(result)
      })
      .catch((error) => {
        res.json(error)
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/photooxy/butterfly", async (req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if (!text1) return res.json(loghandler.nottext1)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    pButterfly(text1)
      .then((data) => {
        const resultado = {
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data.url
        }
        res.json(result)
      })
      .catch((error) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
});

/*
@ AKHIR PHOTOOXY
*/
/*
@ TEXTPROME
*/
router.get('/photooxy/army', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://photooxy.com/logo-and-text-effects/army-camouflage-fabric-text-effect-221.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/wolf', async (req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [
        text, text2
      ])
      .then((data) => {
        var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/naturalleavest', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/wolf2', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
        text, text2
      ])
      .then((data) => {
        var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/harrypotter', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
        text,
      ])
      .then((data) => {
        var urlnya = data
          download(urlnya, './tmp/hp.jpg', function(){
            res.sendFile(path.resolve('./tmp/hp.jpg'))
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/magma', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/hallowen', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/neon', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/broken', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/artpapper', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/glossy', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/water', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/multicolor', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/devil', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
        text,
      ])
      .then((data) => {
        var urlnya = data
          download(urlnya, './tmp/devil.jpg', function(){
            res.sendFile(path.resolve('./tmp/devil.jpg'))
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/skytext', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/luxury', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/vintage', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html", [
        text, text2
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/writing', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/engraved', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/gluetext', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/minios', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/minion-text-effect-3d-online-978.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/pornhub', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
        text, text2
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/holograpic', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
        text,
      ])
      .then((data) => {
      var urlnya = data
          download(urlnya, './tmp/hl.jpg', function(){
            res.sendFile(path.resolve('./tmp/hl.jpg'))
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/deluxe', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/deluxe-silver-text-effect-970.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/fabric', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/fabric-text-effect-online-964.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/wicker', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/wicker-text-effect-online-932.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/lava', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/lava-text-effect-online-914.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/toxic', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/toxic-text-effect-online-901.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/stroberi', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/strawberry-text-effect-online-889.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/koi', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/koi-fish-text-effect-online-888.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/bread', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/bread-text-effect-online-887.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/hororblood', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/horror-blood-text-effect-online-883.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/honey', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/honey-text-effect-868.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/ice', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/ice-cold-text-effect-862.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/rusty', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/rusty-metal-text-effect-860.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/stone', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/1917', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/1917-style-text-effect-online-980.html", [
        text,
      ])
      .then((data) => {
        var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/thunder2', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
        text,
      ])
      .then((data) => {
      var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/space', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
        text, text2
      ])
      .then((data) => {
        var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/joker', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-logo-joker-online-934.html", [
        text,
      ])
      .then((data) => {
        
       var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
        })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/hallowen', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/blood', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/thunder2', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/astone', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [
        text, text2
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/grafite', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/grafite2', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
        text, text2
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/ninjalogo', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-ninja-logo-online-935.html", [
        text, text2
      ])
      .then((data) => {
     var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
        })
    .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});
const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

router.get('/textpro/leao', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
        text, text2
      ])
       
      .then((data) => {
        texproimg = getBuffer(data)
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/vingadores', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
        text, text2
      ])
      .then((data) => {
     var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
        })
         .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/marvel', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [
        text, text2
      ])
      .then((data) => {
   
      var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});


router.get('/textpro/batman', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
        text, text2
      ])
      .then((data) => {
        var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/vingadores', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
        text, text2
      ])
      .then((data) => {
    var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/textpro/thor', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-thor-logo-style-text-effect-online-1064.html", [
        text, text2
      ])
      .then((data) => {
        var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/textpro/capitaoamerica', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", [
        text, text2
      ])
      .then((data) => {
      var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/glitch2', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
        text, text2
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/matrix', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/wolf', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [
        text,
      ])
      .then((data) => {
       var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/thunder', async (req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/thunder-text-effect-online-881.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/blackpink', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
        text,
      ])
      .then((data) => {
        var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/urso', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
        text,
      ])
      .then((data) => {
        var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/textpro/verao', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
        text,
      ])
      .then((data) => {
        var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/drop-water', async (req, res, next) => {



  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/dropwater-text-effect-872.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/natal', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/gradient', async (req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [
        text,
      ])
      .then((data) => {
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/pornhub', async (req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text1;
  const text2 = req.query.text2;

  if (!apikey) return res.json(loghandler.notparam)
  if (!text) return res.json(loghandler.nottext1)
  if (!text2) return res.json(loghandler.nottext2)

  if (listkey.includes(apikey)) {
    zrapi
      .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
        text, text2
      ])
      .then((data) => {
    var urlnya = data
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado: data
        })
      })
      .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

     

/*
@AKHIR TEXTPRO ME
*/

router.get('/maker/dadu', async (req, res, next) => {
  Apikey = req.query.apikey;

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    random = Math.floor(Math.random() * 6) + 1
    hasil = 'https://www.random.org/dice/dice' + random + '.png'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/dadu.png', data)
    res.sendFile(__path + '/tmp/dadu.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});



router.get('/asupan', async (req, res, next) => {
  Apikey = req.query.apikey;

  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const Asupan = JSON.parse(fs.readFileSync(__path + '/data/asupantiktok.json'));
    const randAsupan = Asupan[Math.floor(Math.random() * Asupan.length)];
    data = await fetch(randAsupan).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/asupan.mp4', data)
    res.json({
      url: `${randAsupan}`
    })
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get("/maker/nulis", async (req, res, next) => {

  apikey = req.query.apikey;
  text = req.query.text;

  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/nulis?text=' + text + '&apikey=apivinz'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/nulis.jpeg', data)
    res.sendFile(__path + '/tmp/nulis.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/maker/ttp', async (req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://h4ck3rs404-api.herokuapp.com/api/ttp?text=' + text + '&apikey=404Api'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/ttp.png', data)
    res.sendFile(__path + '/tmp/ttp.png')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/maker/attp', async (req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://h4ck3rs404-api.herokuapp.com/api/attp?text=' + text + '&apikey=404Api'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/attp.gif', data)
    res.sendFile(__path + '/tmp/attp.gif')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/maker/matrix', async (req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;

  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/matrix?text=' + text + '&apikey=administrator'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/matrix.jpg', data)
    res.sendFile(__path + '/tmp/matrix.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/breakwall', async (req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;

  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/breakwall?text=' + text + '&apikey=administrator'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/breakwall.jpg', data)
    res.sendFile(__path + '/tmp/breakwall.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/flowertext', async (req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;

  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/flowertext?text=' + text + '&apikey=administrator'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/flowertext.jpg', data)
    res.sendFile(__path + '/tmp/flowertext.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/smoketext', async (req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;

  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/smoketext?text=' + text + '&apikey=administrator'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/smoketext.jpg', data)
    res.sendFile(__path + '/tmp/smoketext.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/skytext', async (req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;

  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/skytext?text=' + text + '&apikey=administrator'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/skytext.jpg', data)
    res.sendFile(__path + '/tmp/skytext.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/pubglogo', async (req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;

  if (!text1) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/pubglogo?text1=' + text1 + '&text2' + '&apikey=administrator'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/pubglogo.jpg', data)
    res.sendFile(__path + '/tmp/pubglogo.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/bneon', async (req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;

  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/bneon?text=' + text + '&apikey=administrator'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/bneon.jpg', data)
    res.sendFile(__path + '/tmp/bneon.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/naruto', async (req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;

  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/naruto?text=' + text + '&apikey=administrator'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/naruto.jpg', data)
    res.sendFile(__path + '/tmp/naruto.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/teks3d', async (req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;

  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/text3dbox?text=' + text + '&apikey=administrator'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/text3dbox.jpg', data)
    res.sendFile(__path + '/tmp/text3dbox.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/nulis', async (req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/nulis?text=' + text + '&apikey=administrator'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/nulis.jpg', data)
    res.sendFile(__path + '/tmp/nulis.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/epep', async (req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/epep?text=' + text + '&apikey=administrator'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/epep.jpg', data)
    res.sendFile(__path + '/tmp/epep.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/silverbutton', async (req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;

  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/splaybutton?text=' + text + '&apikey=administrator'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/splaybutton.jpg', data)
    res.sendFile(__path + '/tmp/splaybutton.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/goldbutton', async (req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;

  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/gplaybutton?text=' + text + '&apikey=administrator'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/ppp.jpg', data)
    res.sendFile(__path + '/tmp/ppp.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/harta-tahta', async (req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;

  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.me/api/hartatahta?text=' + text + '&apikey=administrator'
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/ok.jpg', data)
    res.sendFile(__path + '/tmp/ok.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/skatch', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://lindow-api.herokuapp.com/api/sketcheffect?img=${url}&apikey=LindowApi`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/skatch.jpeg', data)
    res.sendFile(__path + '/tmp/skatch.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/welcome', async (req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const memberCount = req.query.memberCount;
  const gcname = req.query.gcname;
  const bg = req.query.bg;
  const pp = req.query.pp;
  const gcicon = req.query.gcicon;
  if (!username) return res.json(loghandler.notusername)
  if (!memberCount) return res.json(loghandler.memberCount)
  if (!gcname) return res.json(loghandler.gcname)
  if (!bg) return res.json(loghandler.bg)
  if (!pp) return res.json(loghandler.pp)
  if (!gcicon) return res.json(loghandler.gcicon)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://hadi-api.herokuapp.com/api/card/welcome3?username=${username}&memberCount=${memberCount}&bg=${bg}&pp=${pp}&gcicon=${gcicon}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/welcome.png', data)
    res.sendFile(__path + '/tmp/welcome.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/tololserti', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!text) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://lolhuman.herokuapp.com/api/toloserti?apikey=muzharzain&name=${text}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/tololserti.jpeg', data)
    res.sendFile(__path + '/tmp/tololserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});


router.get('/downloader/facebook2', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;

  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://fb-scrape.herokuapp.com/api/fb?url=${url}`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/web2plain-text', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;

  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)

  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://websitetextextraction.apifex.com/api/v1/extract?url=${url}`))
      .then(response => response.json())
      .then(data => {
        var resultado = data;
        res.json({
          status: true,
          codigo: 200,
          criador: `${creator}`,
          resultado
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
});


router.get('/cekapikey', async (req, res, next) => {
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    res.json({
      status: 'Ativa',
      criador: `${creator}`,
      apikey: `${apikey}`,
      mensagem: 'APIKEY ATIVA, LIMITE: 999'
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.use(function (req, res) {

  res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});

module.exports = router
