import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DataStorageServicie } from '../shared/data-storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageServicie){}

  onSaveData(){
    this.dataStorageService.storeRecipies();
  }
  onFetchData(){
    this.dataStorageService.fetchData().subscribe();
  }
}
