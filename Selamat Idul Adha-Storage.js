const CACHE_KEY = "visitor_history";
function checkForStorage(){
    return typeof(Storage) !== "undefined";
}

function putHistory(data){
    if (checkForStorage()){
        let historyData = null;
        if (localStorage.getItem(CACHE_KEY) === null){
            historyData = [];
        }else {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        historyData.unshift(data);

        if (historyData.length > 1){
            historyData.pop();
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
}

function showHistory(){
    if (checkForStorage()){
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}

function renderHistory(){
    const historyData = showHistory();
    let historyList1 = document.querySelector("#historyList1");
    let display = document.querySelector("#displayNumber");
    let display1 = document.querySelector("#displayNumber1");

    historyList1.innerHTML = "";
    display.innerHTML = "";
    display1.innerHTML = "";

    for (let history of historyData){
        let row = document.createElement('h1');
        row.innerHTML = history.nickName;
        historyList1.appendChild(row);
        break;
    }

    for (let history of historyData){
        let row = document.createElement('h2');
        if(history.religion == "Y"){
            row.innerHTML = "Selamat IDUL ADHA 1443 H";
            display.appendChild(row);
            break;
        }else if(history.religion== "N"){
            row.innerHTML = "Selamat IDUL ADHA 1443 H </Br> (Jika Ikut Merayakan)";
            display.appendChild(row);
            break;
        }
    }

    for (let history of historyData){
        let row = document.createElement('h3');
        if(history.pieces == "Y"){
            row.innerHTML = "Semoga Daging tersebut menjadi Berkah untuk Semua</Br>🎉🎉🎉</Br>";
            display1.appendChild(row);
            break;
        }else if(history.pieces== "N"){
            row.innerHTML = "Jangan Bersedih Hanya Karena Daging </Br>😁😁😁</Br> Tetap Tersenyum untuk Keberkahan-Nya</Br>😊😊😊</Br> ";
            display1.appendChild(row);
            break;
        }
    }

}

renderHistory();