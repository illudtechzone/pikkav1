import { LocationService } from './../../services/location/location.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  GoogleAutocomplete: any;
  autocomplete: any;
  autocompleteItems = [];
  currentSearchBar = '';
  fromAddress: string;
  toAddress: string;
  constructor(private locationService: LocationService) {}

  updateSearchResults(searchBar: string) {

    console.log('searching...');
    this.currentSearchBar = searchBar;
    let data = '';
    if (this.currentSearchBar === 'from') {
      data = this.fromAddress;


    } else {
      data = this.toAddress;

    }
    if (data == '') {
      this.autocompleteItems = [];
      return;
    }
    this.locationService.getAdressPredictions(data).then((resp: any[]) => {
      this.autocompleteItems = resp;
    }, err => {
      console.log('prediction.err...g', err);

    });
  }

  selectSearchResult(item: any) {

    console.log('selected item is ', item.description);

    if (this.currentSearchBar === 'from') {
      this.fromAddress = item.description;
      // this.fromPlaceId = item.place_id;
    } else {
      this.toAddress = item.description;
      // this.toPlaceId = item.place_id;
    }
    console.log('current route is ', this.fromAddress,this.toAddress);

  }


}

