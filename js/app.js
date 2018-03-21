let slogansData = slogans;
let slogansIndex = 0;

renderSlogan = function(searchKey) {
    
    switch(searchKey) {
        case "happy":
            slogansIndex = 0; break;
        case "funny":
            slogansIndex = 1; break;
        case "disgust":
            slogansIndex = 2; break;
        case "contempt":
            slogansIndex = 3; break;
        case "anger":
            slogansIndex = 4; break;
        case "fear":
            slogansIndex = 5; break;
        case "surprise":
            slogansIndex = 6; break;
    }
    
    $('#results').html("");
    log('#results', slogansData[slogansIndex][searchKey][0]);
}