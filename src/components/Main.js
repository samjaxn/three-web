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
        var renderer = new WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        var controls = new OrbitControls( camera, renderer.domElement );
        document.body.appendChild( renderer.domElement );
        
        camera.position.y = 200;
        camera.position.z = 2000;

        var light = new AmbientLight( 0x000f0f ); // soft white light
        scene.add( light );
        
        
        var hemiLight = new HemisphereLight( 0xffffff, 0xffffff, 0.6 );
        hemiLight.color.setHSL( 0.6, 1, 0.6 );
        hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
        hemiLight.position.set( 0, 50, 0 );
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
            scene.add(model);
            
        },
        (xhr) => {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        (error) => {
            console.log(error);
        });

        var animate = function () {
            requestAnimationFrame( animate );

            if(model){
                //model.rotation.x += 0.01;
                model.rotation.y += 0.01;
            }
            

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
