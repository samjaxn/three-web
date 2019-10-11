import React, { Component } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, AmbientLight } from 'three';
import tvGLTF from '../gltf/tv2.gltf'

export class Main extends Component {
    componentDidMount(){
        var scene = new Scene();
        var camera = new PerspectiveCamera( 50, window.innerWidth/window.innerHeight);

        var renderer = new WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        camera.position.z = 2000;

        var light = new AmbientLight( 0xd0d0d0 ); // soft white light
        scene.add( light );

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
                model.rotation.x += 0.01;
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
