var APP_DATA = {
  "scenes": [
    {
      "id": "0-chalte-firte-entry",
      "name": "Chalte Firte Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.01464611959714901,
        "pitch": 0.2783004778575151,
        "fov": 1.401790153743267
      },
      "linkHotspots": [
        {
          "yaw": -1.206103729115794,
          "pitch": 0.5214465251326281,
          "rotation": 0,
          "target": "1-hotspot-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hotspot-1",
      "name": "Hotspot 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.8633170139521367,
        "pitch": 0.4115494224881484,
        "fov": 1.401790153743267
      },
      "linkHotspots": [
        {
          "yaw": 2.9025774869725796,
          "pitch": 0.3447636780344183,
          "rotation": 0,
          "target": "2-hotspot-2"
        },
        {
          "yaw": -0.11308556786661406,
          "pitch": 0.36348385212094314,
          "rotation": 1.5707963267948966,
          "target": "0-chalte-firte-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hotspot-2",
      "name": "Hotspot 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.27583525241309204,
        "pitch": 0.31523510634417207,
        "fov": 1.401790153743267
      },
      "linkHotspots": [
        {
          "yaw": 0.13862750348447328,
          "pitch": 0.3605184090652127,
          "rotation": 0,
          "target": "1-hotspot-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
