
import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Content) content: Content;
  private slides2 = [];
  private showStart = true;
  private showVingTsung = false;
  private showLinage = false;
  private showContacto = false;
  private showVT = false;
  private showCF = false;
  private showL = false;
  private showHistoria = false;
  private ipMan = true;
  private lunKai = false;
  private neldo = false;
  private sifu = false;
  private showCaracteristicas = false;
  private showSistema = false;
  private showAmigos = false;
  private showGaleria = false;
  private menuOpen = false;
  private activePage = "Inicio";

  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, private vibration :Vibration) {
    this.slides2 = [
      {
        //title: "Welcome to the Docs!",
        //description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
        image: "assets/img/vt1.png",
      },
      {
        //title: "Welcome to the Docs!",
        //description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
        image: "assets/img/banner-1.jpg",
      },
      {
        //title: "Welcome to the Docs!",
        //description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
        image: "assets/img/banner-5-2.jpg",
      }
    ];
  }
  

  
  hideAll() {
    this.showStart = false;
    this.showVingTsung = false;
    this.showLinage = false;
    this.showContacto = false;
    this.showAmigos = false;
    this.showGaleria = false;
    document.getElementById("menu-bar").click();
    this.scollUp();
  }

  vibra() {
	this.vibration.vibrate(500);
  }


  goGaleria(){
    this.hideAll();
    this.showGaleria = true;
    this.activePage = "Galeria";
  }
  goHome() {
    this.hideAll();
    this.showStart = true;
    this.activePage = "Inicio";
  }
  goAmigos(){
    this.hideAll();
    this.showAmigos = true;
    this.activePage = "Amigos";
  }
  goVT() {
    this.hideAll();
    this.showVingTsung = true;
    this.activePage = "Ving Tsun";
  }
  goLinage() {
    this.hideAll();
    this.showLinage = true;
    this.activePage = "Linaje";
  }
  goContacto() {
    this.hideAll();
    this.showContacto = true;
    this.activePage = "Contacto";
  }
  hideVT() {
    this.showVT = false;
    this.showCF = false;
    this.showL = false;
    this.showHistoria = false;
    this.showCaracteristicas = false;
    this.showSistema = false;
  }
  goVTDetails() {
    if (this.showVT) {
      this.hideVT();
    } else {
      this.hideVT();
      this.showVT = !this.showVT;
      this.content.scrollTo(0,50);
    }
  }
  goCF() {
    if (this.showCF) {
      this.hideVT();
    } else {
      this.hideVT();
      this.showCF = !this.showCF;
      this.content.scrollTo(0,280);
    }
  }
  goL() {
    if (this.showL) {
      this.hideVT();
    } else {
      this.hideVT();
      this.showL = !this.showL;
      this.content.scrollToTop();
      this.content.scrollTo(0,350);
    }
  }
  goH() {
    if (this.showHistoria) {
      this.hideVT();
    } else {
      this.hideVT();
      this.showHistoria = !this.showHistoria;
      this.content.scrollTo(0,420);
    }
  }
  goCaracteristicas(){
    if (this.showCaracteristicas) {
      this.hideVT();
    } else {
      this.hideVT();
      this.showCaracteristicas = !this.showCaracteristicas;
      this.content.scrollTo(0,120);
    }
	
  }
  goSistema(){
    if (this.showSistema) {
      this.hideVT();
    } else {
      this.hideVT();
      this.showSistema = !this.showSistema;
      this.content.scrollTo(0,200);
    }    
  }
  hideLinaje() {
    this.ipMan = false;
    this.lunKai = false;
    this.neldo = false;
    this.sifu = false;
  }
  showIpMan() {
    this.hideLinaje();
    this.ipMan = true;
	this.vibra();
  }
  showLunKai() {
    this.hideLinaje();
    this.lunKai = true;
	this.vibra();
  }
  showNeldo() {
    this.hideLinaje();
    this.neldo = true;
	this.vibra();
  }
  showSifu() {
    this.hideLinaje();
    this.sifu = true;
	this.vibra();
  }
  scollUp(){
    this.content.scrollToTop();
  }
  setMenu(){
    this.menuOpen = !this.menuOpen;
  }
  showMenu(){
    if(this.menuOpen){
      document.getElementById("menu-bar").click();
    }
  }
  
 hideMenu(e){
	if(this.menuOpen && e.direction==2){
	  document.getElementById("menu-bar").click();
	}
  } 
}

