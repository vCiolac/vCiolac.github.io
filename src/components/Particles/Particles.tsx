import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particle() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div id="particles-js">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          "autoPlay": true,
          "clear": true,
          "defaultThemes": {},
          "delay": 0,
          "fullScreen": {
            "enable": true,
            "zIndex": 0
          },
          "detectRetina": true,
          "duration": 0,
          "fpsLimit": 120,
          "interactivity": {
            "detectsOn": "window",
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onDiv": {
                "selectors": [],
                "enable": false,
                "mode": [],
                "type": "circle"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 2,
                  "smooth": 10
                }
              },
              "resize": {
                "delay": 0.5,
                "enable": true
              }
            },
            "modes": {
              "trail": {
                "delay": 1,
                "pauseOnStop": false,
                "quantity": 1
              },
              "attract": {
                "distance": 200,
                "duration": 0.4,
                "easing": "ease-out-quad",
                "factor": 1,
                "maxSpeed": 50,
                "speed": 1
              },
              "bounce": {
                "distance": 200
              },
              "bubble": {
                "distance": 40,
                "duration": 2,
                "mix": false,
                "opacity": 8,
                "size": 20,
                "divs": {
                  "distance": 200,
                  "duration": 0.4,
                  "mix": false,
                  "selectors": []
                }
              },
              "connect": {
                "distance": 80,
                "links": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 100,
                "links": {
                  "blink": false,
                  "consent": false,
                  "opacity": 1
                }
              },
              "push": {
                "default": true,
                "groups": [],
                "quantity": 4
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4,
                "factor": 100,
                "speed": 1,
                "maxSpeed": 50,
                "easing": "ease-out-quad",
                "divs": {
                  "distance": 200,
                  "duration": 0.4,
                  "factor": 100,
                  "speed": 1,
                  "maxSpeed": 50,
                  "easing": "ease-out-quad",
                  "selectors": []
                }
              },
              "slow": {
                "factor": 3,
                "radius": 200
              },
              "light": {
                "area": {
                  "gradient": {
                    "bootstrapt": {
                      "value": "#ffffff"
                    },
                    "stop": {
                      "value": "#000000"
                    }
                  },
                  "radius": 1000
                },
                "shadow": {
                  "color": {
                    "value": "#000000"
                  },
                  "length": 2000
                }
              }
            }
          },
          "manualParticles": [],
          "particles": {
            "bounce": {
              "horizontal": {
                "value": 1
              },
              "vertical": {
                "value": 1
              }
            },
            "collisions": {
              "absorb": {
                "speed": 2
              },
              "bounce": {
                "horizontal": {
                  "value": 1
                },
                "vertical": {
                  "value": 1
                }
              },
              "enable": false,
              "maxSpeed": 50,
              "mode": "bounce",
              "overlap": {
                "enable": true,
                "retries": 0
              }
            },
            "color": {
              "value": "#ffffff",
              "animation": {
                "h": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": true,
                  "offset": 0
                },
                "s": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": true,
                  "offset": 0
                },
                "l": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": true,
                  "offset": 0
                }
              }
            },
            "effect": {
              "close": true,
              "fill": true,
              "options": {},
              "type": []
            },
            "groups": {},
            "move": {
              "angle": {
                "offset": 0,
                "value": 90
              },
              "attract": {
                "distance": 200,
                "enable": false,
                "rotate": {
                  "x": 3000,
                  "y": 3000
                }
              },
              "center": {
                "x": 50,
                "y": 50,
                "mode": "percent",
                "radius": 0
              },
              "decay": 0,
              "distance": {},
              "direction": "none",
              "drift": 0,
              "enable": true,
              "gravity": {
                "acceleration": 9.81,
                "enable": false,
                "inverse": false,
                "maxSpeed": 50
              },
              "path": {
                "clamp": true,
                "delay": {
                  "value": 0
                },
                "enable": false,
                "options": {}
              },
              "outModes": {
                "default": "out",
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
              },
              "random": false,
              "size": false,
              "speed": 2,
              "spin": {
                "acceleration": 0,
                "enable": false
              },
              "straight": false,
              "trail": {
                "enable": false,
                "length": 10,
                "fill": {}
              },
              "vibrate": false,
              "warp": false
            },
            "number": {
              "density": {
                "enable": true,
                "width": 1920,
                "height": 1080
              },
              "limit": 0,
              "value": 80
            },
            "opacity": {
              "value": 1,
              "animation": {
                "count": 0,
                "enable": false,
                "speed": 2,
                "decay": 0,
                "delay": 0,
                "sync": false,
                "mode": "auto",
                "destroy": "none"
              }
            },
            "reduceDuplicates": false,
            "shadow": {
              "blur": 0,
              "color": {
                "value": "#000"
              },
              "enable": false,
              "offset": {
                "x": 0,
                "y": 0
              }
            },
            "shape": {
              "close": true,
              "fill": true,
              "options": {
                "image": [
                  {
                    "name": "js"
                  },
                  {
                    "name": "ts"
                  },
                  {
                    "name": "node"
                  },
                  {
                    "name": "react"
                  },
                  {
                    "name": "firebase"
                  },
                  {
                    "name": "docker"
                  },
                  {
                    "name": "mysql"
                  },
                  {
                    "name": "figma"
                  },
                  {
                    "name": "css"
                  },
                  {
                    "name": "csharp"
                  },
                  {
                    "name": "mongodb"
                  },
                  {
                    "name": "python"
                  },
                  {
                    "name": "bootstrap"
                  },
                  {
                    "name": "git"
                  },
                  {
                    "name": "aws"
                  },
                  {
                    "name": "godot"
                  },
                  {
                    "name": "jest"
                  },
                  {
                    "name": "aws"
                  },
                  {
                    "name": "tailwind"
                  },
                  {
                    "name": "eslint"
                  },
                  {
                    "name": "mui"
                  },
                  {
                    "name": "md"
                  },
                  {
                    "name": "mocha"
                  },
                  {
                    "name": "npm"
                  },
                  {
                    "name": "redux"
                  },
                  {
                    "name": "slack"
                  },
                  {
                    "name": "trello"
                  },
                  {
                    "name": "express"
                  },
                ]
              },
              "type": "image"
            },
            "size": {
              "value": 10,
              "animation": {
                "count": 0,
                "enable": false,
                "speed": 5,
                "decay": 0,
                "delay": 0,
                "sync": false,
                "mode": "auto",
                "destroy": "none"
              }
            },
            "stroke": {
              "width": 0
            },
            "zIndex": {
              "value": 0,
              "opacityRate": 1,
              "sizeRate": 1,
              "velocityRate": 1
            },
            "destroy": {
              "bounds": {},
              "mode": "none",
              "split": {
                "count": 1,
                "factor": {
                  "value": 3
                },
                "rate": {
                  "value": {
                    "min": 4,
                    "max": 9
                  }
                },
                "sizeOffset": true,
                "particles": {}
              }
            },
            "roll": {
              "darken": {
                "enable": false,
                "value": 0
              },
              "enable": false,
              "enlighten": {
                "enable": false,
                "value": 0
              },
              "mode": "vertical",
              "speed": 25
            },
            "tilt": {
              "value": 0,
              "animation": {
                "enable": false,
                "speed": 0,
                "decay": 0,
                "sync": false
              },
              "direction": "clockwise",
              "enable": false
            },
            "twinkle": {
              "lines": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
              },
              "particles": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
              }
            },
            "wobble": {
              "distance": 5,
              "enable": false,
              "speed": {
                "angle": 50,
                "move": 10
              }
            },
            "life": {
              "count": 0,
              "delay": {
                "value": 0,
                "sync": false
              },
              "duration": {
                "value": 0,
                "sync": false
              }
            },
            "rotate": {
              "value": {
                "min": 0,
                "max": 360
              },
              "animation": {
                "enable": true,
                "speed": 5,
                "decay": 0,
                "sync": false
              },
              "direction": "random",
              "path": false
            },
            "orbit": {
              "animation": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": false
              },
              "enable": false,
              "opacity": 1,
              "rotation": {
                "value": 45
              },
              "width": 1
            },
            "links": {
              "blink": false,
              "color": {
                "value": "#fff"
              },
              "consent": false,
              "distance": 100,
              "enable": false,
              "frequency": 1,
              "opacity": 1,
              "shadow": {
                "blur": 5,
                "color": {
                  "value": "#000"
                },
                "enable": false
              },
              "triangles": {
                "enable": false,
                "frequency": 1
              },
              "width": 1,
              "warp": false
            },
            "repulse": {
              "value": 0,
              "enabled": false,
              "distance": 1,
              "duration": 1,
              "factor": 1,
              "speed": 1
            }
          },
          "pauseOnBlur": true,
          "pauseOnOutsideViewport": true,
          "responsive": [],
          "smooth": false,
          "style": {},
          "themes": [],
          "zLayers": 100,
          "name": "Images",
          "preload": [
            {
              "src": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
              "gif": false,
              "height": 32,
              "name": "js",
              "width": 32
            },
            {
              "src": "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
              "gif": false,
              "height": 32,
              "name": "ts",
              "width": 32
            },
            {
              "src": "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
              "gif": false,
              "height": 32,
              "name": "node",
              "width": 32
            },
            {
              "src": "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
              "gif": false,
              "height": 32,
              "name": "react",
              "width": 32
            },
            {
              "src": "https://jafapps.com.br/wp-content/uploads/2019/01/jafapps_.png",
              "gif": false,
              "height": 32,
              "name": "firebase",
              "width": 32
            },
            {
              "src": "https://cdn-icons-png.flaticon.com/512/919/919853.png",
              "gif": false,
              "height": 32,
              "name": "docker",
              "width": 32
            },
            {
              "src": "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
              "gif": false,
              "height": 32,
              "name": "mysql",
              "width": 32
            },
            {
              "src": "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
              "gif": false,
              "height": 32,
              "name": "figma",
              "width": 32
            },
            {
              "src": "https://cdn-icons-png.flaticon.com/512/732/732190.png",
              "gif": false,
              "height": 32,
              "name": "css",
              "width": 32
            },
            {
              "src": "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
              "gif": false,
              "height": 32,
              "name": "csharp",
              "width": 32
            },
            {
              "src": "https://miro.medium.com/v2/resize:fit:640/format:webp/1*doAg1_fMQKWFoub-6gwUiQ.png",
              "gif": false,
              "height": 32,
              "name": "mongodb",
              "width": 32
            },
            {
              "src": "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
              "gif": false,
              "height": 32,
              "name": "python",
              "width": 32
            },
            {
              "src": "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
              "gif": false,
              "height": 32,
              "name": "bootstrap",
              "width": 32
            },
            {
              "src": "https://cdn-icons-png.flaticon.com/512/11518/11518876.png",
              "gif": false,
              "height": 32,
              "name": "git",
              "width": 32
            },
            {
              "src": "https://cdn.iconscout.com/icon/free/png-512/free-aws-1869025-1583149.png?f=webp&w=256",
              "gif": false,
              "height": 32,
              "name": "aws",
              "width": 32
            },
            {
              "src": "https://user-images.mongodbusercontent.com/1646875/91680049-0b53b880-eb18-11ea-84f0-656e743e3a1c.png",
              "gif": false,
              "height": 32,
              "name": "godot",
              "width": 32
            },
            {
              "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg",
              "gif": false,
              "height": 32,
              "name": "jest",
              "width": 32
            },
            {
              "src": "https://www.svgrepo.com/show/448266/aws.svg",
              "gif": false,
              "height": 32,
              "name": "aws",
              "width": 32
            },
            {
              "src": "https://www.svgrepo.com/show/374118/tailwind.svg",
              "gif": false,
              "height": 32,
              "name": "tailwind",
              "width": 32
            },
            {
              "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
              "gif": false,
              "height": 32,
              "name": "eslint",
              "width": 32
            },
            {
              "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
              "gif": false,
              "height": 32,
              "name": "mui",
              "width": 32
            },
            {
              "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
              "gif": false,
              "height": 32,
              "name": "mk",
              "width": 32
            },
            {
              "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",
              "gif": false,
              "height": 32,
              "name": "mocha",
              "width": 32
            },
            {
              "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
              "gif": false,
              "height": 32,
              "name": "npm",
              "width": 32
            },
            {
              "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
              "gif": false,
              "height": 32,
              "name": "redux",
              "width": 32
            },
            {
              "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
              "gif": false,
              "height": 32,
              "name": "slack",
              "width": 32
            },
            {
              "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
              "gif": false,
              "height": 32,
              "name": "trello",
              "width": 32
            },
            {
              "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
              "gif": false,
              "height": 32,
              "name": "express",
              "width": 32
            }
          ],
          "motion": {
            "disable": false,
            "reduce": {
              "factor": 4,
              "value": true
            }
          }
        }}
      />
    </div>
  );
}