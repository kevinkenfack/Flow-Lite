export const initialFlows = [
    {
        "id": "RYfFwda7",
        "name": "Sign in / sign up example",
        "nodes": [
            {
                "id": "uV2ATAiU",
                "type": "website",
                "position": {
                    "x": 503.3736234852226,
                    "y": -94.50384551393502
                },
                "data": {
                    "label": "Website",
                    "color": "gray"
                },
                "measured": {
                    "width": 82,
                    "height": 89
                },
                "selected": false,
                "dragging": false
            },
            {
                "id": "l6SaDheX",
                "type": "signIn",
                "position": {
                    "x": 337.4047478584125,
                    "y": 56.626210802274755
                },
                "data": {
                    "label": "Retry login",
                    "color": "gray"
                },
                "measured": {
                    "width": 82,
                    "height": 98
                },
                "selected": false,
                "dragging": false
            },
            {
                "id": "VPYXMU88",
                "type": "roundrectangle",
                "position": {
                    "x": 181.83486956109522,
                    "y": -8.602447538322522
                },
                "data": {
                    "label": "Login correct ?",
                    "color": "sky"
                },
                "measured": {
                    "width": 101,
                    "height": 30
                },
                "selected": false,
                "dragging": false,
                "width": 101,
                "height": 30,
                "resizing": false
            },
            {
                "id": "NvfUkgZE",
                "type": "roundrectangle",
                "position": {
                    "x": 474.0300624648629,
                    "y": 77.90821161383874
                },
                "data": {
                    "label": "Incorrect more then 3 times",
                    "color": "red"
                },
                "measured": {
                    "width": 104,
                    "height": 50
                },
                "selected": false,
                "dragging": false,
                "width": 104,
                "height": 50,
                "resizing": false
            },
            {
                "id": "f84B7gwl",
                "type": "form",
                "position": {
                    "x": 636.6108461543514,
                    "y": 23.008365668141664
                },
                "data": {
                    "label": "Passwor reset",
                    "color": "gray"
                },
                "measured": {
                    "width": 82,
                    "height": 106
                },
                "selected": false,
                "dragging": false
            },
            {
                "id": "PcabjchL",
                "type": "roundrectangle",
                "position": {
                    "x": -95.06311226210181,
                    "y": -171.42936101567153
                },
                "data": {
                    "label": "User 👨‍💻",
                    "color": "indigo"
                },
                "measured": {
                    "width": 74,
                    "height": 44
                },
                "selected": false,
                "dragging": false,
                "width": 74,
                "height": 44,
                "resizing": false
            },
            {
                "id": "fLQscaeK",
                "type": "signIn",
                "position": {
                    "x": 64.91689761536796,
                    "y": -97.10961618900431
                },
                "data": {
                    "label": "Sign In",
                    "color": "gray"
                },
                "measured": {
                    "width": 82,
                    "height": 98
                },
                "selected": false,
                "dragging": false
            },
            {
                "id": "f2snSUMb",
                "type": "register",
                "position": {
                    "x": 68.03996810333336,
                    "y": -260.6810447604329
                },
                "data": {
                    "label": "Register",
                    "color": "gray"
                },
                "measured": {
                    "width": 82,
                    "height": 98
                },
                "selected": false,
                "dragging": false
            },
            {
                "id": "W_mhQinZ",
                "type": "roundrectangle",
                "position": {
                    "x": 348.6190379128456,
                    "y": -208.45240521788602
                },
                "data": {
                    "label": " ✉️ Verify Email",
                    "color": "sky"
                },
                "measured": {
                    "width": 94,
                    "height": 30
                },
                "selected": false,
                "dragging": false,
                "width": 94,
                "height": 30,
                "resizing": false
            },
            {
                "id": "ZBiKsseP",
                "type": "roundrectangle",
                "position": {
                    "x": 210.4046794020447,
                    "y": -282.0000291186061
                },
                "data": {
                    "label": "Submit registration",
                    "color": "gray"
                },
                "measured": {
                    "width": 129,
                    "height": 30
                },
                "selected": false,
                "dragging": false,
                "width": 129,
                "height": 30,
                "resizing": false
            },
            {
                "id": "gditxqMz",
                "type": "roundrectangle",
                "position": {
                    "x": 511.0875535166568,
                    "y": -239.92866554551867
                },
                "data": {
                    "label": "Error",
                    "color": "red"
                },
                "measured": {
                    "width": 70,
                    "height": 30
                },
                "selected": false,
                "dragging": false,
                "width": 70,
                "height": 30,
                "resizing": false
            },
            {
                "id": "iSoA65Wu",
                "type": "website",
                "position": {
                    "x": 640.5369288132789,
                    "y": -307.96310448515686
                },
                "data": {
                    "label": "Error page",
                    "color": "gray"
                },
                "measured": {
                    "width": 82,
                    "height": 89
                },
                "selected": false,
                "dragging": false
            }
        ],
        "edges": [
            {
                "source": "PcabjchL",
                "sourceHandle": "dPcabjchL",
                "target": "f2snSUMb",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "gray",
                    "strokeWidth": 1
                },
                "id": "xy-edge__PcabjchLdPcabjchL-f2snSUMb",
                "selected": false,
                "label": ""
            },
            {
                "source": "PcabjchL",
                "sourceHandle": "dPcabjchL",
                "target": "fLQscaeK",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "gray",
                    "strokeWidth": 1
                },
                "id": "xy-edge__PcabjchLdPcabjchL-fLQscaeK",
                "selected": false
            },
            {
                "source": "fLQscaeK",
                "target": "VPYXMU88",
                "targetHandle": "aVPYXMU88",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "sky",
                    "strokeWidth": 1
                },
                "id": "xy-edge__fLQscaeK-VPYXMU88aVPYXMU88",
                "selected": false,
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#38bdf8"
                }
            },
            {
                "source": "VPYXMU88",
                "sourceHandle": "dVPYXMU88",
                "target": "uV2ATAiU",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "green",
                    "strokeWidth": 1
                },
                "id": "xy-edge__VPYXMU88dVPYXMU88-uV2ATAiU",
                "selected": false,
                "label": "Success",
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#4ade80"
                }
            },
            {
                "source": "VPYXMU88",
                "sourceHandle": "dVPYXMU88",
                "target": "l6SaDheX",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "gray",
                    "strokeWidth": 1
                },
                "id": "xy-edge__VPYXMU88dVPYXMU88-l6SaDheX"
            },
            {
                "source": "l6SaDheX",
                "target": "NvfUkgZE",
                "targetHandle": "bNvfUkgZE",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "red",
                    "strokeWidth": 1
                },
                "id": "xy-edge__l6SaDheX-NvfUkgZEbNvfUkgZE",
                "selected": false,
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#f87171"
                },
                "label": ""
            },
            {
                "source": "NvfUkgZE",
                "sourceHandle": "dNvfUkgZE",
                "target": "f84B7gwl",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "gray",
                    "strokeWidth": 1
                },
                "id": "xy-edge__NvfUkgZEdNvfUkgZE-f84B7gwl",
                "selected": false,
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#c3c6cc"
                },
                "label": ""
            },
            {
                "source": "f2snSUMb",
                "target": "ZBiKsseP",
                "targetHandle": "bZBiKsseP",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "gray",
                    "strokeWidth": 1
                },
                "id": "xy-edge__f2snSUMb-ZBiKssePbZBiKsseP",
                "selected": false,
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#c3c6cc"
                }
            },
            {
                "source": "ZBiKsseP",
                "sourceHandle": "cZBiKsseP",
                "target": "W_mhQinZ",
                "targetHandle": "bW_mhQinZ",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "sky",
                    "strokeWidth": 1
                },
                "id": "xy-edge__ZBiKssePcZBiKsseP-W_mhQinZbW_mhQinZ",
                "selected": false,
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#38bdf8"
                },
                "label": ""
            },
            {
                "source": "W_mhQinZ",
                "sourceHandle": "dW_mhQinZ",
                "target": "fLQscaeK",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "green",
                    "strokeWidth": 1,
                    "pathStyle": "step"
                },
                "id": "xy-edge__W_mhQinZdW_mhQinZ-fLQscaeK",
                "selected": false,
                "label": "Success - Redirect to Sign in",
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#4ade80"
                }
            },
            {
                "source": "W_mhQinZ",
                "sourceHandle": "dW_mhQinZ",
                "target": "gditxqMz",
                "targetHandle": "bgditxqMz",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "red",
                    "strokeWidth": 1
                },
                "id": "xy-edge__W_mhQinZdW_mhQinZ-gditxqMzbgditxqMz",
                "selected": false,
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#f87171"
                }
            },
            {
                "source": "gditxqMz",
                "sourceHandle": "dgditxqMz",
                "target": "iSoA65Wu",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "red",
                    "strokeWidth": 1
                },
                "id": "xy-edge__gditxqMzdgditxqMz-iSoA65Wu",
                "selected": false,
                "label": "",
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#f87171"
                }
            }
        ],
        "group": null,
        "updatedAt": 1734257227721
    },
    {
        "id": "s9BUQs-F",
        "name": "Base flow",
        "nodes": [
            {
                "id": "7vGWidUZ",
                "type": "website",
                "position": {
                    "x": -38.57142857142857,
                    "y": 6.428571428571431
                },
                "data": {
                    "label": "Home page",
                    "color": "gray"
                },
                "measured": {
                    "width": 82,
                    "height": 89
                },
                "selected": false,
                "dragging": false
            },
            {
                "id": "YnfHJZo2",
                "type": "roundrectangle",
                "position": {
                    "x": 98.57142857142858,
                    "y": 37.14285714285714
                },
                "data": {
                    "label": "Search for products",
                    "color": "gray"
                },
                "measured": {
                    "width": 129,
                    "height": 30
                },
                "selected": false,
                "dragging": false,
                "width": 129,
                "height": 30,
                "resizing": false
            },
            {
                "id": "v0LqwIW3",
                "type": "website",
                "position": {
                    "x": 393.57142857142856,
                    "y": 72.85714285714286
                },
                "data": {
                    "label": "No result page",
                    "color": "gray"
                },
                "measured": {
                    "width": 82,
                    "height": 89
                },
                "selected": false,
                "dragging": false
            },
            {
                "id": "pJkS7GeK",
                "type": "website",
                "position": {
                    "x": 393.57142857142856,
                    "y": -57.14285714285711
                },
                "data": {
                    "label": "Search result",
                    "color": "gray"
                },
                "measured": {
                    "width": 82,
                    "height": 89
                },
                "selected": false,
                "dragging": false
            }
        ],
        "edges": [
            {
                "source": "7vGWidUZ",
                "target": "YnfHJZo2",
                "targetHandle": "bYnfHJZo2",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "gray",
                    "strokeWidth": 1
                },
                "id": "xy-edge__7vGWidUZ-YnfHJZo2bYnfHJZo2",
                "selected": false,
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#c3c6cc"
                }
            },
            {
                "source": "YnfHJZo2",
                "sourceHandle": "dYnfHJZo2",
                "target": "v0LqwIW3",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "red",
                    "strokeWidth": 1
                },
                "id": "xy-edge__YnfHJZo2dYnfHJZo2-v0LqwIW3",
                "selected": false,
                "label": "Not found",
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#f87171"
                }
            },
            {
                "source": "YnfHJZo2",
                "sourceHandle": "dYnfHJZo2",
                "target": "pJkS7GeK",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "sky",
                    "strokeWidth": 1
                },
                "id": "xy-edge__YnfHJZo2dYnfHJZo2-pJkS7GeK",
                "selected": false,
                "label": "Product found",
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#38bdf8"
                }
            }
        ],
        "group": null,
        "updatedAt": 1734257140436
    }
]