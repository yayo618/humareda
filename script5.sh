#!/bin/bash
for i in {33..40}
do
let ww=$(identify \-format '%w' img/cuadr/d$i.jpg)
let hh=$(identify \-format '%h' img/cuadr/d$i.jpg)
    echo "
	//cuadro $i
	var c_txt$i = new THREE.TextureLoader().load(\"img/cuadr/d$i.jpg\");
	var c_cdr$i = new THREE.Mesh(
	    new THREE.PlaneGeometry($ww/1000,$hh/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt$i})
	);
	//borde cuadro $i
	var c_cdrB$i = new THREE.Mesh(
	    new THREE.BoxGeometry($ww/1000,$hh/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr$i.position.set(10.35,0,5-(($i-32)*1.5));
	c_cdrB$i.position.set(10.325,0,5-(($i-32)*1.5));
	c_cdr$i.rotation.y += Math.PI/2;
	c_cdrB$i.rotation.y += Math.PI/2;
	scene.add(c_cdr$i,c_cdrB$i);" >> cuadros.js
done
echo "}
window.onload = init;" >> cuadros.js
