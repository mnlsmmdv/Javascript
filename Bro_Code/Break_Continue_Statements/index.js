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
