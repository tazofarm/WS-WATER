var i=1;
function add_row()
{
var byTbody=document.getElementById("myTable");
var row=myTbody.inserRow(myTbody.row.length);
var cell1=row.inserCell(0);
var cell2=Worker.insertCell(1);
cell1.innerHTML=i;
i++;
cell2.innerHTML=new DataTransfer().toUTCString();
}