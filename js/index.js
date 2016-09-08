var a=10, msg="";						//variable initialization
/*
This code demonstrates javascript's dynamic datatype concept
a is the variable that demonstrates dynamic datatype
msg is the variable used to build output message for you
typeof return type of variable/ value held by variable at any particular time
*/
	msg=msg+"a=10("+typeof(a)+")\n";
a=22.7;
	msg=msg+"a=10("+typeof(a)+")\n";
a='b';
	msg=msg+"a='b'("+typeof(a)+")\n";
a="abc";
	msg=msg+"a=\"abc\"("+typeof(a)+")\n";
a=true;
	msg=msg+"a=true;("+typeof(a)+")\n";
a=[10,20];
	msg=msg+"a=[10,20]("+typeof(a)+")\n";
a={0:10,1:20};
	msg=msg+"a={0:10,1:20}("+typeof(a)+")\n";

alert(msg);
