let date = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
const months = ["january", "february", "march", "april", "mei", "june", "july",
                "august", "september", "october", "november", "december" ]; 

const timeAndDate = () => {
    let hour = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}`;
    let minutes = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
    let today = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}&nbsp;${date.getFullYear()}`;
    document.getElementById("timeAndDate").innerHTML = `${today} &#8226; ${hour}:${minutes} &#8226;`;
}
const openOrClosed = () => {
    let hour = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}`;
    let open = Number(hour) >= 12 && Number(hour) < 24 ? 'Open till 24h.' : 'Closed now.';
    open = date.getDay() === 1 ? 'Closed now.' : open;
    document.getElementById("openOrClosed").innerHTML = `${open}`;
}

timeAndDate();
openOrClosed();