import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private slides2 = [];
  private linaje = [];
  private showStart = true;
  private showVingTsung = false;
  private showLinage = false;
  private showContacto = false;
  private showVT = false;
  private showCF = false;
  private showL = false;
  private showHistoria = false;

  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {
    this.slides2 = [
      {
        //title: "Welcome to the Docs!",
        //description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
        image: "assets/img/vt1.png",
      },
      {
        //title: "Welcome to the Docs!",
        //description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
        image: "assets/img/vt1.png",
      }
    ];
    this.linaje = [
      {
        title: "Gran Maestro Yip Man (1894-1972)",
        description:"Yip Man (Ye Wen) -Yip Gai Man (Yi Jiwen)- nació en una familia adinerada de comerciantes, en Foshan en 1894. Comenzó aprendiendo el Wing Chun Kuen entre 1906 y 1911 bajo la dirección del Maestro Chan Wah Shun. Luego aprendió con su Tío marcial, Leung Bik, puliendo sus habilidades a un nivel muy avanzado. Algunos de los estudiantes de Yip Man, sin embargo, mantienen y mencionan que él refinó sus habilidades a través del trabajo duro y la visión personal en Foshan. En 1942, bajo la ocupación japonesa Yip Man tomó algunos estudiantes en Yongan, como Chow Ywong Yiu, Kwok Fu y Lun Gai (Lun Jie). En noviembre del año 1949, Yip Man huyó del levantamiento comunista en China rumbo a Macao. Luego se mudó a Hong Kong dónde, en el año 1950, empezó a enseñar nuevamente el Wing Chun Kuen a los miembros de la Unión de Obreros de Restaurantes. Muchos de sus estudiantes, por su naturaleza amistosa y su conducta, lo llamaron 'Man Suk' (el Joven Tío Man) en los primeros años, y con el correr de los años lo llamaban 'Man Gung' (Abuelo Man). Gracias a Yip Man el Wing Chun Kung Fu se extendió alrededor de todo el mundo." ,
        image: "assets/img/ipMan.jpg",
      },
      {
        title: "Gran Maestro Lun Kai (1928-2014)",
        description:"El Gran Maestro Lun Kai nació en Cantón el 6 de noviembre de 1928 y murió el 5 de enero de 2014. Lun Kai junto a su amigo Kwok Fu fueron unos de los primeros estudiantes del Gran Maestro Yip Man en Foshan su ciudad natal. Lun Kai estudio con el Maestro Yip Man desde los catorce años, el Gran Maestro Yip Man tenía alrededor de cuarenta años en este momento. El grupo se reunía por las tardes y estaba formado por ocho estudiantes. Durante la ocupación japonesa las clases se llevaron a cabo en forma intensiva y secreta. Se hizo gran hincapié en el estudio de la forma Siu Nim Tau y en la práctica de la postura a caballo, mientras que cuando se practicaba Chi Sao el Gran Maestro Yip se vendaba los ojos y practicaba con todos los alumnos. El método de enseñanza en este momento se llevaba a cabo todas las noches e incluía el estudio de Siu Nim Tao, Chum Kiu, Biu Tze, Mok Yan Jong, Bart Cham Dao, y Luk Dim Bun Gwuan. No había ninguna instrucción de cualquier otra forma de entrenar las manos, aparte de Seung Chi Sao. Antes de abandonar China, el Gran Maestro Yip Man instruyó a sus estudiantes para que pudieran utilizar el Ojo de Fénix método de perforación que Sifu Lun Kai practicó y enseñó a sus discípulos durante muchos años. El G.M Lun Kai fue un referente para la difusión del Ving Tsun en la Foshan Chin Woo Athletic Association primera Asociación de Artes Marciales Chinas. Lun Kai y su Hermano Mayor Kwok Fu, fueron los asesores del comité del Centro de Actividades de Investigación del Ving Tsun Kuen, en lo que refiere a la Línea Yip Man y contaron con el total apoyo de la comunidad del Ving Tsun Kuen de Foshan. El Centro de Actividades de Investigación del Ving Tsun Kuen, estaba representado y compuesto por todas las líneas del Ving Tsun existentes y oriundas de Foshan. El G.M Lun Kai fue el presidente del Club de Boxeo de Ving Tsun de Yip Man de Foshan junto a los Maestros Kwok Fu y Yip Chun que lo acompañaron como presidentes honorarios. En Julio del año 2010, las artes marciales originales enseñadas por GM LUN KAI Sifu se registraron por primera vez en calidad de Club de Boxeo de Ving Tsun de Yip Man de Foshan (Club Cultural de Comunicaciones Co., Ltd). Corregistrado como Asociación Atlética Foshan Yip Man Ving Tsun. El G.M Lun Kai enseñó en Foshan de forma tradicional durante toda su vida y pasó el legado del Gran Maestro Yip Man a numerosos estudiantes y Discípulos, destacándose entre ellos el Maestro Neldo Sacomani introductor indiscutido de esta línea y con el estilo completo en Sudamérica. Fuente: Neldo Sacomani" ,
        image: "assets/img/lunKai.jpg",
      },
      {
        title: "Maestro Neldo Sacomani",
        description:"Sifu NELDO SACOMANI, de reconocida trayectoria en la práctica del Kung Fu es el director de la Escuela Internacional WU HSING CHUAN, entidad con base en la ciudad de La Plata, Argentina. Su entrenamiento en las artes marciales clásicas del Kung Fu Wu Su empezó en el año 1971. Es presidente de la Asociación de Artes Marciales Chinas Tradicionales 'Wu Hsing Chuan' de Wushu Kung Fu, desde el año 1983. Ha estudiado y desarrollado los estilos: Bak Siu Lam Kune, Hung Chia Chuan, Baguazhang, Ving Tsun y Tai ji Quan (Yang Shi - Sun Shi). Estudió con grandes maestros del Kung Fu de renombre internacional y no solamente con maestros en wushu sino también con doctores en la medicina tradicional china y Chi Kung (Laoshi Dr. Tong Zhi Hua,Hui). Está acreditado como Juez Nacional de Combate y Juez en Formas Tradicionales y continúa entrenando todos los años en CHINA. Sifu Neldo Sacomani estudió y entrenó el SISTEMA COMPLETO Yip Man Foshan Ving Tsun directamente en la Cuna del Ving Tsun (Cantón/China Continental) con su Maestro, el Sr. Lun Kai y con Sr. Kwok Wai Zhang (hijo del Maestro Kwok Fu), ambos, dos de los primeros discípulos del Gran Maestro Yip Man en su ciudad natal (Foshan). Neldo Sacomani es el introductor (oficial) de esta línea para Sudamérica, debidamente certificado por su Maestro y la Asociación Atlética Ching Wu de Foshan." ,
        image: "assets/img/neldo.jpg",
      },
      {
        title: "Profesor Jorge Quiñones",
        description:"Sifu Jorge Quiñones es el introductor del sistema Ving Tsun moderno y tradicional a nuestro país, es el representante oficial de la Linea Yip Man Foshan Ving Tsun y la Wu Hsing Chuan Athletic Association. Nacido en Montevideo, Uruguay el 6 de Noviembre año 1975 e incursionó tempranamente en las artes marciales practicando Shao Lin Nan Chuan y Tai Chi Chuan de la Familia Yang siendo certificado como instructor de ambos estilos. Sifu Jorge practica Ving Tsun desde el año 2000 es Discípulo Directo bajo Ceremonia Bai Shi del Maestro Neldo Sacomani con quien aprendio y entreno el SISTEMA COMPLETO Yip Man Foshan Ving Tsun, obteniendo el maximo grado de este estilo, siendo debidamente certificado y respaldado por su Maestro, la Asociación Internacional Wu Hsing Chuan y la Embajada de la Republica popular China. Actualmente se desempeña como: Director de la Academia Wing Chun Uruguay Presidente de la Asociación Uruguaya de Artes Marciales Chinas Tradicionales Miembro Activo y Representante Oficial de Wu Hsing Chuan Athletic Association Profesor de Wu Hsing Chuan Athletic Association en Argentina" ,
        image: "assets/img/sifu.jpg",
      }
    ]
  }
  hideAll(){
    this.showStart = false;
    this.showVingTsung = false;
    this.showLinage = false;
    this.showContacto = false;
  }
  goHome(){
    this.hideAll();
    this.showStart = true;
  }
  goVT(){
    this.hideAll();
    this.showVingTsung = true;
  }
  goLinage(){
    this.hideAll();
    this.showLinage = true;
  }
  goContacto(){
    this.hideAll();
    this.showContacto = true;
  }
  hideVT(){
    this.showVT = false;
    this.showCF = false;
    this.showL = false;
    this.showHistoria = false;
  }
  goVTDetails(){
    if(this.showVT){
      this.hideVT();
    }else{
      this.hideVT();
      this.showVT = !this.showVT;
    }
  }
  goCF(){
    if(this.showCF){
      this.hideVT();
    }else{
      this.hideVT();
      this.showCF = !this.showCF;
    }
  }
  goL(){
    if(this.showL){
      this.hideVT();
    }else{
      this.hideVT();
      this.showL = !this.showL;
    }
  }
  goH(){
    if(this.showHistoria){
      this.hideVT();
    }else{
      this.hideVT();
      this.showHistoria = !this.showHistoria;
    }
  }
  showDesc(){
    console.log("click");
  }
}
