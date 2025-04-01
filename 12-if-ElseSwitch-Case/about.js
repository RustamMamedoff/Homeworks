function showSeasons() {
    const season = prompt("sezon secin:\n1 - yaz\n2 - yay\n3 - payiz\n4 - qis");

    let months;

    
    switch (season) {
       
        case '1':
            months = "yaz: mart, aprel, may";
            break;

        case '2':
            months = "yay: uyun, iyul, avqust";
            break;

        case '3':
            months = "payiz: sentyabr, oktyabr, noyabr";
            break;

        case '4':
            months = "qis : dekabr, yanvar, fevral";
            break;
        
        default:
            alert("zehmet olmasa secimnizi duzgun edin.");
            return;
    }

    alert(months);
}


showSeasons();
