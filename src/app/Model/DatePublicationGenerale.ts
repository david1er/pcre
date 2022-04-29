import { getLocaleDayNames } from "@angular/common";

export class DatePublicationGenerale{
    idDatePublicationGenerale:number;
    date_publicationGeneraleDebut:Date;
    date_publicationGeneraleFin:Date;

  constructor(idDatePublicationGenerale: number, date_publicationGeneraleDebut:Date,date_publicationGeneraleFin:Date) {
    this.idDatePublicationGenerale = idDatePublicationGenerale
    this.date_publicationGeneraleDebut = date_publicationGeneraleDebut
    this.date_publicationGeneraleFin = date_publicationGeneraleFin
  }
getName():string{
    return '${this.idDatePublicationGenerale}';
}
}