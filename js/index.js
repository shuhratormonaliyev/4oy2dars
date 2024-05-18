// 1-misol

// let a = +prompt('Butun son berilgan Agar berilgan son musbat bolsa 1 ga oshirilsin aks holda ozgartirilmasin Hosil bolgan sonni ekranga chiqaruvchi programma tuzilsin');
// if (a > 0) {
//     a++
// }
// console.log(a);


// 2 - misol 

// let a = +prompt('Butun son benigan Agar berilgan son musbat bolsa 1 ga oshiring aks holda 2 ga kamaytiring Hosil bolgan sonni ekranga chiqaruvchi programma tuzilsin');
// if (a > 0) {
//     a++;
// } else {
//     a-=2;
// }
// console.log(a);


// 3 - misol 

// let a = +prompt('Butun son berilgan Agar berilgan son musbat bolsa 1 ga oshiring agar manfiy bolsa 2 ga kamaytiring Agar 0 ga teng bolsa 10 ni ozlashtirsin Hosil bolgan sonni ekranga chiqaruvchi programma tuzilsin');
// if (a > 0) {
//     a += 1;
// } else if (a < 0) {
//     a -= 2;
// } else {
//     a = 10;
// }
// console.log(a);

// 4 - misol



// let = prompt('Uchta butun son bertigan Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin');
// let a = +prompt('birninchi son');
// let b = +prompt('ikkinchi son');
// let c = +prompt('uchinchinchi son');

// if (a > 0) {
//     a++;
// } else if (b > 0) {
//     b++;
// } else if (c > 0) {
//     c++;
//  }
// let y =Math.floor(a+b+c);
// console.log(y);

// 6 - misol
 

// let manfiy = 0;
// let musbat = 0;
// let a = +prompt("sonni kiriting");
// if (a > 0) {
//     musbat++;
// } else {
//     manfiy++;
// }
// let b = +prompt("sonni kiriting");
// if (b >0) {
//     musbat++;
// } else {
//     manfiy++;
// }
// let c = + prompt("sonni kiriting");
// if (c > 0){
//     musbat++;
// } else {
//     manfiy++;
// }


// 7- misol


// let = prompt('Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniqlovchi programma tuzilsin');
// let a = +prompt('birninchi son');
// let b = +prompt('ikkinchi son');
// if (a < b) {
//     console.log(a);
// } else {
//     console.log(b);
// }


// 8 - misol 
// let = prompt(' Ikkita butun son berilgan Shu sonlaming awal kattasini keyin kichigini ekranga chiqaruvchi programma tuzilsin');
// let a = +prompt('birinchi son');
// let b = +prompt('ikkinchi son');
// if (a > b) {
//     console.log(a, b);
// } else if (b > a) {
//     console.log(b, a);
// } else {
//     console.log("Sonlar teng.");
// }


// 9-misol


// let = prompt(' A va B haqiqiy sonilar beringan Shu sonlarni shunday ozgartirish kerakki A son kichik B son katta bolsin A va B ning qiymati ekranga chiqanisin');
// let a = +prompt('birinchi son');
// let b = +prompt('ikkinchi son');
// if (a >= b) {
//     let temp = a;
//     a = b;
//     b = temp;
//   }
//   console.log("A soni (kichik): " + a);
//   console.log("B soni (katta): " + b);


// 10-misol 


// let = prompt('A va B butun sonlari berilgan Agar ozgaruvchilar ozaro teng bolmasa A va B bu sonlarning kattasini ozlashtirsin Agar teng bolsa 0 ni ozlashtirsin A va B ning qiymati ekranga chiqarilsin');
// let a = +prompt('birinchi son');
// let b = +prompt('ikkinchi son');
// if (a !== b) {

//   } else {
//     a = 0;
//     b = 0;
//   }


// 11 - misol 

// let = prompt('A va B butun sonlari berilgan. Agar ozgaruvchilar ozaro teng bolmasa, A va B bu sonlarning kattasini ozlashtirsin. Agar teng bolsa, 0 ni ozlashtirsin. A va B ning qiymati ekranga chiqariisin');
// let a = +prompt('birinchi son');
// let b = +prompt('ikkinchi son');

//     if (a >= b) {
//         let temp =  a;
//     } else {
//       a = 0;
//       b = 0;
//     }
//     console.log("A ning qiymati: "  + a);
//     console.log("B ning qiymati: " + b);

//   12- misol 

// let = +prompt('Uchta son berilgan Shu sonlami kichigini aniqlovchi programma tuzilsin');
// let a = +prompt('birinchi son');
// let b = +prompt('ikkinchi son');
// let c = +prompt('uchinchi son');
//     if (a <= b && a <= c) {
//       console.log("Eng kichik son:", a);
//     } else if (b <= a && b <= c) {
//       console.log("Eng kichik son:", b);
//     } else {
//       console.log("Eng kichik son:", c);
//     }


// 13-masala

// let A = +prompt('A');

// let B = +prompt('B');

// let C = +prompt('C');

// let max ;

// let normal ;

// let min ;

// if (A > B){
// max = A,min = B} else {

// max = B,min = A} if(max < C){

// norm = max} else if (C < min){

// norm = min} else{

// norm = C}

// console.log(normal);



// 14 - misol
// let = prompt('Uchta son berilgan. Shu sonlami avval kichigini keyin kattasini ekranga chiqaruvchi programma tuzilisin');
// let a = +prompt('birinchi son');
// let b = +prompt('ikkinchi son');
// let c = +prompt('uchinchi son');
// let min = Math.min(a, b, c);
// let max = Math.max(a, b, c);
// console.log(min);
// console.log(max);


// 15- misol 


// let = prompt('Uchta son berilgan Shu sonlarning yigindisi eng katta boladigan ikkitasini ekranga chiqaruvchi programma tuzilsin');
// let a = +prompt('birinchi son');
// let b = +prompt('ikkinchi son');
// let c = +prompt('uchinchi son');

// kichik = Math.min(a, b, c);
// let yigindi = a + b + c - kichik;
// console.log('Berilgan sonlarning yigindisi eng katta boladigan ikkitasi:');
//   console.log(a, b, c);
//   console.log('Yigindisi:', yigindi);


