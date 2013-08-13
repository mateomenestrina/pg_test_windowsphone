/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANaTIES OR CONDaITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    
    watchID : null,
    
    initialize: function() {
        
       
        document.addEventListener('deviceready', app.onDeviceReady, false);
        
    },
    
   
    onDeviceReady: function() {
        
         app.startWatch();
         
    },
                           

    startWatch: function () {
    
        var options = { frequency: 3000 };
        
       // app.watchID =    navigator.accelerometer.watchAcceleration(app.onSuccess, app.onError, options);
       
       // $('#acel').html(app.watchID)
    
    
    },

    onSuccess: function (acceleration) {
               
         //alert(app.watchID)
         
    },

    onError: function () {
      alert('onError!');
    },

    camera_getPicture: function(){
         navigator.camera.getPicture( app.onSuccess, app.onFail, { quality: 100, sourceType:Camera.PictureSourceType.PHOTOLIBRARY,  destinationType: Camera.DestinationType.DATA_URL});
    },
    
    
   onSuccess: function (imageData) {
     var image = document.getElementById('myImageCamera');
         image.src = "data:image/jpeg;base64," + imageData;
         image.width = 100
         image.height = 100
   },
    
   onFail: function(message) {
       alert('Failed because: ' + message);
   }

}

$(document).ready(app.initialize);

