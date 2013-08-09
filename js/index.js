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
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    
    

    // Application Constructor
    initialize: function() {
        
        this.bindEvents();
    },
  
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    

    onDeviceReady: function() {

        this.receivedEvent('deviceready');
  
        setInterval(function(){
             navigator.accelerometer.getCurrentAcceleration(app.onSuccess, app.onError);
        }, 1000)
       

    },
    
    onSuccess: function (acceleration) {
        $('#acel').html('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n')
    },

   onError: function () {
        alert('onError!');
    },

    receivedEvent: function(id) {
        
    
    
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
    
    
    
};
