var deposit;
var name;
var deposits=[];
var names=[];
$(".newDeposit").click(function() {

    deposit = $(".accountDeposit").val();
    deposits.push(parseInt(deposit));
    console.log(deposits);
    name = $(".accountName").val();
    names.push(name);
    console.log(names);
    $(".ledger").append("<p>" + name + "</p><p class='ledgerBorder'>$" + deposit + "</p>");

});

$(".update").click(function(){
    var total=0;
    deposits.forEach (function(money){
        total=total + money;
    });
    $(".ledger").append("<p>" + total + "</p>");
});