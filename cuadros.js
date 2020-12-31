var cuadros = function(){

	//cuadro 1
	var c_txt1 = new THREE.TextureLoader().load("img/cuadr/d1.jpg");
	var c_cdr1 = new THREE.Mesh(
	    new THREE.PlaneGeometry(874/1000,696/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt1})
	);
	//borde cuadro 1
	var c_cdrB1 = new THREE.Mesh(
	    new THREE.BoxGeometry(874/1000,696/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr1.position.set((1*1.5)+9.5,0,-4.9);
	c_cdrB1.position.set((1*1.5)+9.5,0,-4.925);
	scene.add(c_cdr1,c_cdrB1);

	//cuadro 2
	var c_txt2 = new THREE.TextureLoader().load("img/cuadr/d2.jpg");
	var c_cdr2 = new THREE.Mesh(
	    new THREE.PlaneGeometry(915/1000,747/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt2})
	);
	//borde cuadro 2
	var c_cdrB2 = new THREE.Mesh(
	    new THREE.BoxGeometry(915/1000,747/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr2.position.set((2*1.5)+9.5,0,-4.9);
	c_cdrB2.position.set((2*1.5)+9.5,0,-4.925);
	scene.add(c_cdr2,c_cdrB2);

	//cuadro 3
	var c_txt3 = new THREE.TextureLoader().load("img/cuadr/d3.jpg");
	var c_cdr3 = new THREE.Mesh(
	    new THREE.PlaneGeometry(936/1000,704/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt3})
	);
	//borde cuadro 3
	var c_cdrB3 = new THREE.Mesh(
	    new THREE.BoxGeometry(936/1000,704/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr3.position.set((3*1.5)+9.5,0,-4.9);
	c_cdrB3.position.set((3*1.5)+9.5,0,-4.925);
	scene.add(c_cdr3,c_cdrB3);

	//cuadro 4
	var c_txt4 = new THREE.TextureLoader().load("img/cuadr/d4.jpg");
	var c_cdr4 = new THREE.Mesh(
	    new THREE.PlaneGeometry(673/1000,820/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt4})
	);
	//borde cuadro 4
	var c_cdrB4 = new THREE.Mesh(
	    new THREE.BoxGeometry(673/1000,820/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr4.position.set((4*1.5)+9.5,0,-4.9);
	c_cdrB4.position.set((4*1.5)+9.5,0,-4.925);
	scene.add(c_cdr4,c_cdrB4);

	//cuadro 5
	var c_txt5 = new THREE.TextureLoader().load("img/cuadr/d5.jpg");
	var c_cdr5 = new THREE.Mesh(
	    new THREE.PlaneGeometry(640/1000,516/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt5})
	);
	//borde cuadro 5
	var c_cdrB5 = new THREE.Mesh(
	    new THREE.BoxGeometry(640/1000,516/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr5.position.set((5*1.5)+9.5,0,-4.9);
	c_cdrB5.position.set((5*1.5)+9.5,0,-4.925);
	scene.add(c_cdr5,c_cdrB5);

	//cuadro 6
	var c_txt6 = new THREE.TextureLoader().load("img/cuadr/d6.jpg");
	var c_cdr6 = new THREE.Mesh(
	    new THREE.PlaneGeometry(926/1000,747/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt6})
	);
	//borde cuadro 6
	var c_cdrB6 = new THREE.Mesh(
	    new THREE.BoxGeometry(926/1000,747/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr6.position.set((6*1.5)+9.5,0,-4.9);
	c_cdrB6.position.set((6*1.5)+9.5,0,-4.925);
	scene.add(c_cdr6,c_cdrB6);

	//cuadro 7
	var c_txt7 = new THREE.TextureLoader().load("img/cuadr/d7.jpg");
	var c_cdr7 = new THREE.Mesh(
	    new THREE.PlaneGeometry(856/1000,730/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt7})
	);
	//borde cuadro 7
	var c_cdrB7 = new THREE.Mesh(
	    new THREE.BoxGeometry(856/1000,730/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr7.position.set((7*1.5)+9.5,0,-4.9);
	c_cdrB7.position.set((7*1.5)+9.5,0,-4.925);
	scene.add(c_cdr7,c_cdrB7);

	//cuadro 8
	var c_txt8 = new THREE.TextureLoader().load("img/cuadr/d8.jpg");
	var c_cdr8 = new THREE.Mesh(
	    new THREE.PlaneGeometry(966/1000,752/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt8})
	);
	//borde cuadro 8
	var c_cdrB8 = new THREE.Mesh(
	    new THREE.BoxGeometry(966/1000,752/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr8.position.set((8*1.5)+9.5,0,-4.9);
	c_cdrB8.position.set((8*1.5)+9.5,0,-4.925);
	scene.add(c_cdr8,c_cdrB8);

	//cuadro 9
	var c_txt9 = new THREE.TextureLoader().load("img/cuadr/d9.jpg");
	var c_cdr9 = new THREE.Mesh(
	    new THREE.PlaneGeometry(908/1000,747/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt9})
	);
	//borde cuadro 9
	var c_cdrB9 = new THREE.Mesh(
	    new THREE.BoxGeometry(908/1000,747/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr9.position.set((9*1.5)+9.5,0,-4.9);
	c_cdrB9.position.set((9*1.5)+9.5,0,-4.925);
	scene.add(c_cdr9,c_cdrB9);

	//cuadro 10
	var c_txt10 = new THREE.TextureLoader().load("img/cuadr/d10.jpg");
	var c_cdr10 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1012/1000,807/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt10})
	);
	//borde cuadro 10
	var c_cdrB10 = new THREE.Mesh(
	    new THREE.BoxGeometry(1012/1000,807/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr10.position.set((10*1.5)+9.5,0,-4.9);
	c_cdrB10.position.set((10*1.5)+9.5,0,-4.925);
	scene.add(c_cdr10,c_cdrB10);

	//cuadro 11
	var c_txt11 = new THREE.TextureLoader().load("img/cuadr/d11.jpg");
	var c_cdr11 = new THREE.Mesh(
	    new THREE.PlaneGeometry(665/1000,807/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt11})
	);
	//borde cuadro 11
	var c_cdrB11 = new THREE.Mesh(
	    new THREE.BoxGeometry(665/1000,807/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr11.position.set((11*1.5)+9.5,0,-4.9);
	c_cdrB11.position.set((11*1.5)+9.5,0,-4.925);
	scene.add(c_cdr11,c_cdrB11);

	//cuadro 12
	var c_txt12 = new THREE.TextureLoader().load("img/cuadr/d12.jpg");
	var c_cdr12 = new THREE.Mesh(
	    new THREE.PlaneGeometry(916/1000,747/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt12})
	);
	//borde cuadro 12
	var c_cdrB12 = new THREE.Mesh(
	    new THREE.BoxGeometry(916/1000,747/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr12.position.set((12*1.5)+9.5,0,-4.9);
	c_cdrB12.position.set((12*1.5)+9.5,0,-4.925);
	scene.add(c_cdr12,c_cdrB12);

	//cuadro 13
	var c_txt13 = new THREE.TextureLoader().load("img/cuadr/d13.jpg");
	var c_cdr13 = new THREE.Mesh(
	    new THREE.PlaneGeometry(967/1000,1176/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt13})
	);
	//borde cuadro 13
	var c_cdrB13 = new THREE.Mesh(
	    new THREE.BoxGeometry(967/1000,1176/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr13.position.set((13*1.5)+9.5,0,-4.9);
	c_cdrB13.position.set((13*1.5)+9.5,0,-4.925);
	scene.add(c_cdr13,c_cdrB13);


	//cuadro 14
	var c_txt14 = new THREE.TextureLoader().load("img/cuadr/d14.jpg");
	var c_cdr14 = new THREE.Mesh(
	    new THREE.PlaneGeometry(916/1000,747/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt14})
	);
	//borde cuadro 14
	var c_cdrB14 = new THREE.Mesh(
	    new THREE.BoxGeometry(916/1000,747/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr14.position.set(29.9,0,((14-13)*1.5)-5);
	c_cdrB14.position.set(29.925,0,((14-13)*1.5)-5);
	c_cdr14.rotation.y -= Math.PI/2;
	c_cdrB14.rotation.y -= Math.PI/2;
	scene.add(c_cdr14,c_cdrB14);

	//cuadro 15
	var c_txt15 = new THREE.TextureLoader().load("img/cuadr/d15.jpg");
	var c_cdr15 = new THREE.Mesh(
	    new THREE.PlaneGeometry(931/1000,726/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt15})
	);
	//borde cuadro 15
	var c_cdrB15 = new THREE.Mesh(
	    new THREE.BoxGeometry(931/1000,726/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr15.position.set(29.9,0,((15-13)*1.5)-5);
	c_cdrB15.position.set(29.925,0,((15-13)*1.5)-5);
	c_cdr15.rotation.y -= Math.PI/2;
	c_cdrB15.rotation.y -= Math.PI/2;
	scene.add(c_cdr15,c_cdrB15);

	//cuadro 16
	var c_txt16 = new THREE.TextureLoader().load("img/cuadr/d16.jpg");
	var c_cdr16 = new THREE.Mesh(
	    new THREE.PlaneGeometry(704/1000,866/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt16})
	);
	//borde cuadro 16
	var c_cdrB16 = new THREE.Mesh(
	    new THREE.BoxGeometry(704/1000,866/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr16.position.set(29.9,0,((16-13)*1.5)-5);
	c_cdrB16.position.set(29.925,0,((16-13)*1.5)-5);
	c_cdr16.rotation.y -= Math.PI/2;
	c_cdrB16.rotation.y -= Math.PI/2;
	scene.add(c_cdr16,c_cdrB16);

	//cuadro 17
	var c_txt17 = new THREE.TextureLoader().load("img/cuadr/d17.jpg");
	var c_cdr17 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1073/1000,866/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt17})
	);
	//borde cuadro 17
	var c_cdrB17 = new THREE.Mesh(
	    new THREE.BoxGeometry(1073/1000,866/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr17.position.set(29.9,0,((17-13)*1.5)-5);
	c_cdrB17.position.set(29.925,0,((17-13)*1.5)-5);
	c_cdr17.rotation.y -= Math.PI/2;
	c_cdrB17.rotation.y -= Math.PI/2;
	scene.add(c_cdr17,c_cdrB17);

	//cuadro 18
	var c_txt18 = new THREE.TextureLoader().load("img/cuadr/d18.jpg");
	var c_cdr18 = new THREE.Mesh(
	    new THREE.PlaneGeometry(936/1000,747/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt18})
	);
	//borde cuadro 18
	var c_cdrB18 = new THREE.Mesh(
	    new THREE.BoxGeometry(936/1000,747/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr18.position.set(29.9,0,((18-13)*1.5)-5);
	c_cdrB18.position.set(29.925,0,((18-13)*1.5)-5);
	c_cdr18.rotation.y -= Math.PI/2;
	c_cdrB18.rotation.y -= Math.PI/2;
	scene.add(c_cdr18,c_cdrB18);

	//cuadro 19
	var c_txt19 = new THREE.TextureLoader().load("img/cuadr/d19.jpg");
	var c_cdr19 = new THREE.Mesh(
	    new THREE.PlaneGeometry(780/1000,961/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt19})
	);
	//borde cuadro 19
	var c_cdrB19 = new THREE.Mesh(
	    new THREE.BoxGeometry(780/1000,961/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr19.position.set(29.9,0,((19-13)*1.5)-5);
	c_cdrB19.position.set(29.925,0,((19-13)*1.5)-5);
	c_cdr19.rotation.y -= Math.PI/2;
	c_cdrB19.rotation.y -= Math.PI/2;
	scene.add(c_cdr19,c_cdrB19);


	//cuadro 20
	var c_txt20 = new THREE.TextureLoader().load("img/cuadr/d20.jpg");
	var c_cdr20 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1112/1000,885/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt20})
	);
	//borde cuadro 20
	var c_cdrB20 = new THREE.Mesh(
	    new THREE.BoxGeometry(1112/1000,885/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr20.position.set(30.5-((20-19)*1.5),0,4.9);
	c_cdrB20.position.set(30.5-((20-19)*1.5),0,4.925);
	c_cdr20.rotation.y -= Math.PI;
	c_cdrB20.rotation.y -= Math.PI;
	scene.add(c_cdr20,c_cdrB20);

	//cuadro 21
	var c_txt21 = new THREE.TextureLoader().load("img/cuadr/d21.jpg");
	var c_cdr21 = new THREE.Mesh(
	    new THREE.PlaneGeometry(916/1000,756/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt21})
	);
	//borde cuadro 21
	var c_cdrB21 = new THREE.Mesh(
	    new THREE.BoxGeometry(916/1000,756/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr21.position.set(30.5-((21-19)*1.5),0,4.9);
	c_cdrB21.position.set(30.5-((21-19)*1.5),0,4.925);
	c_cdr21.rotation.y -= Math.PI;
	c_cdrB21.rotation.y -= Math.PI;
	scene.add(c_cdr21,c_cdrB21);

	//cuadro 22
	var c_txt22 = new THREE.TextureLoader().load("img/cuadr/d22.jpg");
	var c_cdr22 = new THREE.Mesh(
	    new THREE.PlaneGeometry(897/1000,753/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt22})
	);
	//borde cuadro 22
	var c_cdrB22 = new THREE.Mesh(
	    new THREE.BoxGeometry(897/1000,753/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr22.position.set(30.5-((22-19)*1.5),0,4.9);
	c_cdrB22.position.set(30.5-((22-19)*1.5),0,4.925);
	c_cdr22.rotation.y -= Math.PI;
	c_cdrB22.rotation.y -= Math.PI;
	scene.add(c_cdr22,c_cdrB22);

	//cuadro 23
	var c_txt23 = new THREE.TextureLoader().load("img/cuadr/d23.jpg");
	var c_cdr23 = new THREE.Mesh(
	    new THREE.PlaneGeometry(780/1000,972/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt23})
	);
	//borde cuadro 23
	var c_cdrB23 = new THREE.Mesh(
	    new THREE.BoxGeometry(780/1000,972/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr23.position.set(30.5-((23-19)*1.5),0,4.9);
	c_cdrB23.position.set(30.5-((23-19)*1.5),0,4.925);
	c_cdr23.rotation.y -= Math.PI;
	c_cdrB23.rotation.y -= Math.PI;
	scene.add(c_cdr23,c_cdrB23);

	//cuadro 24
	var c_txt24 = new THREE.TextureLoader().load("img/cuadr/d24.jpg");
	var c_cdr24 = new THREE.Mesh(
	    new THREE.PlaneGeometry(877/1000,1112/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt24})
	);
	//borde cuadro 24
	var c_cdrB24 = new THREE.Mesh(
	    new THREE.BoxGeometry(877/1000,1112/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr24.position.set(30.5-((24-19)*1.5),0,4.9);
	c_cdrB24.position.set(30.5-((24-19)*1.5),0,4.925);
	c_cdr24.rotation.y -= Math.PI;
	c_cdrB24.rotation.y -= Math.PI;
	scene.add(c_cdr24,c_cdrB24);

	//cuadro 25
	var c_txt25 = new THREE.TextureLoader().load("img/cuadr/d25.jpg");
	var c_cdr25 = new THREE.Mesh(
	    new THREE.PlaneGeometry(962/1000,1240/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt25})
	);
	//borde cuadro 25
	var c_cdrB25 = new THREE.Mesh(
	    new THREE.BoxGeometry(962/1000,1240/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr25.position.set(30.5-((25-19)*1.5),0,4.9);
	c_cdrB25.position.set(30.5-((25-19)*1.5),0,4.925);
	c_cdr25.rotation.y -= Math.PI;
	c_cdrB25.rotation.y -= Math.PI;
	scene.add(c_cdr25,c_cdrB25);

	//cuadro 26
	var c_txt26 = new THREE.TextureLoader().load("img/cuadr/d26.jpg");
	var c_cdr26 = new THREE.Mesh(
	    new THREE.PlaneGeometry(888/1000,1112/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt26})
	);
	//borde cuadro 26
	var c_cdrB26 = new THREE.Mesh(
	    new THREE.BoxGeometry(888/1000,1112/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr26.position.set(30.5-((26-19)*1.5),0,4.9);
	c_cdrB26.position.set(30.5-((26-19)*1.5),0,4.925);
	c_cdr26.rotation.y -= Math.PI;
	c_cdrB26.rotation.y -= Math.PI;
	scene.add(c_cdr26,c_cdrB26);

	//cuadro 27
	var c_txt27 = new THREE.TextureLoader().load("img/cuadr/d27.jpg");
	var c_cdr27 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1240/1000,989/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt27})
	);
	//borde cuadro 27
	var c_cdrB27 = new THREE.Mesh(
	    new THREE.BoxGeometry(1240/1000,989/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr27.position.set(30.5-((27-19)*1.5),0,4.9);
	c_cdrB27.position.set(30.5-((27-19)*1.5),0,4.925);
	c_cdr27.rotation.y -= Math.PI;
	c_cdrB27.rotation.y -= Math.PI;
	scene.add(c_cdr27,c_cdrB27);

	//cuadro 28
	var c_txt28 = new THREE.TextureLoader().load("img/cuadr/d28.jpg");
	var c_cdr28 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1240/1000,958/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt28})
	);
	//borde cuadro 28
	var c_cdrB28 = new THREE.Mesh(
	    new THREE.BoxGeometry(1240/1000,958/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr28.position.set(30.5-((28-19)*1.5),0,4.9);
	c_cdrB28.position.set(30.5-((28-19)*1.5),0,4.925);
	c_cdr28.rotation.y -= Math.PI;
	c_cdrB28.rotation.y -= Math.PI;
	scene.add(c_cdr28,c_cdrB28);

	//cuadro 29
	var c_txt29 = new THREE.TextureLoader().load("img/cuadr/d29.jpg");
	var c_cdr29 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1199/1000,1240/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt29})
	);
	//borde cuadro 29
	var c_cdrB29 = new THREE.Mesh(
	    new THREE.BoxGeometry(1199/1000,1240/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr29.position.set(30.5-((29-19)*1.5),0,4.9);
	c_cdrB29.position.set(30.5-((29-19)*1.5),0,4.925);
	c_cdr29.rotation.y -= Math.PI;
	c_cdrB29.rotation.y -= Math.PI;
	scene.add(c_cdr29,c_cdrB29);

	//cuadro 30
	var c_txt30 = new THREE.TextureLoader().load("img/cuadr/d30.jpg");
	var c_cdr30 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1115/1000,1240/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt30})
	);
	//borde cuadro 30
	var c_cdrB30 = new THREE.Mesh(
	    new THREE.BoxGeometry(1115/1000,1240/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr30.position.set(30.5-((30-19)*1.5),0,4.9);
	c_cdrB30.position.set(30.5-((30-19)*1.5),0,4.925);
	c_cdr30.rotation.y -= Math.PI;
	c_cdrB30.rotation.y -= Math.PI;
	scene.add(c_cdr30,c_cdrB30);

	//cuadro 31
	var c_txt31 = new THREE.TextureLoader().load("img/cuadr/d31.jpg");
	var c_cdr31 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1240/1000,991/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt31})
	);
	//borde cuadro 31
	var c_cdrB31 = new THREE.Mesh(
	    new THREE.BoxGeometry(1240/1000,991/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr31.position.set(30.5-((31-19)*1.5),0,4.9);
	c_cdrB31.position.set(30.5-((31-19)*1.5),0,4.925);
	c_cdr31.rotation.y -= Math.PI;
	c_cdrB31.rotation.y -= Math.PI;
	scene.add(c_cdr31,c_cdrB31);

	//cuadro 32
	var c_txt32 = new THREE.TextureLoader().load("img/cuadr/d32.jpg");
	var c_cdr32 = new THREE.Mesh(
	    new THREE.PlaneGeometry(937/1000,1112/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt32})
	);
	//borde cuadro 32
	var c_cdrB32 = new THREE.Mesh(
	    new THREE.BoxGeometry(937/1000,1112/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr32.position.set(30.5-((32-19)*1.5),0,4.9);
	c_cdrB32.position.set(30.5-((32-19)*1.5),0,4.925);
	c_cdr32.rotation.y -= Math.PI;
	c_cdrB32.rotation.y -= Math.PI;
	scene.add(c_cdr32,c_cdrB32);


	//cuadro 33
	var c_txt33 = new THREE.TextureLoader().load("img/cuadr/d33.jpg");
	var c_cdr33 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1019/1000,1240/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt33})
	);
	//borde cuadro 33
	var c_cdrB33 = new THREE.Mesh(
	    new THREE.BoxGeometry(1019/1000,1240/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr33.position.set(10.3,0,5-((33-32)*1.5));
	c_cdrB33.position.set(10.275,0,5-((33-32)*1.5));
	c_cdr33.rotation.y += Math.PI/2;
	c_cdrB33.rotation.y += Math.PI/2;
	scene.add(c_cdr33,c_cdrB33);

	//cuadro 34
	var c_txt34 = new THREE.TextureLoader().load("img/cuadr/d34.jpg");
	var c_cdr34 = new THREE.Mesh(
	    new THREE.PlaneGeometry(873/1000,1112/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt34})
	);
	//borde cuadro 34
	var c_cdrB34 = new THREE.Mesh(
	    new THREE.BoxGeometry(873/1000,1112/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr34.position.set(10.3,0,5-((34-32)*1.5));
	c_cdrB34.position.set(10.275,0,5-((34-32)*1.5));
	c_cdr34.rotation.y += Math.PI/2;
	c_cdrB34.rotation.y += Math.PI/2;
	scene.add(c_cdr34,c_cdrB34);

	//cuadro 35
	var c_txt35 = new THREE.TextureLoader().load("img/cuadr/d35.jpg");
	var c_cdr35 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1112/1000,886/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt35})
	);
	//borde cuadro 35
	var c_cdrB35 = new THREE.Mesh(
	    new THREE.BoxGeometry(1112/1000,886/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr35.position.set(9.7,0,5-((33-32)*1.5));
	c_cdrB35.position.set(9.725,0,5-((33-32)*1.5));
	c_cdr35.rotation.y -= Math.PI/2;
	c_cdrB35.rotation.y -= Math.PI/2;
	scene.add(c_cdr35,c_cdrB35);

	//cuadro 36
	var c_txt36 = new THREE.TextureLoader().load("img/cuadr/d36.jpg");
	var c_cdr36 = new THREE.Mesh(
	    new THREE.PlaneGeometry(978/1000,1240/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt36})
	);
	//borde cuadro 36
	var c_cdrB36 = new THREE.Mesh(
	    new THREE.BoxGeometry(978/1000,1240/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr36.position.set(9.7,0,5-((34-32)*1.5));
	c_cdrB36.position.set(9.725,0,5-((34-32)*1.5));
	c_cdr36.rotation.y -= Math.PI/2;
	c_cdrB36.rotation.y -= Math.PI/2;
	scene.add(c_cdr36,c_cdrB36);

	//cuadro 37
	var c_txt37 = new THREE.TextureLoader().load("img/cuadr/d37.jpg");
	var c_cdr37 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1112/1000,887/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt37})
	);
	//borde cuadro 37
	var c_cdrB37 = new THREE.Mesh(
	    new THREE.BoxGeometry(1112/1000,887/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr37.position.set(10.3,0,5-((37-32)*1.5));
	c_cdrB37.position.set(10.275,0,5-((37-32)*1.5));
	c_cdr37.rotation.y += Math.PI/2;
	c_cdrB37.rotation.y += Math.PI/2;
	scene.add(c_cdr37,c_cdrB37);

	//cuadro 38
	var c_txt38 = new THREE.TextureLoader().load("img/cuadr/d38.jpg");
	var c_cdr38 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1240/1000,1001/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt38})
	);
	//borde cuadro 38
	var c_cdrB38 = new THREE.Mesh(
	    new THREE.BoxGeometry(1240/1000,1001/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr38.position.set(10.3,0,5-((38-32)*1.5));
	c_cdrB38.position.set(10.275,0,5-((38-32)*1.5));
	c_cdr38.rotation.y += Math.PI/2;
	c_cdrB38.rotation.y += Math.PI/2;
	scene.add(c_cdr38,c_cdrB38);

	//cuadro 39
	var c_txt39 = new THREE.TextureLoader().load("img/cuadr/d39.jpg");
	var c_cdr39 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1240/1000,1001/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt39})
	);
	//borde cuadro 39
	var c_cdrB39 = new THREE.Mesh(
	    new THREE.BoxGeometry(1240/1000,1001/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr39.position.set(9.7,0,5-((37-32)*1.5));
	c_cdrB39.position.set(9.725,0,5-((37-32)*1.5));
	c_cdr39.rotation.y -= Math.PI/2;
	c_cdrB39.rotation.y -= Math.PI/2;
	scene.add(c_cdr39,c_cdrB39);

	//cuadro 40
	var c_txt40 = new THREE.TextureLoader().load("img/cuadr/d40.jpg");
	var c_cdr40 = new THREE.Mesh(
	    new THREE.PlaneGeometry(1058/1000,1240/1000),
	    new THREE.MeshBasicMaterial({color:0xffffff,map:c_txt40})
	);
	//borde cuadro 40
	var c_cdrB40 = new THREE.Mesh(
	    new THREE.BoxGeometry(1058/1000,1240/1000,0.05,0),
	    new THREE.MeshBasicMaterial({color:0x423216})
	);
	c_cdr40.position.set(9.7,0,5-((38-32)*1.5));
	c_cdrB40.position.set(9.725,0,5-((38-32)*1.5));
	c_cdr40.rotation.y -= Math.PI/2;
	c_cdrB40.rotation.y -= Math.PI/2;
	scene.add(c_cdr40,c_cdrB40);
}
