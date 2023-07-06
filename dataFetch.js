import data from './data.json' assert { type: 'json' };
let table = "";

const tableStart = 
`<table>
    <caption>Summary</caption>`;

const tableEnd=
`</table> 
<input type="button" value="Continue" onclick="buttonPress()">`;

table += tableStart;

// enter itteration trough json object here
data.forEach((data) => {
    const tableRow =
        `<tr>
            <td><img src=${data.icon} alt="Reaction logo"></td>
            <th style= "color:data.icon.stroke;">${data.category}</th>
            <td><span>${data.score}</span> / 100</td>
        </tr>`;
    table += tableRow;
});

table += tableEnd;
document.getElementById("DataInsert").innerHTML += table;