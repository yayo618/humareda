#!/bin/bash
echo "function init(){" > fotos.js
for i in {1..13}
do
let ww=$(identify \-format '%w' fotos/$i.jpg)
let hh=$(identify \-format '%h' fotos/$i.jpg)
    echo "
	//cuadro $i
	var txt$i = new THREE.TextureLoader().load(\"fotos/$i.jpg\");
	var cdr$i = new THREE.Mesh(
	    new THREE.PlaneGeometry($ww/1000,$hh/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt$i})
	);
	//borde cuadro $i
	var cdrB$i = new THREE.Mesh(
	    new THREE.BoxGeometry($ww/1000,$hh/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr$i.position.set(($i*1.5)-10.5,0,-4.9);
	cdrB$i.position.set(($i*1.5)-10.5,0,-4.925);
	scene.add(cdr$i,cdrB$i);" >> fotos.js
done
for i in {14..26}
do
let ww=$(identify \-format '%w' fotos/$i.jpg)
let hh=$(identify \-format '%h' fotos/$i.jpg)
    echo "
	//cuadro $i
	var txt$i = new THREE.TextureLoader().load(\"fotos/$i.jpg\");
	var cdr$i = new THREE.Mesh(
	    new THREE.PlaneGeometry($ww/1000,$hh/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt$i})
	);
	//borde cuadro $i
	var cdrB$i = new THREE.Mesh(
	    new THREE.BoxGeometry($ww/1000,$hh/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr$i.position.set((($i-13)*1.5)-10.5,0,4.9);
	cdr$i.rotation.y = Math.PI;
	cdrB$i.position.set((($i-13)*1.5)-10.5,0,4.925);
	cdr$i.rotation.y = Math.PI;
	scene.add(cdr$i,cdrB$i);" >> fotos.js
done

echo "}
window.onload = init;" >> fotos.js
