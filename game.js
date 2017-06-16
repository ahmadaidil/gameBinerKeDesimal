//Jscript Permainan Bineri ke Desimal beserta PseudoCode oleh Ahmad Aidil #JackFox

/*
PseudoCode:

->object gameMaster
object gameMaster dengan parameter variable 'nama'
assign nilai variable 'nama' dengan nilai parameter variable 'nama'
function welcome tanpa parameter
function cekReady dengan parameter variable 'rede'
function gameStart dengan parameter variable 'conf'
function quizStart tanpa parameter
function decToBiner dengan parameter variable randNum
function gameOver dengan parameter variable skor

-->function welcome() pada object gameMaster
IF nilai 'nama' = '' atau null THEN nama = 'Tamu'
SHOW alert Selamat datang, 'nama'
SHOW alert aturan Permainan
INPUT dan SAVE nilai variable 'ready'
return nilai variable 'ready'

-->function cekReady(rede) pada object gameMaster
IF nilai 'rede' = 1 then return string 'y' ELSE return string 'n'

-->function gameStart(conf) pada object gameMaster
IF nilai 'conf' = string 'y' RUN function quizStart() dalam object yang sama yaitu gameMaster
ELSE SHOW alert anda keluar dari permainan

-->function quizStart pada object gameMaster
ASSIGN nilai variable rand = 0
ASSIGN nilai variable biner = ''
ASSIGN nilai variable skor = 0
ASSIGN nilai variable ans = ''
LOOPING variable soal dimulai dari 1 sampai dengan 10
ASSIGN nilai variable rand dengan bilangan random dari 0 sampai 255
ASSIGN nilai variable 'biner' dengan nilai return dari decToBiner (parameter variable rand) dalam object yang sama yaitu gameMaster.
INPUT dan SAVE nilai variable 'ans'
IF nilai 'ans' = nilai 'rand' then TAMBAH 1 nilai skor ELSE KURANGI 0.5 nilai skor
ENDLOOPING
RUN function gameOver (parameter variable skor) dalam object yang sama yaitu gameMaster

-->function decToBiner(rand) pada object gameMaster
ASSIGN variable biner bertipe data array dengan deret nilai kosong
LOOPING variable i dimulai dari 0 sampai dengan 7
PUSH nilai hasil HITUNG variable randNum modulus 2 ke deret nilai array biner yang telah dikonversi menjadi bilangan bulat (int)
bagi atau divide nilai randNum dengan angka 2 kemudian konversi menjadi bilangan bulat (int)
ENDLOOPING
REVERSE deret nilai dalam array biner
return deret nilai array biner dengan JOIN('') kemudian dikonversi ke string

-->function gameOver(skor) pada object gameMaster
SHOW alert game berakhir
SHOW alert Skor akhir, 'nama' adalah skor
INPUT dan SAVE 'cont'
IF nilai 'cont' = 1 then RUN function gameStart dengan paramater string 'y' ELSE RUN function gameStart dengan parameter string 'n'

./MAIN Process:
INPUT dan SAVE nilai variable 'nama'
CREATE object baru gm dari object gameMaster
ASSIGN nilai variable 'rede' dengan nilai return (INPUT dan SAVE 'ready') function welcome() dari object gm
ASSIGN nilai variable 'conf' dengan nilai return function cekReady() dari object gm
RUN function gameStart dengan masukkan nilai parameter variable 'conf' dari object gm
*/

//object
function gameMaster(nama){
  this.nama = nama;
  //function dalam object
  this.welcome = function (){
  	if (nama=='' || nama==null){
    	nama = 'Tamu';
    }
    alert('Selamat datang di game Kuis biner->Desimal, '+nama);
    alert('Permainan cukup mudah, anda harus menjawab 10 soal kuis konversi dr bilangan bineri ke desimal');
    alert('Jika jawaban anda benar skor +1, jika salah skor -0.5');
    var ready = prompt('Jika sudah siap, input angka 1. input random atau klik tombol cancel untuk keluar');
    return ready;
  }
  this.cekReady = function(rede){
    if (rede==1){
      return 'y';
    }
    else{
      return 'n';
    }
  }
  this.gameStart = function(conf){
    if (conf==='y'){
      this.quizStart();
    }
    else{
      alert('Anda keluar dari permainan, terima kasih telah bermain!');
    }
  }
  this.quizStart = function(){
    var rand = 0;
    var biner = '';
    var ans = '';
    var skor = 0;
    for(var soal=1; soal<=10 ; soal++){
      rand = Math.floor((Math.random() * 255) + 0);
      biner = this.decToBiner(rand);
      ans = prompt('Soal '+soal+'. Bilangan desimal dari bilangan biner ini '+biner+' adalah...');
      if(ans==rand){
        skor += 1;
      }
      else{
        skor -= 0.5;
      }
      console.log(skor); //melihat log dari skor
    }
    this.gameOver(skor);
  }
  this.decToBiner = function(randNum){
    var biner=[];
    for(var i=0; i<8; i++){
      biner.push(parseInt(randNum%2));
      randNum = parseInt(randNum/2);
    }
    biner = biner.reverse();
    return biner.join('').toString();
  }
  this.gameOver = function(skor){
    alert('game berakhir!!');
    alert('Skor akhir '+this.nama+' adalah '+skor);
    var cont = prompt('ulangi permainan? (input 1 = ya, input random/klik tombol cancel = tidak)');
    if(cont==1){
      this.gameStart('y');
    }
    else{
      this.gameStart('n');
    }
  }
}

//main
var nama=prompt('Input nama anda: ');
var gm = new gameMaster(nama);
var rede = gm.welcome();
var conf = gm.cekReady(rede);
gm.gameStart(conf);
