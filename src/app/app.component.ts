import {
  Component,
  OnInit,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Html5QrcodeScanner} from "html5-qrcode";
import {Html5QrcodeResult} from "html5-qrcode/src/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'barcode-scanner';
  scanResult: Html5QrcodeResult = {decodedText: '', result: {text: ''}};
  decodedText: string = '';

  ngOnInit() {
    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      {fps: 10, qrbox: {width: 250, height: 250}},
      false);
    html5QrcodeScanner.render((decodedText: string, decodedResult: Html5QrcodeResult) => {
      console.log(`Code matched = ${decodedText}`, decodedResult);
      this.decodedText = decodedText;
      this.scanResult = decodedResult;
    }, (error: unknown) => {
      // handle scan failure, usually better to ignore and keep scanning.
      // console.warn(`Code scan error = ${error}`);
    });
  }
}
