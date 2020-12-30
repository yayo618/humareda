function init(){

	//cuadro 1
	var txt1 = new THREE.TextureLoader().load("fotos/1.jpg");
	var cdr1 = new THREE.Mesh(
	    new THREE.PlaneGeometry(853/1000,1280/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt1})
	);
	//borde cuadro 1
	var cdrB1 = new THREE.Mesh(
	    new THREE.BoxGeometry(853/1000,1280/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr1.position.set((1*1.5)-10.5,0,-4.9);
	cdrB1.position.set((1*1.5)-10.5,0,-4.925);
	scene.add(cdr1,cdrB1);

	//cuadro 2
	var txt2 = new THREE.TextureLoader().load("fotos/2.jpg");
	var cdr2 = new THREE.Mesh(
	    new THREE.PlaneGeometry(640/1000,422/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt2})
	);
	//borde cuadro 2
	var cdrB2 = new THREE.Mesh(
	    new THREE.BoxGeometry(640/1000,422/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr2.position.set((2*1.5)-10.5,0,-4.9);
	cdrB2.position.set((2*1.5)-10.5,0,-4.925);
	scene.add(cdr2,cdrB2);

	//cuadro 3
	var txt3 = new THREE.TextureLoader().load("fotos/3.jpg");
	var cdr3 = new THREE.Mesh(
	    new THREE.PlaneGeometry(640/1000,576/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt3})
	);
	//borde cuadro 3
	var cdrB3 = new THREE.Mesh(
	    new THREE.BoxGeometry(640/1000,576/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr3.position.set((3*1.5)-10.5,0,-4.9);
	cdrB3.position.set((3*1.5)-10.5,0,-4.925);
	scene.add(cdr3,cdrB3);

	//cuadro 4
	var txt4 = new THREE.TextureLoader().load("fotos/4.jpg");
	var cdr4 = new THREE.Mesh(
	    new THREE.PlaneGeometry(197/1000,256/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt4})
	);
	//borde cuadro 4
	var cdrB4 = new THREE.Mesh(
	    new THREE.BoxGeometry(197/1000,256/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr4.position.set((4*1.5)-10.5,0,-4.9);
	cdrB4.position.set((4*1.5)-10.5,0,-4.925);
	scene.add(cdr4,cdrB4);

	//cuadro 5
	var txt5 = new THREE.TextureLoader().load("fotos/5.jpg");
	var cdr5 = new THREE.Mesh(
	    new THREE.PlaneGeometry(438/1000,329/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt5})
	);
	//borde cuadro 5
	var cdrB5 = new THREE.Mesh(
	    new THREE.BoxGeometry(438/1000,329/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr5.position.set((5*1.5)-10.5,0,-4.9);
	cdrB5.position.set((5*1.5)-10.5,0,-4.925);
	scene.add(cdr5,cdrB5);

	//cuadro 6
	var txt6 = new THREE.TextureLoader().load("fotos/6.jpg");
	var cdr6 = new THREE.Mesh(
	    new THREE.PlaneGeometry(518/1000,774/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt6})
	);
	//borde cuadro 6
	var cdrB6 = new THREE.Mesh(
	    new THREE.BoxGeometry(518/1000,774/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr6.position.set((6*1.5)-10.5,0,-4.9);
	cdrB6.position.set((6*1.5)-10.5,0,-4.925);
	scene.add(cdr6,cdrB6);

	//cuadro 7
	var txt7 = new THREE.TextureLoader().load("fotos/7.jpg");
	var cdr7 = new THREE.Mesh(
	    new THREE.PlaneGeometry(236/1000,357/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt7})
	);
	//borde cuadro 7
	var cdrB7 = new THREE.Mesh(
	    new THREE.BoxGeometry(236/1000,357/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr7.position.set((7*1.5)-10.5,0,-4.9);
	cdrB7.position.set((7*1.5)-10.5,0,-4.925);
	scene.add(cdr7,cdrB7);

	//cuadro 8
	var txt8 = new THREE.TextureLoader().load("fotos/8.jpg");
	var cdr8 = new THREE.Mesh(
	    new THREE.PlaneGeometry(580/1000,330/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt8})
	);
	//borde cuadro 8
	var cdrB8 = new THREE.Mesh(
	    new THREE.BoxGeometry(580/1000,330/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr8.position.set((8*1.5)-10.5,0,-4.9);
	cdrB8.position.set((8*1.5)-10.5,0,-4.925);
	scene.add(cdr8,cdrB8);

	//cuadro 9
	var txt9 = new THREE.TextureLoader().load("fotos/9.jpg");
	var cdr9 = new THREE.Mesh(
	    new THREE.PlaneGeometry(512/1000,357/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt9})
	);
	//borde cuadro 9
	var cdrB9 = new THREE.Mesh(
	    new THREE.BoxGeometry(512/1000,357/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr9.position.set((9*1.5)-10.5,0,-4.9);
	cdrB9.position.set((9*1.5)-10.5,0,-4.925);
	scene.add(cdr9,cdrB9);

	//cuadro 10
	var txt10 = new THREE.TextureLoader().load("fotos/10.jpg");
	var cdr10 = new THREE.Mesh(
	    new THREE.PlaneGeometry(270/1000,300/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt10})
	);
	//borde cuadro 10
	var cdrB10 = new THREE.Mesh(
	    new THREE.BoxGeometry(270/1000,300/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr10.position.set((10*1.5)-10.5,0,-4.9);
	cdrB10.position.set((10*1.5)-10.5,0,-4.925);
	scene.add(cdr10,cdrB10);

	//cuadro 11
	var txt11 = new THREE.TextureLoader().load("fotos/11.jpg");
	var cdr11 = new THREE.Mesh(
	    new THREE.PlaneGeometry(832/1000,554/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt11})
	);
	//borde cuadro 11
	var cdrB11 = new THREE.Mesh(
	    new THREE.BoxGeometry(832/1000,554/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr11.position.set((11*1.5)-10.5,0,-4.9);
	cdrB11.position.set((11*1.5)-10.5,0,-4.925);
	scene.add(cdr11,cdrB11);

	//cuadro 12
	var txt12 = new THREE.TextureLoader().load("fotos/12.jpg");
	var cdr12 = new THREE.Mesh(
	    new THREE.PlaneGeometry(440/1000,640/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt12})
	);
	//borde cuadro 12
	var cdrB12 = new THREE.Mesh(
	    new THREE.BoxGeometry(440/1000,640/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr12.position.set((12*1.5)-10.5,0,-4.9);
	cdrB12.position.set((12*1.5)-10.5,0,-4.925);
	scene.add(cdr12,cdrB12);

	//cuadro 13
	var txt13 = new THREE.TextureLoader().load("fotos/13.jpg");
	var cdr13 = new THREE.Mesh(
	    new THREE.PlaneGeometry(640/1000,425/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt13})
	);
	//borde cuadro 13
	var cdrB13 = new THREE.Mesh(
	    new THREE.BoxGeometry(640/1000,425/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr13.position.set((13*1.5)-10.5,0,-4.9);
	cdrB13.position.set((13*1.5)-10.5,0,-4.925);
	scene.add(cdr13,cdrB13);

	//cuadro 14
	var txt14 = new THREE.TextureLoader().load("fotos/14.jpg");
	var cdr14 = new THREE.Mesh(
	    new THREE.PlaneGeometry(599/1000,598/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt14})
	);
	//borde cuadro 14
	var cdrB14 = new THREE.Mesh(
	    new THREE.BoxGeometry(599/1000,598/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr14.position.set(((14-13)*1.5)-10.5,0,4.9);
	cdr14.rotation.y = Math.PI;
	cdrB14.position.set(((14-13)*1.5)-10.5,0,4.925);
	cdr14.rotation.y = Math.PI;
	scene.add(cdr14,cdrB14);

	//cuadro 15
	var txt15 = new THREE.TextureLoader().load("fotos/15.jpg");
	var cdr15 = new THREE.Mesh(
	    new THREE.PlaneGeometry(479/1000,270/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt15})
	);
	//borde cuadro 15
	var cdrB15 = new THREE.Mesh(
	    new THREE.BoxGeometry(479/1000,270/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr15.position.set(((15-13)*1.5)-10.5,0,4.9);
	cdr15.rotation.y = Math.PI;
	cdrB15.position.set(((15-13)*1.5)-10.5,0,4.925);
	cdr15.rotation.y = Math.PI;
	scene.add(cdr15,cdrB15);

	//cuadro 16
	var txt16 = new THREE.TextureLoader().load("fotos/16.jpg");
	var cdr16 = new THREE.Mesh(
	    new THREE.PlaneGeometry(225/1000,224/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt16})
	);
	//borde cuadro 16
	var cdrB16 = new THREE.Mesh(
	    new THREE.BoxGeometry(225/1000,224/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr16.position.set(((16-13)*1.5)-10.5,0,4.9);
	cdr16.rotation.y = Math.PI;
	cdrB16.position.set(((16-13)*1.5)-10.5,0,4.925);
	cdr16.rotation.y = Math.PI;
	scene.add(cdr16,cdrB16);

	//cuadro 17
	var txt17 = new THREE.TextureLoader().load("fotos/17.jpg");
	var cdr17 = new THREE.Mesh(
	    new THREE.PlaneGeometry(320/1000,252/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt17})
	);
	//borde cuadro 17
	var cdrB17 = new THREE.Mesh(
	    new THREE.BoxGeometry(320/1000,252/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr17.position.set(((17-13)*1.5)-10.5,0,4.9);
	cdr17.rotation.y = Math.PI;
	cdrB17.position.set(((17-13)*1.5)-10.5,0,4.925);
	cdr17.rotation.y = Math.PI;
	scene.add(cdr17,cdrB17);

	//cuadro 18
	var txt18 = new THREE.TextureLoader().load("fotos/18.jpg");
	var cdr18 = new THREE.Mesh(
	    new THREE.PlaneGeometry(246/1000,400/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt18})
	);
	//borde cuadro 18
	var cdrB18 = new THREE.Mesh(
	    new THREE.BoxGeometry(246/1000,400/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr18.position.set(((18-13)*1.5)-10.5,0,4.9);
	cdr18.rotation.y = Math.PI;
	cdrB18.position.set(((18-13)*1.5)-10.5,0,4.925);
	cdr18.rotation.y = Math.PI;
	scene.add(cdr18,cdrB18);

	//cuadro 19
	var txt19 = new THREE.TextureLoader().load("fotos/19.jpg");
	var cdr19 = new THREE.Mesh(
	    new THREE.PlaneGeometry(150/1000,161/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt19})
	);
	//borde cuadro 19
	var cdrB19 = new THREE.Mesh(
	    new THREE.BoxGeometry(150/1000,161/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr19.position.set(((19-13)*1.5)-10.5,0,4.9);
	cdr19.rotation.y = Math.PI;
	cdrB19.position.set(((19-13)*1.5)-10.5,0,4.925);
	cdr19.rotation.y = Math.PI;
	scene.add(cdr19,cdrB19);

	//cuadro 20
	var txt20 = new THREE.TextureLoader().load("fotos/20.jpg");
	var cdr20 = new THREE.Mesh(
	    new THREE.PlaneGeometry(960/1000,654/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt20})
	);
	//borde cuadro 20
	var cdrB20 = new THREE.Mesh(
	    new THREE.BoxGeometry(960/1000,654/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr20.position.set(((20-13)*1.5)-10.5,0,4.9);
	cdr20.rotation.y = Math.PI;
	cdrB20.position.set(((20-13)*1.5)-10.5,0,4.925);
	cdr20.rotation.y = Math.PI;
	scene.add(cdr20,cdrB20);

	//cuadro 21
	var txt21 = new THREE.TextureLoader().load("fotos/21.jpg");
	var cdr21 = new THREE.Mesh(
	    new THREE.PlaneGeometry(320/1000,252/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt21})
	);
	//borde cuadro 21
	var cdrB21 = new THREE.Mesh(
	    new THREE.BoxGeometry(320/1000,252/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr21.position.set(((21-13)*1.5)-10.5,0,4.9);
	cdr21.rotation.y = Math.PI;
	cdrB21.position.set(((21-13)*1.5)-10.5,0,4.925);
	cdr21.rotation.y = Math.PI;
	scene.add(cdr21,cdrB21);

	//cuadro 22
	var txt22 = new THREE.TextureLoader().load("fotos/22.jpg");
	var cdr22 = new THREE.Mesh(
	    new THREE.PlaneGeometry(186/1000,271/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt22})
	);
	//borde cuadro 22
	var cdrB22 = new THREE.Mesh(
	    new THREE.BoxGeometry(186/1000,271/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr22.position.set(((22-13)*1.5)-10.5,0,4.9);
	cdr22.rotation.y = Math.PI;
	cdrB22.position.set(((22-13)*1.5)-10.5,0,4.925);
	cdr22.rotation.y = Math.PI;
	scene.add(cdr22,cdrB22);

	//cuadro 23
	var txt23 = new THREE.TextureLoader().load("fotos/23.jpg");
	var cdr23 = new THREE.Mesh(
	    new THREE.PlaneGeometry(183/1000,275/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt23})
	);
	//borde cuadro 23
	var cdrB23 = new THREE.Mesh(
	    new THREE.BoxGeometry(183/1000,275/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr23.position.set(((23-13)*1.5)-10.5,0,4.9);
	cdr23.rotation.y = Math.PI;
	cdrB23.position.set(((23-13)*1.5)-10.5,0,4.925);
	cdr23.rotation.y = Math.PI;
	scene.add(cdr23,cdrB23);

	//cuadro 24
	var txt24 = new THREE.TextureLoader().load("fotos/24.jpg");
	var cdr24 = new THREE.Mesh(
	    new THREE.PlaneGeometry(599/1000,398/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt24})
	);
	//borde cuadro 24
	var cdrB24 = new THREE.Mesh(
	    new THREE.BoxGeometry(599/1000,398/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr24.position.set(((24-13)*1.5)-10.5,0,4.9);
	cdr24.rotation.y = Math.PI;
	cdrB24.position.set(((24-13)*1.5)-10.5,0,4.925);
	cdr24.rotation.y = Math.PI;
	scene.add(cdr24,cdrB24);

	//cuadro 25
	var txt25 = new THREE.TextureLoader().load("fotos/25.jpg");
	var cdr25 = new THREE.Mesh(
	    new THREE.PlaneGeometry(274/1000,184/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt25})
	);
	//borde cuadro 25
	var cdrB25 = new THREE.Mesh(
	    new THREE.BoxGeometry(274/1000,184/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr25.position.set(((25-13)*1.5)-10.5,0,4.9);
	cdr25.rotation.y = Math.PI;
	cdrB25.position.set(((25-13)*1.5)-10.5,0,4.925);
	cdr25.rotation.y = Math.PI;
	scene.add(cdr25,cdrB25);

	//cuadro 26
	var txt26 = new THREE.TextureLoader().load("fotos/26.jpg");
	var cdr26 = new THREE.Mesh(
	    new THREE.PlaneGeometry(370/1000,316/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:txt26})
	);
	//borde cuadro 26
	var cdrB26 = new THREE.Mesh(
	    new THREE.BoxGeometry(370/1000,316/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x232117})
	);
	cdr26.position.set(((26-13)*1.5)-10.5,0,4.9);
	cdr26.rotation.y = Math.PI;
	cdrB26.position.set(((26-13)*1.5)-10.5,0,4.925);
	cdr26.rotation.y = Math.PI;
	scene.add(cdr26,cdrB26);
}
window.onload = init;
