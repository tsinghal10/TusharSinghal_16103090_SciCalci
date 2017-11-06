var ans='';
	var p=false;
	function display(x){
		if(p==true){
			frm.txt.value='';
			p=false;
		}
		frm.txt.value=frm.txt.value+x;
	}

	function clr(){
		frm.txt.value='';
	}

	function bck(){
		frm.txt.value=frm.txt.value.slice(0,frm.txt.value.length-1);
	}

	function evaluation(){
		frm.txt.value=eval(frm.txt.value);
		ans=frm.txt.value;
		p=true;
		frm.answe.value="ANS= "+ans;
	}

	function prevans(){
		frm.txt.value+=ans;
	}

	function fact(){
		var i, no, fact;
		fact=1;
		no=Number(frm.txt.value);
		for(i=1; i<=no; i++)  
		{
			fact=fact*i;
		}  
		frm.txt.value= fact;
	}

	function sqrt(){
		var t=eval(frm.txt.value);
		var x=Number(t);
		frm.txt.value=Math.sqrt(x);
	}

	function sinee(){
		var t=eval(frm.txt.value);
		var x=Number(t);
		frm.txt.value=Math.sin(x*(Math.PI/180));
	}

	function cosee(){
		var t=eval(frm.txt.value);
		var x=Number(t);
		frm.txt.value=Math.cos(x*(Math.PI/180));
	}

	function tanee(){
		var t=eval(frm.txt.value);
		var x=Number(t);
		frm.txt.value=Math.tan(x*(Math.PI/180));
	}

	function loga(){
		var t=eval(frm.txt.value);
		var x=Number(t);
		frm.txt.value=Math.log(x);
	}

	function pi(){
		return Math.PI;
	}