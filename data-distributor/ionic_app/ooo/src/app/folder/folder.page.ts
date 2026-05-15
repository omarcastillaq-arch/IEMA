import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private socket: Socket) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.socket.fromEvent('Ok').subscribe(data => {
      console.log(data);
      this.socket.emit('Ok', {Ok: 'got it'});
    });

    this.socket.fromEvent('data').subscribe(data => {
      console.log(data);
    });
  }

}
