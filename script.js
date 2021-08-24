/*
    DEĞİŞKENLER
  var age=20;
//console.log(age);

var fullname='Cansel Tan';
//console.log(fullname);

let firstname='Cansel';
//let age=20;

let names=['Cansel','Cansu'];

let address={
    city:'Muğla',
    country:'Turkiye'
}

var calculateAge=function(){
    return 0;
};
let val;
val=String(10);  
val= String(new Date());
console.log(val);
console.log(val.length);

console.log(typeof calculateAge);


var customerName='Cansel';
var customerSurname='TAN';
var TcNo='21791239756';

var totalH= 199.99;

var gender=true; //kadın için;

var address1={
    city:'Muğla',
    district:'Menteşe',
    
};

var hobbies=['Yoga','Volleyboll','Music'];  

var order3=parseInt(100.2);
var order4=parseInt(150.5);

var total=order3+order4;
//console.log(total);

var yearOfBirth=1986;
console.log(new Date().getFullYear()-yearOfBirth);

var course='Modern JavaScript Kursu';
console.log(course.length);

let IndexCan, IndexAda;

const Cankg=70;
const Adakg=50;

const CanHeight=1.80;
const AdaHeight=1.65;

 IndexCan= (Cankg)/(CanHeight*CanHeight);
 IndexAda= (Adakg)/(AdaHeight*AdaHeight);

 console.log(IndexCan,IndexAda);

    OPERATORS
    let AdaHeighter=IndexAda<IndexCan;
    console.log(AdaHeighter);

    let AdaPosition= IndexAda>=0 && IndexAda<=18.1;
    console.log(AdaPosition);*/

    //DATES&TIMES
    let d= new Date();
    console.log(d.getFullYear());
    console.log(d.getMonth()+1);
    console.log(d.getDate());
    var dt= new Date('3/8/2020');
    var day=dt.getDate();
    dt.setDate(day-1);
    console.log(dt);

    var mothersday=new Date();
    mothersday.setHours(0,0,0,0);
    mothersday.setFullYear(2019);
    mothersday.setDate(1);  
    mothersday.setMonth(4);
    console.log(mothersday.getDay());
    while(mothersday.getDay()!=0){
        mothersday.setDate(mothersday.getDate()+1);
    }
    mothersday.setDate(mothersday.getDate()+7);
    console.log(mothersday);

    //NUMBERS METHODS
    var num= 15.123456789;
    console.log(num.toPrecision(3))
    console.log(num.toFixed(3))
    console.log(Math.round(num));
    console.log(Math.ceil(num));
    console.log(Math.floor(num));
    console.log(Math.min(1,2,10,56,20));
    console.log(Math.max(1,2,10,56,20));
    var min =50;
    var max=100;
    console.log(min+Math.random()*max); 

    var brutMaas=3700;
    var mesaiUcreti=10.3;
    var mesaiSuresi=42;

    var toplambrutMaas= brutMaas+ (mesaiSuresi*mesaiUcreti);
    console.log(toplambrutMaas);

    var toplamNetMaas=(toplambrutMaas-(toplambrutMaas*0.25));
    console.log(toplamNetMaas.toFixed(),toplambrutMaas);
    const firstName="cansel";
    const lastName="tan";
    //STRING METHODS
    let val;
    val=firstName+" "+lastName;
    val='can s el';
    val+='tan';

    val=firstName+lastName;
    val=firstName.concat(' ',lastName);
    val=val.toUpperCase();
    val=val.toLowerCase();
    
    val=val.replace('cansel','can s u');
    
    console.log(val);

    var sentence="sakfkeowkf_oko fpkpf keğğcfkw pkewkpfm ğd";
    console.log(sentence.trim().split(' '));
    console.log(sentence.toUpperCase());
    console.log(sentence.toLowerCase());
    console.log(sentence.trim());
    console.log(sentence.replace('_','-'));
    console.log(sentence.indexOf('ğd'));
    console.log(sentence.toLowerCase().replace(/ğ/g,'g'));

    //ARRAYS
    var names=['ada','ela','can','sevgi'];
    var years=['2005','1995','1997','2001'];

   
    //console.log(years.sort());
    //console.log(years.concat(names));
    names.splice(2,0,'deniz');
    console.log(names);

    function over18(year){
        let age= 2021-year;
        return age>=18;
    }
        let yas=years.find(over18);
        console.log(yas);
        let yasfilter=years.filter(over18);
        console.log(yasfilter);

        var array=['Bmw','Mercedes','Opel','MiniCooper'];
        var str="Dacia ,Chevrolet";  
        var array2=str.split(',');
        var array3=array.concat(array2);
        console.log(array.length);  
        console.log(array[0]);
        array[4]='Renault';
        array.push('Toyota');
        array.unshift('Fiat');
        array.pop();
        array.shift();
        array.reverse();
        array.sort();
        console.log(array);
        console.log(array2);    
        console.log(array3.pop());
        console.log(array3);
        console.log(array3.splice(3,2));
        console.log(array3.slice(2,4));
        console.log(array3);

        //IF-ELSE

        var trafikCikis= new Date('08/20/2019');
        trafikCikis.setHours(0,0,0,0);
        var trafikMs= Date.now()-trafikCikis.getTime();       
        var trafiktekiGun=Math.floor(trafikMs/(1000*60*60*24));

        if(trafiktekiGun<=365){
            console.log("1.servis bakım süreniz geldi.");
        }
        else if(trafiktekiGun>365 && trafiktekiGun<=365*2){
            console.log("2.servis bakım süreniz geldi.");

        }
        else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3){
            console.log("3.servis bakım süreniz geldi.");

            
        }
        else{
            console.log("bilinmeyen süre.");

        }
        console.log(trafiktekiGun);

        //OBJECTS

        let objects;
        let person={
            firstName:'Cansel',
            lastName:'tan',
            age:24,
            hobbies:['game','yoga','music'],
            adress:{
                city:'Muğla',
                country:'Turkey',
            },
            getBirthYear : function(){
                return 2018-this.age;
            }

        };
       
        objects=person.firstName;
        objects=person.hobbies[1];
        objects=person.adress.city;
        objects=person.getBirthYear();
        console.log(objects);

        //LOOPS 

        let Cars=['BMW','Mercedes','Toyota'];
        for (let i in Cars){
            console.log(`ìndex:${i} value:${Cars[i]}`);
        }
        Cars.forEach(function (item){
            console.log(item);
        });

        let People=[
            {firstName:'ada',lastName:'bilgi'},
            {firstName:'ela',lastName:'demir'},
            {firstName:'eda',lastName:'can'},

        ];
        for(let i=0;i<People.length;i++){
            console.log(People[i].firstName);
        }

        for(let i in People){
            console.log(`ìndex:${i} value:${People[i].lastName}`);
        }

        People.forEach(function(item){
            console.log(item);
        });

        let  numbers=[1,5,7,8,9,4];
        let numm=numbers.map(function(n){
            return n*n;
            
        });
        console.log(numm);

       /* var hak,can;
        can=Number(prompt("Kaç defada bileceksiniz? "));
        hak=can;
        var tahmin;
        var sayac=0;
        var sayi=Math.floor((Math.random()*10)+1);
        console.log(sayi);

        while(hak>0){
            hak--;  
            sayac++;
            tahmin=Number (prompt('bir sayı giriniz'));
            if(sayi==tahmin){
                console.log(`Doğru tahmin ${sayac} defada bildiniz. `);
                console.log(`puan:${100-(100/can)*(sayac-1)}`);

                break;
            }
            else if(sayi<tahmin){
                console.log("Aşağı");
            }
            else{
                console.log("Yukarı");
            }

            if(hak==0){
                console.log("Hakkkınız bitti. sayi "+sayi);
                
            }
        }*/

        //FUNCTION

        const sum=function(a,b){
            var c=a+b;
            return c;
        }
        console.log(sum(10,30));
      
        //WINDOW
        let vall;
        function a () {
            return 0;
        }
        vall=window;

        vall=window.scrollX;
        vall=window.scrollY;
        vall=window.location.href;
        console.log(vall);

        //SCOPES

            var name='Ece'; 
        function logname() {
            var name='Cansel'; //Fonksiyonlar kendi scopelarını oluşturur.
            var age=24;
            console.log('function scope',name,age);
        }
        if(true){
            var model='Mercedes';
            var years=2016;
            const color='black';
            console.log('block scopes',model,years,color);

        }
        console.log(model);
        //!console.log(years);
        //!console.log(color);  ES6 ile gelen let ve const block scope oluşturur.
        

    




