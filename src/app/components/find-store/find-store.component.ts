import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-find-store',
  templateUrl: './find-store.component.html',
  styleUrls: ['./find-store.component.scss']
})
export class FindStoreComponent implements OnInit {
  @ViewChild('findStoreSearch') findStoreSearch: ElementRef = new ElementRef('input');
  constructor() { }
  latitude: number = 22.0;
  longitude: number = 37.0;

  map: any;

  ngOnInit() {

  }
  // 
  viewStore() {
    if (this.findStoreSearch.nativeElement.value == 'egypt') {
      this.map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([22.0, 37.0]),
          zoom: 5
        })
      });
      console.log("value: ", this.findStoreSearch.nativeElement.value);
      var view = this.map.getView();
      view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
      view.setZoom(5);
    }
    else {
      this.viewAll();
    }
  }
  viewAll() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([22.5204, 73.8500]),
        zoom: 8
      })
    });
    // 
    console.log("value: ", this.findStoreSearch.nativeElement.value);
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([73.8500, 22.5204]));
    // view.setZoom(8);
  }
}
