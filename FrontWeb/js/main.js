//var FrontDomainUrl = "http://127.0.0.1:5500/FrontWeb/";
var FrontDomainUrl = "https://az17092145gary.github.io/FrontCRM/FrontWeb/";
var BackDomainUrl = "https://localhost:7226/";
//var BackDomainUrl = "https://177d-114-35-246-157.ngrok-free.app/";
Number.prototype.numberFormat = function(c, d, t){
    var n = this, 
        c = isNaN(c = Math.abs(c)) ? 2 : c, 
        d = d == undefined ? "." : d, 
        t = t == undefined ? "," : t, 
        s = n < 0 ? "-" : "", 
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
        j = (j = i.length) > 3 ? j % 3 : 0;
       return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

var emplList;
function getEmplddl(){
    $.ajax({
        type:'get',
        headers: {
        "ngrok-skip-browser-warning": "true"
        },
        url: BackDomainUrl+"EMPL/getAllEMPL",
        success:function(result){
            emplList = JSON.parse(result);
            let emp = $(`#INPUTEMPID`);
            emp.html("");
            emplList.forEach((d,i)=>{
                emp.append(`
                    <option value="${d.EMPID}">${d.EMPID} ${d.EMPNAME}</option>
                `);
                
            })
        },
        error:function(err){

        }
    })
}