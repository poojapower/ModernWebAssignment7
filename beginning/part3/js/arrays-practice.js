//STEP 1
console.log('2nd element of array: ');
var movies1=["Joker","The dark knight","Conjuring","The Notebok","Iron Man"];
console.log(movies1[1]);

//STEP 2
console.log('Constructor function of array : ');
var movies2=new Array(5);
movies2[0]="Joker";
movies2[1]="The dark knight";
movies2[2]="Conjuring";
movies2[3]="The Notebok";
movies2[4]="Iron Man";
console.log(movies2[0]);

//STEP 3
console.log('Incremented Length of array : ');

var movies3=new Array(5)
movies3[0]="Joker";
movies3[1]="The dark knight";
movies3[2]="Conjuring";
movies3[3]="Wonderwoman";
movies3[4]="The Notebook";
movies3[5]="Iron Man";
console.log(movies3.length);

//STEP 4
console.log('1st element in Array : ');

var movies4=["Joker","The dark knight","Conjuring","The Notebok","Iron Man"];
delete movies4[0];
console.log(movies4.toString);

//STEP 5
console.log('For Loop : ');

var movies5=["Joker","The dark knight","Conjuring","The Notebok","Iron Man","Detective Pikachu","Me Before You"];
for(var i=0;i<movies5.length;i++){
    console.log(movies5[i]);
}

//STEP 6
console.log('For-in Loop : ');

var movies6=["Joker","The dark knight","Conjuring","The Notebok","Iron Man","Detective Pikachu","Me Before You"];
var movie;
for (movie in movies6) {
    console.log(movies6[movie]);
}

//STEP 7
console.log('Least Favorite Movies : ');
var movies7=["Joker","The Dark Knight","Conjuring","The Notebok","Iron Man","Detective Pikachu","Me Before You"];
var sortedMovie;
movies7.sort();
for (sortedMovie in movies7) {
    console.log(movies7[sortedMovie]);
}
//STEP 8
var movies8=["Joker","The dark knight","Conjuring","The Notebok","Iron Man","Detective Pikachu","Me Before You"];
var leastFavMovies=["The Nun","Wrong turn","Twilight"];
console.log('\n\n Movies I like \n\n');
for(var i=0;i<movies8.length;i++){
    console.log(movies8[i]);
}

console.log('\n\n Movies I regret watching \n\n');
for(var i=0;i<leastFavMovies.length;i++){
    console.log(leastFavMovies[i]);
}


//STEP 9
console.log('Reversed Array : ');
var movies9=["Joker","The dark knight","Conjuring","The Notebok","Iron Man","Detective Pikachu","Me Before You"];
var leastFav=["The Nun","Wrong turn","Twilight"];
var mergedMovies=movies9.concat(leastFav);
mergedMovies.sort();
mergedMovies.reverse();

for(var i=0;i<mergedMovies.length;i++){
    console.log(mergedMovies[i]);
}




//STEP 10
console.log('Last element in Merged Array : ');
var movies10=["Joker","The dark knight","Conjuring","The Notebok","Iron Man","Detective Pikachu","Me Before You"];
var leastFav10=["The Nun","Wrong turn","Twilight"];
var mergedMovies10=movies10.concat(leastFav);
mergedMovies10.sort();
mergedMovies10.reverse();

    console.log(mergedMovies[mergedMovies.length-1]);

