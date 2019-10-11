import React, { Component } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, AmbientLight, HemisphereLight, HemisphereLightHelper } from 'three';
import tvGLTF from '../gltf/tv2.gltf';
import adamHead from '../gltf/adamHead/adamHead.gltf';

export class Main extends Component {
    componentDidMount(){
        var scene = new Scene();
        var camera = new PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 10000);
        camera.position.set( 0, 600, 2000 );
        var renderer = new WebGLRenderer({ antialias: true });
        renderer.setSize( window.innerWidth, window.innerHeight );
        var controls = new OrbitControls( camera, renderer.domElement );
        document.body.appendChild( renderer.domElement );
        
        var hemiLight = new HemisphereLight( 0xffffff, 0xffffff, 0.8 );
        hemiLight.color.setHSL( 1, 1, 1 );
        hemiLight.groundColor.setHSL( 1, 1, 0.75 );
        hemiLight.position.set( 1000, 2000, 0 );
        scene.add( hemiLight );
        var hemiLightHelper = new HemisphereLightHelper( hemiLight, 10 );
        scene.add( hemiLightHelper );

        console.log(tvGLTF);
        let model;

        let loader = new GLTFLoader();
        loader.load(tvGLTF, (gltf) => {
            console.log("working");
            console.log(gltf.scene.position);
            model = gltf.scene;
            model.position.set( 0, -150, 0);
            scene.add(model);
            
        },
        (xhr) => {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        (error) => {
            console.log(error);
        });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }, false);

        var animate = function () {
            requestAnimationFrame( animate );

            if(model){
                //model.rotation.x += 0.01;
                model.rotation.y += 0.01;
            }
            controls.update();

            renderer.render( scene, camera );
        };

        animate();
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Main
