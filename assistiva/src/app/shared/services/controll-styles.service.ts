import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ControllStyles {

    contraste: any = {'backgroundColor':'white', 'color':'black'};
    fontSize: number = 12;
    alignText: string = "start";
    fontFamily: string = "Arial";
    imagesVisibility: any = {'visibility':'visible'};

    constructor(){}

    public getContrast(){
        return this.contraste;
    }

    public getFontSize(){
        return this.fontSize;
    }

    public getAlign() {
        // start, end e center
        return this.alignText;
    }

    public getFontFamily() {
        return this.fontFamily;
    }

    public getImagesVisibility() {
        return this.imagesVisibility;
    }

    public setContraste(contraste: any){
        this.contraste = contraste;
    }

    public setFontSize(font: number){
        this.fontSize = font;
    }

    public setAlign(align: string) {
        this.alignText = align;
    }

    public setFontFamily(font: string) {
        this.fontFamily = font;
    }

    public setImagesVisibility(img: any) {
        this.imagesVisibility = img;
    }
}
