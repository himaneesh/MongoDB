function dateEdit(x) { 
if (x.date.indexOf("/") > -1) { 

var parts =x.date.split('/');
// Please pay attention to the month (parts[1]); JavaScript counts months from 0:
// January - 0, February - 1, etc.
var mydate = new Date(parts[0], 01, 01); 
var desc = x.description
var lan = x.lang
var cate1 = x.category1
var cate2 = x.category2

x.description=desc
x.lang=lan
x.category1=cate1
x.category2=cate2
x.date = mydate
db.events.save(x);
}
else{
var desc = x.description
var lan = x.lang
var cate1 = x.category1
var cate2 = x.category2

x.description=desc
x.lang=lan
x.category1=cate1
x.category2=cate2
x.date = new Date(x.date, "01", "01"); 
db.events.save(x);
}	
}
 
    
