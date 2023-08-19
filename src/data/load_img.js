import json_data from './card_data.json'  assert { type: "json" };
import download from 'image-downloader'

const rawdata = json_data.data;
let num = 0;

const data = rawdata.filter(card => 
    card.type.includes('onster') &&
    card.frameType.includes('fusion') &&
    card.desc.includes('ERO')
);

for(let index in data){
    const card = data[index];

    setTimeout(Downloader, 100, card, num);
    num++;
    if(num === 15)
        break;
}

function Downloader(card, num){
    if(typeof card.card_images[0].image_url != 'undefined'){

    const url = card.card_images[0].image_url;
    const n = url.lastIndexOf('.');
    const extension = url.substring(n + 1);

        download.image({
            url: url,
            dest: `../../src/assets/images/card-images/card-${num}.jpg`,
        })
    }
}