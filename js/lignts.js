export {createHemisphereLight};

import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/examples/jsm/controls/OrbitControls.js';

//hemisphereLight
function createHemisphereLight({skyColor,groundColor,intensity},scene){
  const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
  scene.add(light); //add this light to the scene
  return light;
}
