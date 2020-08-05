import React, { Component } from 'react';
import './App.scss';
import Spinner from './components/spinner';
import Overlay from './components/overlay';
import Book from './components/book';
import BookGrid from './components/bookGrid';

const myBooks = [

  {
    "id": "17",
    "title": "Sineklerin Tanrısı",
    "complete": true,
    "progress": 80,
    "finishedOn": "2018-01-01",
    "author": "William Golding",
    "rating": 3,
    "tags": ['Roman'],
    "review": "Bu kitaba yanlış bir zamanda başladım. Beni etkilemesi uzun sürse de sonunda yaşadığım aydınlanma ve şok inanılmazdı. Çok hareketli bir kitap olmadığını düşündüm hatta benzettiğim bir klasik daha vardı aslında hiç benzemeyen. Sonundaki açıklamalar beni çok rahatlattı hatta kitaptaki olaylarla ilgili kafamda soru işaretleri kalmadı diyebilirim rahatlıkla. ",
    "imageUrl": "https://i.dr.com.tr/cache/500x400-0/originals/0000000107800-1.jpg"
   
  },
  {
    "id": "18",
    "title": "Şeker Portakalı",
    "complete": true,
    "progress": 99,
    "finishedOn": "2018-01-01",
    "author": "Jose Mauro De Vasconcelos",
    "rating": 5,
    "tags": ['roman', 'otobiyografik kurgu'],
    "review": "Kitap sürekli şiddet gören çocuk karakter Zezé ve onun hayal dünyasını okuyucuya hissettirmesi bakımından kaliteli bir eser. Sayfaları çevirince kan akisinizin olaylara göre hizlanip yavaşladığını hissedeceksiniz.",
    "imageUrl": "https://i.dr.com.tr/cache/500x400-0/originals/0000000064031-1.jpg"
   
  },
  {
    "id": "19",
    "title": "1984",
    "complete": false,
    "progress": 70,
    "finishedOn": "2018-01-01",
    "author": "George Orwell",
    "tags": [],
    "review": "1984 bize ütopik bir dünyayı anlatıyor. İnsanların değil, sistemin daha önemli olduğu bir dönemi. Sürekli bazı gözlerin insanların üzerinde olduğu, sistemin istemediği ve sisteme zarar verebilecek herşeyin yasak olduğu bir dünyayı anlatıyor bize. İnanılan herşeyin medya tarafından yayınlandığı, medyanında belli zamanlarda belli haberleri değiştirerek sunduğu, o an sistem için ne gerekiyorsa onu insanlara anlattığı bir dünya. ",
    "imageUrl": "https://cdn.bkmkitap.com/Data/EditorFiles/Blog/blog-urunler/george-orwell-1984.jpg"
   
  },
  {
    "id": "20",
    "title": "Fahrenheit 451",
    "complete": false,
    "progress": 29,
    "finishedOn": "2018-01-01",
    "author": "Ray Bradbury",
    "rating": 4,
    "tags": ['bilim kurgu'], 
    "imageUrl": "https://i.dr.com.tr/cache/500x400-0/originals/0001750151001-1.jpg"
   
  },
  
  {
    "id": "3",
    "title": "Harry Potter ve Felsefe Taşı",
    "complete": true,
    "progress": 54.8,
    "finishedOn": "2000-01-01",
    "author": "JJ.Rowling",
    "rating": 5,
    "tags": ['fantastik', 'bilimkurgu', 'macera', 'çocuk', 'yetişkin'],
    "review": "Harry Potter serisinin ilk kitabı tek kelime ile MÜKEMMEL. Önce filmini izledim ve kitabını da okumalıyım dedim. Filmi harikaydı kitabı ise bambaşkaydı. Hemen ikinci kitaba başladım.",
    "imageUrl": "https://i.dr.com.tr/cache/500x400-0/originals/0000000105599-1.jpg"
   
  },
  {
    "id": "4",
    "title": "Mai ve Siyah",
    "complete": false,
    "progress": 33.9,
    "finishedOn": "2000-01-01",
    "author": "Halit Ziya UŞAKLIGİL",
    "rating": 3,
    "tags": ['roman','yetişkin'],
    "imageUrl": "https://kitap.cokbilgi.com/resim/mai-ve-siyah-ozeti.jpg"
  },
  {
    "id": "5",
    "title": "Dorian Gray'in Portresi",
    "complete": true,
    "progress": 100,
    "finishedOn": "2000-01-01",
    "author": "Oscar Wilde",
    "rating": 5,
    "tags": ['roman','yetişkin',],
    "imageUrl": "https://i.idefix.com/cache/500x400-0/originals/0001788062001-1.jpg"
  },
  {
    "id": "6",
    "title": "Bir Ömür Nasıl Yaşanır",
    "complete": false,
    "progress": 14.8,
    "finishedOn": "2000-01-01",
    "author": "İlber Ortaylı",
    "rating": 2,
    "tags": ['roman','yetişkin',],
    "imageUrl": "https://i.dr.com.tr/cache/500x400-0/originals/0001796150001-1.jpg"
  },
  {
    "id": "7",
    "title": "Jane Eyre",
    "complete": true,
    "progress": 100,
    "finishedOn": "2000-01-01",
    "author": "Charlotte Bronte",
    "rating": 5,
    "tags": ['roman','yetişkin','Aşk','Gotik Kurgu'],
    "review" : "Bu kitabı 5 sene önce okumuştum.O kadar güzel bir kitap ki sizleride içine çekeceğine eminim.Zorlukla başlayan bu mücadelede en sonunda zafere ulaşmış bir kızın hikayesi...",
    "imageUrl": "https://i.idefix.com/cache/500x400-0/originals/0001788070001-1.jpg"
  },
  {
    "id": "8",
    "title": "Altıncı Koğuş",
    "complete": true,
    "progress": 100,
    "finishedOn": "2000-01-01",
    "author": "Anton Çehov",
    "rating": 1,
    "tags": ['kurgu'],
    "imageUrl": "https://img.iskultur.com.tr/2017/08/ALTINCI-KOGUS-17.-BASKI-2.png"
  },
  {
    "id": "9",
    "title": "Nietzsche Ağladığında",
    "complete": false,
    "progress": 17.6,
    "finishedOn": "2000-01-01",
    "author": "Irvin D. Yalom",
    "rating": 3,
    "tags": ['Roman'],
    "review" : "Irvin David Yalom, Nietzsche’nin yaşamını ve fikirlerini analiz ederek okuyucuya aktaran felsefik bir roman yazmış. Eserde genel hatlarıyla ümitsizlik hakim. Yazar psikoterapiyi halka sevdiren biridir.",
    "imageUrl": "https://media.s-bol.com/ZYKgmvrrnjR8/550x794.jpg"
  },
  {
    "id": "10",
    "title": "İnsanlar Arasındaki Eşitsizliğin Kaynağı",
    "complete": true,
    "progress": 90,
    "finishedOn": "2000-01-01",
    "author": "J-J. Rousseau",
    "rating": 2,
    "tags": ['Felsefe'],
    "review" : "Toplum öncesi insanın panoramasını çizerek işe koyulan Rousseau, eşitsizliklerin, toplumsal yaşama geçişle birlikte ortaya çıktığını ortaya koyuyor. Eşitsizlik neden var sorusuna tatmin edici cevaplar buluyor.",
    "imageUrl": "https://i.dr.com.tr/cache/500x400-0/originals/0000000061211-1.jpg"
  },
  {
    "id": "1",
    "title": "The Learn Startup",
    "complete": true,
    "progress": 11,
    "finishedOn": "",
    "author": "Eric Ries",
    "rating": 4,
    "tags": ["eğitim", "bilgisayar"],
    "review": null,
    "imageUrl": "http://c.danny.is/393cd30876e9/ls.jpg"
  }, 
  {
    "id": "2",
    "title": "Team of Teams",
    "complete": true,
    "progress": 99,
    "finishedOn": "2018-01-01",
    "author": "Stanley McCrystal",
    "rating": 3,
    "tags": [],
    "imageUrl": "http://c.danny.is/338b3ac403e0/tot.jpg"
   
  },
  {
    "id": "11",
    "title": "Bulantı",
    "complete": true,
    "progress": 99,
    "finishedOn": "2018-01-01",
    "author": "Jean Paul Sartre",
    "rating": 5,
    "tags": ['Felsefi Kurgu'],
    "review": "Varoluşçuluk üzerine okuduğum gerçekten en ağır romandı. Bu romanı anlayabilmeniz için zihninizin boş olması ve çok iyi odaklanmanız gerekiyor. Varoluşçuluğa yeni bir bakış açışı kazandıran bir roman.",
    "imageUrl": "https://i.idefix.com/cache/600x600-0/originals/0000000064172-1.jpg"
  },
  {
    "id": "12",
    "title": "Böyle Buyurdu Zerdüşt",
    "complete": true,
    "progress": 50.6,
    "finishedOn": "2018-01-01",
    "author": "Friedrich Nietzsche",
    "rating": 5,
    "tags": ['Felsefe','Roman'],
    "imageUrl": "https://i.idefix.com/cache/500x400-0/originals/0000000708306-1.jpg"
   
  },
  {
    "id": "13",
    "title": "Korku",
    "complete": false,
    "progress": 12.5,
    "finishedOn": "2018-01-01",
    "author": "Stefan Zweig",
    "rating": 2,
    "tags": ['roman'],
    "review": "Sevgili dostlarım eseri bir kaç cümleyle sizlere değerlendirecek olursam , hepimizin içinde kime göre olduğu bilinmez büyük veya küçük korkuları vardır.Çoğu zaman bunlardan kaçar , aklımıza geldiğinde yok olmak hatta ölmek bile isteriz.Yazarımız bunu çok güzel bir şekilde sayfalara teslim etmiş.",
    "imageUrl": "https://static.nadirkitap.com/fotograf/434731/13/Kitap_20190226153335_434731_3.jpg"
   
  },
  {
    "id": "14",
    "title": "Hayvan Çiftliği",
    "complete": false,
    "progress": 45,
    "finishedOn": "2018-01-01",
    "author": "George Orwell",
    "rating": 4,
    "tags": [],
    "review": "Hayvanlar üzerinden Rusya diktatörü Stalin'i bu kadar güzel bir şekilde eleştirmesi gerçekten çok zekice okunması gereken kitaplardan.Kitaptaki sembolik anlatım gerçekten zihin yakan türden.",
    "imageUrl": "https://i.dr.com.tr/cache/600x600-0/originals/0000000105409-1.jpg"
   
  },
  {
    "id": "15",
    "title": "Çavdar Tarlasında Çocuklar",
    "complete": true,
    "progress": 99,
    "finishedOn": "2018-01-01",
    "author": "J.D. Salinger",
    "rating": 1,
    "tags": ['roman'],
    "review": "Bu kitap hakkında yapılacak bir inceleme yok. Gereğinden fazla abartılmış kitaplar listemdedir. Bir ergenin okuldan ayrılışı ve sonrasındaki iç dünyası. Bir de her sayfada bittim buna tarzında klişe laflar. Okunacak çok kitap varken çavdar tarlası malesef iyiler sıralamasına giremez.",
    "imageUrl": "https://i.idefix.com/cache/500x400-0/originals/0000000058117-1.jpg"
   
  },
  {
    "id": "16",
    "title": "Fareler ve İnsanlar",
    "complete": false,
    "progress": 68,
    "finishedOn": "2018-01-01",
    "author": "John Steinbeck",
    "rating": 3,
    "tags": ['Edebiyat','Roman'],
    "review": "İçten derin bir şekilde nefesinizi sonuna kadar alın.Ve kitabı okumaya başlayın. Bittiğinde göreceksiniz ki nefesiniz hala sizin. Havaya karışmamış. Havayla temasa geçmemiş.Tek nefeslik kitap. Hikayesi ile karakterlerin mükemmelliği ve kitabın finali ile hayran olacağınız bir başyapıt. Okuyun...",
    "imageUrl": "https://www.antikstore.com.tr/Uploads/UrunResimleri/buyuk/9789755705859_fareler-ve-insanlar-07e5.jpg"
   
  },
  
  {
    "id": "21",
    "title": "Yabancı",
    "complete": false,
    "progress": 99,
    "finishedOn": "2018-01-01",
    "author": "Albert Camus",
    "rating": 5,
    "tags": ['roman','polisiye'],
    "review": "Toplum ve toplumu oluşturan insana dair ve yine toplumca oluşturulmuş değer yargılarına karşı uyumsuz olan kahramanın topluma yabancılaşmasını, toplumu oluşturan diğer bireylerce ötekileştirilmesini konu alan varoluş felsefesine ve insan algısına dair düşündükçe derinleşen müthiş bir eser. Kitabı okuduktan sonra aldığınız lezzet okurken aldığınızdan daha fazladır.",
    "imageUrl": "https://i.dr.com.tr/cache/500x400-0/originals/0000000064464-1.jpg"
   
  },
  {
    "id": "22",
    "title": "Uğultulu Tepeler",
    "complete": true,
    "progress": 99,
    "finishedOn": "2018-01-01",
    "author": "Emily Bronte",
    "rating": 5,
    "tags": ['roman'],
    "review": "Öncelikle, Emily Bronte'in ne yazık ki yazdığı tek kitap olan ve muhteşem ötesi diye tanımlanabilecek bu kitabı okurken çok üzüldüğümü bildirmek isterim. Hayır kitabın içinde yazılanlara üzülmedim. Ben, Yazarın bu ilk kitabını yazdıktan bir yıl sonra ölümü nedeniyle, Dünya Edebiyatının ve dolayısıyla da kitap severlerin neler kaybetmiş olduğunu düşünerek üzüldüm. İlk kitabı olarak böylesine muhteşem eser yazan genç bir yazar, eğer daha uzun süre yaşamış olsaydı kimbilir neler yapardı, bizlere okunacak kaç tane daha muhteşem eser bırakırdı diye düşünerek üzüldüm.",
    "imageUrl": "https://img.kitapyurdu.com/v1/getImage/fn:11249180/wh:true/wi:0/mh:1000"
   
  },
  {
    "id": "24",
    "title": "Kendine Ait Bir Oda",
    "complete": false,
    "progress": 62,
    "finishedOn": "2018-01-01",
    "author": "Virginia Woolf",
    "rating": 3,
    "tags": ['roman'],
    "imageUrl": "https://i.dr.com.tr/cache/600x600-0/originals/0000000391485-1.jpg"
   
  },
  {
    "id": "25",
    "title": "Suç ve Ceza",
    "complete": true,
    "progress": 99,
    "finishedOn": "2018-01-01",
    "author": "Fyodor Dostoyevski",
    "rating": 3,
    "tags": [],
    "review": "Kitabı ilk okumaya başladığımda çok sürükleyici gelmemiş ve biter mi acaba diye düşünmüştüm ama olaylar başladığında kitabı nasıl bitirdiğimi bile anlayamadım konu olarak hukuk fakültesini okumak için gelen Raskolnikov’un başına gelen olaylar anlatılıyor kitabı özetleyecek olursam Raskolnikov 8 yıl hapse mahkum edilerek evet 8 yılını kaybetti ancak hayatının kalanını geri kazandı",
    "imageUrl": "https://www.nobelkitap.com/img/2000/suc-ve-ceza-db21b3b1880d4339a6e6bde30390103c.jpg"
  },
  {
    "id": "26",
    "title": "Otomatik Portakal",
    "complete": true,
    "progress": 42,
    "finishedOn": "",
    "author": "Anthony Burgess",
    "rating": 4,
    "tags": ['roman'],
    "review": "Otomatik Portakal, Alex ve çetesinin hikayesi. Bu hikayede yaşanılan yer, zaman ve şartlar eleştirilmekte. Mesela öğretmene benzetilen yaşlı birine yaşatılanlar eğitim sistemine yapılan bir eleştiri niteliğinde. Yine Umutsuzluk Caddesi, Tükeniş Sokağı benzetmeleri yaşanılan zamandaki insanların ruh halini ortaya koymakta. Bu anlamda Otomatik Portakal Distopik bir romandır.",
    "imageUrl": "https://img.iskultur.com.tr/2019/04/otomatik.jpg"
  },
  {
    "id": "27",
    "title": "Bilinmeyen Bir Kadının Mektubu",
    "complete": false,
    "progress": 66,
    "finishedOn": "",
    "author": "Stefan Zweig",
    "rating": 4,
    "tags": ["roman"],
    "review": null,
    "imageUrl": "https://cdn1.dokuzsoft.com/u/pusluyayincilik/img/c/b/i/bilinmeyen-bir-kadinin-mektubu-1531205079.jpg"
  }, 
  {
    "id": "28",
    "title": "Gurur ve Önyargı",
    "complete": true,
    "progress": 11,
    "finishedOn": "",
    "author": "Jane Austen",
    "rating": 5,
    "tags": ["roman"],
    "review": "Jane Austen’ in okuduğum ilk kitabı oldu Gurur ve Önyargı. Kitap yazıldığını dönemin aynasını, toplum yapısını anlatıyor diyebilirim ama bundan sonra yazacaklarım kesinlikle beni bağlayan düşünceler. Kadınların sırf evlilik yoluyla hayatlarını kurtarma düşüncesi bana çok itici geliyor. Mutluluğu , hayata olan bağı bir kişiye bağlamak çok yanlış. ",
    "imageUrl": "https://i.dr.com.tr/cache/500x400-0/originals/0000000202084-1.jpg"
  }, 
  {
    "id": "29",
    "title": "Tutunamayanlar",
    "complete": false,
    "progress": 11,
    "finishedOn": "",
    "author": "Oğuz Atay",
    "rating": 2,
    "tags": ["roman"],
    "review": "Tutunamayanlar'ı ikinci kez okuyorum. Bu okuyuşum bana hem büyük bir keyif verdi, hem de ufuk açtı. Bu da bana bazı kitapları okumak için uygun zamanın gelmesi gerektiğini öğretti. Aksi takdirde kitap size okuma hazzı vermiyor ve bir nevi boşa kürek çekiyorsunuz. Oğuz Atay; içten, samimi, anlattiklari hep bir yerlerden tanıdık geliyor, ya bir yaranıza dokunuyor ya da sizi kahkahalarla güldürüyor. Kitabı okurken ister istemez oradan oraya savruluyorsunuz. ",
    "imageUrl": "https://i.idefix.com/cache/500x400-0/originals/0000000061424-1.jpg"
  },
  {
    "id": "30",
    "title": "Cesur Yeni Dünya",
    "complete": false,
    "progress": 55,
    "finishedOn": "2018-01-01",
    "author": "Aldous Huxley",
    "rating": 3,
    "tags": ['Bilim Kurgu','Roman'],
    "review" : "Müthiş bir kitap okudum. 1932'de yazıldığına inanamıyor insan. Bugünü bile aşan bir distopya ile karşı karşıya kaldım.",
    "imageUrl": "https://i.dr.com.tr/cache/500x400-0/originals/0000000066424-1.jpg"
   
  },
  {
    "id": "31",
    "title": "Saatleri Ayarlama Enstitüsü",
    "complete": true,
    "progress": 99,
    "finishedOn": "2018-01-01",
    "author": "Ahmet Hamdi Tanpınar",
    "rating": 3,
    "tags": ['Roman'],
    "imageUrl": "https://img.kitapyurdu.com/v1/getImage/fn:4542435/wh:true/wi:0/mh:1000"
   
  },
  {
    "id": "32",
    "title": "Harry Potter ve Sırlar Odası",
    "complete": false,
    "progress": 80,
    "finishedOn": "2018-01-01",
    "author": "J.K. Rowling",
    "rating": 5,
    "tags": ['Fantastik','Bilim Kurgu'],
    "review" : "Mükemmel bir seri, mükemmel bir kitap. Serinin ikinci kitabı. Bayıldım. İlk kitabı 3 günde bu kitabı ise 2 günde bitirdim.",
    "imageUrl": "https://i.dr.com.tr/cache/600x600-0/originals/0000000105931-1.jpg"
   
  },
  {
    "id": "33",
    "title": "Kürk Mantolu Madonna",
    "complete": true,
    "progress": 20,
    "finishedOn": "2018-01-01",
    "author": "Sabahattin Ali",
    "rating": 5,
    "tags": ['Roman'],
    "imageUrl": "https://i.dr.com.tr/cache/600x600-0/originals/0000000058245-1.jpg"
   
  },

]

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      books: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/byzkd/1f973afae57883e71d23a283b72e729f/raw/1537d4348b390ce2e23f0b7900b3c45ff08cf3ba/myBooks.json')
    .then((res) => res.json())
    .then((json) => {
      setTimeout(() => {
        this.setState({
          books: myBooks,
          isLoaded: true
        })
        
      }, 1500);
    })
    
  }

  render() {
    let {isLoaded, books} = this.state

    if(!isLoaded) {
      return (
        <Overlay>
          <Spinner></Spinner>
        </Overlay>
      )
    } else {
      return (
        <div className="app">
         {
           !isLoaded ?
             <Overlay>
               <Spinner/>
             </Overlay>
             :
             <BookGrid>
             {books.map((book) => (
               <Book key={book.id} rating={book.rating} complete={book.complete} progress={book.progress} imageUrl={book.imageUrl} title={book.title} author={book.author} tags={book.tags} review={book.review} />
             ))}
             </BookGrid>
            
           }
          
         </div>
      )
    }
  
  }}

export default App;
