let totalDias = parseInt(gets());

let qdadeAnos = parseInt(totalDias / 365);
let qdadeMeses = parseInt((totalDias % 365) / 30);
let qdadeDias = ((totalDias % 365) % 30);

print(`${qdadeAnos} ano(s)\n${qdadeMeses} mes(es)\n${qdadeDias} dia(s)`);