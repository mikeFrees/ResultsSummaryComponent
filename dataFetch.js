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
        `<tr class= ${data.color}>
            <td><img src=${data.icon} alt="Reaction logo"></td>
            <th class= ${data.color}">${data.category}</th>
            <td><span>${data.score}</span> / 100</td>
        </tr>`;
    table += tableRow;
});

table += tableEnd;
document.getElementById("DataInsert").innerHTML += table;