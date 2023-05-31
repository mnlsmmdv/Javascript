// break = Breaks out of a loop entirely
// continue = Skip an iteration of a loop

// Counts from 01-20 (break).
for(i = 1; i <= 20; i += 1){
    // Breaks count at 13.
    if(i == 13){
        break;
    }

    // Displays the count up to 12.
    console.log(i);
}

/*
// Counts from 01-20 (continue).
for(i = 1; i <= 20; i += 1){
    // Continues from 14 after taking out 13.
    if(i == 13){
        continue;
    }

    // Displays the count 01-20 without 13.
    console.log(i);
}
*/
