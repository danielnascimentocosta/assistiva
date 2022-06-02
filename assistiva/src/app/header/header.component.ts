import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';
import { ControllStyles } from '../shared/services/controll-styles.service';

@Component({
  selector: 'assistiva-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Imagens
  public VICON = '../assets/images/vicon.png';
  public TECLA0 = '../assets/images/tecla0.png';
  public TECLA1 = '../assets/images/tecla1.png';
  public TECLA2 = '../assets/images/tecla2.png';
  public TECLA3 = '../assets/images/tecla3.png';

  // Tooltip texts
  public tootipPosition: TooltipPosition = 'above';
  public contrastText: string = 'Contraste';
  public increaseText: string = 'Aumentar fonte';
  public decreaseText: string = 'Diminuir fonte';
  public TITLE: string = 'PUC Assistiva';
  public IMAGEPATH = '../assets/logo/logo_puc_black_nobg.png';
  public SCREENREADER = 'https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn/related?hl=en-US';
  public VLIBRAS = 'https://www.nvaccess.org/download/';
  public visibleSidebar3;
  public tipoFonteList: any[];
  public tamanhoFonteList: any[];

  public tipoFonte;
  public tamanhoFonte;
  public color: string;
  public color2: string;
  public textAlign: string = "start";
  // Actions control
  public contrastClicked: Boolean = false;
  public showImages: Boolean = true;
  displayModal: boolean = false;
  
  constructor(public ctrl: ControllStyles) {}

  ngOnInit(): void {

    this.tipoFonteList = [
      {name: 'Arial', code: 'Arial'},
      {name: 'Helvetica', code: 'Helvetica'},
      {name: 'Tahoma', code: 'Tahoma'},
      {name: 'Verdanan', code: 'Verdana'}
    ];
    this.tamanhoFonteList = [
      {name: '10px', code: 10},
      {name: '12px', code: 12},
      {name: '15px', code: 15},
      {name: '18px', code: 18},
      {name: '20px', code: 20},
      {name: '25px', code: 25},
      {name: '30px', code: 30}
    ];
  }

  /**
   * This function change font size in all application when the user clicked and choices if they want increase or decrease font letter
   * @param choiced 
   */
  public changeFontSize(choiced:string):void{
    if(choiced==='increase' && this.ctrl.getFontSize() <= 30) {
      this.ctrl.setFontSize(this.ctrl.getFontSize()+2);
    } else if (choiced==='decrease' && this.ctrl.getFontSize() >= 10) {
      this.ctrl.setFontSize(this.ctrl.getFontSize()-2);
    } else {
      this.ctrl.getFontSize();
    }
  }

  public changeContrast():void{
    var contraste  = {
      'backgroundColor':this.contrastClicked?'white':'black',
      'color':this.contrastClicked?'black':'white'
    };
    this.contrastClicked = !this.contrastClicked;
    this.ctrl.setContraste(contraste);
  }

  // Configurações gerais

  public changeFontByConfig():void {
    try {
      if (this.tamanhoFonte) {
        this.ctrl.setFontSize(this.tamanhoFonte.code);
      }
    } catch {
      this.ctrl.setFontSize(12);
    }
  }

  public alignEnd(type: string):void {
    this.textAlign = type;
  }

  public alignCenter(type: string):void {
    this.textAlign = type;
  }

  public alignStart(type: string):void {
    this.textAlign = type;
  }

  public ocultarImagens():void {
    this.ctrl.setImagesVisibility({'visibility': this.showImages ? 'visible' : 'hidden'});
  }

  public changeConfiguration() {
    try {
      var contraste = {
        'backgroundColor': this.color2 || 'white',
        'color': this.color || 'black',
        'text-align': this.textAlign || 'start',
        'font-family': this.tipoFonte ? this.tipoFonte.code : 'Arial'
      };
      this.ctrl.setContraste(contraste);
    } catch {
      this.ctrl.setContraste(contraste);
    }
  }

  public aplicar():void {

    // if tamanho da fonte
    this.changeFontByConfig();

    this.ocultarImagens();

    // cor de fundo e texto, alinhamento e font
    this.changeConfiguration();
  }

  public limpar(): void {
    this.contrastClicked = false;
    const padrao = {'backgroundColor':'white', 'color':'black', 'text-align': 'start', 'font-family': 'Arial'};
    this.color = undefined;
    this.color2 = undefined;
    this.textAlign = "start";
    this.ctrl.setContraste(padrao);
    this.ctrl.setFontSize(12);
    this.showImages = true;
    this.ctrl.setImagesVisibility({'visibility':'visible'});
  }

  public showModalDialog(): void {
    this.displayModal = !this.displayModal;
  }
}