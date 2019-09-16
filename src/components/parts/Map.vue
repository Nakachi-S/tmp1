<template>
  <v-ons-page>
    <div id='map'></div>
  </v-ons-page>
</template>

<script>
/* eslint-disable */
import  'leaflet/dist/leaflet.css'
import  L from 'leaflet'
delete  L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions(
    {   iconUrl         : require( 'leaflet/dist/images/marker-icon.png' )
    ,   iconRetinaUrl   : require( 'leaflet/dist/images/marker-icon-2x.png' )
    ,   shadowUrl       : require( 'leaflet/dist/images/marker-shadow.png' )
    }
)
export default {
    mounted() {
      // このページがロード（マウント）された時の処理
      var mymap = L.map('map');
 
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    		maxZoom: 18,
    		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, '
    	}).addTo(mymap);
 
      function onLocationFound(e) {
          L.marker(e.latlng).addTo(mymap).bindPopup("現在地").openPopup();
      }
 
      function onLocationError(e) {
          alert("現在地を取得できませんでした。" + e.message);
      }
 
      mymap.on('locationfound', onLocationFound);
      mymap.on('locationerror', onLocationError);
 
      mymap.locate({setView: true, maxZoom: 16, timeout: 20000});
    }
}
</script>

<style>
html, body, #map { height: 100% }
body { margin: 0 }
</style>