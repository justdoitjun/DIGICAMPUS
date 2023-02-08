

let maxRow;
maxRow = prompt("how many row do you want to put on wall?");
let row;

/* for(row = 1; row >= maxRow; row++){
    document.write('A'.repeat ( row ));
    document.write("<br>");
} */

for(row = 1; ; row++){
    document.write("<a>")
    for(i = 1; ; i++){
        document.write("*") 
        if (i >= row) break;
    }
    if(row >= maxRow) break;
    document.write("</a>")
}