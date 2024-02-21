const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')
const _math = require('mathjs')
const _url = require('url')
const qs = require('qs')
const request = require('request');

function wallpaperhd(query){
	return new Promise((resolve, reject) => {
		axios.get('https://wall.alphacoders.com/search.php?search=' + query + '&filter=4K+Ultra+HD')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const result = [];
				$('div.boxgrid > a > picture').each(function(a, b) {
					result.push($(b).find('img').attr('src').replace('thumbbig-', ''))
				})
				resolve(result)
			})
			.catch(reject)
	})
}

module.exports = { wallpaperhd }