import React, { Component } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, AmbientLight, HemisphereLight, HemisphereLightHelper, LoadingManager } from 'three';
//import tvGLTF from '../gltf/tv2.gltf';
import tvGLTF from '../gltf/tvModelNoTexture.gltf';
//import tvGLTF from '../gltf/tvModelChrome.gltf';
//import adamHead from '../gltf/adamHead/adamHead.gltf';

export class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount(){
        var scene = new Scene();
        var camera = new PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 10000);
        camera.position.set( 0, 0, 2500 );
        var renderer = new WebGLRenderer({ antialias: true });
        renderer.setSize( window.innerWidth, window.innerHeight );
        var controls = new OrbitControls( camera, renderer.domElement );
        document.body.appendChild( renderer.domElement );
        
        var manager = new LoadingManager();
        manager.onProgress = () => {

        }
        
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
            this.setState({
                loading: false
            });
            model = gltf.scene;
            model.position.set( 0, -400, 0);
            scene.add(model);
            
        },
        (xhr) => {
            if(xhr.lengthComputable){
                this.setState({
                    loading: true,
                    percent: Math.floor(xhr.loaded/xhr.total * 100)
                });
                console.log(`loaded: ${xhr.loaded}, total: ${xhr.total}, ${xhr.loaded/xhr.total * 100}`);
            }
            else{
                this.setState({
                    loading: true
                });
            }
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
        let loadingPage;

        if(this.state.loading){
            if(this.state.percent){
                loadingPage = <h1 className="center">L O A D I N G - {this.state.percent}%</h1>;
            }
            else{
                loadingPage = <h1 className="center">L O A D I N G</h1>;
            }
        }
        else{
            loadingPage = null;
            //loadingPage = <h1 className="center">L O A D I N G</h1>;
        }
        return (
            <div>
                {loadingPage}
            </div>
        )
    }
}

export default Main
