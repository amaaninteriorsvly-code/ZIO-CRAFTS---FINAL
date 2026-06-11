var APP_DATA = {
  "scenes": [
    {
      "id": "0-view-1",
      "name": "VIEW 1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.37054687561220945,
        "pitch": 0.0018797568267672204,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.7888478730734363,
          "pitch": 0.5666311717122152,
          "rotation": 0,
          "target": "1-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-view-2",
      "name": "VIEW 2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.1565946154779336,
        "pitch": 0.004729710725420944,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.0068752532097882,
          "pitch": 0.38771216593227287,
          "rotation": 0,
          "target": "2-view-3"
        },
        {
          "yaw": 1.9383874934563332,
          "pitch": 0.5083347530513898,
          "rotation": 0,
          "target": "0-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-view-3",
      "name": "VIEW 3",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.36199040900555346,
        "pitch": 0.00014722301566294504,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.0397794127162268,
          "pitch": 0.3924603433528002,
          "rotation": 0,
          "target": "1-view-2"
        },
        {
          "yaw": 0.058645704906211904,
          "pitch": 0.7211395138245944,
          "rotation": 0,
          "target": "3-view-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-view-4",
      "name": "VIEW 4",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.664732981244148,
        "pitch": -0.009195728791040025,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.689043866723128,
          "pitch": 0.5696903280227765,
          "rotation": 0,
          "target": "4-view-5"
        },
        {
          "yaw": -2.054253544989878,
          "pitch": 0.6494151644959913,
          "rotation": 1.5707963267948966,
          "target": "2-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-view-5",
      "name": "VIEW 5",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5467555897205489,
        "pitch": 0.005797376822313183,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.9545189562344554,
          "pitch": 1.4291393091032,
          "rotation": 5.497787143782138,
          "target": "3-view-4"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ZIO CRAFT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
