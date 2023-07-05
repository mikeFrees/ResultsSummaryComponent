import data from './data.json' assert { type: 'json' };
let category, score, icon, table;
const tableRow =
`<tr>
    <td><img src=${icon} alt="Reaction logo"></td>
    <th id="Red">${category}</th>
    <td><span>${score}</span> / 100</td>
</tr>`;

const tableStart = 
`<table>
    <caption>Summary</caption>`;

const tableEnd=
`</table> 
<input type="button" value="Continue" onclick="buttonPress()">`;

table += tableStart;

// enter itteration trough json object here

table += tableEnd;
document.getElementById("DataInsert").innerHTML += table;