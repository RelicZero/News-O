let res;
const Business = document.getElementById('Business')

window.onload = async() => {
    let res = await fetch('https://ok.surf/api/v1/cors/news-feed');
    res = await res.json();
    console.log(res)
    res.Business.forEach((thing) => {
        Business.innerHTML +=
        `
        <div class="card">
            <a class="picture" href="${thing.link}"><img class="front" src="${thing.og}"></a>
            <div class="titlee">${thing.title}</div>
            <div class="where"><img class="whereimg"  src="${thing.source_icon}"></div>
        </div>
        `
    });
}