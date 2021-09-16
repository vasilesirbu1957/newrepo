export {createSkyboxFlowersScene, createHemisphereLight};

import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/examples/jsm/controls/OrbitControls.js';

//scene
function createSkyboxFlowersScene() {
  const skyboxFlowersScene = new THREE.Scene();
  //scene.background = new THREE.Color('skyblue'); //scene color
  //cube texture for the scene background
  const loader = new THREE.CubeTextureLoader();
  const texture = loader.load([
    'https://threejsfundamentals.org/threejs/resources/images/flower-1.jpg',
    'https://threejsfundamentals.org/threejs/resources/images/flower-2.jpg',
    'https://threejsfundamentals.org/threejs/resources/images/flower-3.jpg',
    'https://threejsfundamentals.org/threejs/resources/images/flower-4.jpg',
    'https://threejsfundamentals.org/threejs/resources/images/flower-5.jpg',
    'https://threejsfundamentals.org/threejs/resources/images/flower-6.jpg',
  ]);
  skyboxFlowersScene.background = texture; //set background texture (cube texture)
  return skyboxFlowersScene;
}

//hemisphere light to have light from everywhere
function createHemisphereLight({skyColor,groundColor,intensity},scene){
  const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
  scene.add(light); //add this light to the scene
  return light;
}

//directional light to have light from the given direction
function createDirectionalLight({color, intensity, x,y,z}, cam_or_scene){
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(x,y,z);
  cam_or_scene.add(light); //add this light to the scene
  return light;
}
