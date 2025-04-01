const prices = {
    dizel: 0.9,   
    benzin: 1,   
    premium: 1.5  
};

function showMenu() {
    const choice = prompt("yanacag novunu secin:\n1 - dizel (0.9 AZN)\n2 - adi (1 AZN)\n3 - premium (1.5 AZN)");
    
    let fuelType;
    
    switch(choice) {
        case '1':
            fuelType = 'dizel';
            break;
        case '2':
            fuelType = 'benzin';
            break;
        case '3':
            fuelType = 'premium';
            break;
        default:
            alert("lutfen duzgun yanacag tipi teyin edin");
            return;
    }
    
   
    const liters = parseFloat(prompt("nece litr yanacag almag isteyirsiz?"));
    if (isNaN(liters) || liters <= 0) {
        alert("duzgun teyin edin yanacagin hecmini");
        return;
    }
    
    
    const userMoney = parseFloat(prompt("neqeder pulunuz var? (Azn)"));
    if (isNaN(userMoney) || userMoney <= 0) {
        alert("duzgun teyin edilmeyib");
        return;
    }
    
  
    const totalCost = prices[fuelType] * liters;
    
  
    if (userMoney < totalCost) {
        alert("yanacag almaq ucun zinin balansinizda yeterli mebleg yoxdur");
    } else {
        const remainingBalance = userMoney - totalCost;
        alert(`siz aldiz ${liters} litr yanacag qiymet: ${totalCost} AZN. qalig: ${remainingBalance} AZN.`);
    }
}


showMenu();




