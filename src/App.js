import React, { Component } from 'react';
import * as THREE from 'three-full'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.width = this.mount.clientWidth;
    this.height = this.mount.clientHeight;
    this.scene = new THREE.Scene();

    this.createRenderer();
    this.createCamera();
    this.createPointLight();
    this.createControls();
    this.loadRoom();
    this.start();
  }

  threeRef = (mount) => this.mount = mount;

  loadRoom = () => {
    this.loader = new THREE.OBJLoader();
    this.loader.load(
      'room.obj',
      (room) => {
        this.scene.add(room);
        window.addEventListener('resize', this.onWindowResize, false);
      },
      () => { },
      () => console.error('Loading error')
    )
  };

  createRenderer = () => {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#000');
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.mount.appendChild(this.renderer.domElement);
  };

  createCamera = () => {
    this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.03, 100);
    this.camera.position.set(-5, 5, 0);
    this.scene.add(this.camera);
  };

  createPointLight = () => {
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(-5, 5, 0);
    this.scene.add(light);
  };

  createControls = () => {
    this.controls = new THREE.OrbitControls(this.camera, this.render.domElement);
    this.controls.minDistance = 0.1;
    this.controls.maxDistance = 15;
    this.controls.maxPolarAngle = Math.PI / 2;
  };

  onWindowResize = () => {
    try {
      this.renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
    } catch (e) {
      console.log('error', e)
    }
  };

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  animate = () => {
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        className="App"
        ref={this.threeRef}
      />
    );
  }
}

export default App;
