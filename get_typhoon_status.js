'use strict'

let http = require('http');
const URL = 'http://agora.ex.nii.ac.jp/digital-typhoon/geojson/wnp/201919.ja.json';

http.get(URL, (res) => 
{
    let body = '';
    res.setEncoding('utf8');

    res.on('data', (chunk) => 
    {
        body += chunk;
    });

    res.on('end', (res) => 
    {
        var json = JSON.parse(body);
        var latest = json.features[json.features.length -1];
        console.log(latest);
    });
}).on('error', (e) => 
{
    console.log(e.message);
});
