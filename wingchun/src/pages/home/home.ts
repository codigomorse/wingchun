import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
  private ipManImg = true;
  private lunKaiImg = false;
  private neldoImg = false;
  private sifuImg = false;  

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
  }
  hideAll() {
    this.showStart = false;
    this.showVingTsung = false;
    this.showLinage = false;
    this.showContacto = false;
    document.getElementById("menu-bar").click();
  }
  goHome() {
    this.hideAll();
    this.showStart = true;
  }
  goVT() {
    this.hideAll();
    this.showVingTsung = true;
  }
  goLinage() {
    this.hideAll();
    this.showLinage = true;
  }
  goContacto() {
    this.hideAll();
    this.showContacto = true;
  }
  hideVT() {
    this.showVT = false;
    this.showCF = false;
    this.showL = false;
    this.showHistoria = false;
  }
  goVTDetails() {
    if (this.showVT) {
      this.hideVT();
    } else {
      this.hideVT();
      this.showVT = !this.showVT;
    }
  }
  goCF() {
    if (this.showCF) {
      this.hideVT();
    } else {
      this.hideVT();
      this.showCF = !this.showCF;
    }
  }
  goL() {
    if (this.showL) {
      this.hideVT();
    } else {
      this.hideVT();
      this.showL = !this.showL;
    }
  }
  goH() {
    if (this.showHistoria) {
      this.hideVT();
    } else {
      this.hideVT();
      this.showHistoria = !this.showHistoria;
    }
  }
  hideLinaje() {
    this.ipMan = false;
    this.lunKai = false;
    this.neldo = false;
    this.sifu = false;
    this.ipManImg = false;
    this.lunKaiImg = false;
    this.neldoImg = false;
    this.sifuImg = false;

  }
  showIpMan() {
    this.hideLinaje();
    this.ipMan = true;
	this.ipManImg = true;
  }
  showLunKai() {
    this.hideLinaje();
    this.lunKai = true;
	this.lunKaiImg = true;
  }
  showNeldo() {
    this.hideLinaje();
    this.neldo = true;
	this.neldoImg = true;
  }
  showSifu() {
    this.hideLinaje();
    this.sifu = true;
	this.sifuImg = true;
  }
}
