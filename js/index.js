import '../scss/main.scss';


;(function() {
    fetch(`https://interactive.guim.co.uk/docsdata/1T41ayCJ_TdxC3SMdHbktH65KOk3Tu6cUTYbRdEvQCXc.json?t=${new Date().getTime()}`)
    .then(res => res.json() )
    .then(data => {
        const tiles = data.sheets.Sheet1;
        tiles.forEach((v, i) =>{
            const tile = document.querySelector(`li:nth-child(${i+1})`);
            tile.querySelector('.copy').innerHTML = v.copy;
            tile.querySelector('.svg>img').setAttribute('alt', v.alt);
            if (v.copy2) {
                tile.querySelector('.copy2').innerHTML = v.copy2;
            }
        });
    })
})();
